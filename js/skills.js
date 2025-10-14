// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Animate progress bars on scroll
const cards = document.querySelectorAll('.skill-card');

// Use IntersectionObserver to detect visibility
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once animated (optional, for performance)
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 } // triggers when 40% visible
);

// Observe each skill card
cards.forEach((card) => observer.observe(card));

// ✅ Run animation immediately if section already in view (page loaded mid-scroll)
window.addEventListener('load', () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      card.classList.add('visible');
    }
  });
});

