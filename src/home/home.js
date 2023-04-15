import Jesus from "./Jesus.jpg";
import './home.css';

function loadHome (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.textContent = "\"Fish and Bread\" welcomes you!";
    const info = document.createElement("p");
    info.classList.add("homeinfo");
    info.textContent = "Everyone who's feeling hungry should definitely come and visit us! We are providing you with healthy and tasty dishes that you can take to go or stay and eat in our welcoming ambience!";
    
    const hr1 = document.createElement("hr");

    const hours = document.createElement("ul");
    hours.classList.add("homehours");
    hours.textContent = "We are open:"
    const weekday = document.createElement("li");
    weekday.textContent = "Mon-Fri: 8 a.m. - 10 p.m."
    const weekend = document.createElement("li");
    weekend.textContent = "Weekend: 10 a.m. - 9 p.m."

    const hr2 = document.createElement("hr");

    const picture = document.createElement("img");
    picture.classList.add("home");
    picture.src = Jesus;
    
    const why = document.createElement("p");
    why.classList.add("homewhy");
    const question = document.createElement("div");
    question.id = "question";
    question.textContent = "Why do we do that?"; 
    const answer = document.createElement("div");
    answer.id = "answer";
    answer.textContent = "Everyone can find himself in need. We love people and we have resources to give a helping hand!";
    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(hr1);
    content.appendChild(hours);
    content.appendChild(hr2);
    hours.appendChild(weekday);
    hours.appendChild(weekend);
    content.appendChild(picture);
    content.appendChild(why);
    why.appendChild(question);
    why.appendChild(answer);
    
}

export default loadHome;