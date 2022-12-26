import './style.css';
import home from './home.js';
import PizzaTake from "./PizzaTake.mp4";
import PizzaTakeTwo from "./PizzaTakeTwo.mp4";
import PizzaTakeThree from "./PizzaTakeThree.mp4";

const body = document.querySelector("body");
body.classList.add('myBG');

const content = document.createElement("div");
content.id = "content";

body.appendChild(content);

home();




