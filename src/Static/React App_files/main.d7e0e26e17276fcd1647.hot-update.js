webpackHotUpdate("main",{

/***/ "./src/Components/WordPackButton.js":
/*!******************************************!*\
  !*** ./src/Components/WordPackButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/WordPackButton.js";


class WordPackButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let display_name = this.props.wordPack.replace(/_/g, " ");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.wordPack,
      onClick: this.props.onClick,
      style: styles.button,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, display_name);
  }

}

const styles = {
  button: {
    display: "flex",
    backgroundColor: "white",
    width: "18%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer",
    margin: "1%",
    fontWeight: "bold",
    padding: "1%",
    fontSize: "18px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (WordPackButton);

/***/ })

})
//# sourceMappingURL=main.d7e0e26e17276fcd1647.hot-update.js.map