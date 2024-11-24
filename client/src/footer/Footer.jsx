import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";

const Footer = () => {
  return (
    <Navbar
      id="Footer"
      sticky="bottom"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container className="d-flex flex-column align-items-start px-5">
        <Row>
          <Navbar.Brand href="/" className="fw-bold fs-2">
            LPDI
          </Navbar.Brand>
        </Row>
        <Row className="border-danger">
          <Col sm="12" className="mt-5 ps-3 text-primary">
            © Copyright 2024
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
