const express = require("express");
const app = express();
const port = process.env.Port || 8080;
app.use(express.static(__dirname + "/build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});
app.get("/hello", function (req, res) {
  res.send("hello");
});
app.listen(port, function () {
  console.log("[+]Server Started on Port 3000");
});
