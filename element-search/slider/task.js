const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let slideNum = 0;

if (slides.length > 0 && prev && next) {
  next.onclick = function () {
    slideNum++;
    if (slideNum >= slides.length) {
      slideNum = 0;
    }
    slides.forEach(function (slide) {
      slide.classList.remove('slider__item_active');
    });
    slides[slideNum].classList.add('slider__item_active');
  };

  prev.onclick = function () {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slides.length - 1;
    }
    slides.forEach(function (slide) {
      slide.classList.remove('slider__item_active');
    });
    slides[slideNum].classList.add('slider__item_active');
  };
}
