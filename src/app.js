function updateContent(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchButton = document.querySelector("#submit-input");
searchButton.addEventListener("click", updateContent);

function updateTemperature(response) {
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let currentCityElement = document.querySelector("#current-city");

  currentTemperatureElement.innerHTML = Math.round(
    response.data.temperature.current
  );
  currentCityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "a8b8d02a8ccd7d0ta93931494eef0o1b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateTemperature);
}

//Dark mode & Light mode switch toggle
let switchToggle = document.getElementById("switch-toggle");
switchToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
