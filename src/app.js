function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = searchInput.value;
}

let searchButton = document.querySelector("#submit-input");
searchButton.addEventListener("click", searchCity);

//Dark mode & Light mode switch toggle
let switchToggle = document.getElementById("switch-toggle");
switchToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
