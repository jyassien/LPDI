const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.json()); // handles JSON parsing
app.use(express.static("public")); // to serve static files

app.get("/model", (req, res) => {
  res.send("Hello, LVM!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
