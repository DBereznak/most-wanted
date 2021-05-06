const express = require("express");
let axios = require("axios");
const port = 3000;

const api = express();

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

api.get("/mostwanted", (req, res) => {
  axios.get("https://api.fbi.gov/wanted/v1/list").then((data) => {
    res.send(data.data.items);
  });
});

api.listen(port, () => {
  console.log(`listening on port ${port}`);
});
