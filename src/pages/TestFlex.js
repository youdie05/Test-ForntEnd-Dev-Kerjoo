import React from "react";
import { Container, Row, Col, Button, Form, Dropdown } from "react-bootstrap";

const TestFlex = () => {
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <Button>Tambah</Button>
          <Button>Import</Button>
          <Button>Export</Button>
        </Col>
        <Col md={4} xs={12}>
          <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col md={4} xs={12}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Pilih Tahun
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2021</Dropdown.Item>
              <Dropdown.Item href="#/action-3">2022</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default TestFlex;
