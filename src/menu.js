/* ---------------------------- import images --------------------------------*/

import bannerImage1 from "/src/assets/images/food-menu-1.png";
import bannerImage2 from "/src/assets/images/food-menu-2.png";
import bannerImage3 from "/src/assets/images/food-menu-3.png";
import bannerImage4 from "/src/assets/images/food-menu-4.png";
import bannerImage5 from "/src/assets/images/food-menu-5.png";
import bannerImage6 from "/src/assets/images/food-menu-6.png";

const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5, bannerImage6];

/* ------------------------ food menu section --------------------------------*/

const menuArticle = document.createElement("article");

/* --------------------- menu section ----------------------------------------*/

const menuSection = document.createElement("section");
menuSection.setAttribute("class", "section white food-menu");
menuSection.id = "menu";

const container = document.createElement("div");
container.classList.add("container");

// section subtitle
const sectionSubtitle = document.createElement("p");
sectionSubtitle.classList.add("section-subtitle");
sectionSubtitle.textContent = "Popular Dishes";

// section title
const sectionTitle = document.createElement("h2");
sectionTitle.setAttribute("class", "h2 section-title");
sectionTitle.textContent = "Our Delicious ";
const span = document.createElement("span");
span.classList.add("span");
span.textContent= "Foods";
sectionTitle.appendChild(span);

// section text
const sectionText = document.createElement("p");
sectionText.classList.add("section-text");
sectionText.textContent =
  "Food is any substance consumed to provide nutritional support for an organism.";

// food menu list
const foodMenuList = document.createElement("ul");
foodMenuList.classList.add("food-menu-list");

const foodNames = [
  "Fried Chicken Unlimited",
  "Burguer Kink Whopper",
  "White Castle Pizzas",
  "Bell Burrito Supreme",
  "Kung Pao Chicken BBQ",
  "Wendy's Chicken",
];
const discounts = ["-15%", "-10%", "-25%", "-20%", "-5%", "-15%"];
for (let i = 0; i < 6; i++) {
  const li = document.createElement("li");

  const foodMenuCard = document.createElement("div");
  foodMenuCard.classList.add("food-menu-card");

  // card banner
  const cardBanner = document.createElement("div");
  cardBanner.classList.add("card-banner");

  const cardBannerImage = document.createElement("img");
  cardBannerImage.src = bannerImages[i];
  cardBannerImage.width = "300";
  cardBannerImage.height = "300";
  cardBannerImage.loading = "lazy";
  cardBannerImage.classList.add("w-100");
  cardBannerImage.alt = foodNames[i];
  cardBanner.appendChild(cardBannerImage);

  const cardBannerBadge = document.createElement("div");
  cardBannerBadge.classList.add("badge");
  cardBannerBadge.textContent = discounts[i];
  cardBanner.appendChild(cardBannerBadge);

  const cardBannerButton = document.createElement("button");
  cardBannerButton.setAttribute("class", "btn food-menu-btn");
  cardBannerButton.textContent = "Order Now";
  cardBanner.appendChild(cardBannerButton);

  // card title
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = foodNames[i];

  // card price
  const cardPriceWrapper = document.createElement("div");
  cardPriceWrapper.classList.add("price-wrapper");

  const priceText = document.createElement("p");
  priceText.classList.add("price-text");
  priceText.textContent = "Price:";
  cardPriceWrapper.appendChild(priceText);

  const price = document.createElement("data");
  price.classList.add("price");
  price.value = "49.00";
  price.textContent = "$49.00";
  cardPriceWrapper.appendChild(price);

  const del = document.createElement("del");
  del.classList.add("del");
  del.textContent = "$69.00";
  cardPriceWrapper.appendChild(del);

  // append elements to the menucard
  foodMenuCard.appendChild(cardBanner);
  foodMenuCard.appendChild(cardTitle);
  foodMenuCard.appendChild(cardPriceWrapper);

  li.appendChild(foodMenuCard);
  foodMenuList.appendChild(li);
}

// append elements to the container
container.appendChild(sectionSubtitle);
container.appendChild(sectionTitle);
container.appendChild(sectionText);
container.appendChild(foodMenuList);

menuSection.appendChild(container);

// -----------------------------------------------------------------------------

menuArticle.appendChild(menuSection);
export default menuArticle;
