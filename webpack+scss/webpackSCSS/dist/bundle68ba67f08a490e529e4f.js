/* ! For license information please see bundle68ba67f08a490e529e4f.js.LICENSE.txt */
(function() {
  const __webpack_modules__={'./index.js'(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'; eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/all.scss */ "./scss/all.scss");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./modal.js");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./slider.js");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://less-project/./index.js?');
  }, './modal.js'() {
    eval('const modalWindow = document.querySelector(".modal-window")\nconst open = document.getElementById("open")\nconst close = document.getElementById("close")\nconst close1 = document.getElementById("close1")\nopen.onclick = () =>{\n    modalWindow.classList.add("active")\n}\n\nclose.onclick = () =>{\n    modalWindow.classList.remove("active")\n}\n\nclose1.onclick = () =>{\n    modalWindow.classList.remove("active")\n}\n\n\n\n//# sourceURL=webpack://less-project/./modal.js?');
  }, './scss/all.scss'(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    'use strict'; eval('__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://less-project/./scss/all.scss?');
  }, './slider.js'() {
    eval('const slideImg = document.querySelector(\'.main-img\')\nconst images = [\n    \'images/class1.jpeg\',\n    \'images/class2.jpeg\',\n    \'images/main.png\'\n];\nlet imgIndex = 0\nlet output = ""\nlet numOf = 0\nconst showImg = () =>{\n    if(imgIndex < 0){\n        imgIndex = images.length - 1\n    }else if(imgIndex >= images.length){\n        imgIndex = 0\n    }\n    console.log(imgIndex);\n    slideImg.innerHTML = `\n    <img src = "${images[imgIndex]}">\n    `\n    imgIndex++\n\n}\nsetInterval(showImg , 3000)\n\nshowImg(imgIndex)\n\n\n//# sourceURL=webpack://less-project/./slider.js?');
  }}; const __webpack_module_cache__={}; function __webpack_require__(e) {
    const _=__webpack_module_cache__[e]; if (void 0!==_) return _.exports; const n=__webpack_module_cache__[e]={exports: {}}; return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
  }__webpack_require__.n=function(e) {
    const _=e&&e.__esModule?function() {
      return e.default;
    }:function() {
      return e;
    }; return __webpack_require__.d(_, {a: _}), _;
  }, __webpack_require__.d=function(e, _) {
    for (const n in _)__webpack_require__.o(_, n)&&!__webpack_require__.o(e, n)&&Object.defineProperty(e, n, {enumerable: !0, get: _[n]});
  }, __webpack_require__.o=function(e, _) {
    return Object.prototype.hasOwnProperty.call(e, _);
  }, __webpack_require__.r=function(e) {
    'undefined'!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }; const __webpack_exports__=__webpack_require__('./index.js');
})();
