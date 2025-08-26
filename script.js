// اغلاق القائمة بعد الضغط على أي لينك
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggler').checked = false;
  });
});
