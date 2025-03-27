// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections that need animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.skills-section, .education-section, .certificates-section');
    sections.forEach(section => observer.observe(section));
    
    // Initialize carousel
    initCarousel();
});

// Carousel functionality
function initCarousel() {
    const carousel = document.querySelector('.certificates-grid');
    const cards = document.querySelectorAll('.certificate-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 32; // Including gap and margin
    const cardsPerView = Math.floor(carousel.parentElement.offsetWidth / cardWidth);
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % (cards.length - cardsPerView + 1);
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + (cards.length - cardsPerView)) % (cards.length - cardsPerView + 1);
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-slide on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
}

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}); 