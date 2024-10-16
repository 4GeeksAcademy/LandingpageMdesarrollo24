import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

const CardGroup = () => {
  const cardsData = [
    {
      title: "Card title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Find Out More!",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Container>
     <Row className="g-4">
        {cardsData.map((card, index) => (
         <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <CardComponent
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              image={card.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGroup;
