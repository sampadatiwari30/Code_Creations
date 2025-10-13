// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===== Theme Toggle =====
const themeToggles = document.querySelectorAll(".theme-toggle");
const themeIcons = document.querySelectorAll(".theme-toggle-icon");
const body = document.body;

// 1️⃣ Load saved theme from localStorage or system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
} else if (savedTheme === "dark") {
  body.classList.remove("light");
  themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
} else {
  // No saved theme: use system preference
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    body.classList.add("light");
    themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
  } else {
    body.classList.remove("light");
    themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
  }
}

// 2️⃣ Toggle theme on click (works for desktop & mobile)
themeToggles.forEach(btn => {
  btn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light");

    if (isLight) {
      themeIcons.forEach(icon => icon.classList.replace("fa-moon", "fa-sun"));
      localStorage.setItem("theme", "light");
    } else {
      themeIcons.forEach(icon => icon.classList.replace("fa-sun", "fa-moon"));
      localStorage.setItem("theme", "dark");
    }
  });
});
// Scroll reveal
ScrollReveal().reveal('.glass', {
  delay: 150,
  distance: '60px',
  origin: 'bottom',
  opacity: 0,
  duration: 1000,
  easing: 'ease-in-out',
  interval: 200,
});

// Tilt effect
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
  max: 10,
  speed: 400,
  glare: true,
  'max-glare': 0.2,
});
