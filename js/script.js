// Efecto de Navbar: Se vuelve opaco al hacer scroll
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
        navbar.style.background = "rgba(255, 255, 255, 0.42)"; // Un blanco casi puro
        navbar.style.backgroundImage ="url('img//pinstriped-suit.png')";
        navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
    } else {
        navbar.style.background = rgb(252, 252, 252); // Blanco Puro
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    }
};

// Smooth Scroll para los enlaces
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
            // Podrías añadir un offset si el navbar tapa el inicio de sección
            // block: 'start'
        });
    });
});