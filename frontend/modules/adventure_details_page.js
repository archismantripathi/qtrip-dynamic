import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  const adventure = search.split("adventure=")[1].split("&")[0];
  if (adventure.length) return adventure;
  // Place holder for functionality to work in the Stubs
  return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    const res = await fetch(
      config.backendEndpoint + "/adventures/detail?adventure=" + adventureId
    );
    return await res.json();
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  document.getElementById("adventure-name").innerHTML = adventure.name;
  document.getElementById("adventure-subtitle").innerHTML = adventure.subtitle;
  document.getElementById("adventure-content").innerHTML = adventure.content;
  const photoGallery = document.getElementById("photo-gallery");
  adventure.images.forEach((imageLink) => {
    const div = document.createElement("div");
    div.classList = "activity-card-image";
    div.innerHTML = `<img 
      src="${imageLink}" 
      alt="${adventure.name}" 
      class="img-fluid adventure-card-image"
      >`;
    photoGallery.append(div);
  });
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  const photoGallery = document.getElementById("photo-gallery");
  photoGallery.classList = "carousel slide";
  photoGallery.setAttribute("data-bs-ride", "carousel");
  photoGallery.innerHTML = "";

  const indicators = document.createElement("div");
  indicators.classList = "carousel-indicators";

  const slides = document.createElement("div");
  slides.classList = "carousel-inner";

  for (let i = 0; i < images.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#photo-gallery");
    button.setAttribute("data-bs-slide-to", i);
    if (!i) {
      button.classList = "active";
      button.setAttribute("aria-current", true);
    }
    button.setAttribute("aria-label", "Slide " + (i + 1));

    indicators.append(button);

    const div = document.createElement("div");
    div.classList = "carousel-item";

    if (!i) div.classList += " active";
    div.innerHTML = `<img 
        src="${images[i]}"
        class="d-block activity-card-image"
        alt="Image ${i + 1}"
        >`;
    slides.append(div);
  }

  const prev = document.createElement("button");
  const next = document.createElement("button");
  prev.classList = "carousel-control-prev";
  next.classList = "carousel-control-next";
  prev.setAttribute("type", "button");
  next.setAttribute("type", "button");
  prev.setAttribute("data-bs-target", "#photo-gallery");
  next.setAttribute("data-bs-target", "#photo-gallery");
  prev.setAttribute("data-bs-slide", "prev");
  next.setAttribute("data-bs-slide", "next");
  prev.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>`;
  next.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>`;

  if (images.length !== 1) photoGallery.append(indicators);

  photoGallery.append(slides);

  if (images.length !== 1) {
    photoGallery.append(prev);
    photoGallery.append(next);
  }
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
