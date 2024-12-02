const express = require("express");
const cors = require("cors");
require("dotenv").config();
const multer = require("multer");
const path = require("path");
const sharp = require("sharp"); // A popular image manipulation library
const onnxruntime = require("onnxruntime-node");
const fs = require("fs");

const test = require("./model/index");
const runModel = require("./model/index");
// const testImage = require("./data/tomato/Variant_A/test/Magnesium_Deficiency/IMG20220325112011.jpg");

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.json()); // handles JSON parsing
app.use(express.static("public")); // to serve static files

test();

app.get("/model", (req, res) => {
  // runModel();
  res.status(200).send("Hello, LVM!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
