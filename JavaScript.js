let white = document.querySelector(".white");
let lightGreen = document.querySelector(".Light-Green");
let lightOrange = document.querySelector(".Light-Orange");
let lightBlue = document.querySelector(".Light-Blue");

white.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  document.body.style.transition = "0.5s";
});
lightGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
  document.body.style.transition = "0.5s";
});
lightBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
  document.body.style.transition = "0.5s";
});
lightOrange.addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
  document.body.style.transition = "0.5s";
});
