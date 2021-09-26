import { Card } from "react-bootstrap";
import "../App.css";

const Members = ({ name, image }) => {
  return (
    <Card className="member">
      <Card.Img className="card-image" variant="top" src={image} />
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Members;
