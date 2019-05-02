webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento.tsx":
/*!*******************************!*\
  !*** ./components/Evento.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "d:\\proyectos\\udemy\\curso-react-10apps\\bitcoinapp-next-ts\\components\\Evento.tsx";


var Noticia = function Noticia(_ref) {
  var evento = _ref.evento;
  var name = evento.name,
      url = evento.url,
      description = evento.description;
  var titulo = name.text;

  if (titulo.length > 100) {
    titulo = titulo.substr(0, 100) + '...';
  }

  var descripcion = description.text;

  if (descripcion) {
    descripcion = descripcion.substr(0, 250) + '...';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    className: "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, titulo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, descripcion));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticia);

/***/ })

})
//# sourceMappingURL=index.js.9ea56c0e30f01de9094d.hot-update.js.map