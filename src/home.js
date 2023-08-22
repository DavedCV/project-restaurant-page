/* ------------------------- import images ---------------------------------- */

import image1 from "/src/assets/images/hero-banner-bg.png";
import image2 from "/src/assets/images/hero-banner.png";
import image3 from "/src/assets/images/delivery-banner-bg.png";
import image4 from "/src/assets/images/delivery-boy.svg";

import imageIcon1 from "/src/assets/images/promo-icon-1.svg";
import imageIcon2 from "/src/assets/images/promo-icon-2.svg";
import imageIcon3 from "/src/assets/images/promo-icon-3.svg";
import imageIcon4 from "/src/assets/images/promo-icon-4.svg";
import imageIcon5 from "/src/assets/images/promo-icon-5.svg";
const iconImages = [imageIcon1, imageIcon2, imageIcon3, imageIcon4, imageIcon5];

import imagePromo1 from "/src/assets/images/promo-1.png";
import imagePromo2 from "/src/assets/images/promo-2.png";
import imagePromo3 from "/src/assets/images/promo-3.png";
import imagePromo4 from "/src/assets/images/promo-4.png";
import imagePromo5 from "/src/assets/images/promo-5.png";
const promoImages = [imagePromo1, imagePromo2, imagePromo3, imagePromo4, imagePromo5];

import imageAvatar1 from "/src/assets/images/avatar-1.jpg"
import imageAvatar2 from "/src/assets/images/avatar-2.jpg"
import imageAvatar3 from "/src/assets/images/avatar-3.jpg"
const avatarImages = [imageAvatar1, imageAvatar2, imageAvatar3];

/* --------------------------- home article ----------------------------------*/

const articleHome = document.createElement("article");

// ------------------------- hero section --------------------------------------

const heroSection = document.createElement("section");
heroSection.classList.add("hero");
heroSection.id = "home";

const container = document.createElement("div");
container.classList.add("container");

// hero text content
const heroContent = document.createElement("div");
heroContent.classList.add("hero-content");

// elements of the hero content
const heroSubtitle = document.createElement("p");
heroSubtitle.classList.add("hero-subtitle");
heroSubtitle.textContent = "Burguer = Love <3";
const heroTitle = document.createElement("h2");
heroTitle.setAttribute("class", "h1 hero-title");
heroTitle.textContent = "Super delicious food in town!";
const heroText = document.createElement("p");
heroText.classList.add("hero-text");
heroText.textContent =
  "Food is the fuel for our life, eat good and love yourself.";
const heroButton = document.createElement("button");
heroButton.classList.add("btn");
heroButton.textContent = "See the menu!";

heroContent.appendChild(heroSubtitle);
heroContent.appendChild(heroTitle);
heroContent.appendChild(heroText);
heroContent.appendChild(heroButton);

// figures
const heroFigure = document.createElement("figure");
heroFigure.classList.add("hero-banner");

const heroBannerBg = document.createElement("img");
heroBannerBg.src = image1;
heroBannerBg.setAttribute("class", "w-100 hero-img-bg");
heroBannerBg.width = "820";
heroBannerBg.height = "716";
heroBannerBg.loading = "lazy";

const heroBanner = document.createElement("img");
heroBanner.src = image2;
heroBanner.alt = "Burguer";
heroBanner.setAttribute("class", "w-100 hero-img");
heroBannerBg.width = "700";
heroBannerBg.height = "637";
heroBannerBg.loading = "lazy";

heroFigure.appendChild(heroBannerBg);
heroFigure.appendChild(heroBanner);

// add content and figure to the container
container.appendChild(heroContent);
container.appendChild(heroFigure);

// add hero section to the container
heroSection.appendChild(container);

// ---------------------------- promo section ----------------------------------

const promoSection = document.createElement("section");
promoSection.setAttribute("class", "section section-divider white promo");

const container2 = document.createElement("div");
container2.classList.add("container");

const ulPromo = document.createElement("ul");
ulPromo.setAttribute("class", "promo-list has-scrollbar");

const productName = [
  "Happy Pizza",
  "Crazy Drinks",
  "French Fries",
  "Burguer",
  "Chicken",
];
for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  li.classList.add("promo-item");

  const promoCard = document.createElement("div");
  promoCard.classList.add("promo-card");

  const cardIcon = document.createElement("div");
  cardIcon.classList.add("card-icon");
  const cardIconImg = document.createElement("img");
  cardIconImg.src = iconImages[i];
  cardIcon.appendChild(cardIconImg);

  const cardTitle = document.createElement("h3");
  cardTitle.setAttribute("class", "h3 card-title");
  cardTitle.textContent = productName[i];

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent =
    "Food is any substance consumed to provide nutritional suport for an organism.";

  const cardImage = document.createElement("img");
  cardImage.src = promoImages[i];
  cardImage.alt = productName[i];
  cardImage.height = "300";
  cardImage.width = "300";
  cardImage.setAttribute("class", "w-100 card-banner");
  cardImage.loading = "lazy";

  promoCard.appendChild(cardIcon);
  promoCard.appendChild(cardTitle);
  promoCard.appendChild(cardText);
  promoCard.appendChild(cardImage);

  li.appendChild(promoCard);
  ulPromo.appendChild(li);
}

// add the ul to the container
container2.appendChild(ulPromo);

// add the container to the section
promoSection.appendChild(container2);

/* ---------------------------- delivery section -----------------------------*/

const deliverySection = document.createElement("section");
deliverySection.setAttribute("class", "section section-divider grey delivery");

const container3 = document.createElement("div");
container3.classList.add("container");

// delivery content
const deliveryContent = document.createElement("div");
deliveryContent.classList.add("delivery-content");

const deliverySectionTitle = document.createElement("h2");
deliverySectionTitle.setAttribute("class", "h2 section-title");
deliverySectionTitle.innerHTML =
  "A Moments Of Delivered On <span class='span'>Right Time</span> & Place";
deliveryContent.appendChild(deliverySectionTitle);

const deliverySectionText = document.createElement("p");
deliverySectionText.classList.add("section-text");
deliverySectionText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, earum?";
deliveryContent.appendChild(deliverySectionText);

const deliverySectionButton = document.createElement("button");
deliverySectionButton.setAttribute("class", "btn btn-hover");
deliverySectionButton.textContent = "Order Now";
deliveryContent.appendChild(deliverySectionButton);

// delivery banner
const deliverySectionFigure = document.createElement("figure");
deliverySectionFigure.classList.add("delivery-banner");

const deliveryBanner = document.createElement("img");
deliveryBanner.src = image3;
deliveryBanner.width = "700";
deliveryBanner.height = "602";
deliveryBanner.loading = "lazy";
deliveryBanner.alt = "clouds";
deliveryBanner.classList.add("w-100");
deliverySectionFigure.appendChild(deliveryBanner);

const deliveryBoyImage = document.createElement("img");
deliveryBoyImage.src = image4;
deliveryBoyImage.width = "1000";
deliveryBoyImage.height = "880";
deliveryBoyImage.loading = "lazy";
deliveryBoyImage.alt = "delivery boy";
deliveryBoyImage.setAttribute("data-delivery-boy", "");
deliveryBoyImage.setAttribute("class", "w-100 delivery-img");
deliverySectionFigure.appendChild(deliveryBoyImage);

// add items to the container
container3.appendChild(deliveryContent);
container3.appendChild(deliverySectionFigure);

// add the container to the delivery section
deliverySection.appendChild(container3);

/* ------------------------- testimonials section ----------------------------*/

const testimonialsSection = document.createElement("section");
testimonialsSection.setAttribute(
  "class",
  "section section-divider white testi",
);

const container4 = document.createElement("div");
container4.classList.add("container");

// section subtitle
const testimonialsSectionSubtitle = document.createElement("p");
testimonialsSectionSubtitle.classList.add("section-subtitle");
testimonialsSectionSubtitle.textContent = "Testimonials";

// section title
const testimonialsSectionTitle = document.createElement("h2");
testimonialsSectionTitle.setAttribute("class", "h2 section-title");
testimonialsSectionTitle.innerHTML =
  "Our Customers <span class='span'>Reviews</span>";

// section text
const testimonialsSectionText = document.createElement("p");
testimonialsSectionText.classList.add("section-text");
testimonialsSectionText.textContent =
  "Food is the fuel for our life, eat good and love yourself.";

// testimonials list
const testimonialsList = document.createElement("ul");
testimonialsList.setAttribute("class", "testi-list has-scrollbar");

const userTile = ["CEO KingFisher", "CEO Getforce", "CEO Angela"];
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.classList.add("testi-item");

  const testiCard = document.createElement("div");
  testiCard.classList.add("testi-card");

  // profile wrapper
  const profileWrapper = document.createElement("div");
  profileWrapper.classList.add("profile-wrapper");

  const avatar = document.createElement("figure");
  avatar.classList.add("avatar");
  const avatarImage = document.createElement("img");
  avatarImage.src = avatarImages[i];
  avatarImage.width = "80";
  avatarImage.height = "80";
  avatarImage.loading = "lazy";
  avatarImage.alt = `User${i + 1}`;
  avatar.appendChild(avatarImage);

  const userInfo = document.createElement("div");
  const userName = document.createElement("h3");
  userName.setAttribute("class", "h4 testi-name");
  userName.textContent = `User ${i + 1}`;
  userInfo.appendChild(userName);
  const userTitle = document.createElement("p");
  userTitle.classList.add("testi-title");
  userTitle.textContent = userTile[i];
  userInfo.appendChild(userTitle);

  profileWrapper.appendChild(avatar);
  profileWrapper.appendChild(userInfo);

  // blackquote
  const blackquote = document.createElement("blackquote");
  blackquote.classList.add("testi-text");
  blackquote.textContent =
    '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."';

  // rating wrapper
  const ratingWrapper = document.createElement("div");
  ratingWrapper.classList.add("rating-wrapper");
  for (let i = 0; i < 5; i++) {
    const item = document.createElement("i");
    item.setAttribute("class", "fa-solid fa-star");
    ratingWrapper.appendChild(item);
  }

  // add items to the card
  testiCard.appendChild(profileWrapper);
  testiCard.appendChild(blackquote);
  testiCard.appendChild(ratingWrapper);

  // add testi card to the list
  li.appendChild(testiCard);
  testimonialsList.appendChild(li);
}

// add items to the container
container4.appendChild(testimonialsSectionSubtitle);
container4.appendChild(testimonialsSectionTitle);
container4.appendChild(testimonialsSectionText);
container4.appendChild(testimonialsList);

// add container to the section
testimonialsSection.appendChild(container4);

/* --------------------- add sections to the article ------------------------ */

articleHome.appendChild(heroSection);
articleHome.appendChild(promoSection);
articleHome.appendChild(deliverySection);
articleHome.appendChild(testimonialsSection);

/* ------------------------- event listeners ---------------------------------*/

// move the cycle on scroll

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", () => {
  let deliveryBoyTopPos = deliveryBoyImage.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove++;
    } else {
      deliveryBoyMove--;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoyImage.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

export default articleHome;
