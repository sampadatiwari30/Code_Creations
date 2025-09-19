// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu auto-close on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Enhanced hover effects for skill badges
document.querySelectorAll(".skill-badge").forEach((badge) => {
  badge.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px) scale(1.05)";
    this.style.boxShadow = "0 15px 35px rgba(108, 92, 231, 0.4)";
  });

  badge.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "none";
  });
});

// Dynamic glow effect on education card
const educationCard = document.querySelector(".education-card");
educationCard.addEventListener("mousemove", function (e) {
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const glowEffect = `radial-gradient(circle at ${x}px ${y}px, rgba(108, 92, 231, 0.1) 0%, transparent 50%)`;
  this.style.background = `${glowEffect}, var(--card-gradient)`;
});

educationCard.addEventListener("mouseleave", function () {
  this.style.background = "var(--card-gradient)";
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".education-card, .skills-section").forEach((el) => {
  observer.observe(el);
});

// Add parallax effect to background particles
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const particles = document.querySelector(".particles-bg");
  const rate = scrolled * -0.1;

  particles.style.transform = `translateY(${rate}px)`;
});
