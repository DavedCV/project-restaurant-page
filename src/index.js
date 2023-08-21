import "./assets/css/styles.css";
import { main, navbarLinks, header } from "./header.js";
import homeArticle from "./home.js";
import aboutArticle from "./about.js";
import menuArticle from "./menu.js";
import contactArticle from "./contact.js";

function updateInfo(link, article) {
  link.addEventListener("click", () => {
    
    if (link.textContent == "Home") header.setAttribute("class", "header"); 
    else header.setAttribute("class", "header active");
    
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.appendChild(article);
  });
}

for (let link of navbarLinks) {
  switch (link.textContent) {
    case "Home":
      updateInfo(link, homeArticle);
      header.setAttribute("class", "header");
      break;

    case "About":
      updateInfo(link, aboutArticle);
      break;

    case "Menu":
      updateInfo(link, menuArticle);
      break;

    case "Contact":
      updateInfo(link, contactArticle);
      break;

    default:
      break;
  }
}

main.appendChild(homeArticle);
