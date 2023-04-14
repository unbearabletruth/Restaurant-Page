function pageLoad (){
    const header = document.createElement("div");
header.classList.add("header");
document.body.insertBefore(header, document.body.firstChild);
const tabs = document.createElement("ul");
header.appendChild(tabs);
const hometab = document.createElement("li");
hometab.textContent = "Home";
hometab.id = "home";
const menutab = document.createElement("li");
menutab.textContent = "Menu";
menutab.id = "menu";
const contacttab = document.createElement("li");
contacttab.textContent = "Contact";
contacttab.id = "contact";
tabs.appendChild(hometab);
tabs.appendChild(menutab);
tabs.appendChild(contacttab);

const footer = document.createElement("div");
footer.classList.add("footer");
const by = document.createElement("span");
by.textContent = "Photo by";
const shoutout = document.createElement("a")
shoutout.textContent = "Brooke Lark";
shoutout.href = "https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
const on = document.createElement("span");
on.textContent = "on";
const shoutoutsite = document.createElement("a");
shoutoutsite.textContent = "Unslpash";
shoutoutsite.href = "https://unsplash.com/photos/08bOYnH_r_E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
footer.appendChild(by);
footer.appendChild(shoutout);
footer.appendChild(on);
footer.appendChild(shoutoutsite);

document.body.appendChild(footer);
}

export default pageLoad;