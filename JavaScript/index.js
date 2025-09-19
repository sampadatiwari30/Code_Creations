//Tailwind JS for Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Tab Switching
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".skill-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    let category = tab.getAttribute("data-tab");

    cards.forEach((card) => {
      if (card.classList.contains(category)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Animate progress bars on scroll
const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.5 }
);
cards.forEach((card) => observer1.observe(card));

// Animated counters
const counters = document.querySelectorAll(".counter");
const speed = 200;
const counterObserver = new IntersectionObserver(
  (entries) => {
    // <-- changed name here
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => counterObserver.observe(c)); // <-- changed name here

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    this.reset();
  });

// Typing effect
var typed = new Typed("#typed", {
  strings: ["Data Science Student", "Web Developer", "Problem Solver"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

// Select all testimonial cards and dots
const testimonialCards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Function to show the testimonial at a given index
function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    if (i === index) {
      card.classList.remove("hidden");
      card.classList.add("block");
    } else {
      card.classList.remove("block");
      card.classList.add("hidden");
    }
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("bg-cyan-400");
      dot.classList.remove("bg-gray-600");
    } else {
      dot.classList.add("bg-gray-600");
      dot.classList.remove("bg-cyan-400");
    }
  });

  currentIndex = index;
}

// Add click event to dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showTestimonial(i);
  });
});

// Optional: Auto-slide testimonials every 5 seconds
setInterval(() => {
  let nextIndex = (currentIndex + 1) % testimonialCards.length;
  showTestimonial(nextIndex);
}, 5000);

// Initialize first testimonial
showTestimonial(currentIndex);
