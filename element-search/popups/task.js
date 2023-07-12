document.addEventListener('DOMContentLoaded', function() {
  var modalMain = document.getElementById('modal_main');
  var modalSuccess = document.getElementById('modal_success');
  var modalCloseButtons = document.querySelectorAll('.modal__close');
  var showSuccessButton = document.querySelector('.show-success');

  modalMain.classList.add('modal_active');

  for (var i = 0; i < modalCloseButtons.length; i++) {
    modalCloseButtons[i].addEventListener('click', closeModal);
  }

  showSuccessButton.addEventListener('click', showSuccessModal);

  function closeModal() {
    var modal = this.closest('.modal');
    modal.classList.remove('modal_active');
  }

  function showSuccessModal(event) {
    event.preventDefault();
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
  }
});
