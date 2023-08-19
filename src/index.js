import "./assets/css/styles.css";
import {main, navbarLinks} from "./base_structure.js";
import homeArticle from "./home.js";
import aboutArticle from "./about.js";

for (let link of navbarLinks) {
    switch(link.textContent){
        case "About":
            link.addEventListener("click", () => {
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(aboutArticle);
            });
            break;

        case "Home":
            link.addEventListener("click", () => {
                while (main.firstChild) {
                    main.removeChild(main.firstChild);
                }
                main.appendChild(homeArticle);
            });
            break;

        default:
            break;
    }
}

main.appendChild(homeArticle);