const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let currentIndex = 0;

  const rotate = () => {
    const nextIndex = (currentIndex + 1) % cases.length;

    if (nextIndex !== currentIndex) {
      cases[currentIndex].classList.remove('rotator__case_active');
      cases[nextIndex].classList.add('rotator__case_active');
      cases[nextIndex].style.color = cases[nextIndex].dataset.color;
      currentIndex = nextIndex;
    }
  };

  setInterval(rotate, parseInt(rotator.dataset.speed) || 1000);
});


