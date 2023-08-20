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
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* -------------------- variables --------------------------------------------*/\n:root {\n    /* Colors */\n    --rich-black-fogra-29: hsl(210, 26%, 7%);\n    --champagne-pink_20: hsla(23, 61%, 86%, 0.2);\n    --independence_30: hsla(245, 17%, 29%, 0.3);\n    --gray-x-11-gray: hsl(0, 0%, 73%);\n    --champagne-pink: hsl(23, 61%, 86%);\n    --spanish-gray: hsl(0, 0%, 60%);\n    --sonic-silver: hsl(0, 0%, 47%);\n    --deep-saffron: hsl(32, 100%, 59%);\n    --dark-orange: hsl(28, 100%, 58%);\n    --desert-sand: hsl(23, 49%, 82%);\n    --isabelline: hsl(38, 44%, 96%);\n    --gainsboro: hsl(0, 0%, 87%);\n    --tangerine: hsl(31, 84%, 50%);\n    --cinnabar: hsl(3, 90%, 55%);\n    --black_95: hsla(0, 0%, 0%, 0.95);\n    --cultured: hsl(0, 0%, 93%);\n    --white: hsl(0, 0%, 100%);\n    --black: hsl(0, 0%, 0%);\n    --onyx: hsl(0, 0%, 27%);\n\n    /* Typography */\n    --ff-shadows-into-light: 'Shadows Into Light', cursive;\n    --ff-roboto: 'Roboto', sans-serif;\n    --ff-rubik: 'Rubik', sans-serif;\n\n    --fs-1: 3.2rem;\n    --fs-2: 2.2rem;\n    --fs-3: 1.8rem;\n    --fs-4: 1.4rem;\n    --fs-5: 1.2rem;\n\n    --fw-500: 500;\n    --fw-600: 600;\n    --fw-700: 700;\n\n    /* spacing */\n    --section-padding: 60px;\n\n    /* shadow */\n    --shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.2);\n    --shadow-2: 0 1px 2px hsla(0, 0%, 0%, 0.2);\n\n    /* transition */\n    --transition-1: 0.25s ease;\n    --transition-2: 0.5s ease;\n\n    /* clip-path */\n    --clip-path-1: polygon(0 40%, 100% 0%, 100% 100%, 0 100%);\n    --clip-path-2: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);\n}\n\n/* ------------------ css reset --------------------------------------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na,\nimg,\nsvg,\nspan,\ninput,\nselect,\nbutton,\ntextarea {\n    display: block;\n}\n\nimg {\n    height: auto;\n}\n\ninput,\nselect,\nbutton,\ntextarea {\n    background: none;\n    border: none;\n    /* font: inherit; */\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nhtml {\n    font-family: var(--ff-roboto);\n    font-size: 10px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--white);\n    color: var(--sonic-silver);\n    font-size: 1.6rem;\n    line-height: 1.6;\n    overflow-x: hidden;\n}\n\nbody.active {\n    overflow: hidden;\n}\n\n:focus-visible {\n    outline-offset: 4px;\n}\n\n::selection {\n    background-color: var(--deep-saffron);\n    color: var(--white);\n}\n\n\n/* ------------------------- reused style ------------------------------------*/\n\n.container {\n    padding-inline: 15px;\n}\n\n.h1,\n.h2,\n.h3,\n.h4 {\n    font-family: var(--ff-rubik);\n    color: var(--rich-black-fogra-29);\n    line-height: 1.2;\n    letter-spacing: -1px;\n}\n\n.h1,\n.h2 {\n    font-size: var(--fs-1);\n}\n\n.h2,\n.h3,\n.h4 {\n    font-weight: var(--fw-600);\n}\n\n.h3 {\n    font-size: var(--fs-2);\n}\n\n.h4 {\n    font-size: var(--fs-3);\n}\n\n.btn {\n    background-color: var(--bg-color, var(--deep-saffron));\n    color: var(--white);\n    font-family: var(--ff-rubik);\n    font-size: var(--fs-4);\n    font-weight: var(--fw-500);\n    height: var(--heigh, 45px);\n    padding-inline: var(--padding-inline, 35px);\n    transition: var(--transition-1);\n}\n\n.btn-hover {\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.btn-hover::after {\n    content: \"\";\n    position: absolute;\n    bottom: -1px;\n    left: 20px;\n    width: 1px;\n    height: 1px;\n    transform: scale(var(--scale, 1));\n    border-radius: 50%;\n    background-color: var(--rich-black-fogra-29);\n    z-index: -1;\n    transition: var(--transition-2);\n}\n\n.btn-hover:is(:hover, :focus)::after {\n    --scale: 500;\n}\n\n.section {\n    padding-block: var(--section-padding);\n}\n\n.section.white {\n    background-color: var(--isabelline);\n}\n\n.section-divider {\n    position: relative;\n}\n\n.section-divider::before,\n.section-divider::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 15px;\n    background-repeat: repeat no-repeat;\n    background-position: bottom;\n}\n\n.section-divider.white::after {\n    background-image: url(/src/assets/images/shape-white.png);\n}\n\n.section-divider.grey::after {\n    background-image: url(/src/assets/images/shape-grey.png);\n}\n\n.w-100 {\n    width: 100%;\n}\n\n.has-scrollbar {\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n    padding-block-end: 40px;\n\n    /* scroll slider property of the container element */\n    scroll-snap-type: inline mandatory;\n}\n\n.abs-img {\n    position: absolute;\n    transform: scale(1);\n}\n\n.scale-up-anim {\n    animation: scaleUp 1s linear infinite alternate;\n}\n\n@keyframes scaleUp {\n    0% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(1.05);\n    }\n}\n\n.section-title > .span {\n    display: inline-block;\n    color: var(--deep-saffron);\n}\n\n.section-subtitle {\n    color: var(--cinnabar);\n    font-family: var(--ff-rubik);\n    text-align: center;\n    font-weight: var(--fw-500);\n}\n\n.badge {\n    position: absolute;\n    background-color: var(--bg-color, var(--cinnabar));\n    color: var(--white);\n    font-size: var(--fs-5);\n    font-weight: var(--fw-600);\n    padding: var(--paffing-block, 2px) 15px;\n}\n\n/* ------------------------------ header -------------------------------------*/\n\n/* set the initial style of the header */\n.header {\n    --color: var(--white);\n    --btn-color: var(--champagne-pink);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-block: 20px;\n    border-block-end: 1px solid var(--champagne-pink_20);\n    z-index: 4;\n}\n\n/* create the style of the header when active */\n/* use position relative to position based on the viewport*/\n/* change the defined variables for colors */\n.header.active {\n    --color: var(--rich-black-fogra-29);\n    --btn-color: var(--rich-black-fogra-29);\n\n    position: fixed;\n    top: -86px;\n    background-color: var(--white);\n    box-shadow: var(--shadow-1);\n    animation: slideIn 0.5s ease-out forwards;\n}\n\n/* set the animation of the header when active*/\n@keyframes slideIn {\n    0% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(100%);\n    }\n}\n\n/* set the header container with displat flex in order to \nposition the elements */\n.header .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n/* style the logo elements */\n.logo {\n    color: var(--color);\n    font-family: var(--ff-rubik);\n    font-size: 2.8rem;\n    font-weight: var(--fw-700);\n    letter-spacing: -2px;\n}\n\n.logo .span {\n    display: inline-block;\n    color: var(--deep-saffron);\n}\n\n/* style the button group */\n.header-btn-group {\n    display: flex;\n    align-items: center;\n}\n\n/* style the button that shows the navbar */\n.nav-toggle-btn {\n    display: grid;\n    gap: 4px;\n}\n\n.line {\n    width: 10px;\n    height: 3px;\n    background-color: var(--btn-color);\n    border-radius: 5px;\n    transition: var(--transition-1);\n}\n\n.line.middle {\n    width: 20px;\n}\n\n.line.bottom {\n    margin-left: auto;\n}\n\n/* set the transform to transition when active */\n.nav-toggle-btn.active .line.top {\n    transform: translate(1px, 3px) rotate(45deg);\n}\n\n.nav-toggle-btn.active .line.middle {\n    transform: rotate(-45deg);\n}\n\n.nav-toggle-btn.active .line.bottom {\n    transform: translate(-1px, -3px) rotate(45deg);\n}\n\n/* style the navbar of the header*/\n.navbar {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: calc(100% - 30px);\n    background-color: var(--white);\n    padding-inline: 20px;\n    box-shadow: var(--shadow-1);\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    transition: var(--transition-1);\n}\n\n.navbar.active {\n    height: 236px;\n    visibility: visible;\n}\n\n/* style the list of elements of the navbar */\n.navbar-list {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-item {\n    flex-grow: 1;\n}\n\n.nav-item:not(:last-child) {\n    border-block-end: 1px solid hsla(0, 0%, 0%, 0.04);\n}\n\n/* style the links of the navbar list of options */\n.navbar-link {\n    color: var(--rich-black-fogra-29);\n    font-size: var(--fs-4);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n    transition: var(--transition-1);\n    padding: 18.5px 15px;\n}\n\n.navbar-link:is(:hover, :focus) {\n    color: var(--dark-orange);\n}\n\n/* ------------------- main ---------------------------------------*/\n\n/* hero - home */\n\n.hero {\n    background-image: url(/src/assets/images/hero-bg.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    padding-block: 145px 60px;\n    text-align: center;\n}\n\n.hero-subtitle {\n    color: var(--dark-orange);\n    font-family: var(--ff-shadows-into-light);\n    font-size: var(--fs-3);\n    letter-spacing: 1px;\n    margin-block-end: 25px;\n}\n\n.hero-title {\n    color: var(--champagne-pink);\n    max-width: 12ch;\n    margin-inline: auto;\n}\n\n.hero-text {\n    color: var(--desert-sand);\n    margin-block: 15px 30px;\n    max-width: 44ch;\n    margin-inline: auto;\n}\n\n.hero-banner {\n    display: none;\n}\n\n.hero .btn {\n    margin-inline: auto;\n}\n\n.hero .btn:is(:hover, :focus) {\n    background-color: var(--white);\n    color: var(--black);\n}\n\n/* promo section*/\n\n.promo-card {\n    position: relative;\n    background-color: var(--white);\n    text-align: center;\n    padding: 40px 30px;\n    box-shadow: var(--shadow-2);\n    z-index: 1;\n}\n\n.promo-card::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-color: var(--deep-saffron);\n    clip-path: var(--clip-path-1);\n    transform: scaleY(0.3);\n    transform-origin: bottom;\n    z-index: -1;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover::after {\n    clip-path: var(--clip-path-2);\n    transform: scaleY(1);\n}\n\n.promo-card .card-icon img {\n    margin-inline: auto;\n}\n\n.promo-card:hover .card-icon img {\n    background-color: var(--white);\n    border-radius: 40%;\n}\n\n.promo-card .card-title {\n    margin-block: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover :is(.card-title, .card-text) {\n    color: var(--white);\n}\n\n.promo-card .card-text {\n    margin-block-end: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card .card-banner {\n    max-width: max-content;\n    margin-inline: auto;\n    aspect-ratio: 1 / 1;\n}\n\n.promo-item {\n    min-width: 100%;\n    scroll-snap-align: start;\n}\n\n/* ------------------------------- about section --------------------------*/\n\narticle .about {\n    padding-block-start: 145px;\n}\n\n.about {\n    text-align: center;\n}\n\n.about-banner {\n    position: relative;\n    aspect-ratio: 1 / 0.9;\n}\n\n.about-img {\n    max-width: max-content;\n    margin-inline: auto;\n}\n\n.about-banner .abs-img {\n    top: 0;\n    left: 100px;\n}\n\n.about .section-title {\n    max-width: 15ch;\n    margin-block: 40px 10px;\n    margin-inline: auto;\n}\n\n.about .about-list {\n    margin-block: 20px 30px;\n}\n\n.about .about-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.about .about-item:not(:last-child) {\n    margin-block-end: 10px;\n}\n\n.about-item i {\n    color: var(--deep-saffron);\n}\n\n.about-item .span {\n    color: var(--rich-black-fogra-29);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n}\n\n.about .btn {\n    margin-inline: auto;\n}\n\n/* -------------------- food menu section ---------------------------*/\n\n.food-menu {\n    text-align: center;\n    padding-block-start: 145px;\n}\n\n.food-menu .section-title {\n    margin-block: 10px 20px;\n}\n\n.food-menu .section-text {\n    max-width: 44ch;\n    margin-inline: auto;\n    margin-block-end: 30px;\n}\n\n.food-menu-list {\n    display: grid;\n    row-gap: 30px;\n}\n\n.food-menu-card {\n    background-color: var(--white);\n    padding: 40px;\n    box-shadow: var(--shadow-2);\n}\n\n.food-menu-card:focus-within {\n    outline: 1px auto -webkit-focus-ring-color;\n}\n\n.food-menu-card .card-banner {\n    position: relative;\n    padding-block-start: 30px;\n    max-width: max-content;\n    aspect-ratio: 1 / 1;\n    margin-inline: auto;\n}\n\n.food-menu-card .badge {\n    top: 0;\n    left: 0;\n}\n\n.food-menu-btn {\n    position: absolute;\n    top: calc(50% + 15px);\n    left: 50%;\n    transform: translateX(-50%);\n    min-width: max-content;\n    --bg-color: var(--cinnabar);\n    width: 60%;\n    --padding-inline: 20px;\n    opacity: 0;\n    transition: var(--transition-2);\n}\n\n.food-menu-btn:is(:focus, :hover) {\n    --bg-color: var(--deep-saffron);\n}\n\n.food-menu-card:is(:hover, :focus-within) .food-menu-btn{\n    transform: translate(-50%, -50%);\n    opacity: 1;\n}\n\n.food-menu-card .card-title {\n    margin-block: 20px 10px;    \n}\n\n.food-menu-card .price-wrapper {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-600);\n}\n\n.food-menu-card .price-text {\n    color: var(--cinnabar);\n    text-transform: uppercase;\n    padding-inline-end: 5px;\n}\n\n.food-menu-card .price {\n    color: var(--deep-saffron);\n}\n\n.food-menu-card .del {\n    color: var(--gray-x-11-gray);\n}\n\n/* -------------------------- delivery section -------------------------------*/\n\n.delivery-content {\n    margin-block-end: 40px;\n}\n\n.delivery .section-title {\n    max-width: 17ch;\n    line-height: 1.6;\n    letter-spacing: -2px;\n    }\n\n.delivery .section-text {\n    margin-block: 15px 25px;\n}\n\n.delivery-banner {\n    position: relative;\n    aspect-ratio: 1/ 0.86;\n}\n\n.delivery-banner .delivery-img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translateX(-80px);\n    transform: var(--transition-2)\n}"],"sourceRoot":""}]);
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

/* --------------------- add sections to the article ------------------------ */

articleHome.appendChild(heroSection);
articleHome.appendChild(promoSection);

/* ------------------------- event listeners ---------------------------------*/

// move the cycle on scroll

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", () => {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove++;
    }else{
      deliveryBoyMove--;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLGtLQUFxRDtBQUNqRyw0Q0FBNEMsZ0tBQW9EO0FBQ2hHLDRDQUE0QywwSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtR0FBbUcsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxhQUFhLE1BQU0sWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFL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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRzVCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EscUNBQXFDLElBQUk7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEdEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDbEsxQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEgzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDO0FBQ3VCO0FBQ3BCO0FBQ0U7QUFDRjs7QUFFcEM7QUFDQTtBQUNBLFdBQVcsb0RBQUk7QUFDZixNQUFNLG9EQUFJLGFBQWEsb0RBQUk7QUFDM0I7QUFDQSxJQUFJLG9EQUFJO0FBQ1IsR0FBRztBQUNIOztBQUVBLGlCQUFpQiwyREFBVztBQUM1QjtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFZO0FBQ25DOztBQUVBO0FBQ0EsdUJBQXVCLGdEQUFXO0FBQ2xDOztBQUVBO0FBQ0EsdUJBQXVCLGdEQUFXO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFJLGFBQWEsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcz9mZTVlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYmFzZV9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS13aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2hhcGUtZ3JleS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWFnZXMvaGVyby1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbjpyb290IHtcbiAgICAvKiBDb2xvcnMgKi9cbiAgICAtLXJpY2gtYmxhY2stZm9ncmEtMjk6IGhzbCgyMTAsIDI2JSwgNyUpO1xuICAgIC0tY2hhbXBhZ25lLXBpbmtfMjA6IGhzbGEoMjMsIDYxJSwgODYlLCAwLjIpO1xuICAgIC0taW5kZXBlbmRlbmNlXzMwOiBoc2xhKDI0NSwgMTclLCAyOSUsIDAuMyk7XG4gICAgLS1ncmF5LXgtMTEtZ3JheTogaHNsKDAsIDAlLCA3MyUpO1xuICAgIC0tY2hhbXBhZ25lLXBpbms6IGhzbCgyMywgNjElLCA4NiUpO1xuICAgIC0tc3BhbmlzaC1ncmF5OiBoc2woMCwgMCUsIDYwJSk7XG4gICAgLS1zb25pYy1zaWx2ZXI6IGhzbCgwLCAwJSwgNDclKTtcbiAgICAtLWRlZXAtc2FmZnJvbjogaHNsKDMyLCAxMDAlLCA1OSUpO1xuICAgIC0tZGFyay1vcmFuZ2U6IGhzbCgyOCwgMTAwJSwgNTglKTtcbiAgICAtLWRlc2VydC1zYW5kOiBoc2woMjMsIDQ5JSwgODIlKTtcbiAgICAtLWlzYWJlbGxpbmU6IGhzbCgzOCwgNDQlLCA5NiUpO1xuICAgIC0tZ2FpbnNib3JvOiBoc2woMCwgMCUsIDg3JSk7XG4gICAgLS10YW5nZXJpbmU6IGhzbCgzMSwgODQlLCA1MCUpO1xuICAgIC0tY2lubmFiYXI6IGhzbCgzLCA5MCUsIDU1JSk7XG4gICAgLS1ibGFja185NTogaHNsYSgwLCAwJSwgMCUsIDAuOTUpO1xuICAgIC0tY3VsdHVyZWQ6IGhzbCgwLCAwJSwgOTMlKTtcbiAgICAtLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIC0tYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xuICAgIC0tb255eDogaHNsKDAsIDAlLCAyNyUpO1xuXG4gICAgLyogVHlwb2dyYXBoeSAqL1xuICAgIC0tZmYtc2hhZG93cy1pbnRvLWxpZ2h0OiAnU2hhZG93cyBJbnRvIExpZ2h0JywgY3Vyc2l2ZTtcbiAgICAtLWZmLXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgLS1mZi1ydWJpazogJ1J1YmlrJywgc2Fucy1zZXJpZjtcblxuICAgIC0tZnMtMTogMy4ycmVtO1xuICAgIC0tZnMtMjogMi4ycmVtO1xuICAgIC0tZnMtMzogMS44cmVtO1xuICAgIC0tZnMtNDogMS40cmVtO1xuICAgIC0tZnMtNTogMS4ycmVtO1xuXG4gICAgLS1mdy01MDA6IDUwMDtcbiAgICAtLWZ3LTYwMDogNjAwO1xuICAgIC0tZnctNzAwOiA3MDA7XG5cbiAgICAvKiBzcGFjaW5nICovXG4gICAgLS1zZWN0aW9uLXBhZGRpbmc6IDYwcHg7XG5cbiAgICAvKiBzaGFkb3cgKi9cbiAgICAtLXNoYWRvdy0xOiAwIDFweCA0cHggaHNsYSgwLCAwJSwgMCUsIDAuMik7XG4gICAgLS1zaGFkb3ctMjogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xuXG4gICAgLyogdHJhbnNpdGlvbiAqL1xuICAgIC0tdHJhbnNpdGlvbi0xOiAwLjI1cyBlYXNlO1xuICAgIC0tdHJhbnNpdGlvbi0yOiAwLjVzIGVhc2U7XG5cbiAgICAvKiBjbGlwLXBhdGggKi9cbiAgICAtLWNsaXAtcGF0aC0xOiBwb2x5Z29uKDAgNDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gICAgLS1jbGlwLXBhdGgtMjogcG9seWdvbigwIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLSBjc3MgcmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYSxcbmltZyxcbnN2ZyxcbnNwYW4sXG5pbnB1dCxcbnNlbGVjdCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbmlucHV0LFxuc2VsZWN0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIGZvbnQ6IGluaGVyaXQ7ICovXG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJvYm90byk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmJvZHkuYWN0aXZlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDRweDtcbn1cblxuOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJldXNlZCBzdHlsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWlubGluZTogMTVweDtcbn1cblxuLmgxLFxuLmgyLFxuLmgzLFxuLmg0IHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuXG4uaDEsXG4uaDIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtMSk7XG59XG5cbi5oMixcbi5oMyxcbi5oNCB7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTYwMCk7XG59XG5cbi5oMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0yKTtcbn1cblxuLmg0IHtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTMpO1xufVxuXG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvciwgdmFyKC0tZGVlcC1zYWZmcm9uKSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaCwgNDVweCk7XG4gICAgcGFkZGluZy1pbmxpbmU6IHZhcigtLXBhZGRpbmctaW5saW5lLCAzNXB4KTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4uYnRuLWhvdmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYnRuLWhvdmVyOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLXNjYWxlLCAxKSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMik7XG59XG5cbi5idG4taG92ZXI6aXMoOmhvdmVyLCA6Zm9jdXMpOjphZnRlciB7XG4gICAgLS1zY2FsZTogNTAwO1xufVxuXG4uc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb24ud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlzYWJlbGxpbmUpO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyLndoaXRlOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyLmdyZXk6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi53LTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctYmxvY2stZW5kOiA0MHB4O1xuXG4gICAgLyogc2Nyb2xsIHNsaWRlciBwcm9wZXJ0eSBvZiB0aGUgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgICBzY3JvbGwtc25hcC10eXBlOiBpbmxpbmUgbWFuZGF0b3J5O1xufVxuXG4uYWJzLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zY2FsZS11cC1hbmltIHtcbiAgICBhbmltYXRpb246IHNjYWxlVXAgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBzY2FsZVVwIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbn1cblxuLnNlY3Rpb24tdGl0bGUgPiAuc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcbn1cblxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IsIHZhcigtLWNpbm5hYmFyKSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTUpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy02MDApO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZmZpbmctYmxvY2ssIDJweCkgMTVweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogc2V0IHRoZSBpbml0aWFsIHN0eWxlIG9mIHRoZSBoZWFkZXIgKi9cbi5oZWFkZXIge1xuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAtLWJ0bi1jb2xvcjogdmFyKC0tY2hhbXBhZ25lLXBpbmspO1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIHZhcigtLWNoYW1wYWduZS1waW5rXzIwKTtcbiAgICB6LWluZGV4OiA0O1xufVxuXG4vKiBjcmVhdGUgdGhlIHN0eWxlIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUgKi9cbi8qIHVzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgdmlld3BvcnQqL1xuLyogY2hhbmdlIHRoZSBkZWZpbmVkIHZhcmlhYmxlcyBmb3IgY29sb3JzICovXG4uaGVhZGVyLmFjdGl2ZSB7XG4gICAgLS1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XG4gICAgLS1idG4tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTg2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC41cyBlYXNlLW91dCBmb3J3YXJkcztcbn1cblxuLyogc2V0IHRoZSBhbmltYXRpb24gb2YgdGhlIGhlYWRlciB3aGVuIGFjdGl2ZSovXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gICAgfVxufVxuXG4vKiBzZXQgdGhlIGhlYWRlciBjb250YWluZXIgd2l0aCBkaXNwbGF0IGZsZXggaW4gb3JkZXIgdG8gXG5wb3NpdGlvbiB0aGUgZWxlbWVudHMgKi9cbi5oZWFkZXIgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi8qIHN0eWxlIHRoZSBsb2dvIGVsZW1lbnRzICovXG4ubG9nbyB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xufVxuXG4ubG9nbyAuc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xufVxuXG4vKiBzdHlsZSB0aGUgYnV0dG9uIGdyb3VwICovXG4uaGVhZGVyLWJ0bi1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBzdHlsZSB0aGUgYnV0dG9uIHRoYXQgc2hvd3MgdGhlIG5hdmJhciAqL1xuLm5hdi10b2dnbGUtYnRuIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNHB4O1xufVxuXG4ubGluZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbn1cblxuLmxpbmUubWlkZGxlIHtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxpbmUuYm90dG9tIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLyogc2V0IHRoZSB0cmFuc2Zvcm0gdG8gdHJhbnNpdGlvbiB3aGVuIGFjdGl2ZSAqL1xuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS50b3Age1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgM3B4KSByb3RhdGUoNDVkZWcpO1xufVxuXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLm1pZGRsZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS5ib3R0b20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0zcHgpIHJvdGF0ZSg0NWRlZyk7XG59XG5cbi8qIHN0eWxlIHRoZSBuYXZiYXIgb2YgdGhlIGhlYWRlciovXG4ubmF2YmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBwYWRkaW5nLWlubGluZTogMjBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5uYXZiYXIuYWN0aXZlIHtcbiAgICBoZWlnaHQ6IDIzNnB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8qIHN0eWxlIHRoZSBsaXN0IG9mIGVsZW1lbnRzIG9mIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXItbGlzdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5uYXYtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMCUsIDAuMDQpO1xufVxuXG4vKiBzdHlsZSB0aGUgbGlua3Mgb2YgdGhlIG5hdmJhciBsaXN0IG9mIG9wdGlvbnMgKi9cbi5uYXZiYXItbGluayB7XG4gICAgY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNCk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xuICAgIHBhZGRpbmc6IDE4LjVweCAxNXB4O1xufVxuXG4ubmF2YmFyLWxpbms6aXMoOmhvdmVyLCA6Zm9jdXMpIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tIG1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogaGVybyAtIGhvbWUgKi9cblxuLmhlcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmctYmxvY2s6IDE0NXB4IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVyby1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtc2hhZG93cy1pbnRvLWxpZ2h0KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTMpO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMjVweDtcbn1cblxuLmhlcm8tdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1jaGFtcGFnbmUtcGluayk7XG4gICAgbWF4LXdpZHRoOiAxMmNoO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5oZXJvLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS1kZXNlcnQtc2FuZCk7XG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4IDMwcHg7XG4gICAgbWF4LXdpZHRoOiA0NGNoO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5oZXJvLWJhbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlcm8gLmJ0biB7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmhlcm8gLmJ0bjppcyg6aG92ZXIsIDpmb2N1cykge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xufVxuXG4vKiBwcm9tbyBzZWN0aW9uKi9cblxuLnByb21vLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLnByb21vLWNhcmQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xuICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1wYXRoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuMyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5wcm9tby1jYXJkOmhvdmVyOjphZnRlciB7XG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXBhdGgtMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5wcm9tby1jYXJkIC5jYXJkLWljb24gaW1nIHtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4ucHJvbW8tY2FyZDpob3ZlciAuY2FyZC1pY29uIGltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcbn1cblxuLnByb21vLWNhcmQgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ibG9jazogMTVweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ucHJvbW8tY2FyZDpob3ZlciA6aXMoLmNhcmQtdGl0bGUsIC5jYXJkLXRleHQpIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4ucHJvbW8tY2FyZCAuY2FyZC10ZXh0IHtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5wcm9tby1jYXJkIC5jYXJkLWJhbm5lciB7XG4gICAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG59XG5cbi5wcm9tby1pdGVtIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFib3V0IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5hcnRpY2xlIC5hYm91dCB7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDogMTQ1cHg7XG59XG5cbi5hYm91dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWJvdXQtYmFubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMC45O1xufVxuXG4uYWJvdXQtaW1nIHtcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5hYm91dC1iYW5uZXIgLmFicy1pbWcge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAxMDBweDtcbn1cblxuLmFib3V0IC5zZWN0aW9uLXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDE1Y2g7XG4gICAgbWFyZ2luLWJsb2NrOiA0MHB4IDEwcHg7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmFib3V0IC5hYm91dC1saXN0IHtcbiAgICBtYXJnaW4tYmxvY2s6IDIwcHggMzBweDtcbn1cblxuLmFib3V0IC5hYm91dC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uYWJvdXQgLmFib3V0LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTBweDtcbn1cblxuLmFib3V0LWl0ZW0gaSB7XG4gICAgY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XG59XG5cbi5hYm91dC1pdGVtIC5zcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcbn1cblxuLmFib3V0IC5idG4ge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb2QgbWVudSBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5mb29kLW1lbnUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNDVweDtcbn1cblxuLmZvb2QtbWVudSAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWFyZ2luLWJsb2NrOiAxMHB4IDIwcHg7XG59XG5cbi5mb29kLW1lbnUgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA0NGNoO1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMzBweDtcbn1cblxuLmZvb2QtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHJvdy1nYXA6IDMwcHg7XG59XG5cbi5mb29kLW1lbnUtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTIpO1xufVxuXG4uZm9vZC1tZW51LWNhcmQ6Zm9jdXMtd2l0aGluIHtcbiAgICBvdXRsaW5lOiAxcHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XG59XG5cbi5mb29kLW1lbnUtY2FyZCAuY2FyZC1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAzMHB4O1xuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uZm9vZC1tZW51LWNhcmQgLmJhZGdlIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmZvb2QtbWVudS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlICsgMTVweCk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xuICAgIC0tYmctY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcbiAgICB3aWR0aDogNjAlO1xuICAgIC0tcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTIpO1xufVxuXG4uZm9vZC1tZW51LWJ0bjppcyg6Zm9jdXMsIDpob3Zlcikge1xuICAgIC0tYmctY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XG59XG5cbi5mb29kLW1lbnUtY2FyZDppcyg6aG92ZXIsIDpmb2N1cy13aXRoaW4pIC5mb29kLW1lbnUtYnRue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5mb29kLW1lbnUtY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDEwcHg7ICAgIFxufVxuXG4uZm9vZC1tZW51LWNhcmQgLnByaWNlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcbn1cblxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tY2lubmFiYXIpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XG59XG5cbi5mb29kLW1lbnUtY2FyZCAucHJpY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xufVxuXG4uZm9vZC1tZW51LWNhcmQgLmRlbCB7XG4gICAgY29sb3I6IHZhcigtLWdyYXkteC0xMS1ncmF5KTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVsaXZlcnkgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmRlbGl2ZXJ5LWNvbnRlbnQge1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDQwcHg7XG59XG5cbi5kZWxpdmVyeSAuc2VjdGlvbi10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAxN2NoO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgfVxuXG4uZGVsaXZlcnkgLnNlY3Rpb24tdGV4dCB7XG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4IDI1cHg7XG59XG5cbi5kZWxpdmVyeS1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhc3BlY3QtcmF0aW86IDEvIDAuODY7XG59XG5cbi5kZWxpdmVyeS1iYW5uZXIgLmRlbGl2ZXJ5LWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XG4gICAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2l0aW9uLTIpXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtFQUErRTtBQUMvRTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsaUNBQWlDO0lBQ2pDLCtCQUErQjs7SUFFL0IsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7O0lBRWQsYUFBYTtJQUNiLGFBQWE7SUFD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Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBLCtFQUErRTs7QUFFL0U7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQjs7QUFFSjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCw0QkFBNEI7SUFDNUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbjpyb290IHtcXG4gICAgLyogQ29sb3JzICovXFxuICAgIC0tcmljaC1ibGFjay1mb2dyYS0yOTogaHNsKDIxMCwgMjYlLCA3JSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbmtfMjA6IGhzbGEoMjMsIDYxJSwgODYlLCAwLjIpO1xcbiAgICAtLWluZGVwZW5kZW5jZV8zMDogaHNsYSgyNDUsIDE3JSwgMjklLCAwLjMpO1xcbiAgICAtLWdyYXkteC0xMS1ncmF5OiBoc2woMCwgMCUsIDczJSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbms6IGhzbCgyMywgNjElLCA4NiUpO1xcbiAgICAtLXNwYW5pc2gtZ3JheTogaHNsKDAsIDAlLCA2MCUpO1xcbiAgICAtLXNvbmljLXNpbHZlcjogaHNsKDAsIDAlLCA0NyUpO1xcbiAgICAtLWRlZXAtc2FmZnJvbjogaHNsKDMyLCAxMDAlLCA1OSUpO1xcbiAgICAtLWRhcmstb3JhbmdlOiBoc2woMjgsIDEwMCUsIDU4JSk7XFxuICAgIC0tZGVzZXJ0LXNhbmQ6IGhzbCgyMywgNDklLCA4MiUpO1xcbiAgICAtLWlzYWJlbGxpbmU6IGhzbCgzOCwgNDQlLCA5NiUpO1xcbiAgICAtLWdhaW5zYm9ybzogaHNsKDAsIDAlLCA4NyUpO1xcbiAgICAtLXRhbmdlcmluZTogaHNsKDMxLCA4NCUsIDUwJSk7XFxuICAgIC0tY2lubmFiYXI6IGhzbCgzLCA5MCUsIDU1JSk7XFxuICAgIC0tYmxhY2tfOTU6IGhzbGEoMCwgMCUsIDAlLCAwLjk1KTtcXG4gICAgLS1jdWx0dXJlZDogaHNsKDAsIDAlLCA5MyUpO1xcbiAgICAtLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1vbnl4OiBoc2woMCwgMCUsIDI3JSk7XFxuXFxuICAgIC8qIFR5cG9ncmFwaHkgKi9cXG4gICAgLS1mZi1zaGFkb3dzLWludG8tbGlnaHQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xcbiAgICAtLWZmLXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIC0tZmYtcnViaWs6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC0tZnMtMTogMy4ycmVtO1xcbiAgICAtLWZzLTI6IDIuMnJlbTtcXG4gICAgLS1mcy0zOiAxLjhyZW07XFxuICAgIC0tZnMtNDogMS40cmVtO1xcbiAgICAtLWZzLTU6IDEuMnJlbTtcXG5cXG4gICAgLS1mdy01MDA6IDUwMDtcXG4gICAgLS1mdy02MDA6IDYwMDtcXG4gICAgLS1mdy03MDA6IDcwMDtcXG5cXG4gICAgLyogc3BhY2luZyAqL1xcbiAgICAtLXNlY3Rpb24tcGFkZGluZzogNjBweDtcXG5cXG4gICAgLyogc2hhZG93ICovXFxuICAgIC0tc2hhZG93LTE6IDAgMXB4IDRweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcXG4gICAgLS1zaGFkb3ctMjogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xcblxcbiAgICAvKiB0cmFuc2l0aW9uICovXFxuICAgIC0tdHJhbnNpdGlvbi0xOiAwLjI1cyBlYXNlO1xcbiAgICAtLXRyYW5zaXRpb24tMjogMC41cyBlYXNlO1xcblxcbiAgICAvKiBjbGlwLXBhdGggKi9cXG4gICAgLS1jbGlwLXBhdGgtMTogcG9seWdvbigwIDQwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgICAtLWNsaXAtcGF0aC0yOiBwb2x5Z29uKDAgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNzcyByZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYSxcXG5pbWcsXFxuc3ZnLFxcbnNwYW4sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGZvbnQ6IGluaGVyaXQ7ICovXFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcm9ib3RvKTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkuYWN0aXZlIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xcbn1cXG5cXG46OnNlbGVjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmV1c2VkIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxNXB4O1xcbn1cXG5cXG4uaDEsXFxuLmgyLFxcbi5oMyxcXG4uaDQge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbn1cXG5cXG4uaDEsXFxuLmgyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0xKTtcXG59XFxuXFxuLmgyLFxcbi5oMyxcXG4uaDQge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG59XFxuXFxuLmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0yKTtcXG59XFxuXFxuLmg0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1kZWVwLXNhZmZyb24pKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxuICAgIGhlaWdodDogdmFyKC0taGVpZ2gsIDQ1cHgpO1xcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1pbmxpbmUsIDM1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4uYnRuLWhvdmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYnRuLWhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTFweDtcXG4gICAgbGVmdDogMjBweDtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tc2NhbGUsIDEpKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMik7XFxufVxcblxcbi5idG4taG92ZXI6aXMoOmhvdmVyLCA6Zm9jdXMpOjphZnRlciB7XFxuICAgIC0tc2NhbGU6IDUwMDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi53aGl0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlzYWJlbGxpbmUpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUsXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbi5zZWN0aW9uLWRpdmlkZXIud2hpdGU6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS13aGl0ZS5wbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyLmdyZXk6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS1ncmV5LnBuZyk7XFxufVxcblxcbi53LTEwMCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGFzLXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDQwcHg7XFxuXFxuICAgIC8qIHNjcm9sbCBzbGlkZXIgcHJvcGVydHkgb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50ICovXFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XFxufVxcblxcbi5hYnMtaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4uc2NhbGUtdXAtYW5pbSB7XFxuICAgIGFuaW1hdGlvbjogc2NhbGVVcCAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgfVxcbn1cXG5cXG4uc2VjdGlvbi10aXRsZSA+IC5zcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG59XFxuXFxuLnNlY3Rpb24tc3VidGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2lubmFiYXIpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy01MDApO1xcbn1cXG5cXG4uYmFkZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1jaW5uYWJhcikpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTUpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG4gICAgcGFkZGluZzogdmFyKC0tcGFmZmluZy1ibG9jaywgMnB4KSAxNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi8qIHNldCB0aGUgaW5pdGlhbCBzdHlsZSBvZiB0aGUgaGVhZGVyICovXFxuLmhlYWRlciB7XFxuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgdmFyKC0tY2hhbXBhZ25lLXBpbmtfMjApO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4vKiBjcmVhdGUgdGhlIHN0eWxlIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUgKi9cXG4vKiB1c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9zaXRpb24gYmFzZWQgb24gdGhlIHZpZXdwb3J0Ki9cXG4vKiBjaGFuZ2UgdGhlIGRlZmluZWQgdmFyaWFibGVzIGZvciBjb2xvcnMgKi9cXG4uaGVhZGVyLmFjdGl2ZSB7XFxuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xcbiAgICAtLWJ0bi1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtODZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4vKiBzZXQgdGhlIGFuaW1hdGlvbiBvZiB0aGUgaGVhZGVyIHdoZW4gYWN0aXZlKi9cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxuICAgIH1cXG59XFxuXFxuLyogc2V0IHRoZSBoZWFkZXIgY29udGFpbmVyIHdpdGggZGlzcGxhdCBmbGV4IGluIG9yZGVyIHRvIFxcbnBvc2l0aW9uIHRoZSBlbGVtZW50cyAqL1xcbi5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgbG9nbyBlbGVtZW50cyAqL1xcbi5sb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG59XFxuXFxuLmxvZ28gLnNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgYnV0dG9uIGdyb3VwICovXFxuLmhlYWRlci1idG4tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgYnV0dG9uIHRoYXQgc2hvd3MgdGhlIG5hdmJhciAqL1xcbi5uYXYtdG9nZ2xlLWJ0biB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ubGluZS5taWRkbGUge1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmxpbmUuYm90dG9tIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi8qIHNldCB0aGUgdHJhbnNmb3JtIHRvIHRyYW5zaXRpb24gd2hlbiBhY3RpdmUgKi9cXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLnRvcCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgM3B4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLm1pZGRsZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUuYm90dG9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTNweCkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIG5hdmJhciBvZiB0aGUgaGVhZGVyKi9cXG4ubmF2YmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5uYXZiYXIuYWN0aXZlIHtcXG4gICAgaGVpZ2h0OiAyMzZweDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIGxpc3Qgb2YgZWxlbWVudHMgb2YgdGhlIG5hdmJhciAqL1xcbi5uYXZiYXItbGlzdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAwJSwgMC4wNCk7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBsaW5rcyBvZiB0aGUgbmF2YmFyIGxpc3Qgb2Ygb3B0aW9ucyAqL1xcbi5uYXZiYXItbGluayB7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxuICAgIHBhZGRpbmc6IDE4LjVweCAxNXB4O1xcbn1cXG5cXG4ubmF2YmFyLWxpbms6aXMoOmhvdmVyLCA6Zm9jdXMpIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyogaGVybyAtIGhvbWUgKi9cXG5cXG4uaGVybyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL2Fzc2V0cy9pbWFnZXMvaGVyby1iZy5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYmxvY2s6IDE0NXB4IDYwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tc3VidGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtc2hhZG93cy1pbnRvLWxpZ2h0KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMjVweDtcXG59XFxuXFxuLmhlcm8tdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2hhbXBhZ25lLXBpbmspO1xcbiAgICBtYXgtd2lkdGg6IDEyY2g7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tZGVzZXJ0LXNhbmQpO1xcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHggMzBweDtcXG4gICAgbWF4LXdpZHRoOiA0NGNoO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uaGVyby1iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGVybyAuYnRuIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmhlcm8gLmJ0bjppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi8qIHByb21vIHNlY3Rpb24qL1xcblxcbi5wcm9tby1jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5wcm9tby1jYXJkOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGluc2V0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtcGF0aC0xKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG59XFxuXFxuLnByb21vLWNhcmQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXBhdGgtMik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZCAuY2FyZC1pY29uIGltZyB7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5wcm9tby1jYXJkOmhvdmVyIC5jYXJkLWljb24gaW1nIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZDpob3ZlciA6aXMoLmNhcmQtdGl0bGUsIC5jYXJkLXRleHQpIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnByb21vLWNhcmQgLmNhcmQtdGV4dCB7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLWJhbm5lciB7XFxuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5wcm9tby1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWJvdXQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuYXJ0aWNsZSAuYWJvdXQge1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNDVweDtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtYmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAwLjk7XFxufVxcblxcbi5hYm91dC1pbWcge1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uYWJvdXQtYmFubmVyIC5hYnMtaW1nIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAxMDBweDtcXG59XFxuXFxuLmFib3V0IC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAxNWNoO1xcbiAgICBtYXJnaW4tYmxvY2s6IDQwcHggMTBweDtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFib3V0IC5hYm91dC1saXN0IHtcXG4gICAgbWFyZ2luLWJsb2NrOiAyMHB4IDMwcHg7XFxufVxcblxcbi5hYm91dCAuYWJvdXQtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5hYm91dCAuYWJvdXQtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTBweDtcXG59XFxuXFxuLmFib3V0LWl0ZW0gaSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4uYWJvdXQtaXRlbSAuc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XFxufVxcblxcbi5hYm91dCAuYnRuIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9vZCBtZW51IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uZm9vZC1tZW51IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNDVweDtcXG59XFxuXFxuLmZvb2QtbWVudSAuc2VjdGlvbi10aXRsZSB7XFxuICAgIG1hcmdpbi1ibG9jazogMTBweCAyMHB4O1xcbn1cXG5cXG4uZm9vZC1tZW51IC5zZWN0aW9uLXRleHQge1xcbiAgICBtYXgtd2lkdGg6IDQ0Y2g7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDMwcHg7XFxufVxcblxcbi5mb29kLW1lbnUtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTIpO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQ6Zm9jdXMtd2l0aGluIHtcXG4gICAgb3V0bGluZTogMXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQgLmNhcmQtYmFubmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQgLmJhZGdlIHtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG5cXG4uZm9vZC1tZW51LWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKDUwJSArIDE1cHgpO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgLS1iZy1jb2xvcjogdmFyKC0tY2lubmFiYXIpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICAtLXBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTIpO1xcbn1cXG5cXG4uZm9vZC1tZW51LWJ0bjppcyg6Zm9jdXMsIDpob3Zlcikge1xcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pO1xcbn1cXG5cXG4uZm9vZC1tZW51LWNhcmQ6aXMoOmhvdmVyLCA6Zm9jdXMtd2l0aGluKSAuZm9vZC1tZW51LWJ0bntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCAuY2FyZC10aXRsZSB7XFxuICAgIG1hcmdpbi1ibG9jazogMjBweCAxMHB4OyAgICBcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5wcmljZS10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiA1cHg7XFxufVxcblxcbi5mb29kLW1lbnUtY2FyZCAucHJpY2Uge1xcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG59XFxuXFxuLmZvb2QtbWVudS1jYXJkIC5kZWwge1xcbiAgICBjb2xvcjogdmFyKC0tZ3JheS14LTExLWdyYXkpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWxpdmVyeSBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5kZWxpdmVyeS1jb250ZW50IHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogNDBweDtcXG59XFxuXFxuLmRlbGl2ZXJ5IC5zZWN0aW9uLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAxN2NoO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG4gICAgfVxcblxcbi5kZWxpdmVyeSAuc2VjdGlvbi10ZXh0IHtcXG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4IDI1cHg7XFxufVxcblxcbi5kZWxpdmVyeS1iYW5uZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8gMC44NjtcXG59XFxuXFxuLmRlbGl2ZXJ5LWJhbm5lciAuZGVsaXZlcnktaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODBweCk7XFxuICAgIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNpdGlvbi0yKVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYWJvdXQgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgYWJvdXRBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFib3V0IHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuYWJvdXRTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VjdGlvbiBzZWN0aW9uLWRpdmlkZXIgZ3JheSBhYm91dFwiKTtcbmFib3V0U2VjdGlvbi5pZCA9IFwiYWJvdXRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4vLyBhYm91dCBiYW5uZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgYWJvdXRCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWJvdXRCYW5uZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWJhbm5lclwiKTtcblxuY29uc3QgaW1nRm9vZEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5pbWdGb29kQmFubmVyLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJhbm5lci5wbmdcIjtcbmltZ0Zvb2RCYW5uZXIuYWx0ID0gXCJCdXJnaWVyIHdpdGggZHJpbmtzXCI7XG5pbWdGb29kQmFubmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidy0xMDAgYWJvdXQtaW1nXCIpO1xuaW1nRm9vZEJhbm5lci53aWR0aCA9IFwiNTA5XCI7XG5pbWdGb29kQmFubmVyLmhlaWdodCA9IFwiNDU5XCI7XG5pbWdGb29kQmFubmVyLmxvYWRpbmcgPSBcImxhenlcIjtcbmFib3V0QmFubmVyLmFwcGVuZENoaWxkKGltZ0Zvb2RCYW5uZXIpO1xuXG5jb25zdCBpbWdTYWxlQmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmltZ1NhbGVCYW5uZXIuc3JjID0gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2FsZS1zaGFwZS1yZWQucG5nXCI7XG5pbWdTYWxlQmFubmVyLmFsdCA9IFwiR2V0IHVwIDUwJSBvZmYgbm93XCI7XG5pbWdTYWxlQmFubmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWJzLWltZyBzY2FsZS11cC1hbmltXCIpO1xuaW1nU2FsZUJhbm5lci53aWR0aCA9IFwiMjE2XCI7XG5pbWdTYWxlQmFubmVyLmhlaWdodCA9IFwiMjI2XCI7XG5pbWdTYWxlQmFubmVyLmxvYWRpbmcgPSBcImxhenlcIjtcbmFib3V0QmFubmVyLmFwcGVuZENoaWxkKGltZ1NhbGVCYW5uZXIpO1xuXG4vLyBhYm91dCBjb250ZW50IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGVudFwiKTtcblxuY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuc2VjdGlvblRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaDIgc2VjdGlvbi10aXRsZVwiKTtcbnNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRm9vZGllLCBCdXJndWVycywgYW5kIEJlc3QgUGl6emFzIFwiO1xuY29uc3Qgc3BhblNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3BhblNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwic3BhblwiKTtcbnNwYW5TZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcImluIFRvd24hXCI7XG5zZWN0aW9uVGl0bGUuYXBwZW5kQ2hpbGQoc3BhblNlY3Rpb25UaXRsZSk7XG5cbmNvbnN0IHNlY3Rpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5zZWN0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi10ZXh0XCIpO1xuc2VjdGlvblRleHQudGV4dENvbnRlbnQgPVxuICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yaW9zYW0gY29uc2VxdWF0dXIgcXVpc3F1YW0gYWNjdXNhbXVzIGZ1Z2EgZXggYW1ldCwgcXVpYSBkb2xvcmVtIGRvbG9yaWJ1cywgZWl1cyByZXBlbGxlbmR1cyBleHBsaWNhYm8gaXRhcXVlIHRlbXBvcmUgY3VscGEgcXVhZXJhdCwgZWxpZ2VuZGkgbmlzaSBlcnJvciBuZW1vIG1haW9yZXM/XCI7XG5cbi8vIGFib3V0IGxpc3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmFib3V0TGlzdC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbGlzdFwiKTtcblxuY29uc3QgdGV4dExpc3RJdGVtcyA9IFtcbiAgXCJEZWxpY2lvdXMgJiBIZWFsdGh5IEZvb2RzXCIsXG4gIFwiU3BhY2lmaWMgRmFtaWx5IEFuZCBLaWRzIFpvbmVcIixcbiAgXCJNdXNpYyAmIE90aGVyIEZhY2lsaXRpZXNcIixcbiAgXCJGYXN0ZXN0IEZvb2QgSG9tZSBEZWxpdmVyeVwiLFxuXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaXRlbVwiKTtcblxuICBjb25zdCBpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhLXNvbGlkIGZhLWNpcmNsZS1jaGVja1wiKTtcbiAgbGkuYXBwZW5kQ2hpbGQoaWwpO1xuXG4gIGNvbnN0IHNwYW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW5MaXN0LmNsYXNzTGlzdC5hZGQoXCJzcGFuXCIpO1xuICBzcGFuTGlzdC50ZXh0Q29udGVudCA9IHRleHRMaXN0SXRlbXNbaV07XG4gIGxpLmFwcGVuZENoaWxkKHNwYW5MaXN0KTtcblxuICBhYm91dExpc3QuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG4vLyBhYm91dCBidXR0b24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWJvdXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gYnRuLWhvdmVyXCIpO1xuYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgb2YgYWJvdXQgY29udGVudFxuYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb25UaXRsZSk7XG5hYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvblRleHQpO1xuYWJvdXRDb250ZW50LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG5hYm91dENvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuXG4vLyBhcHBlbmQgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0QmFubmVyKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuXG4vLyBhcHBlbmQgdG8gdGhlIGFydGljbGVcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuYWJvdXRBcnRpY2xlLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0QXJ0aWNsZTtcbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuaGVhZGVyLnNldEF0dHJpYnV0ZShcImRhdGEtaGVhZGVyXCIsIFwiXCIpO1xuXG5jb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIGNyZWF0ZSB0aGUgbG9nbyBlbGVtZW50c1xuY29uc3QgaGVhZGVySDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5sb2dvLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCI7XG5sb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuXG5jb25zdCBzcGFuTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3BhbkxvZ28udGV4dENvbnRlbnQgPSBcIi5cIjtcbnNwYW5Mb2dvLmNsYXNzTGlzdC5hZGQoXCJzcGFuXCIpO1xuXG5oZWFkZXJIMS5hcHBlbmRDaGlsZChsb2dvKTtcbmxvZ28uYXBwZW5kQ2hpbGQoc3BhbkxvZ28pO1xuXG4vLyBjcmVhdGUgdGhlIG5hdmJhclxuY29uc3QgaGVhZGVyTmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbmhlYWRlck5hdmJhci5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdmJhclwiLCBcIlwiKTtcbmhlYWRlck5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXG5jb25zdCBuYXZiYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuY29uc3QgbmF2YmFyT3B0aW9ucyA9IFtcIkhvbWVcIiwgXCJBYm91dFwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuY29uc3QgbmF2YmFyTGlua3MgPSBbXTtcbmZvciAobGV0IG9wdGlvbiBvZiBuYXZiYXJPcHRpb25zKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIik7XG5cbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgYCMke29wdGlvbi50b0xvd2VyQ2FzZSgpfWApO1xuICBhLnNldEF0dHJpYnV0ZShcImRhdGEtbmF2LWxpbmtcIiwgXCJcIik7XG4gIGEuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1saW5rXCIpO1xuICBhLnRleHRDb250ZW50ID0gb3B0aW9uO1xuICBuYXZiYXJMaW5rcy5wdXNoKGEpO1xuXG4gIGxpLmFwcGVuZENoaWxkKGEpO1xuICBuYXZiYXJMaXN0LmFwcGVuZENoaWxkKGxpKTtcbn1cblxuaGVhZGVyTmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhckxpc3QpO1xuXG4vLyBjcmVhdGUgdGhlIGJ1dHRvbnMgZ3JvdXBcbmNvbnN0IGhlYWRlckJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlckJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnRuLWdyb3VwXCIpO1xuXG5jb25zdCBidXR0b25OYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYnV0dG9uTmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtdG9nZ2xlLWJ0blwiKTtcbmJ1dHRvbk5hdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1lbnUtdG9nZ2xlLWJ0blwiLCBcIlwiKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgY29uc3QgcG9zID0gaSA9PSAwID8gXCJ0b3BcIiA6IGkgPT0gMSA/IFwibWlkZGxlXCIgOiBcImJvdHRvbVwiO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYGxpbmUgJHtwb3N9YCk7XG4gIGJ1dHRvbk5hdi5hcHBlbmRDaGlsZChzcGFuKTtcbn1cblxuaGVhZGVyQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnV0dG9uTmF2KTtcblxuLy8gYXBwZW5kIGFsbCBzZWN0aW9ucyB0byB0aGUgaGVhZGVyIG1haW4gZWxlbWVudFxuaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckgxKTtcbmhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJOYXZiYXIpO1xuaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlckJ1dHRvbkdyb3VwKTtcbmhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpO1xuXG4vLyBhZGQgdG8gdGhlIGNvbnRlbnRcblxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkb20gbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vLyBuYXZiYXIgdG9nZ2xlXG5cbmJ1dHRvbk5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBoZWFkZXJOYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbmhlYWRlck5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKG5hdmJhckxpbmtzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgIGhlYWRlck5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGJ1dHRvbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuLy8gaGVhZGVyIHN0aWNreVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMDApIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBlbHNlIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufSk7XG5cbmV4cG9ydCB7IG1haW4sIG5hdmJhckxpbmtzfTsiLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaG9tZSBhcnRpY2xlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5jb25zdCBhcnRpY2xlSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlcm8gc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuaGVyb1NlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG5oZXJvU2VjdGlvbi5pZCA9IFwiaG9tZVwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIGhlcm8gdGV4dCBjb250ZW50XG5jb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZXJvQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVyby1jb250ZW50XCIpO1xuXG4vLyBlbGVtZW50cyBvZiB0aGUgaGVybyBjb250ZW50XG5jb25zdCBoZXJvU3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmhlcm9TdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVyby1zdWJ0aXRsZVwiKTtcbmhlcm9TdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiRWF0IFNsZWVwIEFuZFwiO1xuY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuaGVyb1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaDEgaGVyby10aXRsZVwiKTtcbmhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiU3VwZXIgaGVhbHRoeSBmb29kIGluIHRvd24hXCI7XG5jb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuaGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcbmhlcm9UZXh0LnRleHRDb250ZW50ID1cbiAgXCJGb29kIGlzIHRoZSBmdWVsIGZvciBvdXIgbGlmZSwgZWF0IGhlYWx0aHkgYW5kIGxvdmUgeW91cnNlbGYuXCI7XG5jb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmhlcm9CdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0blwiKTtcbmhlcm9CdXR0b24udGV4dENvbnRlbnQgPSBcIlNlZSB0aGUgbWVudSFcIjtcblxuaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1N1YnRpdGxlKTtcbmhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9UaXRsZSk7XG5oZXJvQ29udGVudC5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5oZXJvQ29udGVudC5hcHBlbmRDaGlsZChoZXJvQnV0dG9uKTtcblxuLy8gZmlndXJlc1xuY29uc3QgaGVyb0ZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG5oZXJvRmlndXJlLmNsYXNzTGlzdC5hZGQoXCJoZXJvLWJhbm5lclwiKTtcblxuY29uc3QgaGVyb0Jhbm5lckJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmhlcm9CYW5uZXJCZy5zcmMgPSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9oZXJvLWJhbm5lci1iZy5wbmdcIjtcbmhlcm9CYW5uZXJCZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInctMTAwIGhlcm8taW1nLWJnXCIpO1xuaGVyb0Jhbm5lckJnLndpZHRoID0gXCI4MjBcIjtcbmhlcm9CYW5uZXJCZy5oZWlnaHQgPSBcIjcxNlwiO1xuaGVyb0Jhbm5lckJnLmxvYWRpbmcgPSBcImxhenlcIjtcblxuY29uc3QgaGVyb0Jhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5oZXJvQmFubmVyLnNyYyA9IFwiL3NyYy9hc3NldHMvaW1hZ2VzL2hlcm8tYmFubmVyLnBuZ1wiO1xuaGVyb0Jhbm5lci5hbHQgPSBcIkJ1cmd1ZXJcIjtcbmhlcm9CYW5uZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3LTEwMCBoZXJvLWltZ1wiKTtcbmhlcm9CYW5uZXJCZy53aWR0aCA9IFwiNzAwXCI7XG5oZXJvQmFubmVyQmcuaGVpZ2h0ID0gXCI2MzdcIjtcbmhlcm9CYW5uZXJCZy5sb2FkaW5nID0gXCJsYXp5XCI7XG5cbmhlcm9GaWd1cmUuYXBwZW5kQ2hpbGQoaGVyb0Jhbm5lckJnKTtcbmhlcm9GaWd1cmUuYXBwZW5kQ2hpbGQoaGVyb0Jhbm5lcik7XG5cbi8vIGFkZCBjb250ZW50IGFuZCBmaWd1cmUgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9Db250ZW50KTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvRmlndXJlKTtcblxuLy8gYWRkIGhlcm8gc2VjdGlvbiB0byB0aGUgY29udGFpbmVyXG5oZXJvU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByb21vIHNlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBwcm9tb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnByb21vU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlY3Rpb24gc2VjdGlvbi1kaXZpZGVyIHdoaXRlIHByb21vXCIpO1xuXG5jb25zdCBjb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuY29uc3QgdWxQcm9tbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnVsUHJvbW8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9tby1saXN0IGhhcy1zY3JvbGxiYXJcIik7XG5cbmNvbnN0IHByb2R1Y3ROYW1lID0gW1xuICBcIkhhcHB5IFBpenphXCIsXG4gIFwiQ3JhenkgRHJpbmtzXCIsXG4gIFwiRnJlbmNoIEZyaWVzXCIsXG4gIFwiQnVyZ3VlclwiLFxuICBcIkNoaWNrZW5cIixcbl07XG5mb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuY2xhc3NMaXN0LmFkZChcInByb21vLWl0ZW1cIik7XG5cbiAgY29uc3QgcHJvbW9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvbW9DYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9tby1jYXJkXCIpO1xuXG4gIGNvbnN0IGNhcmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZEljb24uY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiKTtcbiAgY29uc3QgY2FyZEljb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjYXJkSWNvbkltZy5zcmMgPSBgL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vLWljb24tJHtpICsgMX0uc3ZnYDtcbiAgY2FyZEljb24uYXBwZW5kQ2hpbGQoY2FyZEljb25JbWcpO1xuXG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaDMgY2FyZC10aXRsZVwiKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gcHJvZHVjdE5hbWVbaV07XG5cbiAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2FyZFRleHQuY2xhc3NMaXN0LmFkZChcImNhcmQtdGV4dFwiKTtcbiAgY2FyZFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiRm9vZCBpcyBhbnkgc3Vic3RhbmNlIGNvbnN1bWVkIHRvIHByb3ZpZGUgbnV0cml0aW9uYWwgc3Vwb3J0IGZvciBhbiBvcmdhbmlzbS5cIjtcblxuICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjYXJkSW1hZ2Uuc3JjID0gYC9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tby0ke2kgKyAxfS5wbmdgO1xuICBjYXJkSW1hZ2UuYWx0ID0gcHJvZHVjdE5hbWVbaV07XG4gIGNhcmRJbWFnZS5oZWlnaHQgPSBcIjMwMFwiO1xuICBjYXJkSW1hZ2Uud2lkdGggPSBcIjMwMFwiO1xuICBjYXJkSW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3LTEwMCBjYXJkLWJhbm5lclwiKTtcbiAgY2FyZEltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcblxuICBwcm9tb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZEljb24pO1xuICBwcm9tb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgcHJvbW9DYXJkLmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcbiAgcHJvbW9DYXJkLmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XG5cbiAgbGkuYXBwZW5kQ2hpbGQocHJvbW9DYXJkKTtcbiAgdWxQcm9tby5hcHBlbmRDaGlsZChsaSk7XG59XG5cbi8vIGFkZCB0aGUgdWwgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyMi5hcHBlbmRDaGlsZCh1bFByb21vKTtcblxuLy8gYWRkIHRoZSBjb250YWluZXIgdG8gdGhlIHNlY3Rpb25cbnByb21vU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIyKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFkZCBzZWN0aW9ucyB0byB0aGUgYXJ0aWNsZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuYXJ0aWNsZUhvbWUuYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pO1xuYXJ0aWNsZUhvbWUuYXBwZW5kQ2hpbGQocHJvbW9TZWN0aW9uKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBldmVudCBsaXN0ZW5lcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gbW92ZSB0aGUgY3ljbGUgb24gc2Nyb2xsXG5cbmNvbnN0IGRlbGl2ZXJ5Qm95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGl2ZXJ5LWJveV1cIik7XG5cbmxldCBkZWxpdmVyeUJveU1vdmUgPSAtODA7XG5sZXQgbGFzdFNjcm9sbFBvcyA9IDA7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblxuICBsZXQgZGVsaXZlcnlCb3lUb3BQb3MgPSBkZWxpdmVyeUJveS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgaWYgKGRlbGl2ZXJ5Qm95VG9wUG9zIDwgNTAwICYmIGRlbGl2ZXJ5Qm95VG9wUG9zID4gLTI1MCkge1xuICAgIGxldCBhY3RpdmVTY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIGlmIChsYXN0U2Nyb2xsUG9zIDwgYWN0aXZlU2Nyb2xsUG9zKSB7XG4gICAgICBkZWxpdmVyeUJveU1vdmUrKztcbiAgICB9ZWxzZXtcbiAgICAgIGRlbGl2ZXJ5Qm95TW92ZS0tO1xuICAgIH1cblxuICAgIGxhc3RTY3JvbGxQb3MgPSBhY3RpdmVTY3JvbGxQb3M7XG4gICAgZGVsaXZlcnlCb3kuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtkZWxpdmVyeUJveU1vdmV9cHgpYDtcbiAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZUhvbWU7IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvb2QgbWVudSBzZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWVudUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lbnUgc2VjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbm1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VjdGlvbiB3aGl0ZSBmb29kLW1lbnVcIik7XG5tZW51U2VjdGlvbi5pZCA9IFwibWVudVwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbi8vIHNlY3Rpb24gc3VidGl0bGVcbmNvbnN0IHNlY3Rpb25TdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvblN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLXN1YnRpdGxlXCIpO1xuc2VjdGlvblN1YnRpdGxlLnRleHRDb250ZW50ID0gXCJQb3B1bGFyIERpc2hlc1wiO1xuXG4vLyBzZWN0aW9uIHRpdGxlXG5jb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5zZWN0aW9uVGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoMiBzZWN0aW9uLXRpdGxlXCIpO1xuc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgRGVsaWNpb3VzIFwiO1xuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuc3Bhbi5jbGFzc0xpc3QuYWRkKFwic3BhblwiKTtcbnNwYW4udGV4dENvbnRlbnQ9IFwiRm9vZHNcIjtcbnNlY3Rpb25UaXRsZS5hcHBlbmRDaGlsZChzcGFuKTtcblxuLy8gc2VjdGlvbiB0ZXh0XG5jb25zdCBzZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuc2VjdGlvblRleHQuY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tdGV4dFwiKTtcbnNlY3Rpb25UZXh0LnRleHRDb250ZW50ID1cbiAgXCJGb29kIGlzIGFueSBzdWJzdGFuY2UgY29uc3VtZWQgdG8gcHJvdmlkZSBudXRyaXRpb25hbCBzdXBwb3J0IGZvciBhbiBvcmdhbmlzbS5cIjtcblxuLy8gZm9vZCBtZW51IGxpc3RcbmNvbnN0IGZvb2RNZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmZvb2RNZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1tZW51LWxpc3RcIik7XG5cbmNvbnN0IGZvb2ROYW1lcyA9IFtcbiAgXCJGcmllZCBDaGlja2VuIFVubGltaXRlZFwiLFxuICBcIkJ1cmd1ZXIgS2luayBXaG9wcGVyXCIsXG4gIFwiV2hpdGUgQ2FzdGxlIFBpenphc1wiLFxuICBcIkJlbGwgQnVycml0byBTdXByZW1lXCIsXG4gIFwiS3VuZyBQYW8gQ2hpY2tlbiBCQlFcIixcbiAgXCJXZW5keSdzIENoaWNrZW5cIixcbl07XG5jb25zdCBkaXNjb3VudHMgPSBbXCItMTUlXCIsIFwiLTEwJVwiLCBcIi0yNSVcIiwgXCItMjAlXCIsIFwiLTUlXCIsIFwiLTE1JVwiXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG4gIGNvbnN0IGZvb2RNZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvb2RNZW51Q2FyZC5jbGFzc0xpc3QuYWRkKFwiZm9vZC1tZW51LWNhcmRcIik7XG5cbiAgLy8gY2FyZCBiYW5uZXJcbiAgY29uc3QgY2FyZEJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRCYW5uZXIuY2xhc3NMaXN0LmFkZChcImNhcmQtYmFubmVyXCIpO1xuXG4gIGNvbnN0IGNhcmRCYW5uZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNhcmRCYW5uZXJJbWFnZS5zcmMgPSBgL3NyYy9hc3NldHMvaW1hZ2VzL2Zvb2QtbWVudS0ke2kgKyAxfS5wbmdgO1xuICBjYXJkQmFubmVySW1hZ2Uud2lkdGggPSBcIjMwMFwiO1xuICBjYXJkQmFubmVySW1hZ2UuaGVpZ2h0ID0gXCIzMDBcIjtcbiAgY2FyZEJhbm5lckltYWdlLmxvYWRpbmcgPSBcImxhenlcIjtcbiAgY2FyZEJhbm5lci5jbGFzc0xpc3QuYWRkKFwidy0xMDBcIik7XG4gIGNhcmRCYW5uZXIuYWx0ID0gZm9vZE5hbWVzW2ldO1xuICBjYXJkQmFubmVyLmFwcGVuZENoaWxkKGNhcmRCYW5uZXJJbWFnZSk7XG5cbiAgY29uc3QgY2FyZEJhbm5lckJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZEJhbm5lckJhZGdlLmNsYXNzTGlzdC5hZGQoXCJiYWRnZVwiKTtcbiAgY2FyZEJhbm5lckJhZGdlLnRleHRDb250ZW50ID0gZGlzY291bnRzW2ldO1xuICBjYXJkQmFubmVyLmFwcGVuZENoaWxkKGNhcmRCYW5uZXJCYWRnZSk7XG5cbiAgY29uc3QgY2FyZEJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhcmRCYW5uZXJCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJidG4gZm9vZC1tZW51LWJ0blwiKTtcbiAgY2FyZEJhbm5lckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG4gIGNhcmRCYW5uZXIuYXBwZW5kQ2hpbGQoY2FyZEJhbm5lckJ1dHRvbik7XG5cbiAgLy8gY2FyZCB0aXRsZVxuICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gZm9vZE5hbWVzW2ldO1xuXG4gIC8vIGNhcmQgcHJpY2VcbiAgY29uc3QgY2FyZFByaWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmRQcmljZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByaWNlLXdyYXBwZXJcIik7XG5cbiAgY29uc3QgcHJpY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaWNlVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJpY2UtdGV4dFwiKTtcbiAgcHJpY2VUZXh0LnRleHRDb250ZW50ID0gXCJQcmljZTpcIjtcbiAgY2FyZFByaWNlV3JhcHBlci5hcHBlbmRDaGlsZChwcmljZVRleHQpO1xuXG4gIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFcIik7XG4gIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcbiAgcHJpY2UudmFsdWUgPSBcIjQ5LjAwXCI7XG4gIHByaWNlLnRleHRDb250ZW50ID0gXCIkNDkuMDBcIjtcbiAgY2FyZFByaWNlV3JhcHBlci5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRlbFwiKTtcbiAgZGVsLmNsYXNzTGlzdC5hZGQoXCJkZWxcIik7XG4gIGRlbC50ZXh0Q29udGVudCA9IFwiJDY5LjAwXCI7XG4gIGNhcmRQcmljZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsKTtcblxuICAvLyBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIG1lbnVjYXJkXG4gIGZvb2RNZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkQmFubmVyKTtcbiAgZm9vZE1lbnVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gIGZvb2RNZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkUHJpY2VXcmFwcGVyKTtcblxuICBsaS5hcHBlbmRDaGlsZChmb29kTWVudUNhcmQpO1xuICBmb29kTWVudUxpc3QuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG4vLyBhcHBlbmQgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lclxuY29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25TdWJ0aXRsZSk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uVGV4dCk7XG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZE1lbnVMaXN0KTtcblxubWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubWVudUFydGljbGUuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuZXhwb3J0IGRlZmF1bHQgbWVudUFydGljbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBtYWluLCBuYXZiYXJMaW5rcyB9IGZyb20gXCIuL2Jhc2Vfc3RydWN0dXJlLmpzXCI7XG5pbXBvcnQgaG9tZUFydGljbGUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGFib3V0QXJ0aWNsZSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IG1lbnVBcnRpY2xlIGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gdXBkYXRlSW5mbyhsaW5rLCBhcnRpY2xlKSB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKSB7XG4gICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG4gIH0pO1xufVxuXG5mb3IgKGxldCBsaW5rIG9mIG5hdmJhckxpbmtzKSB7XG4gIHN3aXRjaCAobGluay50ZXh0Q29udGVudCkge1xuICAgIGNhc2UgXCJBYm91dFwiOlxuICAgICAgdXBkYXRlSW5mbyhsaW5rLCBhYm91dEFydGljbGUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgdXBkYXRlSW5mbyhsaW5rLCBob21lQXJ0aWNsZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICB1cGRhdGVJbmZvKGxpbmssIG1lbnVBcnRpY2xlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbm1haW4uYXBwZW5kQ2hpbGQoaG9tZUFydGljbGUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9