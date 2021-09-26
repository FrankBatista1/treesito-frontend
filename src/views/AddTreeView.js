import { id } from "date-fns/locale";
import { useState, useEffect } from "react";
import { getTreesFromApi, postTreeToApi } from "../services/TreeService";
import Map from '../views/Map'
import React from "react";

const AddTreeView = () => {
  const [trees, setTrees] = useState([]);
  const [planterName, setPlanterName] = useState("")
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [description, setDescription] = useState('')
 

  const [selected, setSelected] = React.useState(null)
  

  useEffect(() => {
    const getTrees = async () => {
      const response = await getTreesFromApi();
      setTrees(response.data);
    };
    getTrees();
  }, []);
  


  function setCoordinatesInForm (){
    setLng(selected.lng)
    setLat(selected.lat)
  }
 

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postTreeToApi({planterName, location, lat, lng, description});
    setPlanterName('');
    setLocation('');
    setLat('');
    setLng('');
    setDescription('');
    window.location.reload();
  };

  return (
    <><div className="container mt-5">
      <form className="productForm">
        <h2>Add Tree</h2>
        <input
          value={planterName}
          onChange={(e) => setPlanterName(e.target.value)}
          className="form-control"
          name="planterName"
          type="text"
          placeholder="Name" />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
          name="location"
          type="text"
          placeholder="Address" />
        <input
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="form-control"
          name="lat"
          type="number"
          placeholder="Select latitude in the map"
          disabled
          />
        <input
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          className="form-control"
          name="lng"
          type="number"
          placeholder="Select longitude in the map"
          disabled
          />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          name="description"
          rows={3}
          placeholder="Description..." />

        <button
          onClick={handleSubmit}
          className="btn btn-outline-dark form-control"
        >
          Add Tree
        </button>
      </form>
    </div><Map setCoordinatesInForm={setCoordinatesInForm} selected={selected} setSelected={setSelected}></Map></>
  );
};

export default AddTreeView;
