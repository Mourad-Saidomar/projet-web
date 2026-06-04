// Initialisation des comportements interactifs
document.addEventListener('DOMContentLoaded', () => {
    // Animation au défilement pour la barre de navigation
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.style.padding = '10px 0';
        } else {
            navbar.classList.remove('shadow');
            navbar.style.padding = '15px 0';
        }
    });

    // Optionnel : Ajout d'une transition CSS dynamique via JS si besoin
    navbar.style.transition = 'all 0.3s ease-in-out';
});
