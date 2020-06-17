const toggleButton = document.querySelector(".toggle-button");
const featureItem = document.querySelector(".features_item");
const featureBox = document.querySelector(".box");
const featureIcon = document.querySelector(".box i");
const navLinks = document.querySelector(".nav");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
