import React from "react";

import "./AboutLPDI.css";

const AboutLPDI = () => {
  return (
    <div className="display-5 fw-bold p-3 pt-5 mt-5 w-75 m-auto">
      This project aims to build a web app for real-time identification of plant
      diseases through live camera input. By analyzing an image of a plant, the
      app will detect visual indicators of disease, such as color changes, brown
      spots, and distorted patterns caused by conditions like blight, mildew, or
      rust. The user will receive instant feedback.
    </div>
  );
};

export default AboutLPDI;
