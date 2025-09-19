// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Enhanced hover effects for social items
document.querySelectorAll(".social-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Email click tracking (optional)
document.querySelector(".email-address").addEventListener("click", function () {
  console.log("Email clicked - opening default email client");
});

// Add subtle parallax effect to background
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const backgroundAnimation = document.querySelector(".background-animation");
  const rate = scrolled * -0.1;

  backgroundAnimation.style.transform = `translateY(${rate}px)`;
});

// Intersection Observer for additional animations
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
document.querySelectorAll(".contact-card, .social-item").forEach((el) => {
  observer.observe(el);
});

// Add click ripple effect to social items
document.querySelectorAll(".social-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
