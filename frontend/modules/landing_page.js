import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // 1. Fetch cities using the Backend API and return the data
  try {
    const res = await fetch(config.backendEndpoint+"/cities");
    return await res.json();
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // 1. Populate the City details and insert those details into the DOM
  const tile = document.createElement("div");
  tile.className = "col col-12 col-sm-6 col-lg-3";
  tile.innerHTML = 
  `<a href="pages/adventures/?city=${id}" id="${id}" class="tile">
    <img src="${image}" alt="${city}" />
      <div class="tile-text bottom-0 start-50 translate-middle text-center">
        <h6 class="fs-5">${city}</h6>
        <p class="fs-6 mb-0">100+ places</p>
      </div>
  </a>`;

  document.getElementById("data").append(tile);
}

export { init, fetchCities, addCityToDOM };
