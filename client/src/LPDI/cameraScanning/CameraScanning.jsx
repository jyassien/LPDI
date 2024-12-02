import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";

import "./CameraScanning.css";
import imagePlaceHolder from "../../assets/images/imagePlaceHolder.png";

const CameraScanning = () => {
  const [captured, setCaptured] = useState(null);
  const [scanText, setScanText] = useState("Start Scanning");
  const [scanResult, setScanResult] = useState("");
  const [file, setFile] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanningTime, setScanningTime] = useState(3000);

  const updateSelectedImage = (imgSrc) => setCaptured(imgSrc);

  const handleScanning = (event) => {
    setScanText("Uploading...");
    const file = event?.target?.files[0];
    if (file) {
      setFile(() => file);
      const reader = new FileReader();
      reader.onloadend = () => {
        updateSelectedImage(reader?.result);
        setScanResult(".......");
        setScanText("Scanning...");
        setIsScanning(true);
        setTimeout(() => {
          setScanText("Scan Complete");
          setIsScanning(false);
        }, scanningTime);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("image", file);

      fetchPrediction(`http://127.0.0.1:5000/predict`, formData);
    }
  };
  const fetchPrediction = async (url, imageFile) => {
    try {
      const response = await axios.post(url, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const status = response?.status;
      const data = response?.data;

      if (status === 200) setScanResult(response?.data?.prediction);
      // setScanningTime(0);

      console.log("status: ", status);
      console.log("data: ", data);

      return response;
    } catch (err) {
      console.error("fetchPrediction() Error:", err);
    }
  };

  return (
    <Row className="justify-content-center w-100 m-auto">
      <div className="text-center m-auto py-2 fw-bold display-5 bouncing-text">
        {scanResult}
      </div>
      <Col sm="12" className="d-flex align-items-center  border-bottom">
        <div
          style={{ position: "relative", maxWidth: "600px", width: "100%" }}
          className="m-auto">
          <Image
            src={captured == null ? imagePlaceHolder : captured}
            className={`camera-img ${isScanning ? "scanning-effect" : ""}`}
            style={{
              maxWidth: "600px",
              width: "100%",
              borderRadius: "30px",
            }}
            rounded
          />
          {isScanning && <div className="scanning-overlay"></div>}
        </div>
        <input
          type="file"
          name="image"
          id="input"
          accept="image/*"
          onChange={handleScanning}
          style={{ display: "none" }}
        />
      </Col>
      <div>
        <label
          htmlFor="input"
          className="image-upload"
          style={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}>
          <div className="btn btn-lg text-success camera-scan-btn fw-bold fs-1 px-5 mx-auto">
            {scanText}
          </div>
        </label>
      </div>
    </Row>
  );
};

export default CameraScanning;
