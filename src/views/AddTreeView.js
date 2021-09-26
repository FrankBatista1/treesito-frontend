import { useState, useEffect } from "react";
import { getTreesFromApi, postTreeToApi } from "../services/TreeService";
import { Button, Modal } from "react-bootstrap";
import "../App.css";

const AddTreeView = () => {
  const [show, setShow] = useState(false);
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
    </div>
  );
};

export default AddTreeView;
