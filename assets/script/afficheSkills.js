function afficheSkills(className, clickedTitle) {
    document.querySelectorAll('.skills__container').forEach((content) => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.skill__category-title__desktop').forEach((title) => {
        title.classList.remove('active-title');
    });
    
    const selectedContent = document.querySelector(`.${className}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }

    clickedTitle.classList.add('active-title');
}