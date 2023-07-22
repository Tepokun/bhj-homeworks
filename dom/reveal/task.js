const revealElements = document.getElementsByClassName('reveal');

window.addEventListener('scroll', function() {
  for (const block of revealElements) {
    const rect = block.getBoundingClientRect();
    block.classList.toggle('reveal_active', (rect.top < window.innerHeight) && (rect.bottom > 0));
  }  
})
  