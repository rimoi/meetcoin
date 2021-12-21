(self["webpackChunk"] = self["webpackChunk"] || []).push([["design"],{

/***/ "./assets/assets/js/design.js":
/*!************************************!*\
  !*** ./assets/assets/js/design.js ***!
  \************************************/
/***/ (() => {

var languageSelector = document.getElementById("l_selector");
var dropdown_list = document.getElementById("dropdown_list");
var f_france = document.getElementById("f_france");
var f_allemand = document.getElementById("f_allemand");
var f_anglais = document.getElementById("f_anglais");
var f_espagnol = document.getElementById("f_espagnol");
var f_italen = document.getElementById("f_italen");
var selected_flag = document.getElementById("selected_flag");
f_france.addEventListener("click", langFr);
f_allemand.addEventListener("click", langGer);
f_anglais.addEventListener("click", langEn);
f_espagnol.addEventListener("click", langEs);
f_italen.addEventListener("click", langIt);
languageSelector.addEventListener("click", displayFlags);

function displayFlags(event) {
  event.preventDefault();
  dropdown_list.style.opacity = 1;
  dropdown_list.style.visibility = "visible";
}

function langFr(event) {
  event.preventDefault();
  selected_flag.src = "img/drapeau_francais.svg";
  dropdown_list.style.opacity = 0;
  dropdown_list.style.visibility = "hidden";
}

function langGer(event) {
  event.preventDefault();
  selected_flag.src = "img/drapeau_allemand.svg";
  dropdown_list.style.opacity = 0;
  dropdown_list.style.visibility = "hidden";
}

function langEn(event) {
  event.preventDefault();
  selected_flag.src = "img/drapeau_anglais.svg";
  dropdown_list.style.opacity = 0;
  dropdown_list.style.visibility = "hidden";
}

function langEs(event) {
  event.preventDefault();
  selected_flag.src = "img/drapeau_espagnol.svg";
  dropdown_list.style.opacity = 0;
  dropdown_list.style.visibility = "hidden";
}

function langIt(event) {
  event.preventDefault();
  selected_flag.src = "img/drapeau_italien.svg";
  dropdown_list.style.opacity = 0;
  dropdown_list.style.visibility = "hidden";
}

/***/ }),

/***/ "./assets/js/design.js":
/*!*****************************!*\
  !*** ./assets/js/design.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_design_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/css/design.css */ "./assets/assets/css/design.css");
/* harmony import */ var _assets_js_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/design */ "./assets/assets/js/design.js");
/* harmony import */ var _assets_js_design__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_design__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./assets/assets/css/design.css":
/*!**************************************!*\
  !*** ./assets/assets/css/design.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/design.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUFBLGFBQWEsQ0FBQ2dCLEtBQWQsQ0FBb0JFLFVBQXBCLEdBQWlDLFFBQWpDO0FBQ0g7O0FBQ0QsU0FBU04sTUFBVCxDQUFnQkUsS0FBaEIsRUFBdUI7QUFDbkJBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBVCxFQUFBQSxhQUFhLENBQUNhLEdBQWQsR0FBb0IseUJBQXBCO0FBQ0FuQixFQUFBQSxhQUFhLENBQUNnQixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixDQUE5QjtBQUNBakIsRUFBQUEsYUFBYSxDQUFDZ0IsS0FBZCxDQUFvQkUsVUFBcEIsR0FBaUMsUUFBakM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDbEREOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXNzZXRzL2pzL2Rlc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVzaWduLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hc3NldHMvY3NzL2Rlc2lnbi5jc3M/YWJmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbGFuZ3VhZ2VTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibF9zZWxlY3RvclwiKTtcbnZhciBkcm9wZG93bl9saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bl9saXN0XCIpO1xudmFyIGZfZnJhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmX2ZyYW5jZVwiKTtcbnZhciBmX2FsbGVtYW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmX2FsbGVtYW5kXCIpO1xudmFyIGZfYW5nbGFpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZl9hbmdsYWlzXCIpO1xudmFyIGZfZXNwYWdub2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZfZXNwYWdub2xcIik7XG52YXIgZl9pdGFsZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZfaXRhbGVuXCIpO1xudmFyIHNlbGVjdGVkX2ZsYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdGVkX2ZsYWdcIik7XG5cbmZfZnJhbmNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYW5nRnIpO1xuZl9hbGxlbWFuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGFuZ0dlcik7XG5mX2FuZ2xhaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxhbmdFbik7XG5mX2VzcGFnbm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYW5nRXMpO1xuZl9pdGFsZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxhbmdJdCk7XG5sYW5ndWFnZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5RmxhZ3MpO1xuXG5mdW5jdGlvbiBkaXNwbGF5RmxhZ3MoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRyb3Bkb3duX2xpc3Quc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgZHJvcGRvd25fbGlzdC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59XG5mdW5jdGlvbiBsYW5nRnIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbGVjdGVkX2ZsYWcuc3JjID0gXCJpbWcvZHJhcGVhdV9mcmFuY2Fpcy5zdmdcIjtcbiAgICBkcm9wZG93bl9saXN0LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGRyb3Bkb3duX2xpc3Quc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5mdW5jdGlvbiBsYW5nR2VyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWxlY3RlZF9mbGFnLnNyYyA9IFwiaW1nL2RyYXBlYXVfYWxsZW1hbmQuc3ZnXCI7XG4gICAgZHJvcGRvd25fbGlzdC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBkcm9wZG93bl9saXN0LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufVxuZnVuY3Rpb24gbGFuZ0VuKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWxlY3RlZF9mbGFnLnNyYyA9IFwiaW1nL2RyYXBlYXVfYW5nbGFpcy5zdmdcIjtcbiAgICBkcm9wZG93bl9saXN0LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGRyb3Bkb3duX2xpc3Quc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5mdW5jdGlvbiBsYW5nRXMoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbGVjdGVkX2ZsYWcuc3JjID0gXCJpbWcvZHJhcGVhdV9lc3BhZ25vbC5zdmdcIjtcbiAgICBkcm9wZG93bl9saXN0LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGRyb3Bkb3duX2xpc3Quc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5mdW5jdGlvbiBsYW5nSXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbGVjdGVkX2ZsYWcuc3JjID0gXCJpbWcvZHJhcGVhdV9pdGFsaWVuLnN2Z1wiO1xuICAgIGRyb3Bkb3duX2xpc3Quc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgZHJvcGRvd25fbGlzdC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn1cbiIsImltcG9ydCBcIi4uL2Fzc2V0cy9jc3MvZGVzaWduLmNzc1wiO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9qcy9kZXNpZ24nO1xuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsibGFuZ3VhZ2VTZWxlY3RvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcm9wZG93bl9saXN0IiwiZl9mcmFuY2UiLCJmX2FsbGVtYW5kIiwiZl9hbmdsYWlzIiwiZl9lc3BhZ25vbCIsImZfaXRhbGVuIiwic2VsZWN0ZWRfZmxhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsYW5nRnIiLCJsYW5nR2VyIiwibGFuZ0VuIiwibGFuZ0VzIiwibGFuZ0l0IiwiZGlzcGxheUZsYWdzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9