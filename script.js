// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    const menuToggle = document.getElementById('menu-toggle');
    nav.classList.toggle('active');  // Permet d'ouvrir/fermer le menu
    menuToggle.classList.toggle('active');  // Change l'icône hamburger en croix
});
