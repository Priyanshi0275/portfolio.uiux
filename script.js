// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for project cards
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 100) {
            card.classList.add('fade-in');
        }
    });
});
