
// نختار عناصر الـ nav
const menuToggler = document.getElementById("menu-toggler");
const navLinks = document.querySelectorAll(".nav-links a");

// لما يضغط على أي لينك → شيل العلامة من الـ checkbox
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggler.checked = false;
  });
});
