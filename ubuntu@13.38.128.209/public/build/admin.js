(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_admin_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/admin.css */ "./assets/styles/admin.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _flashy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flashy */ "./assets/js/flashy.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts */ "./assets/js/scripts.js");
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts__WEBPACK_IMPORTED_MODULE_5__);


__webpack_require__.g.$ = __webpack_require__.g.jQuery = window.$ = (jquery__WEBPACK_IMPORTED_MODULE_1___default());

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");


window.Swal = (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default());


window.flashy = __webpack_require__.g.flashy = _flashy__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "./assets/js/flashy.js":
/*!*****************************!*\
  !*** ./assets/js/flashy.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ flashy)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

function flashy(message, link) {
  var template = $($('#flashy-template').html());
  $('.flashy').remove();
  template.find('.flashy__body').html(message).attr('href', link || '#').end().appendTo('body').hide().fadeIn(300).delay(4000).animate({
    marginRight: '-100%'
  }, 300, 'swing', function () {
    $(this).remove();
  });
}

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

/***/ "./assets/styles/admin.css":
/*!*********************************!*\
  !*** ./assets/styles/admin.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_date_to-1fd9a0","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_bootstrap_dist_js_bo-9513ba","vendors-node_modules_sweetalert2_dist_sweetalert2_all_js","assets_styles_admin_css-assets_styles_admin_css-assets_styles_admin_css"], () => (__webpack_exec__("./assets/js/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVY7O0FBRUEsUUFBSW1ELEVBQUUsSUFBSXhCLEdBQVYsRUFBZTtBQUNYdkQsTUFBQUEsTUFBTSxDQUFDcUUsUUFBUCxDQUFnQlksSUFBaEIsR0FBdUIxQixHQUFHLEdBQUcsTUFBTixHQUFld0IsRUFBdEM7QUFDSCxLQUZELE1BRU87QUFDSC9FLE1BQUFBLE1BQU0sQ0FBQ3FFLFFBQVAsQ0FBZ0JZLElBQWhCLEdBQXVCMUIsR0FBdkI7QUFDSDtBQUNKLEdBVkQ7QUFXSCxDQTNOQSxDQUFEOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZmxhc2h5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zY3JpcHRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4uY3NzPzUwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvYWRtaW4uY3NzJztcblxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gd2luZG93LiQgPSAkO1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnKTtcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xud2luZG93LlN3YWwgPSBTd2FsO1xuaW1wb3J0ICdzZWxlY3QyJztcbmltcG9ydCBmbGFzaHkgZnJvbSBcIi4vZmxhc2h5XCI7XG53aW5kb3cuZmxhc2h5ID0gZ2xvYmFsLmZsYXNoeSA9IGZsYXNoeTtcblxuaW1wb3J0ICcuL3NjcmlwdHMnO1xuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmbGFzaHkobWVzc2FnZSwgbGluaykge1xuICAgIHZhciB0ZW1wbGF0ZSA9ICQoJCgnI2ZsYXNoeS10ZW1wbGF0ZScpLmh0bWwoKSlcbiAgICAkKCcuZmxhc2h5JykucmVtb3ZlKClcbiAgICB0ZW1wbGF0ZVxuICAgICAgICAuZmluZCgnLmZsYXNoeV9fYm9keScpXG4gICAgICAgIC5odG1sKG1lc3NhZ2UpXG4gICAgICAgIC5hdHRyKCdocmVmJywgbGluayB8fCAnIycpXG4gICAgICAgIC5lbmQoKVxuICAgICAgICAuYXBwZW5kVG8oJ2JvZHknKVxuICAgICAgICAuaGlkZSgpXG4gICAgICAgIC5mYWRlSW4oMzAwKVxuICAgICAgICAuZGVsYXkoNDAwMClcbiAgICAgICAgLmFuaW1hdGUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICctMTAwJSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMDAsXG4gICAgICAgICAgICAnc3dpbmcnLFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG59XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnamUgcGFzc2UgbGEgcGFydGllIGphdmFzY3JpcHQnKVxuICAgIGxldCBpbnB1dF9zZWxlY3QyID0gJCgnLmpzLXNlbGVjdDInKTtcbiAgICBpbnB1dF9zZWxlY3QyLnNlbGVjdDIoe1xuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxuICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXRfc2VsZWN0Mi5hdHRyKCdwbGFjZWhvbGRlcicpLFxuICAgIH0pO1xuXG4gICAgJCgnLmpzLWJ1dHRvbi11cGxvYWQtZmlsZSwgLmpzLXN1Ym1pdC13aXRoLWNvbmZpcm1hdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBmb3JtID0gJCh0aGlzKS5jbG9zZXN0KCdmb3JtJyk7XG5cbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ1ZvdWxlei12b3VzIGJpZW4gY29udGludWVyID8nLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgIGljb25IdG1sOiAnPycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmpzLScgKyBkYXRhKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgJCgnZm9ybS5qcy1mb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBmb3JtQ29udGV4dCA9ICQodGhpcyk7XG4gICAgICAgIGxldCBkYXRhID0gZm9ybUNvbnRleHQuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ3ZvdXMgdm91bGV6IGJpZW4gY29udGludWVyID8nLFxuICAgICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgIGljb25IdG1sOiAnPycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ091aScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm9uJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBzaG93Q2xvc2VCdXR0b246IHRydWVcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YVswXSAmJiBkYXRhWzBdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGFbMF0gJiYgZGF0YVswXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5uYW1lID09PSAndW5saW1pdGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlVXJsKGZvcm1Db250ZXh0LCBkYXRhWzBdLCAnLmpzLXNwaW5uZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0ubmFtZSA9PT0gJ3BhaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVVcmwoZm9ybUNvbnRleHQsIGRhdGFbMF0sICcuanMtc3Bpbm5lcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVswXS5uYW1lID09PSAncmVpbml0aWFsaXNlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWluaXRpYWxpc2VyKGZvcm1Db250ZXh0LCBkYXRhWzBdLCAnLmpzLXNwaW5uZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhICYmIGRhdGFbMF0gJiYgIWRhdGFbMF0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ09vcHMuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1ZvdXMgZGV2ZXogcmVuc2VpZ25leiB1biBub21icmUnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVybChjb250ZXh0LCBkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBjb250ZXh0LmZpbmQoY2xhc3NOYW1lKTtcbiAgICAgICAgbGV0IGZvcm0gPSBjb250ZXh0O1xuICAgICAgICBsZXQgdHlwZSA9IGRhdGEubmFtZTtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICBlbGVtZW50Lmh0bWwoYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGApO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2dlbmVyYXRlX3VybCcsIHsnbGltaXQnOiB2YWx1ZSwgJ3R5cGUnOiB0eXBlfSksXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mbyBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsdWV9IEfDqW7DqHJlciBhdmVjIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIganMtc3Bpbm5lclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVpbml0aWFsaXNlcihjb250ZXh0LCBkYXRhLCBjbGFzc05hbWUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBjb250ZXh0LmZpbmQoY2xhc3NOYW1lKTtcbiAgICAgICAgbGV0IGZvcm0gPSBjb250ZXh0O1xuICAgICAgICBsZXQgdHlwZSA9IGRhdGEubmFtZTtcbiAgICAgICAgbGV0IHZhbHVlID0gZGF0YS52YWx1ZS5zcGxpdCgnICcpO1xuXG5cblxuICAgICAgICBlbGVtZW50Lmh0bWwoYFxuICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgIDwvZGl2PlxuICAgIGApO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ3Jlc2V0X3VybCcsIHsnaWQnOiB2YWx1ZX0pLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvciA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mbyBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtc3VjY2Vzc1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dmFsdWV9IHN1cHByaW3DqXMgYXZlYyBzdWNjw6lzICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aChcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlciBqcy1zcGlubmVyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2hlY2stY2lyY2xlIHRleHQtZGFuZ2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgIVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybS50cmlnZ2VyKFwicmVzZXRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIganMtc3Bpbm5lclwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNoZWNrLWNpcmNsZSB0ZXh0LWRhbmdlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVuZSBlcnJldXIgZXN0IHN1cnZlbnVlICFcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZVRpbWVyKHRpbWVyKSB7XG5cbiAgICAgICAgLy9cdFx0dmFyIGVuZFRpbWUgPSBuZXcgRGF0ZShcIjI5IEFwcmlsIDIwMTggOTo1NjowMCBHTVQrMDE6MDBcIik7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUodGltZXIsICk7XG4gICAgICAgIGVuZFRpbWUgPSAoRGF0ZS5wYXJzZShlbmRUaW1lKSAvIDEwMDApO1xuXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub3cgPSAoRGF0ZS5wYXJzZShub3cpIC8gMTAwMCk7XG5cbiAgICAgICAgdmFyIHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyA4NjQwMCk7XG4gICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC0gKGRheXMgKiA4NjQwMCkpIC8gMzYwMCk7XG4gICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDAgKSkgLyA2MCk7XG4gICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLSAoZGF5cyAqIDg2NDAwKSAtIChob3VycyAqIDM2MDApIC0gKG1pbnV0ZXMgKiA2MCkpKTtcblxuICAgICAgICBpZiAoaG91cnMgPCBcIjEwXCIpIHsgaG91cnMgPSBcIjBcIiArIGhvdXJzOyB9XG4gICAgICAgIGlmIChtaW51dGVzIDwgXCIxMFwiKSB7IG1pbnV0ZXMgPSBcIjBcIiArIG1pbnV0ZXM7IH1cbiAgICAgICAgaWYgKHNlY29uZHMgPCBcIjEwXCIpIHsgc2Vjb25kcyA9IFwiMFwiICsgc2Vjb25kczsgfVxuXG4gICAgICAgIC8vICQoXCIjZGF5c1wiKS5odG1sKGRheXMgKyBcIjxzcGFuPkRheXM8L3NwYW4+XCIpO1xuICAgICAgICAkKFwiI2hvdXJzXCIpLmh0bWwoaG91cnMgKyBcIjxzcGFuPiBIZXVyZXM8L3NwYW4+XCIpO1xuICAgICAgICAkKFwiI21pbnV0ZXNcIikuaHRtbChtaW51dGVzICsgXCI8c3Bhbj4gbWluPC9zcGFuPlwiKTtcbiAgICAgICAgJChcIiNzZWNvbmRzXCIpLmh0bWwoc2Vjb25kcyArIFwiPHNwYW4+IFNlYzwvc3Bhbj5cIik7XG5cbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLXRpbWVyJykubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0aW1lciA9ICQoJy5qcy10aW1lcicpLmRhdGEoJ3RpbWVyJyk7XG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkgeyBtYWtlVGltZXIodGltZXIpOyB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICAkKCcjanMtY2hhbmdlLXByZXJlZ2xhZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGlkID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgbGV0IHVybCA9ICQoZS50YXJnZXQpLmRhdGEoJ3VybCcpO1xuXG4gICAgICAgIGlmIChpZCAmJiB1cmwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsICsgJz9pZD0nICsgaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsImdsb2JhbCIsImpRdWVyeSIsIndpbmRvdyIsInJlcXVpcmUiLCJTd2FsIiwiZmxhc2h5IiwibWVzc2FnZSIsImxpbmsiLCJ0ZW1wbGF0ZSIsImh0bWwiLCJyZW1vdmUiLCJmaW5kIiwiYXR0ciIsImVuZCIsImFwcGVuZFRvIiwiaGlkZSIsImZhZGVJbiIsImRlbGF5IiwiYW5pbWF0ZSIsIm1hcmdpblJpZ2h0IiwiY29uc29sZSIsImxvZyIsImlucHV0X3NlbGVjdDIiLCJzZWxlY3QyIiwiYWxsb3dDbGVhciIsInBsYWNlaG9sZGVyIiwib24iLCJlIiwiZm9ybSIsImNsb3Nlc3QiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJmaXJlIiwidGl0bGUiLCJpY29uIiwiaWNvbkh0bWwiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJzaG93Q2FuY2VsQnV0dG9uIiwic2hvd0Nsb3NlQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwidHJpZ2dlciIsInN1Ym1pdCIsImZvcm1Db250ZXh0Iiwic2VyaWFsaXplQXJyYXkiLCJ2YWx1ZSIsIm5hbWUiLCJnZW5lcmF0ZVVybCIsInJlaW5pdGlhbGlzZXIiLCJ0ZXh0IiwiY29udGV4dCIsImNsYXNzTmFtZSIsImVsZW1lbnQiLCJ0eXBlIiwiYWpheCIsInVybCIsIlJvdXRpbmciLCJnZW5lcmF0ZSIsInN1Y2Nlc3MiLCJlcnJvciIsInJlcGxhY2VXaXRoIiwic3BsaXQiLCJtYWtlVGltZXIiLCJ0aW1lciIsImVuZFRpbWUiLCJEYXRlIiwicGFyc2UiLCJub3ciLCJ0aW1lTGVmdCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJsZW5ndGgiLCJzZXRJbnRlcnZhbCIsImlkIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=