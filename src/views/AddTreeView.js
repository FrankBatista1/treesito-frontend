import { useState, useEffect } from "react";
import { getTreesFromApi, postTreeToApi } from "../services/TreeService";
import Map from '../views/Map'

const AddTreeView = () => {
  const [trees, setTrees] = useState([]);
  const [singleTree, setSingleTree] = useState({
    planterName: "",
    location: "",
    lat: "",
    lng: "",
    description: "",
  });

  useEffect(() => {
    getTrees();
  }, []);

  // get categories for selector
  const getTrees = async () => {
    const response = await getTreesFromApi();
    setTrees(response.data);
  };

  // handle change
  const handleChange = (event) => {
    setSingleTree({
      ...singleTree,
      [event.target.name]: event.target.value,
    });
  };

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postTreeToApi(singleTree);
    setSingleTree({
      planterName: "",
      location: "",
      lat: "",
      lng: "",
      description: "",
    });
  };

  return (
    <><div className="container mt-5">
      <form className="productForm">
        <h2>Add Tree</h2>
        <input
          value={singleTree.planterName}
          onChange={handleChange}
          className="form-control"
          name="planterName"
          type="text"
          placeholder="Name" />
        <input
          value={singleTree.location}
          onChange={handleChange}
          className="form-control"
          name="location"
          type="text"
          placeholder="Address" />
        <input
          value={singleTree.lat}
          onChange={handleChange}
          className="form-control"
          name="lat"
          type="number"
          placeholder="Latitude" />
        <input
          value={singleTree.lng}
          onChange={handleChange}
          className="form-control"
          name="lng"
          type="number"
          placeholder="Longitude" />
        <textarea
          value={singleTree.description}
          onChange={handleChange}
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
    </div><Map></Map></>
  );
};

export default AddTreeView;
