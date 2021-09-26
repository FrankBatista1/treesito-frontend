import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { getTreesFromApi } from "../services/TreeService";
import mapStyles from "../styles/MapStyle";
require('dotenv').config()

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vh",
  height: "100vh",
};

const center = {
  lat: 0,
  lng: 0,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
function Map(props) {
  //gets the api and the libraries
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //enabling new libraries (googlePlaces)
    libraries,
  });
  
  const [markers, setMarksers] = React.useState([]);



  useEffect(() => {
    const getCoordinates = async () => {
    try {
      const data = await getTreesFromApi()
      setMarksers(data.data);
    } catch (error) {
      console.log('Can get trees')
    }
  };
    getCoordinates()
  }, [])
  

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={options}
        onClick={(event) => {props.setSelected({lat: event.latLng.lat(), lng: event.latLng.lng()})}}
        onLoad={onMapLoad}
      >
        {markers && markers.map((marker) => (
          <Marker
            key={marker._id}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `http://maps.google.com/mapfiles/kml/shapes/parks.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => props.setSelected(marker)}
          />
        ))}

        {props.selected ? (<InfoWindow position={{lat: props.selected.lat, lng: props.selected.lng}} onCloseClick={() => {props.setSelected(null)}}>
          <div>
            {props.selected.planterName ? (<h5>Planted by {props.selected.planterName}</h5>): (<><p>Latitude: {props.selected.lat}<br />Longitude: {props.selected.lng}</p><button onClick={() => props.setCoordinatesInForm()} >Use coordinates</button></>)}
            {props.selected.description ? (<p>Description: {props.selected.description}</p>): null}

          </div>
        </InfoWindow>) : null}
      </GoogleMap> 
    </>
  );
}

export default Map;
