








// ---------- Navbar Scroll Effect ----------
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > 50) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScroll = currentScroll;

  if (currentScroll > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    header.style.transition = "all 0.4s ease";
  } else {
    header.style.background = "rgba(0,0,0,0.5)";
    header.style.boxShadow = "none";
    header.style.transition = "all 0.4s ease";
  }
});

// ---------- Scroll To Top Button ----------
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "scrollToTop";
document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 12px 16px;
  border: none;
  border-radius: 50%;
  background: #007bff;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  z-index: 200;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
`;
scrollBtn.addEventListener("mouseover", () => scrollBtn.style.background = "#0056b3");
scrollBtn.addEventListener("mouseout", () => scrollBtn.style.background = "#007bff");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Shuffle Cards ----------
function shuffleCards(selector) {
  const container = document.querySelector(selector);
  if (!container) return;
  const cards = Array.from(container.children);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.appendChild(cards[j]);
  }
}

// Shuffle on page load
shuffleCards(".services .cards");
shuffleCards(".portfolio .cards");

// ---------- Scroll Reveal & Hover Animations ----------
const sections = document.querySelectorAll("section, .card");

function revealElements() {
  sections.forEach(sec => {
    sec.classList.add("show");
  });
}

// Apply hover effect for cards
sections.forEach(sec => {
  sec.addEventListener("mouseenter", () => {
    sec.style.transform = "translateY(-10px) scale(1.02)";
    sec.style.transition = "all 0.3s ease";
  });
  sec.addEventListener("mouseleave", () => {
    sec.style.transform = "translateY(0) scale(1)";
  });
});

// Call reveal on load
window.addEventListener("load", revealElements);

// Add initial CSS animation class
const style = document.createElement("style");
style.innerHTML = `
  section, .card {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
    transition: all 0.7s ease;
  }
  section.show, .card.show {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .card:hover {
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  }
`;
document.head.appendChild(style);

// ---------- Form Validation ----------
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields!");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("⚠️ Please enter a valid email!");
    return;
  }

  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";
  setTimeout(() => {
    alert("✅ Your message has been sent successfully!");
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerText = "Send Message";
  }, 1000);
});

// ---------- Preloader ----------
const loader = document.createElement("div");
loader.id = "preloader";
loader.innerHTML = `<div class="spinner"></div>`;
document.body.prepend(loader);

const loaderStyle = document.createElement("style");
loaderStyle.innerHTML = `
#preloader {
  position: fixed;
  top:0; left:0;
  width:100%; height:100%;
  background:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:1000;
  transition: opacity 0.5s ease;
}
.spinner {
  width:50px; height:50px;
  border:6px solid #ccc;
  border-top:6px solid #007bff;
  border-radius:50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(loaderStyle);

window.addEventListener("load", () => {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
});
