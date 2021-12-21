(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! select2/dist/js/i18n/fr */ "./node_modules/select2/dist/js/i18n/fr.js");
/* harmony import */ var select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_i18n_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_scripts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/scripts */ "./assets/js/scripts.js");
/* harmony import */ var _js_scripts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_scripts__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // start the Stimulus application




__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");





/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/scripts.js":
/*!******************************!*\
  !*** ./assets/js/scripts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

$(function () {
  console.log('je passe la partie javascript');
  var input_select2 = $('.js-select2');
  input_select2.select2({
    allowClear: true,
    placeholder: input_select2.attr('placeholder')
  });
  $('.js-button-upload-file, .js-submit-with-confirmation').on('click', function (e) {
    var form = $(this).closest('form');
    var data = $(this).data('type');
    e.preventDefault();
    Swal.fire({
      title: 'Voulez-vous bien continuer ?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      showCancelButton: true,
      showCloseButton: true
    }).then(function (result) {
      if (result.isConfirmed) {
        if (data) {
          $('.js-' + data).trigger('click');
        } else {
          form.trigger('submit');
        }
      }
    });
  });
  $('form.js-form').submit(function (e) {
    var formContext = $(this);
    var data = formContext.serializeArray();
    e.preventDefault();
    Swal.fire({
      title: 'vous voulez bien continuer ?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      showCancelButton: true,
      showCloseButton: true
    }).then(function (result) {
      if (result.isConfirmed) {
        if (data && data[0] && data[0].value) {
          if (data && data[0] && data[0].name) {
            if (data[0].name === 'unlimited') {
              generateUrl(formContext, data[0], '.js-spinner');
            }

            if (data[0].name === 'paid') {
              generateUrl(formContext, data[0], '.js-spinner');
            }

            if (data[0].name === 'reinitialiser') {
              reinitialiser(formContext, data[0], '.js-spinner');
            }
          }
        } else if (data && data[0] && !data[0].value) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vous devez renseignez un nombre'
          });
        }
      }
    });
  });

  function generateUrl(context, data, className) {
    var element = context.find(className);
    var form = context;
    var type = data.name;
    var value = data.value;
    element.html("\n         <div class=\"spinner-border text-primary\" role=\"status\">\n         </div>\n    ");
    $.ajax({
      url: Routing.generate('generate_url', {
        'limit': value,
        'type': type
      }),
      type: 'POST',
      success: function success(data) {
        if (data.error === false) {
          element.replaceWith("\n                    <div class=\"alert alert-info js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-success\"></i>\n                        ".concat(value, " G\xE9n\xE8rer avec success\n                    </div>\n                  "));
        } else {
          element.replaceWith("\n                    <div class=\"alert alert-danger js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-danger\"></i>\n                        Une erreur est survenue !\n                    </div>\n                  ");
        }

        form.trigger("reset");
      },
      error: function error() {
        element.replaceWith("\n                    <div class=\"alert alert-danger js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-danger\"></i>\n                        Une erreur est survenue !\n                    </div>\n                  ");
      }
    });
  }

  function reinitialiser(context, data, className) {
    var element = context.find(className);
    var form = context;
    var type = data.name;
    var value = data.value.split(' ');
    element.html("\n         <div class=\"spinner-border text-primary\" role=\"status\">\n         </div>\n    ");
    $.ajax({
      url: Routing.generate('reset_url', {
        'id': value
      }),
      type: 'POST',
      success: function success(data) {
        if (data.error === 1) {
          element.replaceWith("\n                    <div class=\"alert alert-info js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-success\"></i>\n                        ".concat(value, " supprim\xE9s avec succ\xE9s !\n                    </div>\n                  "));
        } else {
          element.replaceWith("\n                    <div class=\"alert alert-danger js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-danger\"></i>\n                        Une erreur est survenue !\n                    </div>\n                  ");
        }

        form.trigger("reset");
      },
      error: function error() {
        element.replaceWith("\n                    <div class=\"alert alert-danger js-spinner\" role=\"alert\">\n                      <i class=\"far fa-check-circle text-danger\"></i>\n                        Une erreur est survenue !\n                    </div>\n                  ");
      }
    });
  }

  function makeTimer(timer) {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date(timer);
    endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;

    if (timeLeft <= 0) {
      location.reload();
    }

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < "10") {
      hours = "0" + hours;
    }

    if (minutes < "10") {
      minutes = "0" + minutes;
    }

    if (seconds < "10") {
      seconds = "0" + seconds;
    } // $("#days").html(days + "<span>Days</span>");


    $("#hours").html(hours + "<span> Heures</span>");
    $("#minutes").html(minutes + "<span> min</span>");
    $("#seconds").html(seconds + "<span> Sec</span>");
  }

  if ($('.js-timer').length) {
    var timer = $('.js-timer').data('timer');
    setInterval(function () {
      makeTimer(timer);
    }, 1000);
  }

  $('#js-change-prereglage').on('change', function (e) {
    var id = e.target.value;
    var url = $(e.target).data('url');

    if (id && url) {
      window.location.href = url + '?id=' + id;
    } else {
      window.location.href = url;
    }
  });
});

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-1fd9a0","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_bootstrap_dist_js_bo-9513ba","vendors-node_modules_core-js_modules_es_object_create_js-node_modules_core-js_modules_es_obje-e078df","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_select2_dist_js_i18n_fr_js","assets_styles_admin_css-assets_styles_admin_css-assets_styles_admin_css"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M05BLENBQUQ7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3wvXFwuKGp8dClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC4oanx0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdzdGltdWx1cyc7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcbiAqXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxuICpcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XG4gICAgfVxufVxuIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XG5cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnKTtcblxuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2pzL2kxOG4vZnInO1xuXG5pbXBvcnQgJy4vanMvc2NyaXB0cyc7XG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnamUgcGFzc2UgbGEgcGFydGllIGphdmFzY3JpcHQnKVxuICAgIGxldCBpbnB1dF9zZWxlY3QyID0gJCgnLmpzLXNlbGVjdDInKTtcbiAgICBpbnB1dF9zZWxlY3QyLnNlbGVjdDIoe1xuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXRfc2VsZWN0Mi5hdHRyKCdwbGFjZWhvbGRlcicpLFxuICAgIH0pO1xuXG4gICAgJCgnLmpzLWJ1dHRvbi11cGxvYWQtZmlsZSwgLmpzLXN1Ym1pdC13aXRoLWNvbmZpcm1hdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ1ZvdWxlei12b3VzIGJpZW4gY29udGludWVyID8nLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgIGljb25IdG1sOiAnPycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLScgKyBkYXRhKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgJCgnZm9ybS5qcy1mb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBmb3JtQ29udGV4dCA9ICQodGhpcyk7XG4gICAgICAgIGxldCBkYXRhID0gZm9ybUNvbnRleHQuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ3ZvdXMgdm91bGV6IGJpZW4gY29udGludWVyID8nLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgIGljb25IdG1sOiAnPycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YVswXSAmJiBkYXRhWzBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGFbMF0gJiYgZGF0YVswXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5uYW1lID09PSAndW5saW1pdGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVXJsKGZvcm1Db250ZXh0LCBkYXRhWzBdLCAnLmpzLXNwaW5uZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0ubmFtZSA9PT0gJ3BhaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVVcmwoZm9ybUNvbnRleHQsIGRhdGFbMF0sICcuanMtc3Bpbm5lcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5uYW1lID09PSAncmVpbml0aWFsaXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWluaXRpYWxpc2VyKGZvcm1Db250ZXh0LCBkYXRhWzBdLCAnLmpzLXNwaW5uZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGFbMF0gJiYgIWRhdGFbMF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ZvdXMgZGV2ZXogcmVuc2VpZ25leiB1biBub21icmUnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVybChjb250ZXh0LCBkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBjb250ZXh0LmZpbmQoY2xhc3NOYW1lKTtcbiAgICAgICAgbGV0IGZvcm0gPSBjb250ZXh0O1xuICAgICAgICBsZXQgdHlwZSA9IGRhdGEubmFtZTtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBlbGVtZW50Lmh0bWwoYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGApO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dlbmVyYXRlX3VybCcsIHsnbGltaXQnOiB2YWx1ZSwgJ3R5cGUnOiB0eXBlfSksXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mbyBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsdWV9IEfDqW7DqHJlciBhdmVjIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIganMtc3Bpbm5lclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVpbml0aWFsaXNlcihjb250ZXh0LCBkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBjb250ZXh0LmZpbmQoY2xhc3NOYW1lKTtcbiAgICAgICAgbGV0IGZvcm0gPSBjb250ZXh0O1xuICAgICAgICBsZXQgdHlwZSA9IGRhdGEubmFtZTtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZS5zcGxpdCgnICcpO1xuXG5cblxuICAgICAgICBlbGVtZW50Lmh0bWwoYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGApO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3Jlc2V0X3VybCcsIHsnaWQnOiB2YWx1ZX0pLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mbyBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsdWV9IHN1cHByaW3DqXMgYXZlYyBzdWNjw6lzICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIganMtc3Bpbm5lclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRpbWVyKHRpbWVyKSB7XG5cbiAgICAgICAgLy9cdFx0dmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShcIjI5IEFwcmlsIDIwMTggOTo1NjowMCBHTVQrMDE6MDBcIik7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUodGltZXIsICk7XG4gICAgICAgIGVuZFRpbWUgPSAoRGF0ZS5wYXJzZShlbmRUaW1lKSAvIDEwMDApO1xuXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub3cgPSAoRGF0ZS5wYXJzZShub3cpIC8gMTAwMCk7XG5cbiAgICAgICAgdmFyIHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyA4NjQwMCk7XG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC0gKGRheXMgKiA4NjQwMCkpIC8gMzYwMCk7XG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDAgKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCkpKTtcblxuICAgICAgICBpZiAoaG91cnMgPCBcIjEwXCIpIHsgaG91cnMgPSBcIjBcIiArIGhvdXJzOyB9XG4gICAgICAgIGlmIChtaW51dGVzIDwgXCIxMFwiKSB7IG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7IH1cbiAgICAgICAgaWYgKHNlY29uZHMgPCBcIjEwXCIpIHsgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kczsgfVxuXG4gICAgICAgIC8vICQoXCIjZGF5c1wiKS5odG1sKGRheXMgKyBcIjxzcGFuPkRheXM8L3NwYW4+XCIpO1xuICAgICAgICAkKFwiI2hvdXJzXCIpLmh0bWwoaG91cnMgKyBcIjxzcGFuPiBIZXVyZXM8L3NwYW4+XCIpO1xuICAgICAgICAkKFwiI21pbnV0ZXNcIikuaHRtbChtaW51dGVzICsgXCI8c3Bhbj4gbWluPC9zcGFuPlwiKTtcbiAgICAgICAgJChcIiNzZWNvbmRzXCIpLmh0bWwoc2Vjb25kcyArIFwiPHNwYW4+IFNlYzwvc3Bhbj5cIik7XG5cbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLXRpbWVyJykubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0aW1lciA9ICQoJy5qcy10aW1lcicpLmRhdGEoJ3RpbWVyJyk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBtYWtlVGltZXIodGltZXIpOyB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICAkKCcjanMtY2hhbmdlLXByZXJlZ2xhZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGlkID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgbGV0IHVybCA9ICQoZS50YXJnZXQpLmRhdGEoJ3VybCcpO1xuXG4gICAgICAgIGlmIChpZCAmJiB1cmwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsICsgJz9pZD0nICsgaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIiQiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiaW5wdXRfc2VsZWN0MiIsInNlbGVjdDIiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJhdHRyIiwib24iLCJlIiwiZm9ybSIsImNsb3Nlc3QiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiaWNvbiIsImljb25IdG1sIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0Iiwic2hvd0NhbmNlbEJ1dHRvbiIsInNob3dDbG9zZUJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInRyaWdnZXIiLCJzdWJtaXQiLCJmb3JtQ29udGV4dCIsInNlcmlhbGl6ZUFycmF5IiwidmFsdWUiLCJuYW1lIiwiZ2VuZXJhdGVVcmwiLCJyZWluaXRpYWxpc2VyIiwidGV4dCIsImNsYXNzTmFtZSIsImZpbmQiLCJ0eXBlIiwiaHRtbCIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJyZXBsYWNlV2l0aCIsInNwbGl0IiwibWFrZVRpbWVyIiwidGltZXIiLCJlbmRUaW1lIiwiRGF0ZSIsInBhcnNlIiwibm93IiwidGltZUxlZnQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibGVuZ3RoIiwic2V0SW50ZXJ2YWwiLCJpZCIsInRhcmdldCIsIndpbmRvdyIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9