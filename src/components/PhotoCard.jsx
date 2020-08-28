import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import propTypes from "prop-types";

function PhotoCard(props) {
  return (
    <Col key={props.id}>
      <Card style={{ marginBottom:"10px" }} className="text-center card-basic">
        <Card.Img style={{ padding: "12px" }} variant="top" src={props.src} bsPrefix="" />
        <Card.Body>
          <Card.Title className="img-responsive" style={{  fontSize:"16px",fontWeight:"600" }}>{props.title}</Card.Title>
          <Card.Text style={{  fontSize:"14px" }}>
          {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

PhotoCard.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  src: propTypes.string,
};

export default PhotoCard;
