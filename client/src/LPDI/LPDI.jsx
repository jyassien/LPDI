import React from "react";

import CameraScanning from "./cameraScanning/CameraScanning";
import SavedScans from "./savedScans/SavedScans";
import Profile from "./profile/Profile";
import AboutLPDI from "./about/AboutLPDI";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./LPDI.css";

const LPDI = ({ page, setPage }) => {
  return (
    <section id="LPDI">
      <Container className="LPDI px-5 py-3">
        <Row>
          {page === "Live Scan" && <CameraScanning />}
          {page === "Saved Scans" && <SavedScans />}
          {page === "Profile" && <Profile />}
          {page === "About LPDI" && <AboutLPDI />}
        </Row>
      </Container>
    </section>
  );
};

export default LPDI;
