//Navbar functionality
//navbar "menu"
const menu = document.getElementById("menu");
const menuRolledOut = document.getElementById("menuCollapsible");
menu.addEventListener("mouseover", () => {
    menuRolledOut.style = "display: flex";
});
menu.addEventListener("mouseout", () => {
    menuRolledOut.style = "display: none";
});

menuRolledOut.addEventListener("mouseover", () => {
    menuRolledOut.style = "display: flex";
});
menuRolledOut.addEventListener("mouseout", () => {
    menuRolledOut.style = "display: none";
});
//navbar orderNow
//TODO bring forward collapsible menus on Z axis, work on menu logic for mobile
const orderNow = document.getElementById("orderNow");
const orderNowRolledOut = document.getElementById("orderNowCollapsible")

orderNow.addEventListener("mouseover", () => {
    orderNowRolledOut.style = "display: flex; flex-direction: column; l";
});
orderNow.addEventListener("mouseout", () => {
    orderNowRolledOut.style = "display: none";
});

orderNowRolledOut.addEventListener("mouseover", () => {
    orderNowRolledOut.style = "display: flex; flex-direction: column; l";
});
orderNowRolledOut.addEventListener("mouseout", () => {
    orderNowRolledOut.style = "display: none";
});


//navbar jobs
const jobs = document.getElementById("jobs");
const jobsRolledOut = document.getElementById("jobsCollapsible")

jobs.addEventListener("mouseover", () => {
    jobsRolledOut.style = "display: flex";
});
jobs.addEventListener("mouseout", () => {
    jobsRolledOut.style = "display: none";
});

jobsRolledOut.addEventListener("mouseover", () => {
    jobsRolledOut.style = "display: flex";
});
jobsRolledOut.addEventListener("mouseout", () => {
    jobsRolledOut.style = "display: none";
});

//navbar jobs
const contact = document.getElementById("contact");
const contactRolledOut = document.getElementById("contactCollapsible")

contact.addEventListener("mouseover", () => {
    contactRolledOut.style = "display: flex";
});
contact.addEventListener("mouseout", () => {
    contactRolledOut.style = "display: none";
});

contactRolledOut.addEventListener("mouseover", () => {
    contactRolledOut.style = "display: flex";
});
contactRolledOut.addEventListener("mouseout", () => {
    contactRolledOut.style = "display: none";
});