import React, { useState, useEffect } from "react";
import axios from "axios";

import Col from "react-bootstrap/Container";
import Image from "react-bootstrap/Container";

import "./SavedScans.css";

const SavedScans = () => {
  const [camera, setCamera] = useState(null);

  return (
    <Col>
      <Image
        src=""
        className="mb-4 d-block m-auto"
        style={{ maxWidth: "300px", width: "100%", radius: "20px" }}
        rounded
      />
      <div className="text-center display-5">
        Saved Scans: Feature is Coming Soon!
      </div>
    </Col>
  );
};

export default SavedScans;
