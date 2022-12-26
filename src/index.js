import './style.css';
import home from './home.js';


const body = document.querySelector("body");
body.classList.add('myBG');

const content = document.createElement("div");
content.id = "content";

body.appendChild(content);

home();




