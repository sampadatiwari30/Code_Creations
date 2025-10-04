//Tailwind JS for Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load theme from localStorage if available
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  if (body.classList.contains('light')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
  }
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
