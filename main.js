//import { alertFunction } from './test.js'  //figure more on this later

const menu = document.getElementById("menu");
menu.addEventListener("mouseover", () => {
    const menuRolledOut = document.getElementById("menuCollapsible");
    menuRolledOut.style = "display: flex";
    console.log("hover function worked")
});

menu.addEventListener("mouseout", () => {
    const menuRolledOut = document.getElementById("menuCollapsible");
    menuRolledOut.style = "display: none";
    console.log("hover function worked")
});



