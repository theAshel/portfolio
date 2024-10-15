// Récupération des éléments HTML
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Ajout de l'événement pour afficher ou masquer le menu au clic sur le bouton burger
burger.addEventListener('click', () => {
    console.log('caca')
    menu.classList.toggle('active');
});