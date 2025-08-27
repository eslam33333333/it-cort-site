



// ============ Back To Top ============
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

// ============ Scroll Animations ============
// نجيب كل العناصر اللي جوا أي سكشن
const elements = document.querySelectorAll("section *");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // يتطبق مرة واحدة بس
      }
    });
  },
  { threshold: 0.15 } // يبدأ بدري شوية
);

elements.forEach((el) => observer.observe(el));
