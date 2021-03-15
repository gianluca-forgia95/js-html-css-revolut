//Variabili utili
var navItems = $('.menu-drop  li');
console.log(navItems);

//Evento click sulla nav
navItems.click(
  function () {
   $('.dropdown-menu').fadeIn();
  }
);
