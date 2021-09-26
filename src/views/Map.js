import React, { useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import { getTreesFromApi } from "../services/TreeService";
import mapStyles from "../styles/MapStyle";
require('dotenv').config()

const libraries = ["places"];

const mapContainerStyle = {
  width: "100vh",
  height: "100vh",
};

const center = {
  lat: 25.87,
  lng: -80.3,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
function Map() {
  //gets the api and the libraries
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //enabling new libraries (googlePlaces)
    libraries,
  });
  
  const [markers, setMarksers] = React.useState([]);
  const [selected, setSelected] = React.useState(null)


  useEffect(() => {
    getCoordinates()
  }, [markers])
  
  const getCoordinates = async () => {
  try {
    const data = await getTreesFromApi()
    setMarksers(data.data);
  } catch (error) {
    console.log('Can get trees')
  }
};

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
        zoom={1}
        center={center}
        options={options}
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
            onClick={() => setSelected(marker)}
          />
        ))}

        {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => {setSelected(null)}}>
          <div>
            <h2>
              Tree Planted
            </h2>
            <p>Added {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>) : null}
      </GoogleMap>
    </>
  );
}

export default Map;
