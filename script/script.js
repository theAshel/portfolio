// Récupération des éléments HTML
const burger = document.getElementById('burger');
const menu = document.getElementById('menu_nav');
const xmark = document.getElementById('xmark-close-menu')

// Ajout de l'événement pour afficher le menu au clic sur le bouton burger
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Ajout de l'événement pour fermer le menu au clic sur la croix
xmark.addEventListener('click', () => {
    menu.classList.toggle('active');
});