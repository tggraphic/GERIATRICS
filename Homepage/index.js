let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  
  slides[slideIndex - 1].classList.add('active');
  
  setTimeout(showSlides, 8000);
}

showSlides();
