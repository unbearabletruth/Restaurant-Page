
function loadHome (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "Come and have everything for free!";

    

    const text = document.createElement("p");
    text.textContent = "say something, you!"

    content.appendChild(title);

    content.appendChild(text);  
}

export default loadHome;