
//Navbar functionality

//navbar "menu"
const menu = document.getElementById("menu");
const menuRolledOut = document.getElementById("menuCollapsible");
menu.addEventListener("mouseover", () => {
    menuRolledOut.style = "display: flex";

});
menu.onfocus
menu.addEventListener("mouseout", () => {
    menuRolledOut.style = "display: none";

});

//navbar 
//TODO bring forward collapsible menus on Z axis, make other buttons and collapsibles
menuRolledOut.addEventListener("mouseover", () => {
    menuRolledOut.style = "display: flex";
});
menuRolledOut.addEventListener("mouseout", () => {
    menuRolledOut.style = "display: none";
});