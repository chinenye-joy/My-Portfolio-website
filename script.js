const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

// menuIcon.addEventListener("click", () => {
//   if (navLinks.style.display === "none" || navLinks.style.display === "") {
//     navLinks.style.display = "block";
//   } else {
//     navLinks.style.display = "none";
//   }
// });

document.getElementById('menuIcon').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('open');
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
