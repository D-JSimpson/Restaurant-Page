import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';


const body = document.querySelector("body");
body.classList.add('myBG');

const content = document.createElement("div");
content.id = "content";

body.appendChild(content);

//Generate A Navbar that Will always be there
const navBar = document.createElement("ul");
    let homeBtn = document.createElement("li");
        homeBtn.innerText = "Home";
        homeBtn.id = 'home';
        homeBtn.addEventListener("click", () => {content.innerHTML = ""; home()});
    let menuBtn = document.createElement("li");
        menuBtn.innerText = "Menu";
        menuBtn.id = 'menu';
        menuBtn.addEventListener("click", () => {content.innerHTML = ""; menu()}); 
    let contactBtn = document.createElement("li");
        contactBtn.innerText = "Contact"; 
        contactBtn.id = 'contact'; 
        contactBtn.addEventListener('click', () => {content.innerHTML = ""; contact()});
    navBar.appendChild(homeBtn); navBar.appendChild(menuBtn); navBar.appendChild(contactBtn);

    body.appendChild(navBar);

home();

          




