import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    return await (await fetch(config.backendEndpoint + "/reservations")).json();
  } catch (error) {
    console.log(error);
  }
  // Place holder for functionality to work in the Stubs
  return null;
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  if (reservations.length) {
    document.getElementById("reservation-table-parent").style.display = "block";
    document.getElementById("no-reservation-banner").style.display = "none";
    const table = document.getElementById("reservation-table");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    reservations.forEach((reservation) => {
      const tr = document.createElement("tr");
      const bookingTime = new Date(reservation.time);
      tr.innerHTML = `
      <td>${reservation.id}</td>
      <td>${reservation.name}</td>
      <td>${reservation.adventureName}</td>
      <td>${reservation.person}</td>
      <td>${new Date(reservation.date).toLocaleDateString("en-IN")}</td>
      <td>${reservation.price}</td>
      <td>${bookingTime.toLocaleDateString("en-IN",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}, ${bookingTime.toLocaleTimeString("en-IN")}</td>
      <td id="${reservation.id}">
        <a href="../detail/?adventure=${reservation.adventure}">
          <button class="reservation-visit-button">
            Visit Adventure
          </button>
        </a>
      </td>`;
      table.append(tr);
    });
  } else {
    document.getElementById("reservation-table-parent").style.display = "none";
    document.getElementById("no-reservation-banner").style.display = "block";
  }
  // Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */
}

export { fetchReservations, addReservationToTable };
