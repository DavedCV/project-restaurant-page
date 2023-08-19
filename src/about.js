/* -------------------------- about section ----------------------------------*/

const aboutArticle = document.createElement("article");

/* -------------------------- about section ----------------------------------*/

const aboutSection = document.createElement("section");
aboutSection.setAttribute("class", "section section-divider gray about");
aboutSection.id = "about";

const container = document.createElement("div");
container.classList.add("container");

// about banner ----------------------------------
const aboutBanner = document.createElement("div");
aboutBanner.classList.add("about-banner");

const imgFoodBanner = document.createElement("img");
imgFoodBanner.src = "/src/assets/images/about-banner.png";
imgFoodBanner.alt = "Burgier with drinks";
imgFoodBanner.setAttribute("class", "w-100 about-img");
imgFoodBanner.width = "509";
imgFoodBanner.height = "459";
imgFoodBanner.loading = "lazy";
aboutBanner.appendChild(imgFoodBanner);

const imgSaleBanner = document.createElement("img");
imgSaleBanner.src = "/src/assets/images/sale-shape-red.png";
imgSaleBanner.alt = "Get up 50% off now";
imgSaleBanner.setAttribute("class", "abs-img scale-up-anim");
imgSaleBanner.width = "216";
imgSaleBanner.height = "226";
imgSaleBanner.loading = "lazy";
aboutBanner.appendChild(imgSaleBanner);

// about content ---------------------------------
const aboutContent = document.createElement("div");
aboutContent.classList.add("about-content");

const sectionTitle = document.createElement("h2");
sectionTitle.setAttribute("class", "h2 section-title");
sectionTitle.textContent = "Foodie, Burguers, and Best Pizzas ";
const spanSectionTitle = document.createElement("span");
spanSectionTitle.classList.add("span");
spanSectionTitle.textContent = "in Town!";
sectionTitle.appendChild(spanSectionTitle);

const sectionText = document.createElement("p");
sectionText.classList.add("section-text");
sectionText.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur quisquam accusamus fuga ex amet, quia dolorem doloribus, eius repellendus explicabo itaque tempore culpa quaerat, eligendi nisi error nemo maiores?";

// about list -----------------------------------
const aboutList = document.createElement("ul");
aboutList.classList.add("about-list");

const textListItems = [
  "Delicious & Healthy Foods",
  "Spacific Family And Kids Zone",
  "Music & Other Facilities",
  "Fastest Food Home Delivery",
];
for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");
  li.classList.add("about-item");

  const il = document.createElement("i");
  il.setAttribute("class", "fa-solid fa-circle-check");
  li.appendChild(il);

  const spanList = document.createElement("span");
  spanList.classList.add("span");
  spanList.textContent = textListItems[i];
  li.appendChild(spanList);

  aboutList.appendChild(li);
}

// about button -------------------------------
const aboutButton = document.createElement("button");
aboutButton.setAttribute("class", "btn btn-hover");
aboutButton.textContent = "Order Now";

// append elements of about content
aboutContent.appendChild(sectionTitle);
aboutContent.appendChild(sectionText);
aboutContent.appendChild(aboutList);
aboutContent.appendChild(aboutButton);

// append to the container
container.appendChild(aboutBanner);
container.appendChild(aboutContent);

// append to the article
aboutSection.appendChild(container);
aboutArticle.appendChild(aboutSection);

export default aboutArticle;
