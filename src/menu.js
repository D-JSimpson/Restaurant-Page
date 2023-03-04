import buffalo from './imgs/buffalo.jpeg';
import cheese from './imgs/Cheese.jpg';
import hawaiian from './imgs/hawaiian.jpg';
import margherita from './imgs/Margherita.jpg';
import pepperoni from './imgs/Pepperoni.png';
import spinach from './imgs/SpinachFeta.jpg';

export default function menu(){
    //content.innerHtml = "";

    const menuContainer = document.createElement('div');
          menuContainer.id = 'menuContainer';
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
    content.appendChild(pizzaContainer);

}