const book = document.getElementById('book');
const fontSizes = document.getElementsByClassName('font-size');

for (const size of fontSizes) {
  size.addEventListener('click', function(event) {
    event.preventDefault();
    const oldSize = document.querySelector('.font-size_active');
    
    if (oldSize) {
      oldSize.classList.remove('font-size_active');
      book.classList.remove('book_fs-' + oldSize.dataset.size);
    }

    this.classList.add('font-size_active');
    book.classList.add('book_fs-' + this.dataset.size);
  });
}
