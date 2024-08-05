// JavaScript for slider functionality
let index = 0;
const slides = document.querySelectorAll('.edu-slide');
const totalSlides = slides.length;
const prevButton = document.querySelector('.edu-prev');
const nextButton = document.querySelector('.edu-next');

function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    document.querySelector('.edu-slider').style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

// Show the first slide initially
showSlide(index);
