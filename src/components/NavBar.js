import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand >🌳 Treesitos</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home">Home</Link> {" "}
          <Link to="/plant">Trees Planted</Link>{" "}
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created By: <a href="#login">Andriw Tapanas</a>, <a href="#login">Frank Batista</a>, <a href="#login">Thomas Knoepffler</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
