import { useState, useEffect } from "react";
import { getTreesFromApi, postTreeToApi } from "../services/TreeService";

const AddTreeView = () => {
  const [trees, setTrees] = useState([]);
  const [singleTree, setSingleTree] = useState({
    planterName: "",
    location: "",
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
      description: "",
    });
  };

  return (
    <div className="container mt-5">
      <form className="productForm">
        <h2>Add Tree</h2>
        <input
          value={singleTree.planterName}
          onChange={handleChange}
          className="form-control"
          name="planterName"
          type="text"
          placeholder="Name"
        />
        <input
          value={singleTree.location}
          onChange={handleChange}
          className="form-control"
          name="location"
          type="text"
          placeholder="Address"
        />
        <textarea
          value={singleTree.description}
          onChange={handleChange}
          className="form-control"
          name="description"
          rows={3}
          placeholder="Description..."
        />

        <button
          onClick={handleSubmit}
          className="btn btn-outline-dark form-control"
        >
          Add Tree
        </button>
      </form>
    </div>
  );
};

export default AddTreeView;
