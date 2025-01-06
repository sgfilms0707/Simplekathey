const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = 'block'; 
}

setInterval(nextSlide, 2000); // Change slide every 2 seconds

// Initial display
slides.forEach((slide, index) => {
  if (index !== 0) {
    slide.style.display = 'none';
  }
});