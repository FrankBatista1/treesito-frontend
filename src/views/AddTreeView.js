import { id } from "date-fns/locale";
import { useState, useEffect } from "react";
import { getTreesFromApi, postTreeToApi } from "../services/TreeService";
import Map from '../views/Map'
import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";


const AddTreeView = () => {
  const [show, setShow] = useState(false);
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
    
    handleClose();
    alert("Tree added successfully!");

  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-5">
      <Button
        variant="outline-success"
        className="add-tree-btn"
        onClick={handleShow}
      >
        +
      </Button>

      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>Add Tree</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleSubmit}
              className="btn btn-outline-dark form-control"
            >
              Save Changes
            </Button>
            <Button
              onClick={handleClose}
              className="btn btn-outline-dark form-control"
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div><Map setCoordinatesInForm={setCoordinatesInForm} selected={selected} setSelected={setSelected}></Map></>

  );
};

export default AddTreeView;
