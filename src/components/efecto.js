// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('menu');
    const companyName = document.getElementById('company-name');
  
    if (window.scrollY > 280) { // Ajusta este valor según tus necesidades
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  