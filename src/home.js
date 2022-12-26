import PizzaTake from "./PizzaTake.mp4";
import PizzaTakeTwo from "./PizzaTakeTwo.mp4";
import PizzaTakeThree from "./PizzaTakeThree.mp4";

export default function home(){

    function playVideo(videoID){
        //This playVideo function takes in the ID of a video element and plays that video.
        var videoElement = document.getElementById(videoID);
        videoElement.style.cssText = "z-index: 1";
        videoElement.play();
    }


    const storeSign = document.createElement('div');
    content.appendChild(storeSign);
    storeSign.id = "sign";
    let storeSignText = document.createElement('div');
    storeSignText.id = 'signText';
    let generic = document.createElement('p');
        generic.innerText = "GENERIC";
    let pizza = document.createElement('p');
        pizza.innerText = "PIZZA";
    let shop = document.createElement('p');
        shop.innerText = "SHOP";
    storeSignText.appendChild(generic);
    storeSignText.appendChild(pizza);
    storeSignText.appendChild(shop);
    storeSign.appendChild(storeSignText);

    const videoContainer = document.createElement("div");
        videoContainer.id = "videoContainer";
    let pizzaTake = document.createElement("video");
        pizzaTake.addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTakeTwo"); });
    pizzaTake.outerHTML
    pizzaTake.src = PizzaTake;
    pizzaTake.muted = true;
    pizzaTake.id = "pizzaTake";
    pizzaTake.type = "video/mp4";
    videoContainer.appendChild(pizzaTake);

    let pizzaTakeTwo = document.createElement("video");
        pizzaTakeTwo.addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTakeThree"); });
    pizzaTakeTwo.outerHTML
    pizzaTakeTwo.src = PizzaTakeTwo;
    pizzaTakeTwo.muted = true;
    pizzaTakeTwo.id = "pizzaTakeTwo";
    pizzaTakeTwo.type = "video/mp4";
    videoContainer.appendChild(pizzaTakeTwo);

    let pizzaTakeThree = document.createElement("video");
        pizzaTakeThree.addEventListener("ended", function(){this.style.cssText = "z-index: 0"; playVideo("pizzaTake"); });
    pizzaTakeThree.outerHTML
    pizzaTakeThree.src = PizzaTakeThree;
    pizzaTakeThree.muted = true;
    pizzaTakeThree.id = "pizzaTakeThree";
    pizzaTakeThree.type = "video/mp4";
    pizzaTakeThree.autoplay = true;
    videoContainer.appendChild(pizzaTakeThree);

    content.appendChild(videoContainer);
}