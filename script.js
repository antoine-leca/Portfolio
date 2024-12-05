// Sélectionner le bouton et le menu
const menu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggleBtn');

// Ajouter un écouteur d'événements pour gérer le clic sur le bouton
toggleBtn.addEventListener('click', () => {
    // Si le menu a la classe "open", on le ferme
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('closed'); // Fermer le menu avec la transition
    } else {
        // Si le menu n'est pas ouvert, on l'ouvre
        menu.classList.remove('closed');
        menu.classList.add('open'); // Ouvrir le menu avec la transition
    }
});

