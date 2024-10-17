// Récupération des éléments HTML
const burger = document.getElementById('burger');
const menu = document.getElementById('menu_nav');
const menuItems = document.querySelectorAll('.menu li')
const xmark = document.getElementById('xmark-close-menu')

// Ajout de l'événement pour afficher le menu au clic sur le bouton burger
burger.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('active');
});

// Ajout de l'événement pour fermer le menu au clic sur la croix
xmark.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fonction pour fermer le menu si on clique en dehors de celui-ci
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    
    // Si le clic est en dehors du menu et du bouton burger, on ferme le menu
    if (!isClickInsideMenu) {
        menu.classList.remove('active');
    }
});

// Fonction pour fermer le menu quand un élément de la liste est cliqué
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});