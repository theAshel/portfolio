const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');

            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.fade-in-1s').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.fade-in-1-25s').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.fade-in-1-5s').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.fade-in-1-75s').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.fade-in-up-0-9s').forEach(element => {
    observer.observe(element);
});