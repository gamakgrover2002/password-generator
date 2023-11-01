const express = require("express");
const bodyParser = require("body-parser");
const generator = require("generate-password");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
var password = generator.generate({
  length: 10,
  numbers: true,
});
const generatepassword = () => {
  password = generator.generate({
    length: 10,
    numbers: true,
  });
};
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  generatepassword();
  console.log(password);
  res.json(password);
});

app.listen(4000, () => {
  console.log("connected");
});
