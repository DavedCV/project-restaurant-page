/* ------------------- contact section ----------------------------------------*/

const contactArticle = document.createElement("article");

const contactSection = document.createElement("section");
contactSection.setAttribute("class", "section contact");

const contactWrapper = document.createElement("div");
contactWrapper.classList.add("contact-top");

const container = document.createElement("div");
container.classList.add("container");

// contact brand ---------------------------------------------------------------

const contactBrand = document.createElement("div");
contactBrand.classList.add("contact-brand");

const logo = document.createElement("a");
logo.classList.add("logo");
logo.innerHTML = 'Restaurant <span class="span">.</span>';

const contactText = document.createElement("p");
contactText.classList.add("contact-text");
contactText.textContent =
  "Food is any substance consumed to provide nutritional suport for an organism.";

const socialList = document.createElement("ul");
socialList.classList.add("social-list");
const logoReference = [
  "fa-brands fa-square-facebook",
  "fa-brands fa-square-instagram",
  "fa-brands fa-square-x-twitter",
];
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.classList.add("social-link");
  a.href = "#";

  const item = document.createElement("i");
  item.setAttribute("class", logoReference[i]);

  a.appendChild(item);

  li.appendChild(a);
  socialList.appendChild(li);
}

contactBrand.appendChild(logo);
contactBrand.appendChild(contactText);
contactBrand.appendChild(socialList);

// contact lists ---------------------------------------------------------------

// contact list 1
const contactList1 = document.createElement("ul");
contactList1.classList.add("contact-list");

const contactList1Info = [
  "Contact Info",
  "+1 (062) 109-9222",
  "Info@Restaurant.com",
  "153 Williamson Plaza, MT 09514",
];
for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");

  let content = undefined;
  if (i == 3) {
    content = document.createElement("address");
    content.classList.add("contact-list-item");
    content.textContent = contactList1Info[i];
  } else {
    content = document.createElement("p");

    if (i == 0) {
      content.classList.add("contact-list-title");
    } else {
      content.classList.add("contact-list-item");
    }

    content.textContent = contactList1Info[i];
  }

  li.appendChild(content);
  contactList1.appendChild(li);
}

// contact list 2
const contactList2 = document.createElement("ul");
contactList1.classList.add("contact-list");

const contactList2Info = [
  "Opening Hours",
  "Monday-Friday: 08:00-22:00",
  "Tuesday 4PM: Till Mid Night",
  "Saturday: 10:00-16:00",
];
for (let i = 0; i < 4; i++) {
  const li = document.createElement("li");

  let content = document.createElement("p");

  if (i == 0) {
    content.classList.add("contact-list-title");
  } else {
    content.classList.add("contact-list-item");
  }

  content.textContent = contactList2Info[i];

  li.appendChild(content);
  contactList1.appendChild(li);
}

// contact form ----------------------------------------------------------------

const contactForm = document.createElement("form");
contactForm.classList.add("contact-form");

const formTitle = document.createElement("p");
formTitle.classList.add("contact-list-title");
formTitle.textContent = "Book a Table";

// input wrappers

const inputWrapper1 = document.createElement("div");
inputWrapper1.classList.add("input-wrapper");

const inputText = document.createElement("input");
inputText.type = "text";
inputText.name = "full_name";
inputText.placeholder = "Your Name";
inputText.classList.add("input-field");
inputText.setAttribute("required", "");
inputWrapper1.appendChild(inputText);

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Your Email";
inputEmail.classList.add("input-field");
inputEmail.setAttribute("required", "");
inputWrapper1.appendChild(inputEmail);

const inputWrapper2 = document.createElement("div");
inputWrapper2.classList.add("input-wrapper");

const select = document.createElement("select");
select.classList.add("input-field");
select.name = "total_person";
for (let i = 0; i < 5; i++) {
  const option = document.createElement("option");
  option.value = `${i + 1}_person`;
  option.textContent = `${i + 1} Person`;
  select.appendChild(option);
}
inputWrapper2.appendChild(select);

const inputDate = document.createElement("input");
inputDate.type = "date";
inputDate.name = "booking_date";
inputDate.classList.add("input-field");
inputDate.setAttribute("required", "");
inputWrapper2.appendChild(inputDate);

// textarea
const textarea = document.createElement("textarea");
textarea.name = "message";
textarea.placeholder = "Message";
textarea.classList.add("input-field");

// submit button
const button = document.createElement("button");
button.type = "submit";
button.classList.add("btn");
button.textContent = "Book a Table";

contactForm.appendChild(formTitle);
contactForm.appendChild(inputWrapper1);
contactForm.appendChild(inputWrapper2);
contactForm.appendChild(textarea);
contactForm.appendChild(button);

// add to the container --------------------------------------------------------

container.appendChild(contactBrand);
container.appendChild(contactList1);
container.appendChild(contactList1);
container.appendChild(contactList2);
container.appendChild(contactForm);

// add to the article

contactWrapper.appendChild(container);
contactSection.appendChild(contactWrapper);
contactArticle.appendChild(contactSection);

export default contactArticle;
