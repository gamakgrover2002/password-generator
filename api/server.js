const express = require("express");
const bodyParser = require("body-parser");
const generator = require("generate-password");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

var passwordlength = 10;
var password = generator.generate({
  length: passwordlength,
  numbers: true,
});
const generatepassword = () => {
  password = generator.generate({
    length: passwordlength,
    numbers: true,
  });
};
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  generatepassword();
  res.json(password);
});
app.post("/data", (req, res) => {
  var { length } = req.body;

  if (length < 0 || length > 20) {
    res.json("length not possible");
  } else {
    passwordlength = length;
    res.json("length changed to : " + length);
  }
});
app.listen(4000, () => {
  console.log("connected");
});
