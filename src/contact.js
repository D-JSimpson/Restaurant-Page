import cheese from './imgs/Cheese.jpg';
import wings from './imgs/chickenWing.jpg';
import sprite from './imgs/sprite.jpeg';

export default function contact(){
    
    const contactContainer = document.createElement('div');
          contactContainer.id = "contactContainer";

    const contactSign = document.createElement('div');
          contactSign.id= "contactSign";
    let contactSignText = document.createElement('div');
        contactSignText.id = "contactSignText";
    let contactUs = document.createElement('p');
        contactUs.innerText = "CONTACT US";

    const contactCardContainer = document.createElement('div');
          contactCardContainer.id = "contactCardContainer";
    
    
    
    const contactCardCreation = (name, email, number, picture) => {
        const sayHello = () =>console.log("hello!");
        return {name, email, number, picture, sayHello};
    };

    let chiefP = contactCardCreation("Chief Pizza", "ChiefP@GPS.com", "555-2345", cheese);
    let manW = contactCardCreation("Manager Wings", "manW@GPS.com", "457-2865", wings);
    let deliS = contactCardCreation("Delivery Sprite", "deliS@GPS.com", "888-2758", sprite);
    
    const contactArray = [chiefP, manW, deliS];

    contactArray.forEach(element =>{
        let card = document.createElement('div');
        card.classList.add("contactCard");
        card.id = element.name.replace(" ", "");

        
        let name = document.createElement("p");
            name.innerText = element.name;
        let email = document.createElement("p");
            email.innerText = element.email;
        let number = document.createElement("p");
            number.innerText = element.number;
        let image = new Image();
            image.src = element.picture;
            image.classList.add("contactImg");
        
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(number);
        card.appendChild(image);
        contactCardContainer.appendChild(card);
    });

    contactSignText.appendChild(contactUs);
    contactSign.appendChild(contactSignText);
    contactContainer.appendChild(contactSign);
    contactContainer.appendChild(contactCardContainer)
    content.appendChild(contactContainer);
}