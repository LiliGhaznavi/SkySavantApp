function updateBackgroundImage() {
  const body = document.body;
  const background = document.querySelector(".background");

  if (body.classList.contains("dark")) {
    // Dark mode is on, set dark background image
    body.style.backgroundColor = "#333333";
    background.style.backgroundImage = "url('../images/darkBackground.png')";
  } else {
    // Dark mode is off, set light background image
    body.style.backgroundColor = "#EDE7F6";
    background.style.backgroundImage = "url('../images/lightBackground.png')";
  }
}

let switchToggle = document.getElementById("switch-toggle");
switchToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateBackgroundImage();
});
