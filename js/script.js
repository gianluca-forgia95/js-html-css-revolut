//Variabili utili
var navItems = $('.menu-drop  li');


//Evento click sulla nav
navItems.click(
  function () {
   $(this).children('.dropdown-menu').slideToggle();
  }
);
//Evento al mouse enter
navItems.mouseenter(
  function () {
     $(this).children('.dropdown-menu').fadeIn('slow');
  }
);
//Evento al mouse leave
navItems.mouseleave(
  function () {
     $(this).children('.dropdown-menu').fadeOut('fast');
  }
);
