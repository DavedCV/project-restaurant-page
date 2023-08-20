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
heroSubtitle.textContent = "Eat Sleep And";
const heroTitle = document.createElement("h2");
heroTitle.setAttribute("class", "h1 hero-title");
heroTitle.textContent = "Super healthy food in town!";
const heroText = document.createElement("p");
heroText.classList.add("hero-text");
heroText.textContent =
  "Food is the fuel for our life, eat healthy and love yourself.";
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
heroBannerBg.src = "/src/assets/images/hero-banner-bg.png";
heroBannerBg.setAttribute("class", "w-100 hero-img-bg");
heroBannerBg.width = "820";
heroBannerBg.height = "716";
heroBannerBg.loading = "lazy";

const heroBanner = document.createElement("img");
heroBanner.src = "/src/assets/images/hero-banner.png";
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
  cardIconImg.src = `/src/assets/images/promo-icon-${i + 1}.svg`;
  cardIcon.appendChild(cardIconImg);

  const cardTitle = document.createElement("h3");
  cardTitle.setAttribute("class", "h3 card-title");
  cardTitle.textContent = productName[i];

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent =
    "Food is any substance consumed to provide nutritional suport for an organism.";

  const cardImage = document.createElement("img");
  cardImage.src = `/src/assets/images/promo-${i + 1}.png`;
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
deliverySection.setAttribute("class", "section section-divider gray delivery");

const container3 = document.createElement("div");
container3.classList.add("container");

// delivery content
const deliveryContent = document.createElement("div");
deliveryContent.classList.add("delivery-content");

const deliverySectionTitle = document.createElement("h2");
deliverySectionTitle.setAttribute("class","h2 section-title");
deliverySectionTitle.innerHTML = "A Moments Of Delivered On <span class='span'>Right Time</span> & Place";
deliveryContent.appendChild(deliverySectionTitle);

const deliverySectionText = document.createElement("p");
deliverySectionText.classList.add("section-text");
deliverySectionText.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, earum?";
deliveryContent.appendChild(deliverySectionText);

const deliverySectionButton = document.createElement("button");
deliverySectionButton.setAttribute("class","btn btn-hover");
deliverySectionButton.textContent = "Order Now";
deliveryContent.appendChild(deliverySectionButton);

// delivery banner
const deliverySectionFigure = document.createElement("figure");
deliverySectionFigure.classList.add("delivery-banner");

const deliveryBanner = document.createElement("img");
deliveryBanner.src = "/src/assets/images/delivery-banner-bg.png";
deliveryBanner.width = "700";
deliveryBanner.height = "602";
deliveryBanner.loading = "lazy";
deliveryBanner.alt = "clouds";
deliveryBanner.classList.add("w-100");
deliverySectionFigure.appendChild(deliveryBanner);

const deliveryBoyImage = document.createElement("img");
deliveryBoyImage.src = "/src/assets/images/delivery-boy.svg";
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



/* --------------------- add sections to the article ------------------------ */

articleHome.appendChild(heroSection);
articleHome.appendChild(promoSection);
articleHome.appendChild(deliverySection);

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

    console.log(deliveryBoyMove);
    lastScrollPos = activeScrollPos;
    deliveryBoyImage.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});

export default articleHome;
