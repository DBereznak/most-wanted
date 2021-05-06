let axios = require("axios");

console.log("I'm alive");

axios.get("http://localhost:3000/mostwanted").then((data) => {
  console.log(data.data);
});
