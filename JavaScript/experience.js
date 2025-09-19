//Tailwind JS for Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll reveal
ScrollReveal().reveal(".glass", {
  delay: 150,
  distance: "60px",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  easing: "ease-in-out",
  interval: 200,
});

// Tilt effect
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});
