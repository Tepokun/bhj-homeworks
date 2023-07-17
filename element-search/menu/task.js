const links = document.querySelectorAll('.menu__link');

links.forEach(function (link) {
  link.onclick = function () {
    const parent = link.parentElement;
    const submenu = parent.querySelector('.menu_sub');

    if (submenu.classList.contains('menu_active')) {
      submenu.classList.remove('menu_active');
    } else {
      submenu.classList.add('menu_active');
    }

    if (link.closest('.menu_main')) {
      return false;
    }
  };
});
