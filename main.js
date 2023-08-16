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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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


/* ------------------------------ header -------------------------------------*/
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

.header.active {
    --color: var(--rich-black-fogra-29);
    --btn-color: var(--rich-black-fogra-29);

    position: fixed;
    top: -86px;
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    animation: slideIn 0.5s ease-out forwards;
}

@keyframes slideIn {
    0% {transform: translateY(0);}
    100% {transform: translateY(100%);}
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.logo {
    color: var(--color);
    font-family: var(--ff-rubik);
    font-size: 2.8rem;
    font-weight: var(--fw-700);
    letter-spacing: -2px;
}

.logo .span {
    display: inline-block;
    color: var(--deep-saffron) ;
}

.header-btn-group {
    display: flex;
    align-items: center;
}

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
    width: 20px ;
}

.line.bottom {
    margin-left: auto;
}

.nav-toggle-btn.active .line.top {
    transform: translate(1px, 3px) rotate(45deg);
}

.nav-toggle-btn.active .line.middle {
    transform: rotate(-45deg);
}

.nav-toggle-btn.active .line.bottom {
    transform: translate(-1px, -3px) rotate(45deg);
}

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
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* -------------------- variables --------------------------------------------*/\n:root {\n    /* Colors */\n    --rich-black-fogra-29: hsl(210, 26%, 7%);\n    --champagne-pink_20: hsla(23, 61%, 86%, 0.2);\n    --independence_30: hsla(245, 17%, 29%, 0.3);\n    --gray-x-11-gray: hsl(0, 0%, 73%);\n    --champagne-pink: hsl(23, 61%, 86%);\n    --spanish-gray: hsl(0, 0%, 60%);\n    --sonic-silver: hsl(0, 0%, 47%);\n    --deep-saffron: hsl(32, 100%, 59%);\n    --dark-orange: hsl(28, 100%, 58%);\n    --desert-sand: hsl(23, 49%, 82%);\n    --isabelline: hsl(38, 44%, 96%);\n    --gainsboro: hsl(0, 0%, 87%);\n    --tangerine: hsl(31, 84%, 50%);\n    --cinnabar: hsl(3, 90%, 55%);\n    --black_95: hsla(0, 0%, 0%, 0.95);\n    --cultured: hsl(0, 0%, 93%);\n    --white: hsl(0, 0%, 100%);\n    --black: hsl(0, 0%, 0%);\n    --onyx: hsl(0, 0%, 27%);\n\n    /* Typography */\n    --ff-shadows-into-light: 'Shadows Into Light', cursive;\n    --ff-roboto: 'Roboto', sans-serif;\n    --ff-rubik: 'Rubik', sans-serif;\n\n    --fs-1: 3.2rem;\n    --fs-2: 2.2rem;\n    --fs-3: 1.8rem;\n    --fs-4: 1.4rem;\n    --fs-5: 1.2rem;\n\n    --fw-500: 500;\n    --fw-600: 600;\n    --fw-700: 700;\n\n    /* spacing */\n    --section-padding: 60px;\n\n    /* shadow */\n    --shadow-1: 0 1px 4px hsla(0, 0%, 0%, 0.2);\n    --shadow-2: 0 1px 2px hsla(0, 0%, 0%, 0.2);\n\n    /* transition */\n    --transition-1: 0.25s ease;\n    --transition-2: 0.5s ease;\n\n    /* clip-path */\n    --clip-path-1: polygon(0 40%, 100% 0%, 100% 100%, 0 100%);\n    --clip-path-2: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);\n}\n\n/* ------------------ css reset --------------------------------------------- */\n\n*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nli {\n    list-style: none;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na,\nimg,\nsvg,\nspan,\ninput,\nselect,\nbutton,\ntextarea {\n    display: block;\n}\n\nimg {\n    height: auto;\n}\n\ninput,\nselect,\nbutton,\ntextarea {\n    background: none;\n    border: none;\n    /* font: inherit; */\n}\n\ninput,\nselect,\ntextarea {\n    width: 100%;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nhtml {\n    font-family: var(--ff-roboto);\n    font-size: 10px;\n    scroll-behavior: smooth;\n}\n\nbody {\n    background-color: var(--white);\n    color: var(--sonic-silver);\n    font-size: 1.6rem;\n    line-height: 1.6;\n    overflow-x: hidden;\n}\n\nbody.active {\n    overflow: hidden;\n}\n\n:focus-visible {\n    outline-offset: 4px;\n}\n\n::selection {\n    background-color: var(--deep-saffron);\n    color: var(--white);\n}\n\n\n/* ------------------------- reused style ------------------------------------*/\n\n.container {\n    padding-inline: 15px;\n}\n\n\n/* ------------------------------ header -------------------------------------*/\n.header {\n    --color: var(--white);\n    --btn-color: var(--champagne-pink);\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-block: 20px;\n    border-block-end: 1px solid var(--champagne-pink_20);\n    z-index: 4;\n}\n\n.header.active {\n    --color: var(--rich-black-fogra-29);\n    --btn-color: var(--rich-black-fogra-29);\n\n    position: fixed;\n    top: -86px;\n    background-color: var(--white);\n    box-shadow: var(--shadow-1);\n    animation: slideIn 0.5s ease-out forwards;\n}\n\n@keyframes slideIn {\n    0% {transform: translateY(0);}\n    100% {transform: translateY(100%);}\n}\n\n.header .container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\n.logo {\n    color: var(--color);\n    font-family: var(--ff-rubik);\n    font-size: 2.8rem;\n    font-weight: var(--fw-700);\n    letter-spacing: -2px;\n}\n\n.logo .span {\n    display: inline-block;\n    color: var(--deep-saffron) ;\n}\n\n.header-btn-group {\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle-btn {\n    display: grid;\n    gap: 4px;\n}\n\n.line {\n    width: 10px;\n    height: 3px;\n    background-color: var(--btn-color);\n    border-radius: 5px;\n    transition: var(--transition-1);\n}\n\n.line.middle {\n    width: 20px ;\n}\n\n.line.bottom {\n    margin-left: auto;\n}\n\n.nav-toggle-btn.active .line.top {\n    transform: translate(1px, 3px) rotate(45deg);\n}\n\n.nav-toggle-btn.active .line.middle {\n    transform: rotate(-45deg);\n}\n\n.nav-toggle-btn.active .line.bottom {\n    transform: translate(-1px, -3px) rotate(45deg);\n}\n\n.navbar {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: calc(100% - 30px);\n    background-color: var(--white);\n    padding-inline: 20px;\n    box-shadow: var(--shadow-1);\n    height: 0;\n    overflow: hidden;\n    visibility: hidden;\n    transition: var(--transition-1);\n}\n\n.navbar.active {\n    height: 236px;\n    visibility: visible;\n}\n\n.navbar-list {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-item {\n    flex-grow: 1;\n}\n\n.nav-item:not(:last-child) {\n    border-block-end: 1px solid hsla(0, 0%, 0%, 0.04);\n}\n\n.navbar-link {\n    color: var(--rich-black-fogra-29);\n    font-size: var(--fs-4);\n    font-family: var(--ff-rubik);\n    font-weight: var(--fw-500);\n    transition: var(--transition-1);\n    padding: 18.5px 15px;\n}\n\n.navbar-link:is(:hover, :focus) {\n    color: var(--dark-orange);\n}"],"sourceRoot":""}]);
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

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = [...document.querySelectorAll("[data-nav-link]")];
const menuToggleButton = document.querySelector("[data-menu-toggle-btn]");

menuToggleButton.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

navbar.addEventListener("click", function (e) {
  console.log(this);
  if (navbarLinks.includes(e.target)) {
    navbar.classList.toggle("active");
    menuToggleButton.classList.toggle("active");
  }
});

// header sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) header.classList.add("active");
  else header.classList.remove("active");
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxtR0FBbUcsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9B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QUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcz9mZTVlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbF9wYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuOnJvb3Qge1xuICAgIC8qIENvbG9ycyAqL1xuICAgIC0tcmljaC1ibGFjay1mb2dyYS0yOTogaHNsKDIxMCwgMjYlLCA3JSk7XG4gICAgLS1jaGFtcGFnbmUtcGlua18yMDogaHNsYSgyMywgNjElLCA4NiUsIDAuMik7XG4gICAgLS1pbmRlcGVuZGVuY2VfMzA6IGhzbGEoMjQ1LCAxNyUsIDI5JSwgMC4zKTtcbiAgICAtLWdyYXkteC0xMS1ncmF5OiBoc2woMCwgMCUsIDczJSk7XG4gICAgLS1jaGFtcGFnbmUtcGluazogaHNsKDIzLCA2MSUsIDg2JSk7XG4gICAgLS1zcGFuaXNoLWdyYXk6IGhzbCgwLCAwJSwgNjAlKTtcbiAgICAtLXNvbmljLXNpbHZlcjogaHNsKDAsIDAlLCA0NyUpO1xuICAgIC0tZGVlcC1zYWZmcm9uOiBoc2woMzIsIDEwMCUsIDU5JSk7XG4gICAgLS1kYXJrLW9yYW5nZTogaHNsKDI4LCAxMDAlLCA1OCUpO1xuICAgIC0tZGVzZXJ0LXNhbmQ6IGhzbCgyMywgNDklLCA4MiUpO1xuICAgIC0taXNhYmVsbGluZTogaHNsKDM4LCA0NCUsIDk2JSk7XG4gICAgLS1nYWluc2Jvcm86IGhzbCgwLCAwJSwgODclKTtcbiAgICAtLXRhbmdlcmluZTogaHNsKDMxLCA4NCUsIDUwJSk7XG4gICAgLS1jaW5uYWJhcjogaHNsKDMsIDkwJSwgNTUlKTtcbiAgICAtLWJsYWNrXzk1OiBoc2xhKDAsIDAlLCAwJSwgMC45NSk7XG4gICAgLS1jdWx0dXJlZDogaHNsKDAsIDAlLCA5MyUpO1xuICAgIC0td2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgLS1ibGFjazogaHNsKDAsIDAlLCAwJSk7XG4gICAgLS1vbnl4OiBoc2woMCwgMCUsIDI3JSk7XG5cbiAgICAvKiBUeXBvZ3JhcGh5ICovXG4gICAgLS1mZi1zaGFkb3dzLWludG8tbGlnaHQ6ICdTaGFkb3dzIEludG8gTGlnaHQnLCBjdXJzaXZlO1xuICAgIC0tZmYtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAtLWZmLXJ1YmlrOiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuXG4gICAgLS1mcy0xOiAzLjJyZW07XG4gICAgLS1mcy0yOiAyLjJyZW07XG4gICAgLS1mcy0zOiAxLjhyZW07XG4gICAgLS1mcy00OiAxLjRyZW07XG4gICAgLS1mcy01OiAxLjJyZW07XG5cbiAgICAtLWZ3LTUwMDogNTAwO1xuICAgIC0tZnctNjAwOiA2MDA7XG4gICAgLS1mdy03MDA6IDcwMDtcblxuICAgIC8qIHNwYWNpbmcgKi9cbiAgICAtLXNlY3Rpb24tcGFkZGluZzogNjBweDtcblxuICAgIC8qIHNoYWRvdyAqL1xuICAgIC0tc2hhZG93LTE6IDAgMXB4IDRweCBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcbiAgICAtLXNoYWRvdy0yOiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMik7XG5cbiAgICAvKiB0cmFuc2l0aW9uICovXG4gICAgLS10cmFuc2l0aW9uLTE6IDAuMjVzIGVhc2U7XG4gICAgLS10cmFuc2l0aW9uLTI6IDAuNXMgZWFzZTtcblxuICAgIC8qIGNsaXAtcGF0aCAqL1xuICAgIC0tY2xpcC1wYXRoLTE6IHBvbHlnb24oMCA0MCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgICAtLWNsaXAtcGF0aC0yOiBwb2x5Z29uKDAgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tIGNzcyByZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hLFxuaW1nLFxuc3ZnLFxuc3BhbixcbmlucHV0LFxuc2VsZWN0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogZm9udDogaW5oZXJpdDsgKi9cbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5odG1sIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcm9ib3RvKTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuYm9keS5hY3RpdmUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lLW9mZnNldDogNHB4O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmV1c2VkIHN0eWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmctaW5saW5lOiAxNXB4O1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVhZGVyIHtcbiAgICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xuICAgIGJvcmRlci1ibG9jay1lbmQ6IDFweCBzb2xpZCB2YXIoLS1jaGFtcGFnbmUtcGlua18yMCk7XG4gICAgei1pbmRleDogNDtcbn1cblxuLmhlYWRlci5hY3RpdmUge1xuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xuICAgIC0tYnRuLWNvbG9yOiB2YXIoLS1yaWNoLWJsYWNrLWZvZ3JhLTI5KTtcblxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC04NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTt9XG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO31cbn1cblxuLmhlYWRlciAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZnctNzAwKTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcbn1cblxuLmxvZ28gLnNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKSA7XG59XG5cbi5oZWFkZXItYnRuLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtdG9nZ2xlLWJ0biB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDRweDtcbn1cblxuLmxpbmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG59XG5cbi5saW5lLm1pZGRsZSB7XG4gICAgd2lkdGg6IDIwcHggO1xufVxuXG4ubGluZS5ib3R0b20ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLnRvcCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAzcHgpIHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5uYXYtdG9nZ2xlLWJ0bi5hY3RpdmUgLmxpbmUubWlkZGxlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLmJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTNweCkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuLm5hdmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xufVxuXG4ubmF2YmFyLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiAyMzZweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubmF2YmFyLWxpc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ubmF2LWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDAlLCAwLjA0KTtcbn1cblxuLm5hdmJhci1saW5rIHtcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mcy00KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcnViaWspO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy01MDApO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tMSk7XG4gICAgcGFkZGluZzogMTguNXB4IDE1cHg7XG59XG5cbi5uYXZiYXItbGluazppcyg6aG92ZXIsIDpmb2N1cykge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLCtFQUErRTtBQUMvRTtJQUNJLFdBQVc7SUFDWCx3Q0FBd0M7SUFDeEMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7O0lBRXZCLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsaUNBQWlDO0lBQ2pDLCtCQUErQjs7SUFFL0IsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7O0lBRWQsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhOztJQUViLFlBQVk7SUFDWix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsMENBQTBDOztJQUUxQyxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLHlEQUF5RDtJQUN6RCx3REFBd0Q7QUFDNUQ7O0FBRUEsK0VBQStFOztBQUUvRTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTs7Ozs7Ozs7SUFRSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOzs7SUFHSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtBQUN2Qjs7O0FBR0EsK0VBQStFOztBQUUvRTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBR0EsK0VBQStFO0FBQy9FO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQzs7SUFFbEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVDQUF1Qzs7SUFFdkMsZUFBZTtJQUNmLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLElBQUksd0JBQXdCLENBQUM7SUFDN0IsTUFBTSwyQkFBMkIsQ0FBQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuOnJvb3Qge1xcbiAgICAvKiBDb2xvcnMgKi9cXG4gICAgLS1yaWNoLWJsYWNrLWZvZ3JhLTI5OiBoc2woMjEwLCAyNiUsIDclKTtcXG4gICAgLS1jaGFtcGFnbmUtcGlua18yMDogaHNsYSgyMywgNjElLCA4NiUsIDAuMik7XFxuICAgIC0taW5kZXBlbmRlbmNlXzMwOiBoc2xhKDI0NSwgMTclLCAyOSUsIDAuMyk7XFxuICAgIC0tZ3JheS14LTExLWdyYXk6IGhzbCgwLCAwJSwgNzMlKTtcXG4gICAgLS1jaGFtcGFnbmUtcGluazogaHNsKDIzLCA2MSUsIDg2JSk7XFxuICAgIC0tc3BhbmlzaC1ncmF5OiBoc2woMCwgMCUsIDYwJSk7XFxuICAgIC0tc29uaWMtc2lsdmVyOiBoc2woMCwgMCUsIDQ3JSk7XFxuICAgIC0tZGVlcC1zYWZmcm9uOiBoc2woMzIsIDEwMCUsIDU5JSk7XFxuICAgIC0tZGFyay1vcmFuZ2U6IGhzbCgyOCwgMTAwJSwgNTglKTtcXG4gICAgLS1kZXNlcnQtc2FuZDogaHNsKDIzLCA0OSUsIDgyJSk7XFxuICAgIC0taXNhYmVsbGluZTogaHNsKDM4LCA0NCUsIDk2JSk7XFxuICAgIC0tZ2FpbnNib3JvOiBoc2woMCwgMCUsIDg3JSk7XFxuICAgIC0tdGFuZ2VyaW5lOiBoc2woMzEsIDg0JSwgNTAlKTtcXG4gICAgLS1jaW5uYWJhcjogaHNsKDMsIDkwJSwgNTUlKTtcXG4gICAgLS1ibGFja185NTogaHNsYSgwLCAwJSwgMCUsIDAuOTUpO1xcbiAgICAtLWN1bHR1cmVkOiBoc2woMCwgMCUsIDkzJSk7XFxuICAgIC0td2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIC0tYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcbiAgICAtLW9ueXg6IGhzbCgwLCAwJSwgMjclKTtcXG5cXG4gICAgLyogVHlwb2dyYXBoeSAqL1xcbiAgICAtLWZmLXNoYWRvd3MtaW50by1saWdodDogJ1NoYWRvd3MgSW50byBMaWdodCcsIGN1cnNpdmU7XFxuICAgIC0tZmYtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgLS1mZi1ydWJpazogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLS1mcy0xOiAzLjJyZW07XFxuICAgIC0tZnMtMjogMi4ycmVtO1xcbiAgICAtLWZzLTM6IDEuOHJlbTtcXG4gICAgLS1mcy00OiAxLjRyZW07XFxuICAgIC0tZnMtNTogMS4ycmVtO1xcblxcbiAgICAtLWZ3LTUwMDogNTAwO1xcbiAgICAtLWZ3LTYwMDogNjAwO1xcbiAgICAtLWZ3LTcwMDogNzAwO1xcblxcbiAgICAvKiBzcGFjaW5nICovXFxuICAgIC0tc2VjdGlvbi1wYWRkaW5nOiA2MHB4O1xcblxcbiAgICAvKiBzaGFkb3cgKi9cXG4gICAgLS1zaGFkb3ctMTogMCAxcHggNHB4IGhzbGEoMCwgMCUsIDAlLCAwLjIpO1xcbiAgICAtLXNoYWRvdy0yOiAwIDFweCAycHggaHNsYSgwLCAwJSwgMCUsIDAuMik7XFxuXFxuICAgIC8qIHRyYW5zaXRpb24gKi9cXG4gICAgLS10cmFuc2l0aW9uLTE6IDAuMjVzIGVhc2U7XFxuICAgIC0tdHJhbnNpdGlvbi0yOiAwLjVzIGVhc2U7XFxuXFxuICAgIC8qIGNsaXAtcGF0aCAqL1xcbiAgICAtLWNsaXAtcGF0aC0xOiBwb2x5Z29uKDAgNDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxuICAgIC0tY2xpcC1wYXRoLTI6IHBvbHlnb24oMCAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0gY3NzIHJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5hLFxcbmltZyxcXG5zdmcsXFxuc3BhbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxuYnV0dG9uLFxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgLyogZm9udDogaW5oZXJpdDsgKi9cXG59XFxuXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1yb2JvdG8pO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keS5hY3RpdmUge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiA0cHg7XFxufVxcblxcbjo6c2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcC1zYWZmcm9uKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXVzZWQgc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDE1cHg7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmhlYWRlciB7XFxuICAgIC0tY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgLS1idG4tY29sb3I6IHZhcigtLWNoYW1wYWduZS1waW5rKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAyMHB4O1xcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgdmFyKC0tY2hhbXBhZ25lLXBpbmtfMjApO1xcbiAgICB6LWluZGV4OiA0O1xcbn1cXG5cXG4uaGVhZGVyLmFjdGl2ZSB7XFxuICAgIC0tY29sb3I6IHZhcigtLXJpY2gtYmxhY2stZm9ncmEtMjkpO1xcbiAgICAtLWJ0bi1jb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtODZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctMSk7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO31cXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO31cXG59XFxuXFxuLmhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXJ1YmlrKTtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy03MDApO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTJweDtcXG59XFxuXFxuLmxvZ28gLnNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1kZWVwLXNhZmZyb24pIDtcXG59XFxuXFxuLmhlYWRlci1idG4tZ3JvdXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1idG4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmxpbmUge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG59XFxuXFxuLmxpbmUubWlkZGxlIHtcXG4gICAgd2lkdGg6IDIwcHggO1xcbn1cXG5cXG4ubGluZS5ib3R0b20ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS50b3Age1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDNweCkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLm5hdi10b2dnbGUtYnRuLmFjdGl2ZSAubGluZS5taWRkbGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4ubmF2LXRvZ2dsZS1idG4uYWN0aXZlIC5saW5lLmJvdHRvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0zcHgpIHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTEpO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi0xKTtcXG59XFxuXFxuLm5hdmJhci5hY3RpdmUge1xcbiAgICBoZWlnaHQ6IDIzNnB4O1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4ubmF2YmFyLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMCUsIDAuMDQpO1xcbn1cXG5cXG4ubmF2YmFyLWxpbmsge1xcbiAgICBjb2xvcjogdmFyKC0tcmljaC1ibGFjay1mb2dyYS0yOSk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZnMtNCk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1ydWJpayk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy01MDApO1xcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLTEpO1xcbiAgICBwYWRkaW5nOiAxOC41cHggMTVweDtcXG59XFxuXFxuLm5hdmJhci1saW5rOmlzKDpob3ZlciwgOmZvY3VzKSB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLW9yYW5nZSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIG5hdmJhciB0b2dnbGVcblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5hdmJhcl1cIik7XG5jb25zdCBuYXZiYXJMaW5rcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmF2LWxpbmtdXCIpXTtcbmNvbnN0IG1lbnVUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbWVudS10b2dnbGUtYnRuXVwiKTtcblxubWVudVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufSk7XG5cbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgY29uc29sZS5sb2codGhpcyk7XG4gIGlmIChuYXZiYXJMaW5rcy5pbmNsdWRlcyhlLnRhcmdldCkpIHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICBtZW51VG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG4vLyBoZWFkZXIgc3RpY2t5XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1oZWFkZXJdXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDEwMCkgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGVsc2UgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9pbml0aWFsX3BhZ2UuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==