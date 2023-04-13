import Icon from './02.png';

function load (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Here we have a perfect example of a restaraunt!";

    const img = document.createElement("img");
    img.src = Icon;

    const text = document.createElement("p");
    text.textContent = "say something, you!"

    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(text);  
    console.log("i'm here in case");
}

export default load;