/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/regestration/index.js":
/*!**********************************************!*\
  !*** ./src/components/regestration/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

let signInBtn = document.getElementById("register");

signInBtn.addEventListener("click", () => {
  window.location = "/registration";
});

if (window.sessionStorage.getItem("registration")) {
  let greetingElem = document.querySelector(".greeting"),
    mainPage = document.querySelector(".col-10"),
    navBarElem = document.querySelector(".navbar__container"),
    regBtn = document.getElementById("register"),
    userName = document.querySelector(".nameShow");

  greetingElem.classList.add("hide");
  mainPage.classList.remove("hide");
  regBtn.classList.add("hide");
  navBarElem.classList.remove("hide");
  userName.textContent = window.sessionStorage.getItem("user name");
}


/***/ }),

/***/ "./src/components/setting/index.js":
/*!*****************************************!*\
  !*** ./src/components/setting/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

let whiteBtn = document.getElementById("themeWhite"),
  blackBtn = document.getElementById("themeBlack"),
  enBtn = document.getElementById("langEn"),
  ruBtn = document.getElementById("langRu"),
  mainPage = document.querySelector("body");

const changeElem = (activeElem, unactiveElem) => {
  activeElem.classList.add("activeBtn");
  unactiveElem.classList.remove("activeBtn");
};

const changePageColor = (color) => {
  mainPage.style.backgroundColor = color;
};

if (window.sessionStorage.getItem("theme") == "white") {
  changeElem(whiteBtn, blackBtn);
  changePageColor("white");
} else if (window.sessionStorage.getItem("theme") == "black") {
  changeElem(blackBtn, whiteBtn);
  changePageColor("#cacaca");
}

if (window.sessionStorage.getItem("lang") == "en") {
  changeElem(enBtn, ruBtn);
} else if (window.sessionStorage.getItem("lang") == "ru") {
  changeElem(ruBtn, enBtn);
}

whiteBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("theme", "white");
  changeElem(whiteBtn, blackBtn);
  changePageColor("white");
});
blackBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("theme", "black");
  changeElem(blackBtn, whiteBtn);
  changePageColor("#cacaca");
});

enBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("lang", "en");
  changeElem(enBtn, ruBtn);
});
ruBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("lang", "ru");
  changeElem(ruBtn, enBtn);
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ "./style/index.scss");
/* harmony import */ var _components_regestration_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/regestration/index */ "./src/components/regestration/index.js");
/* harmony import */ var _components_regestration_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_regestration_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_setting_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/setting/index */ "./src/components/setting/index.js");
/* harmony import */ var _components_setting_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_setting_index__WEBPACK_IMPORTED_MODULE_2__);




let signOutBtn = document.getElementById("signOut");

signOutBtn.addEventListener("click", () => {
  window.sessionStorage.clear();
  window.location = "/";
});

window.addEventListener("load", () => {
  window.sessionStorage.getItem("theme")
    ? ""
    : window.sessionStorage.setItem("theme", "white");

  window.sessionStorage.getItem("lang")
    ? ""
    : window.sessionStorage.setItem("lang", "en");
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map