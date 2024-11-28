import React, { useState } from "react";
import FormData from "form-data";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./CameraScanning.css";
import imagePlaceHolder from "../../assets/images/imagePlaceHolder.png";

const CameraScanning = () => {
  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState("");
  return (
    <Row className="justify-content-center w-100 m-auto">
      <Col sm="12" className="d-flex align-items-center">
        <Image
          // src={camera === null ? imagePlaceHolder : camera}
          src={imagePlaceHolder}
          className="camera-img"
          style={{
            maxWidth: "800px",
            // maxHeight: "500px",
            width: "100%",
            radius: "20px",
            borderRadius: "2px",
          }}
        />
      </Col>
      <Button
        size="lg"
        type="button"
        variant="light"
        className="camera-scan-btn text-success fw-bold fs-1 px-5 mx-auto"
      >
        Start Scanning
      </Button>
      <Col sm="12" className="">
        {/* <Button
          size="lg"
          type="button"
          variant="outline-info"
          className="camera-scan-btn fw-bold fs-1 px-5 mx-auto"
        >
          Start Scanning
        </Button> */}
      </Col>
    </Row>
  );
};

export default CameraScanning;
