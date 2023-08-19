import "./assets/css/styles.css";
import { main, navbarLinks } from "./base_structure.js";
import homeArticle from "./home.js";
import aboutArticle from "./about.js";
import menuArticle from "./menu.js";

function updateInfo(link, article) {
  link.addEventListener("click", () => {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.appendChild(article);
  });
}

for (let link of navbarLinks) {
  switch (link.textContent) {
    case "About":
      updateInfo(link, aboutArticle);
      break;

    case "Home":
      updateInfo(link, homeArticle);
      break;

    case "Menu":
      updateInfo(link, menuArticle);
      break;

    default:
      break;
  }
}

main.appendChild(homeArticle);
