const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

// Hamburger toggle
document.getElementById("menuIcon").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("open");
});

// Close menu when any nav link is clicked
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("open");
  });
});
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.15 },
);

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
  card.style.animationPlayState = "paused"; // wait for scroll
  observer.observe(card);
});
