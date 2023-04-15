import "./menu.css"

function loadMenu (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Today's menu";
    
    const disheswrapper = document.createElement("div");
    disheswrapper.classList.add("menu");
    const dishestitle = document.createElement("h2");
    dishestitle.classList.add("menu");
    dishestitle.textContent = "Our dishes:";
    const dishes = document.createElement("ul");
    dishes.classList.add("menu");
    const dish1 = document.createElement("li");
    dish1.textContent = "Special fish with bread";
    const dish2 = document.createElement("li");
    dish2.textContent = "English breakfast";
    const dish3 = document.createElement("li");
    dish3.textContent = "Ceasar salad";
    const dish4 = document.createElement("li");
    dish4.textContent = "Veggies and fruits mix";

    const drinkswrapper = document.createElement("div");
    drinkswrapper.classList.add("menu");
    const drinkstitle = document.createElement("h2");
    drinkstitle.classList.add("menu");
    drinkstitle.textContent = "Our drinks:";
    const drinks = document.createElement("ul");
    drinks.classList.add("menu");
    const drink1 = document.createElement("li");
    drink1.textContent = "Juice (apple, orange, grappe)";
    const drink2 = document.createElement("li");
    drink2.textContent = "Mineral water";
    const drink3 = document.createElement("li");
    drink3.textContent = "Milk";

    const bonAppetit = document.createElement("div");
    bonAppetit.classList.add("menubon");
    bonAppetit.textContent = "Bon Appetit!";
    
    content.appendChild(title);

    content.appendChild(disheswrapper);
    disheswrapper.appendChild(dishestitle);
    disheswrapper.appendChild(dishes);
    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);
    dishes.appendChild(dish4);

    content.appendChild(drinkswrapper);
    drinkswrapper.appendChild(drinkstitle);
    drinkswrapper.appendChild(drinks);
    drinks.appendChild(drink1);
    drinks.appendChild(drink2);
    drinks.appendChild(drink3);
    
    content.appendChild(bonAppetit);
}

export default loadMenu;