/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/shape-white.png */ "./src/assets/images/shape-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/shape-grey.png */ "./src/assets/images/shape-grey.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/hero-bg.jpg */ "./src/assets/images/hero-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* -------------------- variables --------------------------------------------*/
:root {
    /* Colors */
    --rich-black-fogra-29: hsl(210, 26%, 7%);
    --champagne-pink_20: hsla(23, 61%, 86%, 0.2);
    --independence_30: hsla(245, 17%, 29%, 0.3);
    --gray-x-11-gray: hsl(0, 0%, 73%);
    --champagne-pink: hsl(23, 61%, 86%);
    --spanish-gray: hsl(0, 0%, 60%);
    --sonic-silver: hsl(0, 0%, 47%);
    --deep-saffron: hsl(32, 100%, 59%);
    --dark-orange: hsl(28, 100%, 58%);
    --desert-sand: hsl(23, 49%, 82%);
    --isabelline: hsl(38, 44%, 96%);
    --gainsboro: hsl(0, 0%, 87%);
    --tangerine: hsl(31, 84%, 50%);
    --cinnabar: hsl(3, 90%, 55%);
    --black_95: hsla(0, 0%, 0%, 0.95);
    --cultured: hsl(0, 0%, 93%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --onyx: hsl(0, 0%, 27%);

    /* Typography */
    --ff-shadows-into-light: 'Shadows Into Light', cursive;
    --ff-roboto: 'Roboto', sans-serif;
    --ff-rubik: 'Rubik', sans-serif;

    --fs-1: 3.2rem;
    --fs-2: 2.2rem;
    --fs-3: 1.8rem;
    --fs-4: 1.4rem;
    --fs-5: 1.2rem;

    --fw-500: 500;
    --fw-600: 600;
    --fw-700: 700;

    /* spacing */
    --section-padding: 60px;

    /* shadow */
    --shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.2);
    --shadow-2: 0 1px 2px hsla(0, 0%, 0%, 0.2);

    /* transition */
    --transition-1: 0.25s ease;
    --transition-2: 0.5s ease;

    /* clip-path */
    --clip-path-1: polygon(0 40%, 100% 0%, 100% 100%, 0 100%);
    --clip-path-2: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
}

/* ------------------ css reset --------------------------------------------- */

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

a,
img,
svg,
span,
input,
select,
button,
textarea {
    display: block;
}

img {
    height: auto;
}

input,
select,
button,
textarea {
    background: none;
    border: none;
    /* font: inherit; */
}

input,
select,
textarea {
    width: 100%;
}

button {
    cursor: pointer;
}

html {
    font-family: var(--ff-roboto);
    font-size: 10px;
    scroll-behavior: smooth;
}

body {
    background-color: var(--white);
    color: var(--sonic-silver);
    font-size: 1.6rem;
    line-height: 1.6;
    overflow-x: hidden;
}

body.active {
    overflow: hidden;
}

:focus-visible {
    outline-offset: 4px;
}

::selection {
    background-color: var(--deep-saffron);
    color: var(--white);
}


/* ------------------------- reused style ------------------------------------*/

.container {
    padding-inline: 15px;
}

.h1,
.h2,
.h3,
.h4 {
    font-family: var(--ff-rubik);
    color: var(--rich-black-fogra-29);
    line-height: 1.2;
    letter-spacing: -1px;
}

.h1,
.h2 {
    font-size: var(--fs-1);
}

.h2,
.h3,
.h4 {
    font-weight: var(--fw-600);
}

.h3 {
    font-size: var(--fs-2);
}

.h4 {
    font-size: var(--fs-3);
}

.btn {
    background-color: var(--bg-color, var(--deep-saffron));
    color: var(--white);
    font-family: var(--ff-rubik);
    font-size: var(--fs-4);
    font-weight: var(--fw-500);
    height: var(--heigh, 45px);
    padding-inline: var(--padding-inline, 35px);
    transition: var(--transition-1);
}

.btn-hover {
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn-hover::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 20px;
    width: 1px;
    height: 1px;
    transform: scale(var(--scale, 1));
    border-radius: 50%;
    background-color: var(--rich-black-fogra-29);
    z-index: -1;
    transition: var(--transition-2);
}

.btn-hover:is(:hover, :focus)::after {
    --scale: 500;
}

.section {
    padding-block: var(--section-padding);
}

.section.white {
    background-color: var(--isabelline);
}

.section-divider {
    position: relative;
}

.section-divider::before,
.section-divider::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background-repeat: repeat no-repeat;
    background-position: bottom;
}

.section-divider.white::after {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.section-divider.grey::after {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.w-100 {
    width: 100%;
}

.has-scrollbar {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-block-end: 40px;

    /* scroll slider property of the container element */
    scroll-snap-type: inline mandatory;
}

.abs-img {
    position: absolute;
    transform: scale(1);
}

.scale-up-anim {
    animation: scaleUp 1s linear infinite alternate;
}

@keyframes scaleUp {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.05);
    }
}

.section-title > .span {
    display: inline-block;
    color: var(--deep-saffron);
}

.section-subtitle {
    color: var(--cinnabar);
    font-family: var(--ff-rubik);
    text-align: center;
    font-weight: var(--fw-500);
}

.badge {
    position: absolute;
    background-color: var(--bg-color, var(--cinnabar));
    color: var(--white);
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    padding: var(--paffing-block, 2px) 15px;
}

/* ------------------------------ header -------------------------------------*/

/* set the initial style of the header */
.header {
    --color: var(--white);
    --btn-color: var(--champagne-pink);

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-block: 20px;
    border-block-end: 1px solid var(--champagne-pink_20);
    z-index: 4;
}

/* create the style of the header when active */
/* use position relative to position based on the viewport*/
/* change the defined variables for colors */
.header.active {
    --color: var(--rich-black-fogra-29);
    --btn-color: var(--rich-black-fogra-29);

    position: fixed;
    top: -86px;
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    animation: slideIn 0.5s ease-out forwards;
}

/* set the animation of the header when active*/
@keyframes slideIn {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(100%);
    }
}

/* set the header container with displat flex in order to 
position the elements */
.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

/* style the logo elements */
.logo {
    color: var(--color);
    font-family: var(--ff-rubik);
    font-size: 2.8rem;
    font-weight: var(--fw-700);
    letter-spacing: -2px;
}

.logo .span {
    display: inline-block;
    color: var(--deep-saffron);
}

/* style the button group */
.header-btn-group {
    display: flex;
    align-items: center;
}

/* style the button that shows the navbar */
.nav-toggle-btn {
    display: grid;
    gap: 4px;
}

.line {
    width: 10px;
    height: 3px;
    background-color: var(--btn-color);
    border-radius: 5px;
    transition: var(--transition-1);
}

.line.middle {
    width: 20px;
}

.line.bottom {
    margin-left: auto;
}

/* set the transform to transition when active */
.nav-toggle-btn.active .line.top {
    transform: translate(1px, 3px) rotate(45deg);
}

.nav-toggle-btn.active .line.middle {
    transform: rotate(-45deg);
}

.nav-toggle-btn.active .line.bottom {
    transform: translate(-1px, -3px) rotate(45deg);
}

/* style the navbar of the header*/
.navbar {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 30px);
    background-color: var(--white);
    padding-inline: 20px;
    box-shadow: var(--shadow-1);
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: var(--transition-1);
}

.navbar.active {
    height: 236px;
    visibility: visible;
}

/* style the list of elements of the navbar */
.navbar-list {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.nav-item {
    flex-grow: 1;
}

.nav-item:not(:last-child) {
    border-block-end: 1px solid hsla(0, 0%, 0%, 0.04);
}

/* style the links of the navbar list of options */
.navbar-link {
    color: var(--rich-black-fogra-29);
    font-size: var(--fs-4);
    font-family: var(--ff-rubik);
    font-weight: var(--fw-500);
    transition: var(--transition-1);
    padding: 18.5px 15px;
}

.navbar-link:is(:hover, :focus) {
    color: var(--dark-orange);
}

/* ------------------- main ---------------------------------------*/

/* hero - home */

.hero {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-block: 145px 60px;
    text-align: center;
}

.hero-subtitle {
    color: var(--dark-orange);
    font-family: var(--ff-shadows-into-light);
    font-size: var(--fs-3);
    letter-spacing: 1px;
    margin-block-end: 25px;
}

.hero-title {
    color: var(--champagne-pink);
    max-width: 12ch;
    margin-inline: auto;
}

.hero-text {
    color: var(--desert-sand);
    margin-block: 15px 30px;
    max-width: 44ch;
    margin-inline: auto;
}

.hero-banner {
    display: none;
}

.hero .btn {
    margin-inline: auto;
}

.hero .btn:is(:hover, :focus) {
    background-color: var(--white);
    color: var(--black);
}

/* promo section*/

.promo-card {
    position: relative;
    background-color: var(--white);
    text-align: center;
    padding: 40px 30px;
    box-shadow: var(--shadow-2);
    z-index: 1;
}

.promo-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--deep-saffron);
    clip-path: var(--clip-path-1);
    transform: scaleY(0.3);
    transform-origin: bottom;
    z-index: -1;
    transition: var(--transition-1);
}

.promo-card:hover::after {
    clip-path: var(--clip-path-2);
    transform: scaleY(1);
}

.promo-card .card-icon img {
    margin-inline: auto;
}

.promo-card:hover .card-icon img {
    background-color: var(--white);
    border-radius: 40%;
}

.promo-card .card-title {
    margin-block: 15px;
    transition: var(--transition-1);
}

.promo-card:hover :is(.card-title, .card-text) {
    color: var(--white);
}

.promo-card .card-text {
    margin-block-end: 15px;
    transition: var(--transition-1);
}

.promo-card .card-banner {
    max-width: max-content;
    margin-inline: auto;
    aspect-ratio: 1 / 1;
}

.promo-item {
    min-width: 100%;
    scroll-snap-align: start;
}

/* ------------------------------- about section --------------------------*/

article .about {
    padding-block-start: 145px;
}

.about {
    text-align: center;
}

.about-banner {
    position: relative;
    aspect-ratio: 1 / 0.9;
}

.about-img {
    max-width: max-content;
    margin-inline: auto;
}

.about-banner .abs-img {
    top: 0;
    left: 100px;
}

.about .section-title {
    max-width: 15ch;
    margin-block: 40px 10px;
    margin-inline: auto;
}

.about .about-list {
    margin-block: 20px 30px;
}

.about .about-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.about .about-item:not(:last-child) {
    margin-block-end: 10px;
}

.about-item i {
    color: var(--deep-saffron);
}

.about-item .span {
    color: var(--rich-black-fogra-29);
    font-family: var(--ff-rubik);
    font-weight: var(--fw-500);
}

.about .btn {
    margin-inline: auto;
}

/* -------------------- food menu section ---------------------------*/

.food-menu {
    text-align: center;
    padding-block-start: 145px;
}

.food-menu .section-title {
    margin-block: 10px 20px;
}

.food-menu .section-text {
    max-width: 44ch;
    margin-inline: auto;
    margin-block-end: 30px;
}

.food-menu-list {
    display: grid;
    row-gap: 30px;
}

.food-menu-card {
    background-color: var(--white);
    padding: 40px;
    box-shadow: var(--shadow-2);
}

.food-menu-card:focus-within {
    outline: 1px auto -webkit-focus-ring-color;
}

.food-menu-card .card-banner {
    position: relative;
    padding-block-start: 30px;
    max-width: max-content;
    aspect-ratio: 1 / 1;
    margin-inline: auto;
}

.food-menu-card .badge {
    top: 0;
    left: 0;
}

.food-menu-btn {
    position: absolute;
    top: calc(50% + 15px);
    left: 50%;
    transform: translateX(-50%);
    min-width: max-content;
    --bg-color: var(--cinnabar);
    width: 60%;
    --padding-inline: 20px;
    opacity: 0;
    transition: var(--transition-2);
}

.food-menu-btn:is(:focus, :hover) {
    --bg-color: var(--deep-saffron);
}

.food-menu-card:is(:hover, :focus-within) .food-menu-btn{
    transform: translate(-50%, -50%);
    opacity: 1;
}

.food-menu-card .card-title {
    margin-block: 20px 10px;    
}

.food-menu-card .price-wrapper {
    display: flex;
    justify-content: center;
    gap: 5px;
    font-family: var(--ff-rubik);
    font-weight: var(--fw-600);
}

.food-menu-card .price-text {
    color: var(--cinnabar);
    text-transform: uppercase;
    padding-inline-end: 5px;
}

.food-menu-card .price {
    color: var(--deep-saffron);
}

.food-menu-card .del {
    color: var(--gray-x-11-gray);
}

/* -------------------------- delivery section -------------------------------*/

.delivery-content {
    margin-block-end: 40px;
}

.delivery .section-title {
    max-width: 17ch;
    line-height: 1.6;
    letter-spacing: -2px;
    }

.delivery .section-text {
    margin-block: 15px 25px;
}

.delivery-banner {
    position: relative;
    aspect-ratio: 1/ 0.86;
}

.delivery-banner .delivery-img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-80px);
    transform: var(--transition-2)
}

/* ---------------------------- testimonials section -------------------------*/

.testi {
    text-align: center;
}

.testi .section-title {
    padding-block: 10px 20px;
}

.testi .section-text {
    max-width: 44ch;
    margin-inline: auto;
    margin-block-end: 30px;
}

.testi-card {
    background-color: var(--white);
    padding: 40px;
    text-align: left;
    box-shadow: var(--shadow-2);
}

.testi-card .profile-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
}

.profile-wrapper .avatar {
    min-width: max-content;
    border-radius: 50%;
    overflow: hidden;
}

.profile-wrapper .testi-name {
    margin-block-end: 2px;
}

.profile-wrapper .testi-title {
    font-family: var(--ff-rubik);
    font-size: var(--fs-4);
}

.testi-card .testi-text {
    margin-block: 20px 15px;
}

.testi-item {
    min-width: 100%;
    scroll-snap-align: start;
}

.rating-wrapper {
    display: flex;
    gap: 5px;
    color: var(--deep-saffron);
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA,+EAA+E;AAC/E;IACI,WAAW;IACX,wCAAwC;IACxC,4CAA4C;IAC5C,2CAA2C;IAC3C,iCAAiC;IACjC,mCAAmC;IACnC,+BAA+B;IAC/B,+BAA+B;IAC/B,kCAAkC;IAClC,iCAAiC;IACjC,gCAAgC;IAChC,+BAA+B;IAC/B,4BAA4B;IAC5B,8BAA8B;IAC9B,4BAA4B;IAC5B,iCAAiC;IACjC,2BAA2B;IAC3B,yBAAyB;IACzB,uBAAuB;IACvB,uBAAuB;;IAEvB,eAAe;IACf,sDAAsD;IACtD,iCAAiC;IACjC,+BAA+B;;IAE/B,cAAc;IACd,cAAc;IACd,cAAc;IACd,cAAc;IACd,cAAc;;IAEd,aAAa;IACb,aAAa;IACb,aAAa;;IAEb,YAAY;IACZ,uBAAuB;;IAEvB,WAAW;IACX,0CAA0C;IAC1C,0CAA0C;;IAE1C,eAAe;IACf,0BAA0B;IAC1B,yBAAyB;;IAEzB,cAAc;IACd,yDAAyD;IACzD,wDAAwD;AAC5D;;AAEA,+EAA+E;;AAE/E;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;;;;;;;;IAQI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;;IAII,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;;;IAGI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;AACvB;;;AAGA,+EAA+E;;AAE/E;IACI,oBAAoB;AACxB;;AAEA;;;;IAII,4BAA4B;IAC5B,iCAAiC;IACjC,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;;IAEI,sBAAsB;AAC1B;;AAEA;;;IAGI,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sDAAsD;IACtD,mBAAmB;IACnB,4BAA4B;IAC5B,sBAAsB;IACtB,0BAA0B;IAC1B,0BAA0B;IAC1B,2CAA2C;IAC3C,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,UAAU;IACV,WAAW;IACX,iCAAiC;IACjC,kBAAkB;IAClB,4CAA4C;IAC5C,WAAW;IACX,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,2BAA2B;AAC/B;;AAEA;IACI,yDAAyD;AAC7D;;AAEA;IACI,yDAAwD;AAC5D;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,uBAAuB;;IAEvB,oDAAoD;IACpD,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI;QACI,mBAAmB;IACvB;IACA;QACI,sBAAsB;IAC1B;AACJ;;AAEA;IACI,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,kDAAkD;IAClD,mBAAmB;IACnB,sBAAsB;IACtB,0BAA0B;IAC1B,uCAAuC;AAC3C;;AAEA,+EAA+E;;AAE/E,wCAAwC;AACxC;IACI,qBAAqB;IACrB,kCAAkC;;IAElC,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,mBAAmB;IACnB,oDAAoD;IACpD,UAAU;AACd;;AAEA,+CAA+C;AAC/C,2DAA2D;AAC3D,4CAA4C;AAC5C;IACI,mCAAmC;IACnC,uCAAuC;;IAEvC,eAAe;IACf,UAAU;IACV,8BAA8B;IAC9B,2BAA2B;IAC3B,yCAAyC;AAC7C;;AAEA,+CAA+C;AAC/C;IACI;QACI,wBAAwB;IAC5B;;IAEA;QACI,2BAA2B;IAC/B;AACJ;;AAEA;uBACuB;AACvB;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA,4BAA4B;AAC5B;IACI,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;IACjB,0BAA0B;IAC1B,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA,2BAA2B;AAC3B;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,2CAA2C;AAC3C;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kCAAkC;IAClC,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA,gDAAgD;AAChD;IACI,4CAA4C;AAChD;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,8CAA8C;AAClD;;AAEA,kCAAkC;AAClC;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,2BAA2B;IAC3B,wBAAwB;IACxB,8BAA8B;IAC9B,oBAAoB;IACpB,2BAA2B;IAC3B,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,6CAA6C;AAC7C;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iDAAiD;AACrD;;AAEA,kDAAkD;AAClD;IACI,iCAAiC;IACjC,sBAAsB;IACtB,4BAA4B;IAC5B,0BAA0B;IAC1B,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,oEAAoE;;AAEpE,gBAAgB;;AAEhB;IACI,yDAAqD;IACrD,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;IAC3B,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,yCAAyC;IACzC,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,iBAAiB;;AAEjB;IACI,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,qCAAqC;IACrC,6BAA6B;IAC7B,sBAAsB;IACtB,wBAAwB;IACxB,WAAW;IACX,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA,4EAA4E;;AAE5E;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,MAAM;IACN,WAAW;AACf;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iCAAiC;IACjC,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;AACvB;;AAEA,sEAAsE;;AAEtE;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,MAAM;IACN,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,SAAS;IACT,2BAA2B;IAC3B,sBAAsB;IACtB,2BAA2B;IAC3B,UAAU;IACV,sBAAsB;IACtB,UAAU;IACV,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;IAChC,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA,+EAA+E;;AAE/E;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB;;AAEJ;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,4BAA4B;IAC5B;AACJ;;AAEA,+EAA+E;;AAE/E;IACI,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,0BAA0B;AAC9B","sourcesContent":["/* -------------------- variables --------------------------------------------*/\n:root {\n    /* Colors */\n    --rich-black-fogra-29: hsl(210, 26%, 7%);\n    --champagne-pink_20: hsla(23, 61%, 86%, 0.2);\n    --independence_30: hsla(245, 17%, 29%, 0.3);\n    --gray-x-11-gray: hsl(0, 0%, 73%);\n    --champagne-pink: hsl(23, 61%, 86%);\n    --spanish-gray: hsl(0, 0%, 60%);\n    --sonic-silver: hsl(0, 0%, 47%);\n    --deep-saffron: hsl(32, 100%, 59%);\n    --dark-orange: hsl(28, 100%, 58%);\n    --desert-sand: hsl(23, 49%, 82%);\n    --isabelline: hsl(38, 44%, 96%);\n    --gainsboro: hsl(0, 0%, 87%);\n    --tangerine: hsl(31, 84%, 50%);\n    --cinnabar: hsl(3, 90%, 55%);\n    --black_95: hsla(0, 0%, 0%, 0.95);\n    --cultured: hsl(0, 0%, 93%);\n    --white: hsl(0, 0%, 100%);\n    --black: hsl(0, 0%, 0%);\n    --onyx: hsl(0, 0%, 27%);\n\n    /* Typography */\n    --ff-shadows-into-light: 'Shadows Into Light', cursive;\n    --ff-roboto: 'Roboto', sans-serif;\n    --ff-rubik: 'Rubik', sans-serif;\n\n    --fs-1: 3.2rem;\n    --fs-2: 2.2rem;\n    --fs-3: 1.8rem;\n    --fs-4: 1.4rem;\n    --fs-5: 1.2rem;\n\n    --fw-500: 500;\n    --fw-600: 600;\n    --fw-700: 700;\n\n    /* spacing */\n    --section-padding: 60px;\n\n    /* shadow */\n    --shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.2);\n    --shadow-2: 0 1px 2px hsla(0, 0%, 0%, 0.2);\n\n    /* transition */\n    --transition-1: 0.25s ease;\n    --transition-2: 0.5s ease;\n\n    /* clip-path */\n    --clip-path-1: polygon(0 40%, 100% 0%, 100% 100%, 0 100%);\n    --clip-path-2: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);\n}\n\n/* ------------------ css reset --------------------------------------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na,\nimg,\nsvg,\nspan,\ninput,\nselect,\nbutton,\ntextarea {\n    display: block;\n}\n\nimg {\n    height: auto;\n}\n\ninput,\nselect,\nbutton,\ntextarea {\n    background: none;\n    border: none;\n    /* font: inherit; */\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nhtml {\n    font-family: var(--ff-roboto);\n    font-size: 10px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--white);\n    color: var(--sonic-silver);\n    font-size: 1.6rem;\n    line-height: 1.6;\n    overflow-x: hidden;\n}\n\nbody.active {\n    overflow: hidden;\n}\n\n:focus-visible {\n    outline-offset: 4px;\n}\n\n::selection {\n    background-color: var(--deep-saffron);\n    color: var(--white);\n}\n\n\n/* ------------------------- reused style ------------------------------------*/\n\n.container {\n    padding-inline: 15px;\n}\n\n.h1,\n.h2,\n.h3,\n.h4 {\n    font-family: var(--ff-rubik);\n    color: var(--rich-black-fogra-29);\n    line-height: 1.2;\n    letter-spacing: -1px;\n}\n\n.h1,\n.h2 {\n    font-size: var(--fs-1);\n}\n\n.h2,\n.h3,\n.h4 {\n    font-weight: var(--fw-600);\n}\n\n.h3 {\n    font-size: var(--fs-2);\n}\n\n.h4 {\n    font-size: var(--fs-3);\n}\n\n.btn {\n    background-color: var(--bg-color, var(--deep-saffron));\n    color: var(--white);\n    font-family: var(--ff-rubik);\n    font-size: var(--fs-4);\n    font-weight: var(--fw-500);\n    height: var(--heigh, 45px);\n    padding-inline: var(--padding-inline, 35px);\n    transition: var(--transition-1);\n}\n\n.btn-hover {\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.btn-hover::after {\n    content: \"\";\n    position: absolute;\n    bottom: -1px;\n    left: 20px;\n    width: 1px;\n    height: 1px;\n    transform: scale(var(--scale, 1));\n    border-radius: 50%;\n    background-color: var(--rich-black-fogra-29);\n    z-index: -1;\n    transition: var(--transition-2);\n}\n\n.btn-hover:is(:hover, :focus)::after {\n    --scale: 500;\n}\n\n.section {\n    padding-block: var(--section-padding);\n}\n\n.section.white {\n    background-color: var(--isabelline);\n}\n\n.section-divider {\n    position: relative;\n}\n\n.section-divider::before,\n.section-divider::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 15px;\n    background-repeat: repeat no-repeat;\n    background-position: bottom;\n}\n\n.section-divider.white::after {\n    background-image: url(/src/assets/images/shape-white.png);\n}\n\n.section-divider.grey::after {\n    background-image: url(/src/assets/images/shape-grey.png);\n}\n\n.w-100 {\n    width: 100%;\n}\n\n.has-scrollbar {\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n    padding-block-end: 40px;\n\n    /* scroll slider property of the container element */\n    scroll-snap-type: inline mandatory;\n}\n\n.abs-img {\n    position: absolute;\n    transform: scale(1);\n}\n\n.scale-up-anim {\n    animation: scaleUp 1s linear infinite alternate;\n}\n\n@keyframes scaleUp {\n    0% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(1.05);\n    }\n}\n\n.section-title > .span {\n    display: inline-block;\n    color: var(--deep-saffron);\n}\n\n.section-subtitle {\n    color: var(--cinnabar);\n    font-family: var(--ff-rubik);\n    text-align: center;\n    font-weight: var(--fw-500);\n}\n\n.badge {\n    position: absolute;\n    background-color: var(--bg-color, var(--cinnabar));\n    color: var(--white);\n    font-size: var(--fs-5);\n    font-weight: var(--fw-600);\n    padding: var(--paffing-block, 2px) 15px;\n}\n\n/* ------------------------------ header -------------------------------------*/\n\n/* set the initial style of the header */\n.header {\n    --color: var(--white);\n    --btn-color: var(--champagne-pink);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-block: 20px;\n    border-block-end: 1px solid var(--champagne-pink_20);\n    z-index: 4;\n}\n\n/* create the style of the header when active */\n/* use position relative to position based on the viewport*/\n/* change the defined variables for colors */\n.header.active {\n    --color: var(--rich-black-fogra-29);\n    --btn-color: var(--rich-black-fogra-29);\n\n    position: fixed;\n    top: -86px;\n    background-color: var(--white);\n    box-shadow: var(--shadow-1);\n    animation: slideIn 0.5s ease-out forwards;\n}\n\n/* set the animation of the header when active*/\n@keyframes slideIn {\n    0% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(100%);\n    }\n}\n\n/* set the header container with displat flex in order to \nposition the elements */\n.header .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n/* style the logo elements */\n.logo {\n    color: var(--color);\n    font-family: var(--ff-rubik);\n    font-size: 2.8rem;\n    font-weight: var(--fw-700);\n    letter-spacing: -2px;\n}\n\n.logo .span {\n    display: inline-block;\n    color: var(--deep-saffron);\n}\n\n/* style the button group */\n.header-btn-group {\n    display: flex;\n    align-items: center;\n}\n\n/* style the button that shows the navbar */\n.nav-toggle-btn {\n    display: grid;\n    gap: 4px;\n}\n\n.line {\n    width: 10px;\n    height: 3px;\n    background-color: var(--btn-color);\n    border-radius: 5px;\n    transition: var(--transition-1);\n}\n\n.line.middle {\n    width: 20px;\n}\n\n.line.bottom {\n    margin-left: auto;\n}\n\n/* set the transform to transition when active */\n.nav-toggle-btn.active .line.top {\n    transform: translate(1px, 3px) rotate(45deg);\n}\n\n.nav-toggle-btn.active .line.middle {\n    transform: rotate(-45deg);\n}\n\n.nav-toggle-btn.active .line.bottom {\n    transform: translate(-1px, -3px) rotate(45deg);\n}\n\n/* style the navbar of the header*/\n.navbar {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: calc(100% - 30px);\n    background-color: var(--white);\n    padding-inline: 20px;\n    box-shadow: var(--shadow-1);\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    transition: var(--transition-1);\n}\n\n.navbar.active {\n    height: 236px;\n    visibility: visible;\n}\n\n/* style the list of elements of the navbar */\n.navbar-list {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-item {\n    flex-grow: 1;\n}\n\n.nav-item:not(:last-child) {\n    border-block-end: 1px solid hsla(0, 0%, 0%, 0.04);\n}\n\n/* style the links of the navbar list of options */\n.navbar-link {\n    color: var(--rich-black-fogra-29);\n    font-size: var(--fs-4);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n    transition: var(--transition-1);\n    padding: 18.5px 15px;\n}\n\n.navbar-link:is(:hover, :focus) {\n    color: var(--dark-orange);\n}\n\n/* ------------------- main ---------------------------------------*/\n\n/* hero - home */\n\n.hero {\n    background-image: url(/src/assets/images/hero-bg.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    padding-block: 145px 60px;\n    text-align: center;\n}\n\n.hero-subtitle {\n    color: var(--dark-orange);\n    font-family: var(--ff-shadows-into-light);\n    font-size: var(--fs-3);\n    letter-spacing: 1px;\n    margin-block-end: 25px;\n}\n\n.hero-title {\n    color: var(--champagne-pink);\n    max-width: 12ch;\n    margin-inline: auto;\n}\n\n.hero-text {\n    color: var(--desert-sand);\n    margin-block: 15px 30px;\n    max-width: 44ch;\n    margin-inline: auto;\n}\n\n.hero-banner {\n    display: none;\n}\n\n.hero .btn {\n    margin-inline: auto;\n}\n\n.hero .btn:is(:hover, :focus) {\n    background-color: var(--white);\n    color: var(--black);\n}\n\n/* promo section*/\n\n.promo-card {\n    position: relative;\n    background-color: var(--white);\n    text-align: center;\n    padding: 40px 30px;\n    box-shadow: var(--shadow-2);\n    z-index: 1;\n}\n\n.promo-card::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-color: var(--deep-saffron);\n    clip-path: var(--clip-path-1);\n    transform: scaleY(0.3);\n    transform-origin: bottom;\n    z-index: -1;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover::after {\n    clip-path: var(--clip-path-2);\n    transform: scaleY(1);\n}\n\n.promo-card .card-icon img {\n    margin-inline: auto;\n}\n\n.promo-card:hover .card-icon img {\n    background-color: var(--white);\n    border-radius: 40%;\n}\n\n.promo-card .card-title {\n    margin-block: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover :is(.card-title, .card-text) {\n    color: var(--white);\n}\n\n.promo-card .card-text {\n    margin-block-end: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card .card-banner {\n    max-width: max-content;\n    margin-inline: auto;\n    aspect-ratio: 1 / 1;\n}\n\n.promo-item {\n    min-width: 100%;\n    scroll-snap-align: start;\n}\n\n/* ------------------------------- about section --------------------------*/\n\narticle .about {\n    padding-block-start: 145px;\n}\n\n.about {\n    text-align: center;\n}\n\n.about-banner {\n    position: relative;\n    aspect-ratio: 1 / 0.9;\n}\n\n.about-img {\n    max-width: max-content;\n    margin-inline: auto;\n}\n\n.about-banner .abs-img {\n    top: 0;\n    left: 100px;\n}\n\n.about .section-title {\n    max-width: 15ch;\n    margin-block: 40px 10px;\n    margin-inline: auto;\n}\n\n.about .about-list {\n    margin-block: 20px 30px;\n}\n\n.about .about-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.about .about-item:not(:last-child) {\n    margin-block-end: 10px;\n}\n\n.about-item i {\n    color: var(--deep-saffron);\n}\n\n.about-item .span {\n    color: var(--rich-black-fogra-29);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n}\n\n.about .btn {\n    margin-inline: auto;\n}\n\n/* -------------------- food menu section ---------------------------*/\n\n.food-menu {\n    text-align: center;\n    padding-block-start: 145px;\n}\n\n.food-menu .section-title {\n    margin-block: 10px 20px;\n}\n\n.food-menu .section-text {\n    max-width: 44ch;\n    margin-inline: auto;\n    margin-block-end: 30px;\n}\n\n.food-menu-list {\n    display: grid;\n    row-gap: 30px;\n}\n\n.food-menu-card {\n    background-color: var(--white);\n    padding: 40px;\n    box-shadow: var(--shadow-2);\n}\n\n.food-menu-card:focus-within {\n    outline: 1px auto -webkit-focus-ring-color;\n}\n\n.food-menu-card .card-banner {\n    position: relative;\n    padding-block-start: 30px;\n    max-width: max-content;\n    aspect-ratio: 1 / 1;\n    margin-inline: auto;\n}\n\n.food-menu-card .badge {\n    top: 0;\n    left: 0;\n}\n\n.food-menu-btn {\n    position: absolute;\n    top: calc(50% + 15px);\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    --bg-color: var(--cinnabar);\n    width: 60%;\n    --padding-inline: 20px;\n    opacity: 0;\n    transition: var(--transition-2);\n}\n\n.food-menu-btn:is(:focus, :hover) {\n    --bg-color: var(--deep-saffron);\n}\n\n.food-menu-card:is(:hover, :focus-within) .food-menu-btn{\n    transform: translate(-50%, -50%);\n    opacity: 1;\n}\n\n.food-menu-card .card-title {\n    margin-block: 20px 10px;    \n}\n\n.food-menu-card .price-wrapper {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-600);\n}\n\n.food-menu-card .price-text {\n    color: var(--cinnabar);\n    text-transform: uppercase;\n    padding-inline-end: 5px;\n}\n\n.food-menu-card .price {\n    color: var(--deep-saffron);\n}\n\n.food-menu-card .del {\n    color: var(--gray-x-11-gray);\n}\n\n/* -------------------------- delivery section -------------------------------*/\n\n.delivery-content {\n    margin-block-end: 40px;\n}\n\n.delivery .section-title {\n    max-width: 17ch;\n    line-height: 1.6;\n    letter-spacing: -2px;\n    }\n\n.delivery .section-text {\n    margin-block: 15px 25px;\n}\n\n.delivery-banner {\n    position: relative;\n    aspect-ratio: 1/ 0.86;\n}\n\n.delivery-banner .delivery-img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translateX(-80px);\n    transform: var(--transition-2)\n}\n\n/* ---------------------------- testimonials section -------------------------*/\n\n.testi {\n    text-align: center;\n}\n\n.testi .section-title {\n    padding-block: 10px 20px;\n}\n\n.testi .section-text {\n    max-width: 44ch;\n    margin-inline: auto;\n    margin-block-end: 30px;\n}\n\n.testi-card {\n    background-color: var(--white);\n    padding: 40px;\n    text-align: left;\n    box-shadow: var(--shadow-2);\n}\n\n.testi-card .profile-wrapper {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.profile-wrapper .avatar {\n    min-width: max-content;\n    border-radius: 50%;\n    overflow: hidden;\n}\n\n.profile-wrapper .testi-name {\n    margin-block-end: 2px;\n}\n\n.profile-wrapper .testi-title {\n    font-family: var(--ff-rubik);\n    font-size: var(--fs-4);\n}\n\n.testi-card .testi-text {\n    margin-block: 20px 15px;\n}\n\n.testi-item {\n    min-width: 100%;\n    scroll-snap-align: start;\n}\n\n.rating-wrapper {\n    display: flex;\n    gap: 5px;\n    color: var(--deep-saffron);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutArticle);


/***/ }),

/***/ "./src/base_structure.js":
/*!*******************************!*\
  !*** ./src/base_structure.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   navbarLinks: () => (/* binding */ navbarLinks)
/* harmony export */ });
/* ----------------------------- header ------------------------------------ */

const content = document.querySelector("#content");

const header = document.createElement("header");
header.classList.add("header");
header.setAttribute("data-header", "");

const headerContainer = document.createElement("div");
headerContainer.classList.add("container");

// create the logo elements
const headerH1 = document.createElement("h1");
const logo = document.createElement("a");
logo.textContent = "Restaurant";
logo.classList.add("logo");

const spanLogo = document.createElement("span");
spanLogo.textContent = ".";
spanLogo.classList.add("span");

headerH1.appendChild(logo);
logo.appendChild(spanLogo);

// create the navbar
const headerNavbar = document.createElement("nav");
headerNavbar.setAttribute("data-navbar", "");
headerNavbar.classList.add("navbar");

const navbarList = document.createElement("ul");
const navbarOptions = ["Home", "About", "Menu", "Contact"];
const navbarLinks = [];
for (let option of navbarOptions) {
  const li = document.createElement("li");
  li.classList.add("nav-item");

  const a = document.createElement("a");
  a.setAttribute("href", `#${option.toLowerCase()}`);
  a.setAttribute("data-nav-link", "");
  a.classList.add("navbar-link");
  a.textContent = option;
  navbarLinks.push(a);

  li.appendChild(a);
  navbarList.appendChild(li);
}

headerNavbar.appendChild(navbarList);

// create the buttons group
const headerButtonGroup = document.createElement("div");
headerButtonGroup.classList.add("header-btn-group");

const buttonNav = document.createElement("button");
buttonNav.classList.add("nav-toggle-btn");
buttonNav.setAttribute("data-menu-toggle-btn", "");

for (let i = 0; i < 3; i++) {
  const pos = i == 0 ? "top" : i == 1 ? "middle" : "bottom";
  const span = document.createElement("span");
  span.setAttribute("class", `line ${pos}`);
  buttonNav.appendChild(span);
}

headerButtonGroup.appendChild(buttonNav);

// append all sections to the header main element
headerContainer.appendChild(headerH1);
headerContainer.appendChild(headerNavbar);
headerContainer.appendChild(headerButtonGroup);
header.appendChild(headerContainer);

// add to the content

content.appendChild(header);

const main = document.createElement("main");
content.appendChild(main);

/* ----------------------------- dom listeners ------------------------------ */

// navbar toggle

buttonNav.addEventListener("click", function () {
  headerNavbar.classList.toggle("active");
  this.classList.toggle("active");
});

headerNavbar.addEventListener("click", function (e) {
  if (navbarLinks.includes(e.target)) {
    headerNavbar.classList.toggle("active");
    buttonNav.classList.toggle("active");
  }
});

// header sticky

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) header.classList.add("active");
  else header.classList.remove("active");
});



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
deliverySection.setAttribute("class", "section section-divider grey delivery");

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

const testimonialsSection = document.createElement("section");
testimonialsSection.setAttribute("class", "section section-divider white testi");

const container4 = document.createElement("div");
container4.classList.add("container");

// section subtitle
const testimonialsSectionSubtitle = document.createElement("p");
testimonialsSectionSubtitle.classList.add("section-subtitle");
testimonialsSectionSubtitle.textContent = "Testimonials";

// section title
const testimonialsSectionTitle = document.createElement("h2");
testimonialsSectionTitle.setAttribute("class", "h2 section-title");
testimonialsSectionTitle.innerHTML = "Our Customers <span class='span'>Reviews</span>";

// section text
const testimonialsSectionText = document.createElement("p");
testimonialsSectionText.classList.add("section-text");
testimonialsSectionText.textContent = "Food is any substance consumed to provide nutritional support for an organism.";

// testimonials list 
const testimonialsList = document.createElement("ul");
testimonialsList.setAttribute("class", "testi-list has-scrollbar");

const userTile = ["CEO KingFisher", "CEO Getforce", "CEO Angela"]
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
  avatarImage.src = `/src/assets/images/avatar-${i+1}.jpg`;
  avatarImage.width = "80";
  avatarImage.height = "80";
  avatarImage.loading = "lazy";
  avatarImage.alt = `User${i+1}`;
  avatar.appendChild(avatarImage);
  
  const userInfo = document.createElement("div");
  const userName = document.createElement("h3");
  userName.setAttribute("class","h4 testi-name");
  userName.textContent = `User ${i+1}`;
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
  blackquote.textContent = '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."';

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  cardBannerImage.src = `/src/assets/images/food-menu-${i + 1}.png`;
  cardBannerImage.width = "300";
  cardBannerImage.height = "300";
  cardBannerImage.loading = "lazy";
  cardBanner.classList.add("w-100");
  cardBanner.alt = foodNames[i];
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuArticle);


/***/ }),

/***/ "./src/assets/images/hero-bg.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/hero-bg.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e198b8123a6b6c8cd008.jpg";

/***/ }),

/***/ "./src/assets/images/shape-grey.png":
/*!******************************************!*\
  !*** ./src/assets/images/shape-grey.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ff7cade41cdb65b2632.png";

/***/ }),

/***/ "./src/assets/images/shape-white.png":
/*!*******************************************!*\
  !*** ./src/assets/images/shape-white.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "999f5232326ca0942368.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _base_structure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base_structure.js */ "./src/base_structure.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






function updateInfo(link, article) {
  link.addEventListener("click", () => {
    while (_base_structure_js__WEBPACK_IMPORTED_MODULE_1__.main.firstChild) {
      _base_structure_js__WEBPACK_IMPORTED_MODULE_1__.main.removeChild(_base_structure_js__WEBPACK_IMPORTED_MODULE_1__.main.firstChild);
    }
    _base_structure_js__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(article);
  });
}

for (let link of _base_structure_js__WEBPACK_IMPORTED_MODULE_1__.navbarLinks) {
  switch (link.textContent) {
    case "About":
      updateInfo(link, _about_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      break;

    case "Home":
      updateInfo(link, _home_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      break;

    case "Menu":
      updateInfo(link, _menu_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      break;

    default:
      break;
  }
}

_base_structure_js__WEBPACK_IMPORTED_MODULE_1__.main.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLGtLQUFxRDtBQUNqRyw0Q0FBNEMsZ0tBQW9EO0FBQ2hHLDRDQUE0QywwSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUdBQW1HLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsUUFBUSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9B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Q0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EscUNBQXFDLElBQUk7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLElBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pUM0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxNQUFNO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hIM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUN1QjtBQUNwQjtBQUNFO0FBQ0Y7O0FBRXBDO0FBQ0E7QUFDQSxXQUFXLG9EQUFJO0FBQ2YsTUFBTSxvREFBSSxhQUFhLG9EQUFJO0FBQzNCO0FBQ0EsSUFBSSxvREFBSTtBQUNSLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsMkRBQVc7QUFDNUI7QUFDQTtBQUNBLHVCQUF1QixpREFBWTtBQUNuQzs7QUFFQTtBQUNBLHVCQUF1QixnREFBVztBQUNsQzs7QUFFQTtBQUNBLHVCQUF1QixnREFBVztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBSSxhQUFhLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3M/ZmU1ZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Jhc2Vfc3RydWN0dXJlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2hhcGUtd2hpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NoYXBlLWdyZXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2hlcm8tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG46cm9vdCB7XG4gICAgLyogQ29sb3JzICovXG4gICAgLS1yaWNoLWJsYWNrLWZvZ3JhLTI5OiBoc2woMjEwLCAyNiUsIDclKTtcbiAgICAtLWNoYW1wYWduZS1waW5rXzIwOiBoc2xhKDIzLCA2MSUsIDg2JSwgMC4yKTtcbiAgICAtLWluZGVwZW5kZW5jZV8zMDogaHNsYSgyNDUsIDE3JSwgMjklLCAwLjMpO1xuICAgIC0tZ3JheS14LTExLWdyYXk6IGhzbCgwLCAwJSwgNzMlKTtcbiAgICAtLWNoYW1wYWduZS1waW5rOiBoc2woMjMsIDYxJSwgODYlKTtcbiAgICAtLXNwYW5pc2gtZ3JheTogaHNsKDAsIDAlLCA2MCUpO1xuICAgIC0tc29uaWMtc2lsdmVyOiBoc2woMCwgMCUsIDQ3JSk7XG4gICAgLS1kZWVwLXNhZmZyb246IGhzbCgzMiwgMTAwJSwgNTklKTtcbiAgICAtLWRhcmstb3JhbmdlOiBoc2woMjgsIDEwMCUsIDU4JSk7XG4gICAgLS1kZXNlcnQtc2FuZDogaHNsKDIzLCA0OSUsIDgyJSk7XG4gICAgLS1pc2FiZWxsaW5lOiBoc2woMzgsIDQ0JSwgOTYlKTtcbiAgICAtLWdhaW5zYm9ybzogaHNsKDAsIDAlLCA4NyUpO1xuICAgIC0tdGFuZ2VyaW5lOiBoc2woMzEsIDg0JSwgNTAlKTtcbiAgICAtLWNpbm5hYmFyOiBoc2woMywgOTAlLCA1NSUpO1xuICAgIC0tYmxhY2tfOTU6IGhzbGEoMCwgMCUsIDAlLCAwLjk1KTtcbiAgICAtLWN1bHR1cmVkOiBoc2woMCwgMCUsIDkzJSk7XG4gICAgLS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcbiAgICAtLW9ueXg6IGhzbCgwLCAwJSwgMjclKTtcblxuICAgIC8qIFR5cG9ncmFwaHkgKi9cbiAgICAtLWZmLXNoYWRvd3MtaW50by1saWdodDogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XG4gICAgLS1mZi1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIC0tZmYtcnViaWs6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG5cbiAgICAtLWZzLTE6IDMuMnJlbTtcbiAgICAtLWZzLTI6IDIuMnJlbTtcbiAgICAtLWZzLTM6IDEuOHJlbTtcbiAgICAtLWZzLTQ6IDEuNHJlbTtcbiAgICAtLWZzLTU6IDEuMnJlbTtcblxuICAgIC0tZnctNTAwOiA1MDA7XG4gICAgLS1mdy02MDA6IDYwMDtcbiAgICAtLWZ3LTcwMDogNzAwO1xuXG4gICAgLyogc3BhY2luZyAqL1xuICAgIC0tc2VjdGlvbi1wYWRkaW5nOiA2MHB4O1xuXG4gICAgLyogc2hhZG93ICovXG4gICAgLS1zaGFkb3ctMTogMCAxcHggNHB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xuICAgIC0tc2hhZG93LTI6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcblxuICAgIC8qIHRyYW5zaXRpb24gKi9cbiAgICAtLXRyYW5zaXRpb24tMTogMC4yNXMgZWFzZTtcbiAgICAtLXRyYW5zaXRpb24tMjogMC41cyBlYXNlO1xuXG4gICAgLyogY2xpcC1wYXRoICovXG4gICAgLS1jbGlwLXBhdGgtMTogcG9seWdvbigwIDQwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICAgIC0tY2xpcC1wYXRoLTI6IHBvbHlnb24oMCAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY3NzIHJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmEsXG5pbWcsXG5zdmcsXG5zcGFuLFxuaW5wdXQsXG5zZWxlY3QsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBmb250OiBpbmhlcml0OyAqL1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1yb2JvdG8pO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5ib2R5LmFjdGl2ZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXVzZWQgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XG59XG5cbi5oMSxcbi5oMixcbi5oMyxcbi5oNCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cblxuLmgxLFxuLmgyIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTEpO1xufVxuXG4uaDIsXG4uaDMsXG4uaDQge1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy02MDApO1xufVxuXG4uaDMge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtMik7XG59XG5cbi5oNCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcbn1cblxuLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IsIHZhcigtLWRlZXAtc2FmZnJvbikpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy01MDApO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2gsIDQ1cHgpO1xuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1wYWRkaW5nLWlubGluZSwgMzVweCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbn1cblxuLmJ0bi1ob3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJ0bi1ob3Zlcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTFweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1zY2FsZSwgMSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTIpO1xufVxuXG4uYnRuLWhvdmVyOmlzKDpob3ZlciwgOmZvY3VzKTo6YWZ0ZXIge1xuICAgIC0tc2NhbGU6IDUwMDtcbn1cblxuLnNlY3Rpb24ge1xuICAgIHBhZGRpbmctYmxvY2s6IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XG59XG5cbi5zZWN0aW9uLndoaXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pc2FiZWxsaW5lKTtcbn1cblxuLnNlY3Rpb24tZGl2aWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUsXG4uc2VjdGlvbi1kaXZpZGVyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLnNlY3Rpb24tZGl2aWRlci53aGl0ZTo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLnNlY3Rpb24tZGl2aWRlci5ncmV5OjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4udy0xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGFzLXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nLWJsb2NrLWVuZDogNDBweDtcblxuICAgIC8qIHNjcm9sbCBzbGlkZXIgcHJvcGVydHkgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50ICovXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogaW5saW5lIG1hbmRhdG9yeTtcbn1cblxuLmFicy1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uc2NhbGUtdXAtYW5pbSB7XG4gICAgYW5pbWF0aW9uOiBzY2FsZVVwIDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVVcCB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG59XG5cbi5zZWN0aW9uLXRpdGxlID4gLnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbn1cblxuLnNlY3Rpb24tc3VidGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jaW5uYWJhcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG59XG5cbi5iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1jaW5uYWJhcikpO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy01KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWZmaW5nLWJsb2NrLCAycHgpIDE1cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIHNldCB0aGUgaW5pdGlhbCBzdHlsZSBvZiB0aGUgaGVhZGVyICovXG4uaGVhZGVyIHtcbiAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCB2YXIoLS1jaGFtcGFnbmUtcGlua18yMCk7XG4gICAgei1pbmRleDogNDtcbn1cblxuLyogY3JlYXRlIHRoZSBzdHlsZSBvZiB0aGUgaGVhZGVyIHdoZW4gYWN0aXZlICovXG4vKiB1c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9zaXRpb24gYmFzZWQgb24gdGhlIHZpZXdwb3J0Ki9cbi8qIGNoYW5nZSB0aGUgZGVmaW5lZCB2YXJpYWJsZXMgZm9yIGNvbG9ycyAqL1xuLmhlYWRlci5hY3RpdmUge1xuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIC0tYnRuLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC04NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi8qIHNldCB0aGUgYW5pbWF0aW9uIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUqL1xuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbn1cblxuLyogc2V0IHRoZSBoZWFkZXIgY29udGFpbmVyIHdpdGggZGlzcGxhdCBmbGV4IGluIG9yZGVyIHRvIFxucG9zaXRpb24gdGhlIGVsZW1lbnRzICovXG4uaGVhZGVyIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4vKiBzdHlsZSB0aGUgbG9nbyBlbGVtZW50cyAqL1xuLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNzAwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn1cblxuLmxvZ28gLnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbn1cblxuLyogc3R5bGUgdGhlIGJ1dHRvbiBncm91cCAqL1xuLmhlYWRlci1idG4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogc3R5bGUgdGhlIGJ1dHRvbiB0aGF0IHNob3dzIHRoZSBuYXZiYXIgKi9cbi5uYXYtdG9nZ2xlLWJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDRweDtcbn1cblxuLmxpbmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5saW5lLm1pZGRsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5saW5lLmJvdHRvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi8qIHNldCB0aGUgdHJhbnNmb3JtIHRvIHRyYW5zaXRpb24gd2hlbiBhY3RpdmUgKi9cbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUudG9wIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDNweCkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS5taWRkbGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUuYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtM3B4KSByb3RhdGUoNDVkZWcpO1xufVxuXG4vKiBzdHlsZSB0aGUgbmF2YmFyIG9mIHRoZSBoZWFkZXIqL1xuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ubmF2YmFyLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAyMzZweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBzdHlsZSB0aGUgbGlzdCBvZiBlbGVtZW50cyBvZiB0aGUgbmF2YmFyICovXG4ubmF2YmFyLWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcbn1cblxuLyogc3R5bGUgdGhlIGxpbmtzIG9mIHRoZSBuYXZiYXIgbGlzdCBvZiBvcHRpb25zICovXG4ubmF2YmFyLWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbiAgICBwYWRkaW5nOiAxOC41cHggMTVweDtcbn1cblxuLm5hdmJhci1saW5rOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIGhlcm8gLSBob21lICovXG5cbi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJsb2NrOiAxNDVweCA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlcm8tc3VidGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNoYWRvd3MtaW50by1saWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDI1cHg7XG59XG5cbi5oZXJvLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tY2hhbXBhZ25lLXBpbmspO1xuICAgIG1heC13aWR0aDogMTJjaDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tZGVzZXJ0LXNhbmQpO1xuICAgIG1hcmdpbi1ibG9jazogMTVweCAzMHB4O1xuICAgIG1heC13aWR0aDogNDRjaDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uaGVyby1iYW5uZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZXJvIC5idG4ge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5oZXJvIC5idG46aXMoOmhvdmVyLCA6Zm9jdXMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuLyogcHJvbW8gc2VjdGlvbiovXG5cbi5wcm9tby1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5wcm9tby1jYXJkOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtcGF0aC0xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ucHJvbW8tY2FyZDpob3Zlcjo6YWZ0ZXIge1xuICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1wYXRoLTIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuXG4ucHJvbW8tY2FyZCAuY2FyZC1pY29uIGltZyB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLnByb21vLWNhcmQ6aG92ZXIgLmNhcmQtaWNvbiBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XG59XG5cbi5wcm9tby1jYXJkIC5jYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbn1cblxuLnByb21vLWNhcmQ6aG92ZXIgOmlzKC5jYXJkLXRpdGxlLCAuY2FyZC10ZXh0KSB7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLnByb21vLWNhcmQgLmNhcmQtdGV4dCB7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTVweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ucHJvbW8tY2FyZCAuY2FyZC1iYW5uZXIge1xuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ucHJvbW8taXRlbSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhYm91dCBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYXJ0aWNsZSAuYWJvdXQge1xuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDE0NXB4O1xufVxuXG4uYWJvdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFib3V0LWJhbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDAuOTtcbn1cblxuLmFib3V0LWltZyB7XG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uYWJvdXQtYmFubmVyIC5hYnMtaW1nIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMTAwcHg7XG59XG5cbi5hYm91dCAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAxNWNoO1xuICAgIG1hcmdpbi1ibG9jazogNDBweCAxMHB4O1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5hYm91dCAuYWJvdXQtbGlzdCB7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDMwcHg7XG59XG5cbi5hYm91dCAuYWJvdXQtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmFib3V0IC5hYm91dC1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEwcHg7XG59XG5cbi5hYm91dC1pdGVtIGkge1xuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xufVxuXG4uYWJvdXQtaXRlbSAuc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG59XG5cbi5hYm91dCAuYnRuIHtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSBmb29kIG1lbnUgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZm9vZC1tZW51IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMTQ1cHg7XG59XG5cbi5mb29kLW1lbnUgLnNlY3Rpb24tdGl0bGUge1xuICAgIG1hcmdpbi1ibG9jazogMTBweCAyMHB4O1xufVxuXG4uZm9vZC1tZW51IC5zZWN0aW9uLXRleHQge1xuICAgIG1heC13aWR0aDogNDRjaDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDMwcHg7XG59XG5cbi5mb29kLW1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICByb3ctZ2FwOiAzMHB4O1xufVxuXG4uZm9vZC1tZW51LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yKTtcbn1cblxuLmZvb2QtbWVudS1jYXJkOmZvY3VzLXdpdGhpbiB7XG4gICAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xufVxuXG4uZm9vZC1tZW51LWNhcmQgLmNhcmQtYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMzBweDtcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmZvb2QtbWVudS1jYXJkIC5iYWRnZSB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5mb29kLW1lbnUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSArIDE1cHgpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1jaW5uYWJhcik7XG4gICAgd2lkdGg6IDYwJTtcbiAgICAtLXBhZGRpbmctaW5saW5lOiAyMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0yKTtcbn1cblxuLmZvb2QtbWVudS1idG46aXMoOmZvY3VzLCA6aG92ZXIpIHtcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xufVxuXG4uZm9vZC1tZW51LWNhcmQ6aXMoOmhvdmVyLCA6Zm9jdXMtd2l0aGluKSAuZm9vZC1tZW51LWJ0bntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZm9vZC1tZW51LWNhcmQgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4OyAgICBcbn1cblxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTYwMCk7XG59XG5cbi5mb29kLW1lbnUtY2FyZCAucHJpY2UtdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogNXB4O1xufVxuXG4uZm9vZC1tZW51LWNhcmQgLnByaWNlIHtcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbn1cblxuLmZvb2QtbWVudS1jYXJkIC5kZWwge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LXgtMTEtZ3JheSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRlbGl2ZXJ5IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5kZWxpdmVyeS1jb250ZW50IHtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiA0MHB4O1xufVxuXG4uZGVsaXZlcnkgLnNlY3Rpb24tdGl0bGUge1xuICAgIG1heC13aWR0aDogMTdjaDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xuICAgIH1cblxuLmRlbGl2ZXJ5IC5zZWN0aW9uLXRleHQge1xuICAgIG1hcmdpbi1ibG9jazogMTVweCAyNXB4O1xufVxuXG4uZGVsaXZlcnktYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYXNwZWN0LXJhdGlvOiAxLyAwLjg2O1xufVxuXG4uZGVsaXZlcnktYmFubmVyIC5kZWxpdmVyeS1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwcHgpO1xuICAgIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNpdGlvbi0yKVxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRlc3RpbW9uaWFscyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGVzdGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlc3RpIC5zZWN0aW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWJsb2NrOiAxMHB4IDIwcHg7XG59XG5cbi50ZXN0aSAuc2VjdGlvbi10ZXh0IHtcbiAgICBtYXgtd2lkdGg6IDQ0Y2g7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAzMHB4O1xufVxuXG4udGVzdGktY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XG59XG5cbi50ZXN0aS1jYXJkIC5wcm9maWxlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5wcm9maWxlLXdyYXBwZXIgLmF2YXRhciB7XG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGUtd3JhcHBlciAudGVzdGktbmFtZSB7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMnB4O1xufVxuXG4ucHJvZmlsZS13cmFwcGVyIC50ZXN0aS10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xufVxuXG4udGVzdGktY2FyZCAudGVzdGktdGV4dCB7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDE1cHg7XG59XG5cbi50ZXN0aS1pdGVtIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xufVxuXG4ucmF0aW5nLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtFQUErRTtBQUMvRTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsaUNBQWlDO0lBQ2pDLCtCQUErQjs7SUFFL0IsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7O0lBRWQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhOztJQUViLFlBQVk7SUFDWix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsMENBQTBDOztJQUUxQyxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLHlEQUF5RDtJQUN6RCx3REFBd0Q7QUFDNUQ7O0FBRUEsK0VBQStFOztBQUUvRTs7O0lBR0ks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O0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbjpyb290IHtcXG4gICAgLyogQ29sb3JzICovXFxuICAgIC0tcmljaC1ibGFjay1mb2dyYS0yOTogaHNsKDIxMCwgMjYlLCA3JSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbmtfMjA6IGhzbGEoMjMsIDYxJSwgODYlLCAwLjIpO1xcbiAgICAtLWluZGVwZW5kZW5jZV8zMDogaHNsYSgyNDUsIDE3JSwgMjklLCAwLjMpO1xcbiAgICAtLWdyYXkteC0xMS1ncmF5OiBoc2woMCwgMCUsIDczJSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbms6IGhzbCgyMywgNjElLCA4NiUpO1xcbiAgICAtLXNwYW5pc2gtZ3JheTogaHNsKDAsIDAlLCA2MCUpO1xcbiAgICAtLXNvbmljLXNpbHZlcjogaHNsKDAsIDAlLCA0NyUpO1xcbiAgICAtLWRlZXAtc2FmZnJvbjogaHNsKDMyLCAxMDAlLCA1OSUpO1xcbiAgICAtLWRhcmstb3JhbmdlOiBoc2woMjgsIDEwMCUsIDU4JSk7XFxuICAgIC0tZGVzZXJ0LXNhbmQ6IGhzbCgyMywgNDklLCA4MiUpO1xcbiAgICAtLWlzYWJlbGxpbmU6IGhzbCgzOCwgNDQlLCA5NiUpO1xcbiAgICAtLWdhaW5zYm9ybzogaHNsKDAsIDAlLCA4NyUpO1xcbiAgICAtLXRhbmdlcmluZTogaHNsKDMxLCA4NCUsIDUwJSk7XFxuICAgIC0tY2lubmFiYXI6IGhzbCgzLCA5MCUsIDU1JSk7XFxuICAgIC0tYmxhY2tfOTU6IGhzbGEoMCwgMCUsIDAlLCAwLjk1KTtcXG4gICAgLS1jdWx0dXJlZDogaHNsKDAsIDAlLCA5MyUpO1xcbiAgICAtLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1vbnl4OiBoc2woMCwgMCUsIDI3JSk7XFxuXFxuICAgIC8qIFR5cG9ncmFwaHkgKi9cXG4gICAgLS1mZi1zaGFkb3dzLWludG8tbGlnaHQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xcbiAgICAtLWZmLXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIC0tZmYtcnViaWs6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC0tZnMtMTogMy4ycmVtO1xcbiAgICAtLWZzLTI6IDIuMnJlbTtcXG4gICAgLS1mcy0zOiAxLjhyZW07XFxuICAgIC0tZnMtNDogMS40cmVtO1xcbiAgICAtLWZzLTU6IDEuMnJlbTtcXG5cXG4gICAgLS1mdy01MDA6IDUwMDtcXG4gICAgLS1mdy02MDA6IDYwMDtcXG4gICAgLS1mdy03MDA6IDcwMDtcXG5cXG4gICAgLyogc3BhY2luZyAqL1xcbiAgICAtLXNlY3Rpb24tcGFkZGluZzogNjBweDtcXG5cXG4gICAgLyogc2hhZG93ICovXFxuICAgIC0tc2hhZG93LTE6IDAgMXB4IDRweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcXG4gICAgLS1zaGFkb3ctMjogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xcblxcbiAgICAvKiB0cmFuc2l0aW9uICovXFxuICAgIC0tdHJhbnNpdGlvbi0xOiAwLjI1cyBlYXNlO1xcbiAgICAtLXRyYW5zaXRpb24tMjogMC41cyBlYXNlO1xcblxcbiAgICAvKiBjbGlwLXBhdGggKi9cXG4gICAgLS1jbGlwLXBhdGgtMTogcG9seWdvbigwIDQwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgICAtLWNsaXAtcGF0aC0yOiBwb2x5Z29uKDAgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNzcyByZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYSxcXG5pbWcsXFxuc3ZnLFxcbnNwYW4sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGZvbnQ6IGluaGVyaXQ7ICovXFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcm9ib3RvKTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkuYWN0aXZlIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmV1c2VkIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcbn1cXG5cXG4uaDEsXFxuLmgyLFxcbi5oMyxcXG4uaDQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbn1cXG5cXG4uaDEsXFxuLmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0xKTtcXG59XFxuXFxuLmgyLFxcbi5oMyxcXG4uaDQge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG59XFxuXFxuLmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0yKTtcXG59XFxuXFxuLmg0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1kZWVwLXNhZmZyb24pKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxuICAgIGhlaWdodDogdmFyKC0taGVpZ2gsIDQ1cHgpO1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1pbmxpbmUsIDM1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4uYnRuLWhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYnRuLWhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTFweDtcXG4gICAgbGVmdDogMjBweDtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2NhbGUsIDEpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMik7XFxufVxcblxcbi5idG4taG92ZXI6aXMoOmhvdmVyLCA6Zm9jdXMpOjphZnRlciB7XFxuICAgIC0tc2NhbGU6IDUwMDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi53aGl0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlzYWJlbGxpbmUpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUsXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbi5zZWN0aW9uLWRpdmlkZXIud2hpdGU6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS13aGl0ZS5wbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyLmdyZXk6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS1ncmV5LnBuZyk7XFxufVxcblxcbi53LTEwMCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGFzLXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDQwcHg7XFxuXFxuICAgIC8qIHNjcm9sbCBzbGlkZXIgcHJvcGVydHkgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50ICovXFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XFxufVxcblxcbi5hYnMtaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc2NhbGUtdXAtYW5pbSB7XFxuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSA+IC5zcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG59XFxuXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2lubmFiYXIpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy01MDApO1xcbn1cXG5cXG4uYmFkZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1jaW5uYWJhcikpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTUpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFmZmluZy1ibG9jaywgMnB4KSAxNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qIHNldCB0aGUgaW5pdGlhbCBzdHlsZSBvZiB0aGUgaGVhZGVyICovXFxuLmhlYWRlciB7XFxuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgdmFyKC0tY2hhbXBhZ25lLXBpbmtfMjApO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4vKiBjcmVhdGUgdGhlIHN0eWxlIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUgKi9cXG4vKiB1c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9zaXRpb24gYmFzZWQgb24gdGhlIHZpZXdwb3J0Ki9cXG4vKiBjaGFuZ2UgdGhlIGRlZmluZWQgdmFyaWFibGVzIGZvciBjb2xvcnMgKi9cXG4uaGVhZGVyLmFjdGl2ZSB7XFxuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xcbiAgICAtLWJ0bi1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtODZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiBzZXQgdGhlIGFuaW1hdGlvbiBvZiB0aGUgaGVhZGVyIHdoZW4gYWN0aXZlKi9cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IHRoZSBoZWFkZXIgY29udGFpbmVyIHdpdGggZGlzcGxhdCBmbGV4IGluIG9yZGVyIHRvIFxcbnBvc2l0aW9uIHRoZSBlbGVtZW50cyAqL1xcbi5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgbG9nbyBlbGVtZW50cyAqL1xcbi5sb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG59XFxuXFxuLmxvZ28gLnNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgYnV0dG9uIGdyb3VwICovXFxuLmhlYWRlci1idG4tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgYnV0dG9uIHRoYXQgc2hvd3MgdGhlIG5hdmJhciAqL1xcbi5uYXYtdG9nZ2xlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ubGluZS5taWRkbGUge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmxpbmUuYm90dG9tIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qIHNldCB0aGUgdHJhbnNmb3JtIHRvIHRyYW5zaXRpb24gd2hlbiBhY3RpdmUgKi9cXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLnRvcCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgM3B4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLm1pZGRsZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUuYm90dG9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTNweCkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIG5hdmJhciBvZiB0aGUgaGVhZGVyKi9cXG4ubmF2YmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5uYXZiYXIuYWN0aXZlIHtcXG4gICAgaGVpZ2h0OiAyMzZweDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIGxpc3Qgb2YgZWxlbWVudHMgb2YgdGhlIG5hdmJhciAqL1xcbi5uYXZiYXItbGlzdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAwJSwgMC4wNCk7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBsaW5rcyBvZiB0aGUgbmF2YmFyIGxpc3Qgb2Ygb3B0aW9ucyAqL1xcbi5uYXZiYXItbGluayB7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxuICAgIHBhZGRpbmc6IDE4LjVweCAxNXB4O1xcbn1cXG5cXG4ubmF2YmFyLWxpbms6aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyogaGVybyAtIGhvbWUgKi9cXG5cXG4uaGVybyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvaGVyby1iZy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYmxvY2s6IDE0NXB4IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tc3VidGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtc2hhZG93cy1pbnRvLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMjVweDtcXG59XFxuXFxuLmhlcm8tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2hhbXBhZ25lLXBpbmspO1xcbiAgICBtYXgtd2lkdGg6IDEyY2g7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tZGVzZXJ0LXNhbmQpO1xcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHggMzBweDtcXG4gICAgbWF4LXdpZHRoOiA0NGNoO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uaGVyby1iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVybyAuYnRuIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmhlcm8gLmJ0bjppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi8qIHByb21vIHNlY3Rpb24qL1xcblxcbi5wcm9tby1jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9tby1jYXJkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtcGF0aC0xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG59XFxuXFxuLnByb21vLWNhcmQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXBhdGgtMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZCAuY2FyZC1pY29uIGltZyB7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5wcm9tby1jYXJkOmhvdmVyIC5jYXJkLWljb24gaW1nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZDpob3ZlciA6aXMoLmNhcmQtdGl0bGUsIC5jYXJkLXRleHQpIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnByb21vLWNhcmQgLmNhcmQtdGV4dCB7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLWJhbm5lciB7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5wcm9tby1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWJvdXQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuYXJ0aWNsZSAuYWJvdXQge1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNDVweDtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtYmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAwLjk7XFxufVxcblxcbi5hYm91dC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uYWJvdXQtYmFubmVyIC5hYnMtaW1nIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAxMDBweDtcXG59XFxuXFxuLmFib3V0IC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAxNWNoO1xcbiAgICBtYXJnaW4tYmxvY2s6IDQwcHggMTBweDtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFib3V0IC5hYm91dC1saXN0IHtcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDMwcHg7XFxufVxcblxcbi5hYm91dCAuYWJvdXQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dCAuYWJvdXQtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTBweDtcXG59XFxuXFxuLmFib3V0LWl0ZW0gaSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4uYWJvdXQtaXRlbSAuc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxufVxcblxcbi5hYm91dCAuYnRuIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9vZCBtZW51IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uZm9vZC1tZW51IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNDVweDtcXG59XFxuXFxuLmZvb2QtbWVudSAuc2VjdGlvbi10aXRsZSB7XFxuICAgIG1hcmdpbi1ibG9jazogMTBweCAyMHB4O1xcbn1cXG5cXG4uZm9vZC1tZW51IC5zZWN0aW9uLXRleHQge1xcbiAgICBtYXgtd2lkdGg6IDQ0Y2g7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDMwcHg7XFxufVxcblxcbi5mb29kLW1lbnUtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTIpO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQ6Zm9jdXMtd2l0aGluIHtcXG4gICAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQgLmNhcmQtYmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQgLmJhZGdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uZm9vZC1tZW51LWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDUwJSArIDE1cHgpO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgLS1iZy1jb2xvcjogdmFyKC0tY2lubmFiYXIpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICAtLXBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTIpO1xcbn1cXG5cXG4uZm9vZC1tZW51LWJ0bjppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQ6aXMoOmhvdmVyLCA6Zm9jdXMtd2l0aGluKSAuZm9vZC1tZW51LWJ0bntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCAuY2FyZC10aXRsZSB7XFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4OyAgICBcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCAucHJpY2Uge1xcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5kZWwge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS14LTExLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWxpdmVyeSBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5kZWxpdmVyeS1jb250ZW50IHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogNDBweDtcXG59XFxuXFxuLmRlbGl2ZXJ5IC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAxN2NoO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgfVxcblxcbi5kZWxpdmVyeSAuc2VjdGlvbi10ZXh0IHtcXG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4IDI1cHg7XFxufVxcblxcbi5kZWxpdmVyeS1iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8gMC44NjtcXG59XFxuXFxuLmRlbGl2ZXJ5LWJhbm5lciAuZGVsaXZlcnktaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XFxuICAgIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNpdGlvbi0yKVxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRlc3RpbW9uaWFscyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi50ZXN0aSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRlc3RpIC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgcGFkZGluZy1ibG9jazogMTBweCAyMHB4O1xcbn1cXG5cXG4udGVzdGkgLnNlY3Rpb24tdGV4dCB7XFxuICAgIG1heC13aWR0aDogNDRjaDtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMzBweDtcXG59XFxuXFxuLnRlc3RpLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yKTtcXG59XFxuXFxuLnRlc3RpLWNhcmQgLnByb2ZpbGUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2ZpbGUtd3JhcHBlciAuYXZhdGFyIHtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucHJvZmlsZS13cmFwcGVyIC50ZXN0aS1uYW1lIHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMnB4O1xcbn1cXG5cXG4ucHJvZmlsZS13cmFwcGVyIC50ZXN0aS10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNCk7XFxufVxcblxcbi50ZXN0aS1jYXJkIC50ZXN0aS10ZXh0IHtcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDE1cHg7XFxufVxcblxcbi50ZXN0aS1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5yYXRpbmctd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFib3V0IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IGFib3V0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhYm91dCBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmFib3V0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY3Rpb24gc2VjdGlvbi1kaXZpZGVyIGdyYXkgYWJvdXRcIik7XG5hYm91dFNlY3Rpb24uaWQgPSBcImFib3V0XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuLy8gYWJvdXQgYmFubmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGFib3V0QmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFib3V0QmFubmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1iYW5uZXJcIik7XG5cbmNvbnN0IGltZ0Zvb2RCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaW1nRm9vZEJhbm5lci5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9hYm91dC1iYW5uZXIucG5nXCI7XG5pbWdGb29kQmFubmVyLmFsdCA9IFwiQnVyZ2llciB3aXRoIGRyaW5rc1wiO1xuaW1nRm9vZEJhbm5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInctMTAwIGFib3V0LWltZ1wiKTtcbmltZ0Zvb2RCYW5uZXIud2lkdGggPSBcIjUwOVwiO1xuaW1nRm9vZEJhbm5lci5oZWlnaHQgPSBcIjQ1OVwiO1xuaW1nRm9vZEJhbm5lci5sb2FkaW5nID0gXCJsYXp5XCI7XG5hYm91dEJhbm5lci5hcHBlbmRDaGlsZChpbWdGb29kQmFubmVyKTtcblxuY29uc3QgaW1nU2FsZUJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWdTYWxlQmFubmVyLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NhbGUtc2hhcGUtcmVkLnBuZ1wiO1xuaW1nU2FsZUJhbm5lci5hbHQgPSBcIkdldCB1cCA1MCUgb2ZmIG5vd1wiO1xuaW1nU2FsZUJhbm5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFicy1pbWcgc2NhbGUtdXAtYW5pbVwiKTtcbmltZ1NhbGVCYW5uZXIud2lkdGggPSBcIjIxNlwiO1xuaW1nU2FsZUJhbm5lci5oZWlnaHQgPSBcIjIyNlwiO1xuaW1nU2FsZUJhbm5lci5sb2FkaW5nID0gXCJsYXp5XCI7XG5hYm91dEJhbm5lci5hcHBlbmRDaGlsZChpbWdTYWxlQmFubmVyKTtcblxuLy8gYWJvdXQgY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5hYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRlbnRcIik7XG5cbmNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnNlY3Rpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImgyIHNlY3Rpb24tdGl0bGVcIik7XG5zZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkZvb2RpZSwgQnVyZ3VlcnMsIGFuZCBCZXN0IFBpenphcyBcIjtcbmNvbnN0IHNwYW5TZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnNwYW5TZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZChcInNwYW5cIik7XG5zcGFuU2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJpbiBUb3duIVwiO1xuc2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHNwYW5TZWN0aW9uVGl0bGUpO1xuXG5jb25zdCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvblRleHQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGV4dFwiKTtcbnNlY3Rpb25UZXh0LnRleHRDb250ZW50ID1cbiAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBMYWJvcmlvc2FtIGNvbnNlcXVhdHVyIHF1aXNxdWFtIGFjY3VzYW11cyBmdWdhIGV4IGFtZXQsIHF1aWEgZG9sb3JlbSBkb2xvcmlidXMsIGVpdXMgcmVwZWxsZW5kdXMgZXhwbGljYWJvIGl0YXF1ZSB0ZW1wb3JlIGN1bHBhIHF1YWVyYXQsIGVsaWdlbmRpIG5pc2kgZXJyb3IgbmVtbyBtYWlvcmVzP1wiO1xuXG4vLyBhYm91dCBsaXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5hYm91dExpc3QuY2xhc3NMaXN0LmFkZChcImFib3V0LWxpc3RcIik7XG5cbmNvbnN0IHRleHRMaXN0SXRlbXMgPSBbXG4gIFwiRGVsaWNpb3VzICYgSGVhbHRoeSBGb29kc1wiLFxuICBcIlNwYWNpZmljIEZhbWlseSBBbmQgS2lkcyBab25lXCIsXG4gIFwiTXVzaWMgJiBPdGhlciBGYWNpbGl0aWVzXCIsXG4gIFwiRmFzdGVzdCBGb29kIEhvbWUgRGVsaXZlcnlcIixcbl07XG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuY2xhc3NMaXN0LmFkZChcImFib3V0LWl0ZW1cIik7XG5cbiAgY29uc3QgaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYS1zb2xpZCBmYS1jaXJjbGUtY2hlY2tcIik7XG4gIGxpLmFwcGVuZENoaWxkKGlsKTtcblxuICBjb25zdCBzcGFuTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuTGlzdC5jbGFzc0xpc3QuYWRkKFwic3BhblwiKTtcbiAgc3Bhbkxpc3QudGV4dENvbnRlbnQgPSB0ZXh0TGlzdEl0ZW1zW2ldO1xuICBsaS5hcHBlbmRDaGlsZChzcGFuTGlzdCk7XG5cbiAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGxpKTtcbn1cblxuLy8gYWJvdXQgYnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFib3V0QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYnRuIGJ0bi1ob3ZlclwiKTtcbmFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcblxuLy8gYXBwZW5kIGVsZW1lbnRzIG9mIGFib3V0IGNvbnRlbnRcbmFib3V0Q29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpO1xuYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25UZXh0KTtcbmFib3V0Q29udGVudC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuLy8gYXBwZW5kIHRvIHRoZSBjb250YWluZXJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEJhbm5lcik7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcblxuLy8gYXBwZW5kIHRvIHRoZSBhcnRpY2xlXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbmFib3V0QXJ0aWNsZS5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dEFydGljbGU7XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmhlYWRlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhlYWRlclwiLCBcIlwiKTtcblxuY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBjcmVhdGUgdGhlIGxvZ28gZWxlbWVudHNcbmNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xubG9nby50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudFwiO1xubG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcblxuY29uc3Qgc3BhbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbnNwYW5Mb2dvLnRleHRDb250ZW50ID0gXCIuXCI7XG5zcGFuTG9nby5jbGFzc0xpc3QuYWRkKFwic3BhblwiKTtcblxuaGVhZGVySDEuYXBwZW5kQ2hpbGQobG9nbyk7XG5sb2dvLmFwcGVuZENoaWxkKHNwYW5Mb2dvKTtcblxuLy8gY3JlYXRlIHRoZSBuYXZiYXJcbmNvbnN0IGhlYWRlck5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5oZWFkZXJOYXZiYXIuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXZiYXJcIiwgXCJcIik7XG5oZWFkZXJOYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcblxuY29uc3QgbmF2YmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmNvbnN0IG5hdmJhck9wdGlvbnMgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbmNvbnN0IG5hdmJhckxpbmtzID0gW107XG5mb3IgKGxldCBvcHRpb24gb2YgbmF2YmFyT3B0aW9ucykge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpO1xuXG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAjJHtvcHRpb24udG9Mb3dlckNhc2UoKX1gKTtcbiAgYS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdi1saW5rXCIsIFwiXCIpO1xuICBhLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbGlua1wiKTtcbiAgYS50ZXh0Q29udGVudCA9IG9wdGlvbjtcbiAgbmF2YmFyTGlua3MucHVzaChhKTtcblxuICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgbmF2YmFyTGlzdC5hcHBlbmRDaGlsZChsaSk7XG59XG5cbmhlYWRlck5hdmJhci5hcHBlbmRDaGlsZChuYXZiYXJMaXN0KTtcblxuLy8gY3JlYXRlIHRoZSBidXR0b25zIGdyb3VwXG5jb25zdCBoZWFkZXJCdXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXJCdXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ0bi1ncm91cFwiKTtcblxuY29uc3QgYnV0dG9uTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmJ1dHRvbk5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZS1idG5cIik7XG5idXR0b25OYXYuc2V0QXR0cmlidXRlKFwiZGF0YS1tZW51LXRvZ2dsZS1idG5cIiwgXCJcIik7XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gIGNvbnN0IHBvcyA9IGkgPT0gMCA/IFwidG9wXCIgOiBpID09IDEgPyBcIm1pZGRsZVwiIDogXCJib3R0b21cIjtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGBsaW5lICR7cG9zfWApO1xuICBidXR0b25OYXYuYXBwZW5kQ2hpbGQoc3Bhbik7XG59XG5cbmhlYWRlckJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ1dHRvbk5hdik7XG5cbi8vIGFwcGVuZCBhbGwgc2VjdGlvbnMgdG8gdGhlIGhlYWRlciBtYWluIGVsZW1lbnRcbmhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG5oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2YmFyKTtcbmhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJCdXR0b25Hcm91cCk7XG5oZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuLy8gYWRkIHRvIHRoZSBjb250ZW50XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZG9tIGxpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLy8gbmF2YmFyIHRvZ2dsZVxuXG5idXR0b25OYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgaGVhZGVyTmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn0pO1xuXG5oZWFkZXJOYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChuYXZiYXJMaW5rcy5pbmNsdWRlcyhlLnRhcmdldCkpIHtcbiAgICBoZWFkZXJOYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBidXR0b25OYXYuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbi8vIGhlYWRlciBzdGlja3lcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTAwKSBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZWxzZSBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn0pO1xuXG5leHBvcnQgeyBtYWluLCBuYXZiYXJMaW5rc307IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhvbWUgYXJ0aWNsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgYXJ0aWNsZUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZXJvIHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmhlcm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuaGVyb1NlY3Rpb24uaWQgPSBcImhvbWVcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBoZXJvIHRleHQgY29udGVudFxuY29uc3QgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhlcm8tY29udGVudFwiKTtcblxuLy8gZWxlbWVudHMgb2YgdGhlIGhlcm8gY29udGVudFxuY29uc3QgaGVyb1N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5oZXJvU3VidGl0bGUuY2xhc3NMaXN0LmFkZChcImhlcm8tc3VidGl0bGVcIik7XG5oZXJvU3VidGl0bGUudGV4dENvbnRlbnQgPSBcIkVhdCBTbGVlcCBBbmRcIjtcbmNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmhlcm9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImgxIGhlcm8tdGl0bGVcIik7XG5oZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIlN1cGVyIGhlYWx0aHkgZm9vZCBpbiB0b3duIVwiO1xuY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XG5oZXJvVGV4dC50ZXh0Q29udGVudCA9XG4gIFwiRm9vZCBpcyB0aGUgZnVlbCBmb3Igb3VyIGxpZmUsIGVhdCBoZWFsdGh5IGFuZCBsb3ZlIHlvdXJzZWxmLlwiO1xuY29uc3QgaGVyb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5oZXJvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG5cIik7XG5oZXJvQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWUgdGhlIG1lbnUhXCI7XG5cbmhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9TdWJ0aXRsZSk7XG5oZXJvQ29udGVudC5hcHBlbmRDaGlsZChoZXJvVGl0bGUpO1xuaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb0J1dHRvbik7XG5cbi8vIGZpZ3VyZXNcbmNvbnN0IGhlcm9GaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuaGVyb0ZpZ3VyZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1iYW5uZXJcIik7XG5cbmNvbnN0IGhlcm9CYW5uZXJCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5oZXJvQmFubmVyQmcuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaGVyby1iYW5uZXItYmcucG5nXCI7XG5oZXJvQmFubmVyQmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3LTEwMCBoZXJvLWltZy1iZ1wiKTtcbmhlcm9CYW5uZXJCZy53aWR0aCA9IFwiODIwXCI7XG5oZXJvQmFubmVyQmcuaGVpZ2h0ID0gXCI3MTZcIjtcbmhlcm9CYW5uZXJCZy5sb2FkaW5nID0gXCJsYXp5XCI7XG5cbmNvbnN0IGhlcm9CYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuaGVyb0Jhbm5lci5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9oZXJvLWJhbm5lci5wbmdcIjtcbmhlcm9CYW5uZXIuYWx0ID0gXCJCdXJndWVyXCI7XG5oZXJvQmFubmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidy0xMDAgaGVyby1pbWdcIik7XG5oZXJvQmFubmVyQmcud2lkdGggPSBcIjcwMFwiO1xuaGVyb0Jhbm5lckJnLmhlaWdodCA9IFwiNjM3XCI7XG5oZXJvQmFubmVyQmcubG9hZGluZyA9IFwibGF6eVwiO1xuXG5oZXJvRmlndXJlLmFwcGVuZENoaWxkKGhlcm9CYW5uZXJCZyk7XG5oZXJvRmlndXJlLmFwcGVuZENoaWxkKGhlcm9CYW5uZXIpO1xuXG4vLyBhZGQgY29udGVudCBhbmQgZmlndXJlIHRvIHRoZSBjb250YWluZXJcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvQ29udGVudCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0ZpZ3VyZSk7XG5cbi8vIGFkZCBoZXJvIHNlY3Rpb24gdG8gdGhlIGNvbnRhaW5lclxuaGVyb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcm9tbyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgcHJvbW9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5wcm9tb1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWN0aW9uIHNlY3Rpb24tZGl2aWRlciB3aGl0ZSBwcm9tb1wiKTtcblxuY29uc3QgY29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbmNvbnN0IHVsUHJvbW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG51bFByb21vLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvbW8tbGlzdCBoYXMtc2Nyb2xsYmFyXCIpO1xuXG5jb25zdCBwcm9kdWN0TmFtZSA9IFtcbiAgXCJIYXBweSBQaXp6YVwiLFxuICBcIkNyYXp5IERyaW5rc1wiLFxuICBcIkZyZW5jaCBGcmllc1wiLFxuICBcIkJ1cmd1ZXJcIixcbiAgXCJDaGlja2VuXCIsXG5dO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmNsYXNzTGlzdC5hZGQoXCJwcm9tby1pdGVtXCIpO1xuXG4gIGNvbnN0IHByb21vQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb21vQ2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvbW8tY2FyZFwiKTtcblxuICBjb25zdCBjYXJkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRJY29uLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIik7XG4gIGNvbnN0IGNhcmRJY29uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2FyZEljb25JbWcuc3JjID0gYC9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tby1pY29uLSR7aSArIDF9LnN2Z2A7XG4gIGNhcmRJY29uLmFwcGVuZENoaWxkKGNhcmRJY29uSW1nKTtcblxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImgzIGNhcmQtdGl0bGVcIik7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3ROYW1lW2ldO1xuXG4gIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRleHRcIik7XG4gIGNhcmRUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkZvb2QgaXMgYW55IHN1YnN0YW5jZSBjb25zdW1lZCB0byBwcm92aWRlIG51dHJpdGlvbmFsIHN1cG9ydCBmb3IgYW4gb3JnYW5pc20uXCI7XG5cbiAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2FyZEltYWdlLnNyYyA9IGAvc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8tJHtpICsgMX0ucG5nYDtcbiAgY2FyZEltYWdlLmFsdCA9IHByb2R1Y3ROYW1lW2ldO1xuICBjYXJkSW1hZ2UuaGVpZ2h0ID0gXCIzMDBcIjtcbiAgY2FyZEltYWdlLndpZHRoID0gXCIzMDBcIjtcbiAgY2FyZEltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidy0xMDAgY2FyZC1iYW5uZXJcIik7XG4gIGNhcmRJbWFnZS5sb2FkaW5nID0gXCJsYXp5XCI7XG5cbiAgcHJvbW9DYXJkLmFwcGVuZENoaWxkKGNhcmRJY29uKTtcbiAgcHJvbW9DYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gIHByb21vQ2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gIHByb21vQ2FyZC5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xuXG4gIGxpLmFwcGVuZENoaWxkKHByb21vQ2FyZCk7XG4gIHVsUHJvbW8uYXBwZW5kQ2hpbGQobGkpO1xufVxuXG4vLyBhZGQgdGhlIHVsIHRvIHRoZSBjb250YWluZXJcbmNvbnRhaW5lcjIuYXBwZW5kQ2hpbGQodWxQcm9tbyk7XG5cbi8vIGFkZCB0aGUgY29udGFpbmVyIHRvIHRoZSBzZWN0aW9uXG5wcm9tb1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyMik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVsaXZlcnkgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IGRlbGl2ZXJ5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuZGVsaXZlcnlTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VjdGlvbiBzZWN0aW9uLWRpdmlkZXIgZ3JleSBkZWxpdmVyeVwiKTtcblxuY29uc3QgY29udGFpbmVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb250YWluZXIzLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIGRlbGl2ZXJ5IGNvbnRlbnRcbmNvbnN0IGRlbGl2ZXJ5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kZWxpdmVyeUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5LWNvbnRlbnRcIik7XG5cbmNvbnN0IGRlbGl2ZXJ5U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuZGVsaXZlcnlTZWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImgyIHNlY3Rpb24tdGl0bGVcIik7XG5kZWxpdmVyeVNlY3Rpb25UaXRsZS5pbm5lckhUTUwgPSBcIkEgTW9tZW50cyBPZiBEZWxpdmVyZWQgT24gPHNwYW4gY2xhc3M9J3NwYW4nPlJpZ2h0IFRpbWU8L3NwYW4+ICYgUGxhY2VcIjtcbmRlbGl2ZXJ5Q29udGVudC5hcHBlbmRDaGlsZChkZWxpdmVyeVNlY3Rpb25UaXRsZSk7XG5cbmNvbnN0IGRlbGl2ZXJ5U2VjdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmRlbGl2ZXJ5U2VjdGlvblRleHQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGV4dFwiKTtcbmRlbGl2ZXJ5U2VjdGlvblRleHQudGV4dENvbnRlbnQgPVxuICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdWxsYSwgZWFydW0/XCI7XG5kZWxpdmVyeUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsaXZlcnlTZWN0aW9uVGV4dCk7XG5cbmNvbnN0IGRlbGl2ZXJ5U2VjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kZWxpdmVyeVNlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImJ0biBidG4taG92ZXJcIik7XG5kZWxpdmVyeVNlY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuZGVsaXZlcnlDb250ZW50LmFwcGVuZENoaWxkKGRlbGl2ZXJ5U2VjdGlvbkJ1dHRvbik7XG5cbi8vIGRlbGl2ZXJ5IGJhbm5lclxuY29uc3QgZGVsaXZlcnlTZWN0aW9uRmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcbmRlbGl2ZXJ5U2VjdGlvbkZpZ3VyZS5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnktYmFubmVyXCIpO1xuXG5jb25zdCBkZWxpdmVyeUJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5kZWxpdmVyeUJhbm5lci5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9kZWxpdmVyeS1iYW5uZXItYmcucG5nXCI7XG5kZWxpdmVyeUJhbm5lci53aWR0aCA9IFwiNzAwXCI7XG5kZWxpdmVyeUJhbm5lci5oZWlnaHQgPSBcIjYwMlwiO1xuZGVsaXZlcnlCYW5uZXIubG9hZGluZyA9IFwibGF6eVwiO1xuZGVsaXZlcnlCYW5uZXIuYWx0ID0gXCJjbG91ZHNcIjtcbmRlbGl2ZXJ5QmFubmVyLmNsYXNzTGlzdC5hZGQoXCJ3LTEwMFwiKTtcbmRlbGl2ZXJ5U2VjdGlvbkZpZ3VyZS5hcHBlbmRDaGlsZChkZWxpdmVyeUJhbm5lcik7XG5cbmNvbnN0IGRlbGl2ZXJ5Qm95SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuZGVsaXZlcnlCb3lJbWFnZS5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9kZWxpdmVyeS1ib3kuc3ZnXCI7XG5kZWxpdmVyeUJveUltYWdlLndpZHRoID0gXCIxMDAwXCI7XG5kZWxpdmVyeUJveUltYWdlLmhlaWdodCA9IFwiODgwXCI7XG5kZWxpdmVyeUJveUltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcbmRlbGl2ZXJ5Qm95SW1hZ2UuYWx0ID0gXCJkZWxpdmVyeSBib3lcIjtcbmRlbGl2ZXJ5Qm95SW1hZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxpdmVyeS1ib3lcIiwgXCJcIik7XG5kZWxpdmVyeUJveUltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidy0xMDAgZGVsaXZlcnktaW1nXCIpO1xuZGVsaXZlcnlTZWN0aW9uRmlndXJlLmFwcGVuZENoaWxkKGRlbGl2ZXJ5Qm95SW1hZ2UpO1xuXG4vLyBhZGQgaXRlbXMgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyMy5hcHBlbmRDaGlsZChkZWxpdmVyeUNvbnRlbnQpO1xuY29udGFpbmVyMy5hcHBlbmRDaGlsZChkZWxpdmVyeVNlY3Rpb25GaWd1cmUpO1xuXG4vLyBhZGQgdGhlIGNvbnRhaW5lciB0byB0aGUgZGVsaXZlcnkgc2VjdGlvblxuZGVsaXZlcnlTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcjMpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRlc3RpbW9uaWFscyBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCB0ZXN0aW1vbmlhbHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG50ZXN0aW1vbmlhbHNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VjdGlvbiBzZWN0aW9uLWRpdmlkZXIgd2hpdGUgdGVzdGlcIik7XG5cbmNvbnN0IGNvbnRhaW5lcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyNC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBzZWN0aW9uIHN1YnRpdGxlXG5jb25zdCB0ZXN0aW1vbmlhbHNTZWN0aW9uU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRlc3RpbW9uaWFsc1NlY3Rpb25TdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1zdWJ0aXRsZVwiKTtcbnRlc3RpbW9uaWFsc1NlY3Rpb25TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiVGVzdGltb25pYWxzXCI7XG5cbi8vIHNlY3Rpb24gdGl0bGVcbmNvbnN0IHRlc3RpbW9uaWFsc1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbnRlc3RpbW9uaWFsc1NlY3Rpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImgyIHNlY3Rpb24tdGl0bGVcIik7XG50ZXN0aW1vbmlhbHNTZWN0aW9uVGl0bGUuaW5uZXJIVE1MID0gXCJPdXIgQ3VzdG9tZXJzIDxzcGFuIGNsYXNzPSdzcGFuJz5SZXZpZXdzPC9zcGFuPlwiO1xuXG4vLyBzZWN0aW9uIHRleHRcbmNvbnN0IHRlc3RpbW9uaWFsc1NlY3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50ZXN0aW1vbmlhbHNTZWN0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10ZXh0XCIpO1xudGVzdGltb25pYWxzU2VjdGlvblRleHQudGV4dENvbnRlbnQgPSBcIkZvb2QgaXMgYW55IHN1YnN0YW5jZSBjb25zdW1lZCB0byBwcm92aWRlIG51dHJpdGlvbmFsIHN1cHBvcnQgZm9yIGFuIG9yZ2FuaXNtLlwiO1xuXG4vLyB0ZXN0aW1vbmlhbHMgbGlzdCBcbmNvbnN0IHRlc3RpbW9uaWFsc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG50ZXN0aW1vbmlhbHNMaXN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGVzdGktbGlzdCBoYXMtc2Nyb2xsYmFyXCIpO1xuXG5jb25zdCB1c2VyVGlsZSA9IFtcIkNFTyBLaW5nRmlzaGVyXCIsIFwiQ0VPIEdldGZvcmNlXCIsIFwiQ0VPIEFuZ2VsYVwiXVxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmNsYXNzTGlzdC5hZGQoXCJ0ZXN0aS1pdGVtXCIpO1xuXG4gIGNvbnN0IHRlc3RpQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlc3RpQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGVzdGktY2FyZFwiKTtcblxuICAvLyBwcm9maWxlIHdyYXBwZXJcbiAgY29uc3QgcHJvZmlsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9maWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS13cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gIGF2YXRhci5jbGFzc0xpc3QuYWRkKFwiYXZhdGFyXCIpO1xuICBjb25zdCBhdmF0YXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGF2YXRhckltYWdlLnNyYyA9IGAvc3JjL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLSR7aSsxfS5qcGdgO1xuICBhdmF0YXJJbWFnZS53aWR0aCA9IFwiODBcIjtcbiAgYXZhdGFySW1hZ2UuaGVpZ2h0ID0gXCI4MFwiO1xuICBhdmF0YXJJbWFnZS5sb2FkaW5nID0gXCJsYXp5XCI7XG4gIGF2YXRhckltYWdlLmFsdCA9IGBVc2VyJHtpKzF9YDtcbiAgYXZhdGFyLmFwcGVuZENoaWxkKGF2YXRhckltYWdlKTtcbiAgXG4gIGNvbnN0IHVzZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHVzZXJOYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJoNCB0ZXN0aS1uYW1lXCIpO1xuICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IGBVc2VyICR7aSsxfWA7XG4gIHVzZXJJbmZvLmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcbiAgY29uc3QgdXNlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHVzZXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGVzdGktdGl0bGVcIik7XG4gIHVzZXJUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJUaWxlW2ldO1xuICB1c2VySW5mby5hcHBlbmRDaGlsZCh1c2VyVGl0bGUpO1xuXG4gIHByb2ZpbGVXcmFwcGVyLmFwcGVuZENoaWxkKGF2YXRhcik7XG4gIHByb2ZpbGVXcmFwcGVyLmFwcGVuZENoaWxkKHVzZXJJbmZvKTtcblxuICAvLyBibGFja3F1b3RlXG4gIGNvbnN0IGJsYWNrcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYmxhY2txdW90ZVwiKTtcbiAgYmxhY2txdW90ZS5jbGFzc0xpc3QuYWRkKFwidGVzdGktdGV4dFwiKTtcbiAgYmxhY2txdW90ZS50ZXh0Q29udGVudCA9ICdcIkkgd291bGQgYmUgbG9zdCB3aXRob3V0IHJlc3RhdXJhbnQuIEkgd291bGQgbGlrZSB0byBwZXJzb25hbGx5IHRoYW5rIHlvdSBmb3IgeW91ciBvdXRzdGFuZGluZyBwcm9kdWN0LlwiJztcblxuICAvLyByYXRpbmcgd3JhcHBlclxuICBjb25zdCByYXRpbmdXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmF0aW5nV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmF0aW5nLXdyYXBwZXJcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYS1zb2xpZCBmYS1zdGFyXCIpO1xuICAgIHJhdGluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0gXG5cbiAgLy8gYWRkIGl0ZW1zIHRvIHRoZSBjYXJkXG4gIHRlc3RpQ2FyZC5hcHBlbmRDaGlsZChwcm9maWxlV3JhcHBlcik7XG4gIHRlc3RpQ2FyZC5hcHBlbmRDaGlsZChibGFja3F1b3RlKTtcbiAgdGVzdGlDYXJkLmFwcGVuZENoaWxkKHJhdGluZ1dyYXBwZXIpO1xuXG4gIC8vIGFkZCB0ZXN0aSBjYXJkIHRvIHRoZSBsaXN0XG4gIGxpLmFwcGVuZENoaWxkKHRlc3RpQ2FyZCk7XG4gIHRlc3RpbW9uaWFsc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG4vLyBhZGQgaXRlbXMgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyNC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbHNTZWN0aW9uU3VidGl0bGUpO1xuY29udGFpbmVyNC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbHNTZWN0aW9uVGl0bGUpO1xuY29udGFpbmVyNC5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbHNTZWN0aW9uVGV4dCk7XG5jb250YWluZXI0LmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsc0xpc3QpO1xuXG4vLyBhZGQgY29udGFpbmVyIHRvIHRoZSBzZWN0aW9uXG50ZXN0aW1vbmlhbHNTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcjQpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWRkIHNlY3Rpb25zIHRvIHRoZSBhcnRpY2xlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5hcnRpY2xlSG9tZS5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbik7XG5hcnRpY2xlSG9tZS5hcHBlbmRDaGlsZChwcm9tb1NlY3Rpb24pO1xuYXJ0aWNsZUhvbWUuYXBwZW5kQ2hpbGQoZGVsaXZlcnlTZWN0aW9uKTtcbmFydGljbGVIb21lLmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsc1NlY3Rpb24pO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50IGxpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBtb3ZlIHRoZSBjeWNsZSBvbiBzY3JvbGxcblxubGV0IGRlbGl2ZXJ5Qm95TW92ZSA9IC04MDtcbmxldCBsYXN0U2Nyb2xsUG9zID0gMDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICBsZXQgZGVsaXZlcnlCb3lUb3BQb3MgPSBkZWxpdmVyeUJveUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICBpZiAoZGVsaXZlcnlCb3lUb3BQb3MgPCA1MDAgJiYgZGVsaXZlcnlCb3lUb3BQb3MgPiAtMjUwKSB7XG4gICAgbGV0IGFjdGl2ZVNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgaWYgKGxhc3RTY3JvbGxQb3MgPCBhY3RpdmVTY3JvbGxQb3MpIHtcbiAgICAgIGRlbGl2ZXJ5Qm95TW92ZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxpdmVyeUJveU1vdmUtLTtcbiAgICB9XG5cbiAgICBsYXN0U2Nyb2xsUG9zID0gYWN0aXZlU2Nyb2xsUG9zO1xuICAgIGRlbGl2ZXJ5Qm95SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkZWxpdmVyeUJveU1vdmV9cHgpYDtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVIb21lO1xuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb2QgbWVudSBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lbnUgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VjdGlvbiB3aGl0ZSBmb29kLW1lbnVcIik7XG5tZW51U2VjdGlvbi5pZCA9IFwibWVudVwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIHNlY3Rpb24gc3VidGl0bGVcbmNvbnN0IHNlY3Rpb25TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvblN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXN1YnRpdGxlXCIpO1xuc2VjdGlvblN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJQb3B1bGFyIERpc2hlc1wiO1xuXG4vLyBzZWN0aW9uIHRpdGxlXG5jb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5zZWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoMiBzZWN0aW9uLXRpdGxlXCIpO1xuc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgRGVsaWNpb3VzIFwiO1xuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3Bhbi5jbGFzc0xpc3QuYWRkKFwic3BhblwiKTtcbnNwYW4udGV4dENvbnRlbnQ9IFwiRm9vZHNcIjtcbnNlY3Rpb25UaXRsZS5hcHBlbmRDaGlsZChzcGFuKTtcblxuLy8gc2VjdGlvbiB0ZXh0XG5jb25zdCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvblRleHQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGV4dFwiKTtcbnNlY3Rpb25UZXh0LnRleHRDb250ZW50ID1cbiAgXCJGb29kIGlzIGFueSBzdWJzdGFuY2UgY29uc3VtZWQgdG8gcHJvdmlkZSBudXRyaXRpb25hbCBzdXBwb3J0IGZvciBhbiBvcmdhbmlzbS5cIjtcblxuLy8gZm9vZCBtZW51IGxpc3RcbmNvbnN0IGZvb2RNZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmZvb2RNZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1tZW51LWxpc3RcIik7XG5cbmNvbnN0IGZvb2ROYW1lcyA9IFtcbiAgXCJGcmllZCBDaGlja2VuIFVubGltaXRlZFwiLFxuICBcIkJ1cmd1ZXIgS2luayBXaG9wcGVyXCIsXG4gIFwiV2hpdGUgQ2FzdGxlIFBpenphc1wiLFxuICBcIkJlbGwgQnVycml0byBTdXByZW1lXCIsXG4gIFwiS3VuZyBQYW8gQ2hpY2tlbiBCQlFcIixcbiAgXCJXZW5keSdzIENoaWNrZW5cIixcbl07XG5jb25zdCBkaXNjb3VudHMgPSBbXCItMTUlXCIsIFwiLTEwJVwiLCBcIi0yNSVcIiwgXCItMjAlXCIsIFwiLTUlXCIsIFwiLTE1JVwiXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IGZvb2RNZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RNZW51Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1tZW51LWNhcmRcIik7XG5cbiAgLy8gY2FyZCBiYW5uZXJcbiAgY29uc3QgY2FyZEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRCYW5uZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtYmFubmVyXCIpO1xuXG4gIGNvbnN0IGNhcmRCYW5uZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNhcmRCYW5uZXJJbWFnZS5zcmMgPSBgL3NyYy9hc3NldHMvaW1hZ2VzL2Zvb2QtbWVudS0ke2kgKyAxfS5wbmdgO1xuICBjYXJkQmFubmVySW1hZ2Uud2lkdGggPSBcIjMwMFwiO1xuICBjYXJkQmFubmVySW1hZ2UuaGVpZ2h0ID0gXCIzMDBcIjtcbiAgY2FyZEJhbm5lckltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgY2FyZEJhbm5lci5jbGFzc0xpc3QuYWRkKFwidy0xMDBcIik7XG4gIGNhcmRCYW5uZXIuYWx0ID0gZm9vZE5hbWVzW2ldO1xuICBjYXJkQmFubmVyLmFwcGVuZENoaWxkKGNhcmRCYW5uZXJJbWFnZSk7XG5cbiAgY29uc3QgY2FyZEJhbm5lckJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZEJhbm5lckJhZGdlLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcbiAgY2FyZEJhbm5lckJhZGdlLnRleHRDb250ZW50ID0gZGlzY291bnRzW2ldO1xuICBjYXJkQmFubmVyLmFwcGVuZENoaWxkKGNhcmRCYW5uZXJCYWRnZSk7XG5cbiAgY29uc3QgY2FyZEJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhcmRCYW5uZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gZm9vZC1tZW51LWJ0blwiKTtcbiAgY2FyZEJhbm5lckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG4gIGNhcmRCYW5uZXIuYXBwZW5kQ2hpbGQoY2FyZEJhbm5lckJ1dHRvbik7XG5cbiAgLy8gY2FyZCB0aXRsZVxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gZm9vZE5hbWVzW2ldO1xuXG4gIC8vIGNhcmQgcHJpY2VcbiAgY29uc3QgY2FyZFByaWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRQcmljZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByaWNlLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgcHJpY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpY2UtdGV4dFwiKTtcbiAgcHJpY2VUZXh0LnRleHRDb250ZW50ID0gXCJQcmljZTpcIjtcbiAgY2FyZFByaWNlV3JhcHBlci5hcHBlbmRDaGlsZChwcmljZVRleHQpO1xuXG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFcIik7XG4gIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgcHJpY2UudmFsdWUgPSBcIjQ5LjAwXCI7XG4gIHByaWNlLnRleHRDb250ZW50ID0gXCIkNDkuMDBcIjtcbiAgY2FyZFByaWNlV3JhcHBlci5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRlbFwiKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoXCJkZWxcIik7XG4gIGRlbC50ZXh0Q29udGVudCA9IFwiJDY5LjAwXCI7XG4gIGNhcmRQcmljZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIG1lbnVjYXJkXG4gIGZvb2RNZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkQmFubmVyKTtcbiAgZm9vZE1lbnVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gIGZvb2RNZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkUHJpY2VXcmFwcGVyKTtcblxuICBsaS5hcHBlbmRDaGlsZChmb29kTWVudUNhcmQpO1xuICBmb29kTWVudUxpc3QuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25TdWJ0aXRsZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uVGV4dCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZE1lbnVMaXN0KTtcblxubWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubWVudUFydGljbGUuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgbWVudUFydGljbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBtYWluLCBuYXZiYXJMaW5rcyB9IGZyb20gXCIuL2Jhc2Vfc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgaG9tZUFydGljbGUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGFib3V0QXJ0aWNsZSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IG1lbnVBcnRpY2xlIGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gdXBkYXRlSW5mbyhsaW5rLCBhcnRpY2xlKSB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG4gIH0pO1xufVxuXG5mb3IgKGxldCBsaW5rIG9mIG5hdmJhckxpbmtzKSB7XG4gIHN3aXRjaCAobGluay50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgXCJBYm91dFwiOlxuICAgICAgdXBkYXRlSW5mbyhsaW5rLCBhYm91dEFydGljbGUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgdXBkYXRlSW5mbyhsaW5rLCBob21lQXJ0aWNsZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICB1cGRhdGVJbmZvKGxpbmssIG1lbnVBcnRpY2xlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZUFydGljbGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9