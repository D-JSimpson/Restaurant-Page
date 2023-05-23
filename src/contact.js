
export default function contact(){
    
    const contactContainer = document.createElement('div');
          contactContainer.id = "contactContainer";

    const contactSign = document.createElement('div');
          contactSign.id= "contactSign";
    let contactSignText = document.createElement('div');
        contactSignText.id = "contactSignText";
    let contactUs = document.createElement('p');
        contactUs.innerText = "CONTACT US";

    contactSignText.appendChild(contactUs);
    contactSign.appendChild(contactSignText);
    contactContainer.appendChild(contactSign);
    content.appendChild(contactContainer);
    
    const contactCard = (name, email, number, oicture) => {

    }
}