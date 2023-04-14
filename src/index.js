import pageLoad from './page-load';
import loadHome from './home/home';
import loadMenu from './menu/menu';
import loadContact from './contact/contact';
import './style.css';
//import background from "./background.jpg";

const content = document.getElementById("content");

pageLoad();
loadHome();
const hometab = document.getElementById("home");
const menutab = document.getElementById("menu");
const contacttab = document.getElementById("contact");

hometab.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadHome();
})

menutab.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadMenu();
})

contacttab.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    loadContact();
})