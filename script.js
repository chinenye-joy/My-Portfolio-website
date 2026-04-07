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
const testiObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      testiObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

testiObserver.observe(document.getElementById('testimonials'));

const testimonials = [
  {
    quote: `I was really impressed with the portfolio website Chinenye Joy built for me! She got the design so well and it perfectly captures my brand vibe. Plus, it's super easy to navigate and showcases my projects in a really cool way. Joy was great to work with, she listened to my needs, communicated clearly, and delivered in time. I would definitely recommend her to anyone looking for a reliable and skilled frontend developer.`,
    name: "Kelechi Odili",
    role: "Product Designer.",
    initials: "KO",
    bg: "#eeedfe",
    color: "#534ab7"
  },
  // {
  //   quote: `I was really impressed with the portfolio website Chinenye Joy built for me! She got the design so well and it perfectly captures my brand vibe. Plus, it's super easy to navigate and showcases my projects in a really cool way. Joy was great to work with, she listened to my needs, communicated clearly, and delivered in time. I would definitely recommend her to anyone looking for a reliable and skilled frontend developer.`,
  //   name: "Kelechi Odili",
  //   role: "Product Designer.",
  //   initials: "KO",
  //   bg: "#eeedfe",
  //   color: "#534ab7"
  // },
];

let current = 0;
let animating = false;

const card = document.getElementById('testiCard');
const quoteEl = document.getElementById('testiQuote');
const avatarEl = document.getElementById('testiAvatar');
const nameEl = document.getElementById('testiName');
const roleEl = document.getElementById('testiRole');
const dotsEl = document.getElementById('testiDots');

function renderDots() {
  dotsEl.innerHTML = '';
  testimonials.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'testi-dot' + (i === current ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });
}

function renderCard() {
  const t = testimonials[current];
  quoteEl.textContent = '\u201C' + t.quote + '\u201D';
  avatarEl.textContent = t.initials;
  avatarEl.style.background = t.bg;
  avatarEl.style.color = t.color;
  nameEl.textContent = t.name;
  roleEl.textContent = t.role;
  renderDots();
}

function goTo(index) {
  if (animating || index === current) return;
  animating = true;
  card.classList.add('fade-out');
  setTimeout(() => {
    current = (index + testimonials.length) % testimonials.length;
    renderCard();
    card.classList.remove('fade-out');
    animating = false;
  }, 320);
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

renderCard();

setInterval(() => {
  goTo((current + 1) % testimonials.length);
}, 3000);