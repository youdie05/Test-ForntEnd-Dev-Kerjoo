import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TestGrid = () => {
  return (
    <Container>
      <Row>
        <Col md={3} xs={12}>
          Lorem Ipsum 1
        </Col>
        <Col md={3} xs={12}>
          Lorem Ipsum 2
        </Col>
        <Col md={3} xs={12}>
          Lorem Ipsum 3
        </Col>
        <Col md={3} xs={12}>
          Lorem Ipsum 4
        </Col>
      </Row>
    </Container>
  );
};

export default TestGrid;
