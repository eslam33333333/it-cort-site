
// نختار عناصر الـ nav
const menuToggler = document.getElementById("menu-toggler");
const navLinks = document.querySelectorAll(".nav-links a");

// لما يضغط على أي لينك → شيل العلامة من الـ checkbox
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggler.checked = false;
  });
});



// ================= Navbar Scroll Effect =================
const headerNav = document.querySelector("header nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerNav.classList.add("scrolled");
  } else {
    headerNav.classList.remove("scrolled");
  }
});

// ================= Back To Top Button =================
const backToTopBtn = document.createElement("button");
backToTopBtn.className = "back-to-top";
backToTopBtn.innerHTML = "↑";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================= Dark / Light Mode Toggle =================
const modeToggle = document.createElement("button");
modeToggle.className = "mode-toggle";
modeToggle.innerHTML = "🌙";
document.body.appendChild(modeToggle);

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  modeToggle.innerHTML = savedTheme === "dark" ? "☀️" : "🌙";
}

modeToggle.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  modeToggle.innerHTML = targetTheme === "dark" ? "☀️" : "🌙";
});

// ================= Scroll Animations =================
const elements = document.querySelectorAll(".card, .section-title, .text");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach((el) => observer.observe(el));

// ================= Counters =================
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  let target = +counter.getAttribute("data-target");
  let count = 0;
  let step = target / 200;

  const updateCounter = () => {
    if (count < target) {
      count += step;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  };

  if (counter) {
    let counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    counterObserver.observe(counter);
  }
});
