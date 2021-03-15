//Variabili utili
var navItems = $('.menu-drop  li');
console.log(navItems);

//Evento click sulla nav
navItems.click(
  function () {
   $(this).children('.dropdown-menu').fadeToggle();
  }
);
