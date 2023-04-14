function loadMenu (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Come and choose!";

    

    const text = document.createElement("p");
    text.textContent = "say something, you!"

    content.appendChild(title);

    content.appendChild(text);  
}

export default loadMenu;