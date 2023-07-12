document.addEventListener('DOMContentLoaded', function() {
    var modalMain = document.getElementById('modal_main');
    var modalSuccess = document.getElementById('modal_success');
    var modalCloseButtons = document.querySelectorAll('.modal__close');
    var showSuccessButton = document.querySelector('.show-success');
    var makeGoodButton = document.querySelector('.btn_danger');
  
    modalMain.classList.add('modal_active');
  
    function showModal(modal) {
      modal.classList.add('modal_active');
    }
  
    function hideModal(modal) {
      modal.classList.remove('modal_active');
    }
  
    for (var i = 0; i < modalCloseButtons.length; i++) {
      modalCloseButtons[i].addEventListener('click', function() {
        hideModal(this.closest('.modal'));
      });
    }
  
    showSuccessButton.addEventListener('click', function(event) {
      event.preventDefault();
      hideModal(modalMain);
      showModal(modalSuccess);
      setTimeout(function() {
        hideModal(modalSuccess);
      }, 3000);
    });
  
    makeGoodButton.addEventListener('click', function(event) {
      event.preventDefault();
      showModal(modalSuccess);
      setTimeout(function() {
        hideModal(modalMain);
        hideModal(modalSuccess);
      }, 3000);
    });
  });
  