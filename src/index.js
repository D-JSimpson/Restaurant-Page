import './style.css';
import PizzaTake from "./PizzaTake.mp4";
import PizzaTakeTwo from "./PizzaTakeTwo.mp4";
import PizzaTakeThree from "./PizzaTakeThree.mp4";


console.log("Webpack Test");

window.onload = function(){ 
    //now that the window has loaded we add our event listeners to the videos.
    //When video1 has ended, play video2 etc
    document.getElementById("pizzaTake").addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTakeTwo"); });
    document.getElementById("pizzaTakeTwo").addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTakeThree"); });
    document.getElementById("pizzaTakeThree").addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTake"); });
}

function playVideo(videoID){
    //This playVideo function takes in the ID of a video element and plays that video.
    var videoElement = document.getElementById(videoID);
    videoElement.style.cssText = "z-index: 1";
    videoElement.play();
}

const body = document.querySelector("body");
body.classList.add('myBG');

const content = document.createElement("div");
content.id = "content";

body.appendChild(content);

const navBar = document.createElement("ul");
let home = document.createElement("li");
    home.innerText = "Home";
let menu = document.createElement("li");
    menu.innerText = "Menu";
let contact = document.createElement("li");
    contact.innerText = "Contact";  
navBar.appendChild(home); navBar.appendChild(menu); navBar.appendChild(contact);

content.appendChild(navBar);

const videoContainer = document.createElement("div");
      videoContainer.id = "videoContainer";
let pizzaTake = document.createElement("video");
pizzaTake.outerHTML
pizzaTake.src = PizzaTake;
pizzaTake.muted = true;
pizzaTake.id = "pizzaTake";
pizzaTake.type = "video/mp4";
videoContainer.appendChild(pizzaTake);

let pizzaTakeTwo = document.createElement("video");
pizzaTakeTwo.outerHTML
pizzaTakeTwo.src = PizzaTakeTwo;
pizzaTakeTwo.muted = true;
pizzaTakeTwo.id = "pizzaTakeTwo";
pizzaTakeTwo.type = "video/mp4";
videoContainer.appendChild(pizzaTakeTwo);

let pizzaTakeThree = document.createElement("video");
pizzaTakeThree.outerHTML
pizzaTakeThree.src = PizzaTakeThree;
pizzaTakeThree.muted = true;
pizzaTakeThree.id = "pizzaTakeThree";
pizzaTakeThree.type = "video/mp4";
pizzaTakeThree.autoplay = true;
videoContainer.appendChild(pizzaTakeThree);

content.appendChild(videoContainer);
