import "./contact.css"
import Inst from "./ig-instagram-icon.svg"
import Twit from "./twitter-app-icon.svg"

function loadContact (){
    const content = document.getElementById("content");
    const title = document.createElement("h1");
    title.classList.add("contact");
    title.textContent = "Here's where you can find us!";

    const location = document.createElement("div");
    location.classList.add("contact");
    location.textContent = "Address: Somewhere in the Heaven";

    const line = document.createElement("hr");

    const email = document.createElement("div");
    email.classList.add("contact");
    email.textContent = "Email: heaven@god.com"

    const line2 = document.createElement("hr");

    const socials = document.createElement("ul");
    socials.classList.add("contact");
    socials.textContent = "Our socials:"
    
    const instWrapper = document.createElement("div");
    instWrapper.classList.add("socials");
    const instagram = document.createElement("li");
    instagram.textContent = "Instagram";
    const instImg = document.createElement("img");
    instImg.classList.add("socials");
    instImg.src = Inst;

    const twitWrapper = document.createElement("div");
    twitWrapper.classList.add("socials");
    const twitter = document.createElement("li");
    twitter.textContent = "Twitter";
    const twitImg = document.createElement("img");
    twitImg.classList.add("socials");
    twitImg.src = Twit;
 

    content.appendChild(title);
    content.appendChild(location);
    content.appendChild(line);
    content.appendChild(email);
    content.appendChild(line2);
    content.appendChild(socials);
    socials.appendChild(instWrapper);
    instWrapper.appendChild(instagram);
    instWrapper.appendChild(instImg);
    socials.appendChild(twitWrapper);
    twitWrapper.appendChild(twitter);
    twitWrapper.appendChild(twitImg);
}

export default loadContact;