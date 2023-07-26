import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useFirebase } from "../context/Firebase";

const ItemCard = (props) => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(props.imageURL).then((url) => setURL(url));
  }, []);

  console.log(props);

  return (
    <Card style={{ width: "18rem", margin: "25px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          This is a {props.name} and this item costs Rs.{props.price}
        </Card.Text>
        <Button onClick={(e) => navigate(props.link)} variant="primary">
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
