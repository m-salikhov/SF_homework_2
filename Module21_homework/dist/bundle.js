/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/scripts/hw.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "hello": () => (/* binding */ hello)\n/* harmony export */ });\nfunction hello(name) {\r\n  console.log(`Hello, ${name}!`);\r\n}\r\n\n\n//# sourceURL=webpack://module21_homework/./src/scripts/hw.js?')},"./src/scripts/script.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw.js */ \"./src/scripts/hw.js\");\n\r\n\r\nlet collapsible = document.getElementsByClassName('content__collapsible');\r\nlet i;\r\n\r\nfor (i = 0; i < collapsible.length; i++) {\r\n  collapsible[i].addEventListener('click', function () {\r\n    this.classList.toggle('active');\r\n    let content = this.nextElementSibling;\r\n    if (content.style.display === 'block') {\r\n      content.style.display = 'none';\r\n    } else {\r\n      content.style.display = 'block';\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n(0,_hw_js__WEBPACK_IMPORTED_MODULE_0__.hello)('Maks');\r\n\n\n//# sourceURL=webpack://module21_homework/./src/scripts/script.js?")}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__("./src/scripts/script.js")})();