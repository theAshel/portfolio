window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const profileSection = document.querySelector('.profile__section');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (scrollPosition > 250) {
        profileSection.classList.add('scrolled');
    } else {
        profileSection.classList.remove('scrolled');
    }
});