function pageLoad (){
    const header = document.createElement("div");
header.classList.add("header");
document.body.insertBefore(header, document.body.firstChild);
const tabs = document.createElement("ul");
tabs.id = "tabs";
header.appendChild(tabs);
const hometab = document.createElement("li");
hometab.classList.add("hometab");
hometab.textContent = "Home";
hometab.id = "home";
const menutab = document.createElement("li");
menutab.classList.add("hometab");
menutab.textContent = "Menu";
menutab.id = "menu";
const contacttab = document.createElement("li");
contacttab.classList.add("hometab");
contacttab.textContent = "Contact";
contacttab.id = "contact";
tabs.appendChild(hometab);
tabs.appendChild(menutab);
tabs.appendChild(contacttab);

const footer = document.createElement("div");
footer.classList.add("footer");

const unsplash = document.createElement("div");
unsplash.classList.add("footeritem");
const by = document.createElement("span");
by.textContent = "Background by ";
const shoutout = document.createElement("a")
shoutout.textContent = "Brooke Lark ";
shoutout.href = "https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
const on = document.createElement("span");
on.textContent = "on ";
const shoutoutsite = document.createElement("a");
shoutoutsite.textContent = "Unslpash";
shoutoutsite.href = "https://unsplash.com/photos/08bOYnH_r_E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

const uxwing = document.createElement("div");
uxwing.classList.add("footeritem");
const icons = document.createElement("span");
icons.textContent = "Icons from ";
const iconslink = document.createElement("a");
iconslink.textContent = "Uxwing";
iconslink.href = "https://uxwing.com/tag/social-media-icons/";
footer.appendChild(unsplash);
unsplash.appendChild(by);
unsplash.appendChild(shoutout);
unsplash.appendChild(on);
unsplash.appendChild(shoutoutsite);

footer.appendChild(uxwing);
uxwing.appendChild(icons);
uxwing.appendChild(iconslink);

document.body.appendChild(footer);
}

export default pageLoad;