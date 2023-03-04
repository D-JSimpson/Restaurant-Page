import buffalo from './imgs/buffalo.jpeg';
import cheese from './imgs/Cheese.jpg';
import hawaiian from './imgs/hawaiian.jpg';
import margherita from './imgs/Margherita.jpg';
import pepperoni from './imgs/Pepperoni.png';
import spinach from './imgs/SpinachFeta.jpg';
import wings from './imgs/chickenWing.jpg';
import brownies from './imgs/brownies.jpg';
import fries from './imgs/frenchFries.jpg';
import fanta from './imgs/fanta.jpeg';
import sprite from './imgs/sprite.jpeg';
import coke from './imgs/coke.jpeg';

export default function menu(){
    //content.innerHtml = "";

    const menuContainer = document.createElement('div');
          menuContainer.id = 'menuContainer';

    //Pizza
    const pizzaContainer = document.createElement('div');
          pizzaContainer.id = 'pizzaContainer';
    let pizzaLabel = document.createElement('p');
        pizzaLabel.innerText = 'PIZZAS';
        pizzaLabel.id = 'pizzaLabel';
          pizzaContainer.appendChild(pizzaLabel);

        //Buffalo Card
        let buffaloPizzaCard = document.createElement('div');
            buffaloPizzaCard.classList.add('menuCard');

        let buffaloLabel = document.createElement('p');
            buffaloLabel.innerText = "Buffalo Pizza";

        let buffaloPizza = new Image();
            buffaloPizza.src = buffalo;

            buffaloPizzaCard.appendChild(buffaloPizza);
            buffaloPizzaCard.appendChild(buffaloLabel);
            pizzaContainer.appendChild(buffaloPizzaCard);

        //Cheese Card
        let cheesePizzaCard = document.createElement('div');
            cheesePizzaCard.classList.add('menuCard');

        let cheeseLabel = document.createElement('p');
            cheeseLabel.innerText = "Cheese Pizza";

        let cheesePizza = new Image();
            cheesePizza.src = cheese;

            cheesePizzaCard.appendChild(cheesePizza);
            cheesePizzaCard.appendChild(cheeseLabel);
            pizzaContainer.appendChild(cheesePizzaCard);

        //Hawaiian Card
        let hawaiianPizzaCard = document.createElement('div');
            hawaiianPizzaCard.classList.add('menuCard');

        let hawaiianLabel = document.createElement('p');
            hawaiianLabel.innerText = "Hawaiian Pizza";

        let hawaiianPizza = new Image();
            hawaiianPizza.src = hawaiian;

            hawaiianPizzaCard.appendChild(hawaiianPizza);
            hawaiianPizzaCard.appendChild(hawaiianLabel);
            pizzaContainer.appendChild(hawaiianPizzaCard);

        //Margherita Card
        let margheritaPizzaCard = document.createElement('div');
            margheritaPizzaCard.classList.add('menuCard');

        let margheritaLabel = document.createElement('p');
            margheritaLabel.innerText = "Margherita Pizza";

        let margheritaPizza = new Image();
            margheritaPizza.src = margherita;

            margheritaPizzaCard.appendChild(margheritaPizza);
            margheritaPizzaCard.appendChild(margheritaLabel);
            pizzaContainer.appendChild(margheritaPizzaCard);

        //Cheese Card
        let pepperoniPizzaCard = document.createElement('div');
            pepperoniPizzaCard.classList.add('menuCard');

        let pepperoniLabel = document.createElement('p');
            pepperoniLabel.innerText = "Pepperoni Pizza";

        let pepperoniPizza = new Image();
            pepperoniPizza.src = pepperoni;

            pepperoniPizzaCard.appendChild(pepperoniPizza);
            pepperoniPizzaCard.appendChild(pepperoniLabel);
            pizzaContainer.appendChild(pepperoniPizzaCard);
        
        //Cheese Card
        let spinachPizzaCard = document.createElement('div');
            spinachPizzaCard.classList.add('menuCard');

        let spinachLabel = document.createElement('p');
            spinachLabel.innerText = "Spinach Pizza";

        let spinachPizza = new Image();
            spinachPizza.src = spinach;

            spinachPizzaCard.appendChild(spinachPizza);
            spinachPizzaCard.appendChild(spinachLabel);
            pizzaContainer.appendChild(spinachPizzaCard);
    
    //Sides
    const sidesContainer = document.createElement("div");
          sidesContainer.id = "sidesContainer";
    let sidesContainerLabel = document.createElement("div");
        sidesContainerLabel.id = "sidesContainerLabel";
        sidesContainerLabel.innerText = "SIDES"
    sidesContainer.appendChild(sidesContainerLabel);

        let wingsCard = document.createElement('div');
            wingsCard.classList.add('menuCard');
        let wingsCardLabel = document.createElement('p');
            wingsCardLabel.innerText = "Chicken Wings";
        let wingsImg = new Image();
            wingsImg.src = wings;
        wingsCard.appendChild(wingsImg);
        wingsCard.appendChild(wingsCardLabel);
        sidesContainer.appendChild(wingsCard);

        let browniesCard = document.createElement('div');
            browniesCard.classList.add('menuCard');
        let browniesLabel = document.createElement('p');
            browniesLabel.innerText = "Brownies";
        let browniesImg = new Image();
            browniesImg.src = brownies;
        browniesCard.appendChild(browniesImg);
        browniesCard.appendChild(browniesLabel);
        sidesContainer.appendChild(browniesCard);

        let friesCard = document.createElement('div');
            friesCard.classList.add('menuCard');
        let friesCardLabel = document.createElement('p');
            friesCardLabel.innerText = "French Fries";
        let friesImg = new Image();
            friesImg.src = fries;
        friesCard.appendChild(friesImg);
        friesCard.appendChild(friesCardLabel);
        sidesContainer.appendChild(friesCard);

    //Drinks
    const drinksContainer = document.createElement("div");
          drinksContainer.id = "drinksContainer";
    let drinksContainerLabel = document.createElement("div");
        drinksContainerLabel.id = "drinksContainerLabel";
        drinksContainerLabel.innerText = "DRINKS"
    drinksContainer.appendChild(drinksContainerLabel);

        let fantaCard = document.createElement('div');
            fantaCard.classList.add('menuCard');
        let fantaCardLabel = document.createElement('p');
            fantaCardLabel.innerText = "Fanta";
        let fantaImg = new Image();
            fantaImg.src = fanta;
        fantaCard.appendChild(fantaImg);
        fantaCard.appendChild(fantaCardLabel);
        drinksContainer.appendChild(fantaCard); 

        let cokeCard = document.createElement('div');
            cokeCard.classList.add('menuCard');
        let cokeCardLabel = document.createElement('p');
            cokeCardLabel.innerText = "Coke";
        let cokeImg = new Image();
            cokeImg.src = coke;
        cokeCard.appendChild(cokeImg);
        cokeCard.appendChild(cokeCardLabel);
        drinksContainer.appendChild(cokeCard); 

        let spriteCard = document.createElement('div');
            spriteCard.classList.add('menuCard');
        let spriteCardLabel = document.createElement('p');
            spriteCardLabel.innerText = "Sprite";
        let spriteImg = new Image();
            spriteImg.src = sprite;
        spriteCard.appendChild(spriteImg);
        spriteCard.appendChild(spriteCardLabel);
        drinksContainer.appendChild(spriteCard); 


    menuContainer.appendChild(pizzaContainer);
    menuContainer.appendChild(sidesContainer);
    menuContainer.appendChild(drinksContainer)
    content.appendChild(menuContainer);

}