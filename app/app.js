const axios = require("axios");
const Handlebars = require("handlebars");

const billboard = document.getElementById("billboard");

axios.get("http://localhost:3000/mostwanted").then((data) => {
  const mostwanted = data.data;
  mostwanted.forEach((item) => {
    createPosters(item);
  });
});

function createPosters(person) {
  const poster = document.createElement("div");
  poster.classList.add("poster");
  const name = document.createElement("h3");
  const image = document.createElement("img");
  image.setAttribute("src", person.images[0].large);
  image.setAttribute("height", "300");
  image.setAttribute("alt", person.title);
  name.innerHTML = person.title;
  poster.appendChild(name);
  poster.appendChild(image);
  billboard.appendChild(poster);
}
