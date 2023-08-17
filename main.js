/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    background-color: var(--cinnabar);
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
    transform: translate(-50%, 50%) scale(var(--scale, 1));
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
    scroll-snap-type: inline mandatory;
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

.promo-card:hover :is(.card-title, .card-text){
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
`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* -------------------- variables --------------------------------------------*/\n:root {\n    /* Colors */\n    --rich-black-fogra-29: hsl(210, 26%, 7%);\n    --champagne-pink_20: hsla(23, 61%, 86%, 0.2);\n    --independence_30: hsla(245, 17%, 29%, 0.3);\n    --gray-x-11-gray: hsl(0, 0%, 73%);\n    --champagne-pink: hsl(23, 61%, 86%);\n    --spanish-gray: hsl(0, 0%, 60%);\n    --sonic-silver: hsl(0, 0%, 47%);\n    --deep-saffron: hsl(32, 100%, 59%);\n    --dark-orange: hsl(28, 100%, 58%);\n    --desert-sand: hsl(23, 49%, 82%);\n    --isabelline: hsl(38, 44%, 96%);\n    --gainsboro: hsl(0, 0%, 87%);\n    --tangerine: hsl(31, 84%, 50%);\n    --cinnabar: hsl(3, 90%, 55%);\n    --black_95: hsla(0, 0%, 0%, 0.95);\n    --cultured: hsl(0, 0%, 93%);\n    --white: hsl(0, 0%, 100%);\n    --black: hsl(0, 0%, 0%);\n    --onyx: hsl(0, 0%, 27%);\n\n    /* Typography */\n    --ff-shadows-into-light: 'Shadows Into Light', cursive;\n    --ff-roboto: 'Roboto', sans-serif;\n    --ff-rubik: 'Rubik', sans-serif;\n\n    --fs-1: 3.2rem;\n    --fs-2: 2.2rem;\n    --fs-3: 1.8rem;\n    --fs-4: 1.4rem;\n    --fs-5: 1.2rem;\n\n    --fw-500: 500;\n    --fw-600: 600;\n    --fw-700: 700;\n\n    /* spacing */\n    --section-padding: 60px;\n\n    /* shadow */\n    --shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.2);\n    --shadow-2: 0 1px 2px hsla(0, 0%, 0%, 0.2);\n\n    /* transition */\n    --transition-1: 0.25s ease;\n    --transition-2: 0.5s ease;\n\n    /* clip-path */\n    --clip-path-1: polygon(0 40%, 100% 0%, 100% 100%, 0 100%);\n    --clip-path-2: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);\n}\n\n/* ------------------ css reset --------------------------------------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na,\nimg,\nsvg,\nspan,\ninput,\nselect,\nbutton,\ntextarea {\n    display: block;\n}\n\nimg {\n    height: auto;\n}\n\ninput,\nselect,\nbutton,\ntextarea {\n    background: none;\n    border: none;\n    /* font: inherit; */\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nhtml {\n    font-family: var(--ff-roboto);\n    font-size: 10px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--white);\n    color: var(--sonic-silver);\n    font-size: 1.6rem;\n    line-height: 1.6;\n    overflow-x: hidden;\n    background-color: var(--cinnabar);\n}\n\nbody.active {\n    overflow: hidden;\n}\n\n:focus-visible {\n    outline-offset: 4px;\n}\n\n::selection {\n    background-color: var(--deep-saffron);\n    color: var(--white);\n}\n\n\n/* ------------------------- reused style ------------------------------------*/\n\n.container {\n    padding-inline: 15px;\n}\n\n.h1,\n.h2,\n.h3,\n.h4 {\n    font-family: var(--ff-rubik);\n    color: var(--rich-black-fogra-29);\n    line-height: 1.2;\n    letter-spacing: -1px;\n}\n\n.h1,\n.h2 {\n    font-size: var(--fs-1);\n}\n\n.h2,\n.h3,\n.h4 {\n    font-weight: var(--fw-600);\n}\n\n.h3 {\n    font-size: var(--fs-2);\n}\n\n.h4 {\n    font-size: var(--fs-3);\n}\n\n.btn {\n    background-color: var(--bg-color, var(--deep-saffron));\n    color: var(--white);\n    font-family: var(--ff-rubik);\n    font-size: var(--fs-4);\n    font-weight: var(--fw-500);\n    height: var(--heigh, 45px);\n    padding-inline: var(--padding-inline, 35px);\n    transition: var(--transition-1);\n}\n\n.btn-hover {\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.btn-hover::after {\n    content: \"\";   \n    position: absolute;\n    bottom: -1px;\n    left: 20px;\n    width: 1px;\n    height: 1px;\n    transform: translate(-50%, 50%) scale(var(--scale, 1));\n    border-radius: 50%;\n    background-color: var(--rich-black-fogra-29);\n    z-index: -1;\n    transition: var(--transition-2);\n}\n\n.btn-hover:is(:hover, :focus)::after {\n    --scale: 500;    \n}\n\n.section {\n    padding-block: var(--section-padding);\n}\n\n.section.white {\n    background-color: var(--isabelline);\n}\n\n.section-divider {\n    position: relative;\n}\n\n.section-divider::before,\n.section-divider::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 15px;\n    background-repeat: repeat no-repeat;\n    background-position: bottom;\n}\n\n.section-divider.white::after {\n    background-image: url(/src/assets/images/shape-white.png);\n}\n\n.section-divider.grey::after {\n    background-image: url(/src/assets/images/shape-grey.png);\n}\n\n.w-100 {\n    width: 100%;\n}\n\n.has-scrollbar {\n    display: flex;\n    gap: 10px;\n    overflow-x: auto;\n    padding-block-end: 40px;\n    scroll-snap-type: inline mandatory;\n}\n\n/* ------------------------------ header -------------------------------------*/\n\n/* set the initial style of the header */\n.header {\n    --color: var(--white);\n    --btn-color: var(--champagne-pink);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-block: 20px;\n    border-block-end: 1px solid var(--champagne-pink_20);\n    z-index: 4;\n}\n\n/* create the style of the header when active */\n/* use position relative to position based on the viewport*/\n/* change the defined variables for colors */\n.header.active {\n    --color: var(--rich-black-fogra-29);\n    --btn-color: var(--rich-black-fogra-29);\n\n    position: fixed;\n    top: -86px;\n    background-color: var(--white);\n    box-shadow: var(--shadow-1);\n    animation: slideIn 0.5s ease-out forwards;\n}\n\n/* set the animation of the header when active*/\n@keyframes slideIn {\n    0% {\n        transform: translateY(0);\n    }\n\n    100% {\n        transform: translateY(100%);\n    }\n}\n\n/* set the header container with displat flex in order to \nposition the elements */\n.header .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n/* style the logo elements */\n.logo {\n    color: var(--color);\n    font-family: var(--ff-rubik);\n    font-size: 2.8rem;\n    font-weight: var(--fw-700);\n    letter-spacing: -2px;\n}\n\n.logo .span {\n    display: inline-block;\n    color: var(--deep-saffron);\n}\n\n/* style the button group */\n.header-btn-group {\n    display: flex;\n    align-items: center;\n}\n\n/* style the button that shows the navbar */\n.nav-toggle-btn {\n    display: grid;\n    gap: 4px;\n}\n\n.line {\n    width: 10px;\n    height: 3px;\n    background-color: var(--btn-color);\n    border-radius: 5px;\n    transition: var(--transition-1);\n}\n\n.line.middle {\n    width: 20px;\n}\n\n.line.bottom {\n    margin-left: auto;\n}\n\n/* set the transform to transition when active */\n.nav-toggle-btn.active .line.top {\n    transform: translate(1px, 3px) rotate(45deg);\n}\n\n.nav-toggle-btn.active .line.middle {\n    transform: rotate(-45deg);\n}\n\n.nav-toggle-btn.active .line.bottom {\n    transform: translate(-1px, -3px) rotate(45deg);\n}\n\n/* style the navbar of the header*/\n.navbar {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: calc(100% - 30px);\n    background-color: var(--white);\n    padding-inline: 20px;\n    box-shadow: var(--shadow-1);\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    transition: var(--transition-1);\n}\n\n.navbar.active {\n    height: 236px;\n    visibility: visible;\n}\n\n/* style the list of elements of the navbar */\n.navbar-list {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-item {\n    flex-grow: 1;\n}\n\n.nav-item:not(:last-child) {\n    border-block-end: 1px solid hsla(0, 0%, 0%, 0.04);\n}\n\n/* style the links of the navbar list of options */\n.navbar-link {\n    color: var(--rich-black-fogra-29);\n    font-size: var(--fs-4);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n    transition: var(--transition-1);\n    padding: 18.5px 15px;\n}\n\n.navbar-link:is(:hover, :focus) {\n    color: var(--dark-orange);\n}\n\n/* ------------------- main ---------------------------------------*/\n\n/* hero - home */\n\n.hero {\n    background-image: url(/src/assets/images/hero-bg.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    padding-block: 145px 60px;\n    text-align: center;\n}\n\n.hero-subtitle {\n    color: var(--dark-orange);\n    font-family: var(--ff-shadows-into-light);\n    font-size: var(--fs-3);\n    letter-spacing: 1px;\n    margin-block-end: 25px;\n}\n.hero-title {\n    color: var(--champagne-pink);\n    max-width: 12ch;\n    margin-inline: auto;\n}\n\n.hero-text {\n    color: var(--desert-sand);\n    margin-block: 15px 30px;\n    max-width: 44ch;\n    margin-inline: auto;\n}\n\n.hero-banner {\n    display: none;\n}\n\n.hero .btn {\n    margin-inline: auto;\n}\n\n.hero .btn:is(:hover, :focus) {\n    background-color: var(--white);\n    color: var(--black);\n}\n\n/* promo section*/\n\n.promo-card {\n    position: relative;\n    background-color: var(--white);\n    text-align: center;\n    padding: 40px 30px;\n    box-shadow: var(--shadow-2);\n    z-index: 1;\n}\n\n.promo-card::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background-color: var(--deep-saffron);\n    clip-path: var(--clip-path-1);\n    transform: scaleY(0.3);\n    transform-origin: bottom;\n    z-index: -1;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover::after {\n    clip-path: var(--clip-path-2);\n    transform: scaleY(1);\n}\n\n.promo-card .card-icon img {\n    margin-inline: auto;\n}\n\n.promo-card:hover .card-icon img {\n    background-color: var(--white);\n    border-radius: 40%;\n}\n\n.promo-card .card-title {\n    margin-block: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card:hover :is(.card-title, .card-text){\n    color: var(--white);\n}\n\n.promo-card .card-text {\n    margin-block-end: 15px;\n    transition: var(--transition-1);\n}\n\n.promo-card .card-banner {\n    max-width: max-content;\n    margin-inline: auto;\n    aspect-ratio: 1 / 1;\n}\n\n.promo-item {\n    min-width: 100%;\n    scroll-snap-align: start;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/initial_page.js":
/*!*****************************!*\
  !*** ./src/initial_page.js ***!
  \*****************************/
/***/ (() => {

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

/* ----------------------------- main content ------------------------------- */



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

/***/ "./src/assets/images/hero-bg.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/hero-bg.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e198b8123a6b6c8cd008.jpg";

/***/ }),

/***/ "./src/assets/images/shape-grey.png":
/*!******************************************!*\
  !*** ./src/assets/images/shape-grey.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ff7cade41cdb65b2632.png";

/***/ }),

/***/ "./src/assets/images/shape-white.png":
/*!*******************************************!*\
  !*** ./src/assets/images/shape-white.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial_page.js */ "./src/initial_page.js");
/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_initial_page_js__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQ087QUFDdEcsNENBQTRDLGtLQUFxRDtBQUNqRyw0Q0FBNEMsZ0tBQW9EO0FBQ2hHLDRDQUE0QywwSkFBaUQ7QUFDN0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLGFBQWEsTUFBTSxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxhQUFhLE1BQU0sWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLG1IQUFtSCxpRUFBaUUsbURBQW1ELGtEQUFrRCx3Q0FBd0MsMENBQTBDLHNDQUFzQyxzQ0FBc0MseUNBQXlDLHdDQUF3Qyx1Q0FBdUMsc0NBQXNDLG1DQUFtQyxxQ0FBcUMsbUNBQW1DLHdDQUF3QyxrQ0FBa0MsZ0NBQWdDLDhCQUE4Qiw4QkFBOEIscUZBQXFGLHdDQUF3QyxzQ0FBc0MsdUJBQXVCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixzQkFBc0Isb0JBQW9CLG9CQUFvQixtREFBbUQscUVBQXFFLGlEQUFpRCx5REFBeUQsZ0NBQWdDLHVGQUF1RiwrREFBK0QsR0FBRyxrSEFBa0gsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxRQUFRLHVCQUF1QixHQUFHLE9BQU8sNEJBQTRCLHFCQUFxQixHQUFHLCtEQUErRCxxQkFBcUIsR0FBRyxTQUFTLG1CQUFtQixHQUFHLHdDQUF3Qyx1QkFBdUIsbUJBQW1CLHdCQUF3QixLQUFLLCtCQUErQixrQkFBa0IsR0FBRyxZQUFZLHNCQUFzQixHQUFHLFVBQVUsb0NBQW9DLHNCQUFzQiw4QkFBOEIsR0FBRyxVQUFVLHFDQUFxQyxpQ0FBaUMsd0JBQXdCLHVCQUF1Qix5QkFBeUIsd0NBQXdDLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLG9CQUFvQiwwQkFBMEIsR0FBRyxpQkFBaUIsNENBQTRDLDBCQUEwQixHQUFHLHNHQUFzRywyQkFBMkIsR0FBRywyQkFBMkIsbUNBQW1DLHdDQUF3Qyx1QkFBdUIsMkJBQTJCLEdBQUcsZUFBZSw2QkFBNkIsR0FBRyxxQkFBcUIsaUNBQWlDLEdBQUcsU0FBUyw2QkFBNkIsR0FBRyxTQUFTLDZCQUE2QixHQUFHLFVBQVUsNkRBQTZELDBCQUEwQixtQ0FBbUMsNkJBQTZCLGlDQUFpQyxpQ0FBaUMsa0RBQWtELHNDQUFzQyxHQUFHLGdCQUFnQix5QkFBeUIsdUJBQXVCLGlCQUFpQixHQUFHLHVCQUF1Qix1QkFBdUIseUJBQXlCLG1CQUFtQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw2REFBNkQseUJBQXlCLG1EQUFtRCxrQkFBa0Isc0NBQXNDLEdBQUcsMENBQTBDLHVCQUF1QixHQUFHLGNBQWMsNENBQTRDLEdBQUcsb0JBQW9CLDBDQUEwQyxHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyx3REFBd0Qsb0JBQW9CLHlCQUF5QixnQkFBZ0IsY0FBYyxrQkFBa0IsbUJBQW1CLDBDQUEwQyxrQ0FBa0MsR0FBRyxtQ0FBbUMsZ0VBQWdFLEdBQUcsa0NBQWtDLCtEQUErRCxHQUFHLFlBQVksa0JBQWtCLEdBQUcsb0JBQW9CLG9CQUFvQixnQkFBZ0IsdUJBQXVCLDhCQUE4Qix5Q0FBeUMsR0FBRyw0SUFBNEksNEJBQTRCLHlDQUF5QywyQkFBMkIsYUFBYSxjQUFjLGtCQUFrQiwwQkFBMEIsMkRBQTJELGlCQUFpQixHQUFHLG1MQUFtTCwwQ0FBMEMsOENBQThDLHdCQUF3QixpQkFBaUIscUNBQXFDLGtDQUFrQyxnREFBZ0QsR0FBRywwRUFBMEUsVUFBVSxtQ0FBbUMsT0FBTyxjQUFjLHNDQUFzQyxPQUFPLEdBQUcsOEdBQThHLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGdCQUFnQixHQUFHLDBDQUEwQywwQkFBMEIsbUNBQW1DLHdCQUF3QixpQ0FBaUMsMkJBQTJCLEdBQUcsaUJBQWlCLDRCQUE0QixpQ0FBaUMsR0FBRyxxREFBcUQsb0JBQW9CLDBCQUEwQixHQUFHLG1FQUFtRSxvQkFBb0IsZUFBZSxHQUFHLFdBQVcsa0JBQWtCLGtCQUFrQix5Q0FBeUMseUJBQXlCLHNDQUFzQyxHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxrQkFBa0Isd0JBQXdCLEdBQUcseUZBQXlGLG1EQUFtRCxHQUFHLHlDQUF5QyxnQ0FBZ0MsR0FBRyx5Q0FBeUMscURBQXFELEdBQUcsa0RBQWtELHlCQUF5QixnQkFBZ0IsZ0JBQWdCLGtDQUFrQywrQkFBK0IscUNBQXFDLDJCQUEyQixrQ0FBa0MsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsc0NBQXNDLEdBQUcsb0JBQW9CLG9CQUFvQiwwQkFBMEIsR0FBRyxrRUFBa0UsbUJBQW1CLG9CQUFvQiw2QkFBNkIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLGdDQUFnQyx3REFBd0QsR0FBRyx1RUFBdUUsd0NBQXdDLDZCQUE2QixtQ0FBbUMsaUNBQWlDLHNDQUFzQywyQkFBMkIsR0FBRyxxQ0FBcUMsZ0NBQWdDLEdBQUcseUdBQXlHLDREQUE0RCxtQ0FBbUMsNkJBQTZCLGtDQUFrQyxnQ0FBZ0MseUJBQXlCLEdBQUcsb0JBQW9CLGdDQUFnQyxnREFBZ0QsNkJBQTZCLDBCQUEwQiw2QkFBNkIsR0FBRyxlQUFlLG1DQUFtQyxzQkFBc0IsMEJBQTBCLEdBQUcsZ0JBQWdCLGdDQUFnQyw4QkFBOEIsc0JBQXNCLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyxnQkFBZ0IsMEJBQTBCLEdBQUcsbUNBQW1DLHFDQUFxQywwQkFBMEIsR0FBRyx1Q0FBdUMseUJBQXlCLHFDQUFxQyx5QkFBeUIseUJBQXlCLGtDQUFrQyxpQkFBaUIsR0FBRyx3QkFBd0Isb0JBQW9CLHlCQUF5QixlQUFlLDRDQUE0QyxvQ0FBb0MsNkJBQTZCLCtCQUErQixrQkFBa0Isc0NBQXNDLEdBQUcsOEJBQThCLG9DQUFvQywyQkFBMkIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcsc0NBQXNDLHFDQUFxQyx5QkFBeUIsR0FBRyw2QkFBNkIseUJBQXlCLHNDQUFzQyxHQUFHLG1EQUFtRCwwQkFBMEIsR0FBRyw0QkFBNEIsNkJBQTZCLHNDQUFzQyxHQUFHLDhCQUE4Qiw2QkFBNkIsMEJBQTBCLDBCQUEwQixHQUFHLGlCQUFpQixzQkFBc0IsK0JBQStCLEdBQUcscUJBQXFCO0FBQ3hnYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUM5Z0IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIscUJBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxxQ0FBcUMsSUFBSTtBQUN6QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyR0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3M/ZmU1ZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxfcGFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc2hhcGUtd2hpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL3NoYXBlLWdyZXkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvaW1hZ2VzL2hlcm8tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG46cm9vdCB7XG4gICAgLyogQ29sb3JzICovXG4gICAgLS1yaWNoLWJsYWNrLWZvZ3JhLTI5OiBoc2woMjEwLCAyNiUsIDclKTtcbiAgICAtLWNoYW1wYWduZS1waW5rXzIwOiBoc2xhKDIzLCA2MSUsIDg2JSwgMC4yKTtcbiAgICAtLWluZGVwZW5kZW5jZV8zMDogaHNsYSgyNDUsIDE3JSwgMjklLCAwLjMpO1xuICAgIC0tZ3JheS14LTExLWdyYXk6IGhzbCgwLCAwJSwgNzMlKTtcbiAgICAtLWNoYW1wYWduZS1waW5rOiBoc2woMjMsIDYxJSwgODYlKTtcbiAgICAtLXNwYW5pc2gtZ3JheTogaHNsKDAsIDAlLCA2MCUpO1xuICAgIC0tc29uaWMtc2lsdmVyOiBoc2woMCwgMCUsIDQ3JSk7XG4gICAgLS1kZWVwLXNhZmZyb246IGhzbCgzMiwgMTAwJSwgNTklKTtcbiAgICAtLWRhcmstb3JhbmdlOiBoc2woMjgsIDEwMCUsIDU4JSk7XG4gICAgLS1kZXNlcnQtc2FuZDogaHNsKDIzLCA0OSUsIDgyJSk7XG4gICAgLS1pc2FiZWxsaW5lOiBoc2woMzgsIDQ0JSwgOTYlKTtcbiAgICAtLWdhaW5zYm9ybzogaHNsKDAsIDAlLCA4NyUpO1xuICAgIC0tdGFuZ2VyaW5lOiBoc2woMzEsIDg0JSwgNTAlKTtcbiAgICAtLWNpbm5hYmFyOiBoc2woMywgOTAlLCA1NSUpO1xuICAgIC0tYmxhY2tfOTU6IGhzbGEoMCwgMCUsIDAlLCAwLjk1KTtcbiAgICAtLWN1bHR1cmVkOiBoc2woMCwgMCUsIDkzJSk7XG4gICAgLS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcbiAgICAtLW9ueXg6IGhzbCgwLCAwJSwgMjclKTtcblxuICAgIC8qIFR5cG9ncmFwaHkgKi9cbiAgICAtLWZmLXNoYWRvd3MtaW50by1saWdodDogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XG4gICAgLS1mZi1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIC0tZmYtcnViaWs6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG5cbiAgICAtLWZzLTE6IDMuMnJlbTtcbiAgICAtLWZzLTI6IDIuMnJlbTtcbiAgICAtLWZzLTM6IDEuOHJlbTtcbiAgICAtLWZzLTQ6IDEuNHJlbTtcbiAgICAtLWZzLTU6IDEuMnJlbTtcblxuICAgIC0tZnctNTAwOiA1MDA7XG4gICAgLS1mdy02MDA6IDYwMDtcbiAgICAtLWZ3LTcwMDogNzAwO1xuXG4gICAgLyogc3BhY2luZyAqL1xuICAgIC0tc2VjdGlvbi1wYWRkaW5nOiA2MHB4O1xuXG4gICAgLyogc2hhZG93ICovXG4gICAgLS1zaGFkb3ctMTogMCAxcHggNHB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xuICAgIC0tc2hhZG93LTI6IDAgMXB4IDJweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcblxuICAgIC8qIHRyYW5zaXRpb24gKi9cbiAgICAtLXRyYW5zaXRpb24tMTogMC4yNXMgZWFzZTtcbiAgICAtLXRyYW5zaXRpb24tMjogMC41cyBlYXNlO1xuXG4gICAgLyogY2xpcC1wYXRoICovXG4gICAgLS1jbGlwLXBhdGgtMTogcG9seWdvbigwIDQwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xuICAgIC0tY2xpcC1wYXRoLTI6IHBvbHlnb24oMCAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY3NzIHJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmEsXG5pbWcsXG5zdmcsXG5zcGFuLFxuaW5wdXQsXG5zZWxlY3QsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAvKiBmb250OiBpbmhlcml0OyAqL1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1yb2JvdG8pO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcbn1cblxuYm9keS5hY3RpdmUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmV1c2VkIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmctaW5saW5lOiAxNXB4O1xufVxuXG4uaDEsXG4uaDIsXG4uaDMsXG4uaDQge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG5cbi5oMSxcbi5oMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0xKTtcbn1cblxuLmgyLFxuLmgzLFxuLmg0IHtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNjAwKTtcbn1cblxuLmgzIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTIpO1xufVxuXG4uaDQge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtMyk7XG59XG5cbi5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLCB2YXIoLS1kZWVwLXNhZmZyb24pKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdoLCA0NXB4KTtcbiAgICBwYWRkaW5nLWlubGluZTogdmFyKC0tcGFkZGluZy1pbmxpbmUsIDM1cHgpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5idG4taG92ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5idG4taG92ZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiOyAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xcHg7XG4gICAgbGVmdDogMjBweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSkgc2NhbGUodmFyKC0tc2NhbGUsIDEpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0yKTtcbn1cblxuLmJ0bi1ob3Zlcjppcyg6aG92ZXIsIDpmb2N1cyk6OmFmdGVyIHtcbiAgICAtLXNjYWxlOiA1MDA7ICAgIFxufVxuXG4uc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ibG9jazogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcbn1cblxuLnNlY3Rpb24ud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlzYWJlbGxpbmUpO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWN0aW9uLWRpdmlkZXI6OmJlZm9yZSxcbi5zZWN0aW9uLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyLndoaXRlOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uc2VjdGlvbi1kaXZpZGVyLmdyZXk6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi53LTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctYmxvY2stZW5kOiA0MHB4O1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIHNldCB0aGUgaW5pdGlhbCBzdHlsZSBvZiB0aGUgaGVhZGVyICovXG4uaGVhZGVyIHtcbiAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCB2YXIoLS1jaGFtcGFnbmUtcGlua18yMCk7XG4gICAgei1pbmRleDogNDtcbn1cblxuLyogY3JlYXRlIHRoZSBzdHlsZSBvZiB0aGUgaGVhZGVyIHdoZW4gYWN0aXZlICovXG4vKiB1c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9zaXRpb24gYmFzZWQgb24gdGhlIHZpZXdwb3J0Ki9cbi8qIGNoYW5nZSB0aGUgZGVmaW5lZCB2YXJpYWJsZXMgZm9yIGNvbG9ycyAqL1xuLmhlYWRlci5hY3RpdmUge1xuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIC0tYnRuLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC04NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbi8qIHNldCB0aGUgYW5pbWF0aW9uIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUqL1xuQGtleWZyYW1lcyBzbGlkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbn1cblxuLyogc2V0IHRoZSBoZWFkZXIgY29udGFpbmVyIHdpdGggZGlzcGxhdCBmbGV4IGluIG9yZGVyIHRvIFxucG9zaXRpb24gdGhlIGVsZW1lbnRzICovXG4uaGVhZGVyIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4vKiBzdHlsZSB0aGUgbG9nbyBlbGVtZW50cyAqL1xuLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNzAwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn1cblxuLmxvZ28gLnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbn1cblxuLyogc3R5bGUgdGhlIGJ1dHRvbiBncm91cCAqL1xuLmhlYWRlci1idG4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogc3R5bGUgdGhlIGJ1dHRvbiB0aGF0IHNob3dzIHRoZSBuYXZiYXIgKi9cbi5uYXYtdG9nZ2xlLWJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDRweDtcbn1cblxuLmxpbmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5saW5lLm1pZGRsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5saW5lLmJvdHRvbSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi8qIHNldCB0aGUgdHJhbnNmb3JtIHRvIHRyYW5zaXRpb24gd2hlbiBhY3RpdmUgKi9cbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUudG9wIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDNweCkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS5taWRkbGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUuYm90dG9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtM3B4KSByb3RhdGUoNDVkZWcpO1xufVxuXG4vKiBzdHlsZSB0aGUgbmF2YmFyIG9mIHRoZSBoZWFkZXIqL1xuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ubmF2YmFyLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAyMzZweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKiBzdHlsZSB0aGUgbGlzdCBvZiBlbGVtZW50cyBvZiB0aGUgbmF2YmFyICovXG4ubmF2YmFyLWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcbn1cblxuLyogc3R5bGUgdGhlIGxpbmtzIG9mIHRoZSBuYXZiYXIgbGlzdCBvZiBvcHRpb25zICovXG4ubmF2YmFyLWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTUwMCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbiAgICBwYWRkaW5nOiAxOC41cHggMTVweDtcbn1cblxuLm5hdmJhci1saW5rOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstb3JhbmdlKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSBtYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qIGhlcm8gLSBob21lICovXG5cbi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJsb2NrOiAxNDVweCA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlcm8tc3VidGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNoYWRvd3MtaW50by1saWdodCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy0zKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDI1cHg7XG59XG4uaGVyby10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcbiAgICBtYXgtd2lkdGg6IDEyY2g7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmhlcm8tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWRlc2VydC1zYW5kKTtcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHggMzBweDtcbiAgICBtYXgtd2lkdGg6IDQ0Y2g7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLmhlcm8tYmFubmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVybyAuYnRuIHtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4uaGVybyAuYnRuOmlzKDpob3ZlciwgOmZvY3VzKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbi8qIHByb21vIHNlY3Rpb24qL1xuXG4ucHJvbW8tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ucHJvbW8tY2FyZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XG4gICAgY2xpcC1wYXRoOiB2YXIoLS1jbGlwLXBhdGgtMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcbn1cblxuLnByb21vLWNhcmQ6aG92ZXI6OmFmdGVyIHtcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtcGF0aC0yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbn1cblxuLnByb21vLWNhcmQgLmNhcmQtaWNvbiBpbWcge1xuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5wcm9tby1jYXJkOmhvdmVyIC5jYXJkLWljb24gaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xufVxuXG4ucHJvbW8tY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLWJsb2NrOiAxNXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5wcm9tby1jYXJkOmhvdmVyIDppcyguY2FyZC10aXRsZSwgLmNhcmQtdGV4dCl7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLnByb21vLWNhcmQgLmNhcmQtdGV4dCB7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTVweDtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ucHJvbW8tY2FyZCAuY2FyZC1iYW5uZXIge1xuICAgIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xufVxuXG4ucHJvbW8taXRlbSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrRUFBK0U7QUFDL0U7SUFDSSxXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1QywyQ0FBMkM7SUFDM0MsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsdUJBQXVCOztJQUV2QixlQUFlO0lBQ2Ysc0RBQXNEO0lBQ3RELGlDQUFpQztJQUNqQywrQkFBK0I7O0lBRS9CLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOztJQUVkLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTs7SUFFYixZQUFZO0lBQ1osdUJBQXVCOztJQUV2QixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLDBDQUEwQzs7SUFFMUMsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix5QkFBeUI7O0lBRXpCLGNBQWM7SUFDZCx5REFBeUQ7SUFDekQsd0RBQXdEO0FBQzVEOztBQUVBLCtFQUErRTs7QUFFL0U7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lB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SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbjpyb290IHtcXG4gICAgLyogQ29sb3JzICovXFxuICAgIC0tcmljaC1ibGFjay1mb2dyYS0yOTogaHNsKDIxMCwgMjYlLCA3JSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbmtfMjA6IGhzbGEoMjMsIDYxJSwgODYlLCAwLjIpO1xcbiAgICAtLWluZGVwZW5kZW5jZV8zMDogaHNsYSgyNDUsIDE3JSwgMjklLCAwLjMpO1xcbiAgICAtLWdyYXkteC0xMS1ncmF5OiBoc2woMCwgMCUsIDczJSk7XFxuICAgIC0tY2hhbXBhZ25lLXBpbms6IGhzbCgyMywgNjElLCA4NiUpO1xcbiAgICAtLXNwYW5pc2gtZ3JheTogaHNsKDAsIDAlLCA2MCUpO1xcbiAgICAtLXNvbmljLXNpbHZlcjogaHNsKDAsIDAlLCA0NyUpO1xcbiAgICAtLWRlZXAtc2FmZnJvbjogaHNsKDMyLCAxMDAlLCA1OSUpO1xcbiAgICAtLWRhcmstb3JhbmdlOiBoc2woMjgsIDEwMCUsIDU4JSk7XFxuICAgIC0tZGVzZXJ0LXNhbmQ6IGhzbCgyMywgNDklLCA4MiUpO1xcbiAgICAtLWlzYWJlbGxpbmU6IGhzbCgzOCwgNDQlLCA5NiUpO1xcbiAgICAtLWdhaW5zYm9ybzogaHNsKDAsIDAlLCA4NyUpO1xcbiAgICAtLXRhbmdlcmluZTogaHNsKDMxLCA4NCUsIDUwJSk7XFxuICAgIC0tY2lubmFiYXI6IGhzbCgzLCA5MCUsIDU1JSk7XFxuICAgIC0tYmxhY2tfOTU6IGhzbGEoMCwgMCUsIDAlLCAwLjk1KTtcXG4gICAgLS1jdWx0dXJlZDogaHNsKDAsIDAlLCA5MyUpO1xcbiAgICAtLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXG4gICAgLS1vbnl4OiBoc2woMCwgMCUsIDI3JSk7XFxuXFxuICAgIC8qIFR5cG9ncmFwaHkgKi9cXG4gICAgLS1mZi1zaGFkb3dzLWludG8tbGlnaHQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xcbiAgICAtLWZmLXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIC0tZmYtcnViaWs6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC0tZnMtMTogMy4ycmVtO1xcbiAgICAtLWZzLTI6IDIuMnJlbTtcXG4gICAgLS1mcy0zOiAxLjhyZW07XFxuICAgIC0tZnMtNDogMS40cmVtO1xcbiAgICAtLWZzLTU6IDEuMnJlbTtcXG5cXG4gICAgLS1mdy01MDA6IDUwMDtcXG4gICAgLS1mdy02MDA6IDYwMDtcXG4gICAgLS1mdy03MDA6IDcwMDtcXG5cXG4gICAgLyogc3BhY2luZyAqL1xcbiAgICAtLXNlY3Rpb24tcGFkZGluZzogNjBweDtcXG5cXG4gICAgLyogc2hhZG93ICovXFxuICAgIC0tc2hhZG93LTE6IDAgMXB4IDRweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcXG4gICAgLS1zaGFkb3ctMjogMCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xcblxcbiAgICAvKiB0cmFuc2l0aW9uICovXFxuICAgIC0tdHJhbnNpdGlvbi0xOiAwLjI1cyBlYXNlO1xcbiAgICAtLXRyYW5zaXRpb24tMjogMC41cyBlYXNlO1xcblxcbiAgICAvKiBjbGlwLXBhdGggKi9cXG4gICAgLS1jbGlwLXBhdGgtMTogcG9seWdvbigwIDQwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgICAtLWNsaXAtcGF0aC0yOiBwb2x5Z29uKDAgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNzcyByZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYSxcXG5pbWcsXFxuc3ZnLFxcbnNwYW4sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG5idXR0b24sXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGZvbnQ6IGluaGVyaXQ7ICovXFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcm9ib3RvKTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNpbm5hYmFyKTtcXG59XFxuXFxuYm9keS5hY3RpdmUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXVzZWQgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxufVxcblxcbi5oMSxcXG4uaDIsXFxuLmgzLFxcbi5oNCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxufVxcblxcbi5oMSxcXG4uaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTEpO1xcbn1cXG5cXG4uaDIsXFxuLmgzLFxcbi5oNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy02MDApO1xcbn1cXG5cXG4uaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTIpO1xcbn1cXG5cXG4uaDQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTMpO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IsIHZhcigtLWRlZXAtc2FmZnJvbikpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaCwgNDVweCk7XFxuICAgIHBhZGRpbmctaW5saW5lOiB2YXIoLS1wYWRkaW5nLWlubGluZSwgMzVweCk7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5idG4taG92ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5idG4taG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7ICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtMXB4O1xcbiAgICBsZWZ0OiAyMHB4O1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKSBzY2FsZSh2YXIoLS1zY2FsZSwgMSkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0yKTtcXG59XFxuXFxuLmJ0bi1ob3Zlcjppcyg6aG92ZXIsIDpmb2N1cyk6OmFmdGVyIHtcXG4gICAgLS1zY2FsZTogNTAwOyAgICBcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLWJsb2NrOiB2YXIoLS1zZWN0aW9uLXBhZGRpbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi53aGl0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlzYWJlbGxpbmUpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyOjpiZWZvcmUsXFxuLnNlY3Rpb24tZGl2aWRlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxufVxcblxcbi5zZWN0aW9uLWRpdmlkZXIud2hpdGU6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS13aGl0ZS5wbmcpO1xcbn1cXG5cXG4uc2VjdGlvbi1kaXZpZGVyLmdyZXk6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS1ncmV5LnBuZyk7XFxufVxcblxcbi53LTEwMCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGFzLXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDQwcHg7XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IGlubGluZSBtYW5kYXRvcnk7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLyogc2V0IHRoZSBpbml0aWFsIHN0eWxlIG9mIHRoZSBoZWFkZXIgKi9cXG4uaGVhZGVyIHtcXG4gICAgLS1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAtLWJ0bi1jb2xvcjogdmFyKC0tY2hhbXBhZ25lLXBpbmspO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCB2YXIoLS1jaGFtcGFnbmUtcGlua18yMCk7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcblxcbi8qIGNyZWF0ZSB0aGUgc3R5bGUgb2YgdGhlIGhlYWRlciB3aGVuIGFjdGl2ZSAqL1xcbi8qIHVzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgdmlld3BvcnQqL1xcbi8qIGNoYW5nZSB0aGUgZGVmaW5lZCB2YXJpYWJsZXMgZm9yIGNvbG9ycyAqL1xcbi5oZWFkZXIuYWN0aXZlIHtcXG4gICAgLS1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuICAgIC0tYnRuLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IC04NnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0xKTtcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi8qIHNldCB0aGUgYW5pbWF0aW9uIG9mIHRoZSBoZWFkZXIgd2hlbiBhY3RpdmUqL1xcbkBrZXlmcmFtZXMgc2xpZGVJbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gICAgfVxcbn1cXG5cXG4vKiBzZXQgdGhlIGhlYWRlciBjb250YWluZXIgd2l0aCBkaXNwbGF0IGZsZXggaW4gb3JkZXIgdG8gXFxucG9zaXRpb24gdGhlIGVsZW1lbnRzICovXFxuLmhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBsb2dvIGVsZW1lbnRzICovXFxuLmxvZ28ge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LTcwMCk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xcbn1cXG5cXG4ubG9nbyAuc3BhbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBidXR0b24gZ3JvdXAgKi9cXG4uaGVhZGVyLWJ0bi1ncm91cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIHN0eWxlIHRoZSBidXR0b24gdGhhdCBzaG93cyB0aGUgbmF2YmFyICovXFxuLm5hdi10b2dnbGUtYnRuIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5saW5lIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5saW5lLm1pZGRsZSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ubGluZS5ib3R0b20ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLyogc2V0IHRoZSB0cmFuc2Zvcm0gdG8gdHJhbnNpdGlvbiB3aGVuIGFjdGl2ZSAqL1xcbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUudG9wIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAzcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUubWlkZGxlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS5ib3R0b20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtM3B4KSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgbmF2YmFyIG9mIHRoZSBoZWFkZXIqL1xcbi5uYXZiYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG59XFxuXFxuLm5hdmJhci5hY3RpdmUge1xcbiAgICBoZWlnaHQ6IDIzNnB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiBzdHlsZSB0aGUgbGlzdCBvZiBlbGVtZW50cyBvZiB0aGUgbmF2YmFyICovXFxuLm5hdmJhci1saXN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5uYXYtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcXG59XFxuXFxuLyogc3R5bGUgdGhlIGxpbmtzIG9mIHRoZSBuYXZiYXIgbGlzdCBvZiBvcHRpb25zICovXFxuLm5hdmJhci1saW5rIHtcXG4gICAgY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTQpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNTAwKTtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG4gICAgcGFkZGluZzogMTguNXB4IDE1cHg7XFxufVxcblxcbi5uYXZiYXItbGluazppcyg6aG92ZXIsIDpmb2N1cykge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1vcmFuZ2UpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tIG1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4vKiBoZXJvIC0gaG9tZSAqL1xcblxcbi5oZXJvIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvYXNzZXRzL2ltYWdlcy9oZXJvLWJnLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ibG9jazogMTQ1cHggNjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1zdWJ0aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zaGFkb3dzLWludG8tbGlnaHQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZzLTMpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAyNXB4O1xcbn1cXG4uaGVyby10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jaGFtcGFnbmUtcGluayk7XFxuICAgIG1heC13aWR0aDogMTJjaDtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kZXNlcnQtc2FuZCk7XFxuICAgIG1hcmdpbi1ibG9jazogMTVweCAzMHB4O1xcbiAgICBtYXgtd2lkdGg6IDQ0Y2g7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5oZXJvLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZXJvIC5idG4ge1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uaGVybyAuYnRuOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLyogcHJvbW8gc2VjdGlvbiovXFxuXFxuLnByb21vLWNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy0yKTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnByb21vLWNhcmQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXAtc2FmZnJvbik7XFxuICAgIGNsaXAtcGF0aDogdmFyKC0tY2xpcC1wYXRoLTEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjMpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjbGlwLXBhdGg6IHZhcigtLWNsaXAtcGF0aC0yKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLWljb24gaW1nIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLnByb21vLWNhcmQ6aG92ZXIgLmNhcmQtaWNvbiBpbWcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG59XFxuXFxuLnByb21vLWNhcmQgLmNhcmQtdGl0bGUge1xcbiAgICBtYXJnaW4tYmxvY2s6IDE1cHg7XFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XFxufVxcblxcbi5wcm9tby1jYXJkOmhvdmVyIDppcyguY2FyZC10aXRsZSwgLmNhcmQtdGV4dCl7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5wcm9tby1jYXJkIC5jYXJkLXRleHQge1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbn1cXG5cXG4ucHJvbW8tY2FyZCAuY2FyZC1iYW5uZXIge1xcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4ucHJvbW8taXRlbSB7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5oZWFkZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXJcIiwgXCJcIik7XG5cbmNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuLy8gY3JlYXRlIHRoZSBsb2dvIGVsZW1lbnRzXG5jb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbmxvZ28udGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIjtcbmxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG5cbmNvbnN0IHNwYW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5zcGFuTG9nby50ZXh0Q29udGVudCA9IFwiLlwiO1xuc3BhbkxvZ28uY2xhc3NMaXN0LmFkZChcInNwYW5cIik7XG5cbmhlYWRlckgxLmFwcGVuZENoaWxkKGxvZ28pO1xubG9nby5hcHBlbmRDaGlsZChzcGFuTG9nbyk7XG5cbi8vIGNyZWF0ZSB0aGUgbmF2YmFyXG5jb25zdCBoZWFkZXJOYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuaGVhZGVyTmF2YmFyLnNldEF0dHJpYnV0ZShcImRhdGEtbmF2YmFyXCIsIFwiXCIpO1xuaGVhZGVyTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cbmNvbnN0IG5hdmJhckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5jb25zdCBuYXZiYXJPcHRpb25zID0gW1wiSG9tZVwiLCBcIkFib3V0XCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XG5jb25zdCBuYXZiYXJMaW5rcyA9IFtdO1xuZm9yIChsZXQgb3B0aW9uIG9mIG5hdmJhck9wdGlvbnMpIHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiKTtcblxuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7b3B0aW9uLnRvTG93ZXJDYXNlKCl9YCk7XG4gIGEuc2V0QXR0cmlidXRlKFwiZGF0YS1uYXYtbGlua1wiLCBcIlwiKTtcbiAgYS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLWxpbmtcIik7XG4gIGEudGV4dENvbnRlbnQgPSBvcHRpb247XG4gIG5hdmJhckxpbmtzLnB1c2goYSk7XG5cbiAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gIG5hdmJhckxpc3QuYXBwZW5kQ2hpbGQobGkpO1xufVxuXG5oZWFkZXJOYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyTGlzdCk7XG5cbi8vIGNyZWF0ZSB0aGUgYnV0dG9ucyBncm91cFxuY29uc3QgaGVhZGVyQnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaGVhZGVyQnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChcImhlYWRlci1idG4tZ3JvdXBcIik7XG5cbmNvbnN0IGJ1dHRvbk5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5idXR0b25OYXYuY2xhc3NMaXN0LmFkZChcIm5hdi10b2dnbGUtYnRuXCIpO1xuYnV0dG9uTmF2LnNldEF0dHJpYnV0ZShcImRhdGEtbWVudS10b2dnbGUtYnRuXCIsIFwiXCIpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICBjb25zdCBwb3MgPSBpID09IDAgPyBcInRvcFwiIDogaSA9PSAxID8gXCJtaWRkbGVcIiA6IFwiYm90dG9tXCI7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgbGluZSAke3Bvc31gKTtcbiAgYnV0dG9uTmF2LmFwcGVuZENoaWxkKHNwYW4pO1xufVxuXG5oZWFkZXJCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChidXR0b25OYXYpO1xuXG4vLyBhcHBlbmQgYWxsIHNlY3Rpb25zIHRvIHRoZSBoZWFkZXIgbWFpbiBlbGVtZW50XG5oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVySDEpO1xuaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlck5hdmJhcik7XG5oZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQnV0dG9uR3JvdXApO1xuaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbi8vIGFkZCB0byB0aGUgY29udGVudFxuXG5jb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1haW4gY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkb20gbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vLyBuYXZiYXIgdG9nZ2xlXG5cbmJ1dHRvbk5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBoZWFkZXJOYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbmhlYWRlck5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKG5hdmJhckxpbmtzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgIGhlYWRlck5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIGJ1dHRvbk5hdi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuLy8gaGVhZGVyIHN0aWNreVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMDApIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBlbHNlIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL2luaXRpYWxfcGFnZS5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==