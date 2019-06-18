(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/App.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Static/css/App.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #1c6d6d;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.container {\n  width: 80%;\n  height: 85vw;\n  background-color: lightgrey;\n}\n\n.toggle-view {\n  font-size: 2.0vw;\n}\n\nli {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow: row wrap;\n  background-color: white;\n  box-shadow: 1px 1px;\n  font-size: 1.5vw;\n  border: 1px solid #bbb;\n  overflow: visible;\n  width: 25%;\n  padding: 5px;\n  margin: 1%;\n}\n\n@media (min-width: 1000px) {\n  .container {\n    width: 800px;\n    height: 95vh;\n    background-color: lightgrey;\n  }\n  .toggle-view {\n    font-size: 20px;\n  }\n  li {\n    font-size: 15px;\n    height: 18%;\n  }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/Card.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Static/css/Card.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".card {\n    font-size: 1.8vw;\n}\n\n@media (min-width: 1000px) {\n    .card {\n        font-size: 18px;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/index.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Static/css/index.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/Components/App.js":
/*!*******************************!*\
  !*** ./src/Components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Static_css_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Static/css/App.css */ "./src/Static/css/App.css");
/* harmony import */ var _Static_css_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Static_css_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.js */ "./src/Components/Board.js");
/* harmony import */ var _VerticalStartIndicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VerticalStartIndicator */ "./src/Components/VerticalStartIndicator.js");
/* harmony import */ var _HorizontalStartIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HorizontalStartIndicator */ "./src/Components/HorizontalStartIndicator.js");
/* harmony import */ var _WordPackList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WordPackList.js */ "./src/Components/WordPackList.js");
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer: '',
      toggleColors: true,
      words: [],
      wordPacks: []
    };
    this.toggleView = this.toggleView.bind(this);
    this.handlePacks = this.handlePacks.bind(this); //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Call REST API to get number of likes
    fetch("http://127.0.0.1:5000/api/v1/").then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    }).then(data => {
      this.setState({
        words: data.players,
        firstPlayer: data.firstPlayer,
        wordPacks: data.wordPacks
      });
    }).catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  toggleView(event) {
    event.preventDefault();
    this.setState({
      toggleColors: !this.state.toggleColors
    });
  } // handleChange(event) {
  //   this.setState({
  //     inputValue: event.target.value
  //   });
  // }


  handlePacks(event) {
    event.preventDefault();
    let url = "http://127.0.0.1:5000/api/v1/" + event.target.className;
    console.log(url);
    fetch(url).then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    }).then(data => {
      this.setState({
        words: data.players,
        firstPlayer: data.firstPlayer
      });
    }).catch(error => console.log(error)); // eslint-disable-line no-console 
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.screen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.topHalf,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HorizontalStartIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], {
      firstPlayer: this.state.firstPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerticalStartIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
      firstPlayer: this.state.firstPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      toggleColors: this.state.toggleColors,
      words: this.state.words,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VerticalStartIndicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
      firstPlayer: this.state.firstPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HorizontalStartIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], {
      firstPlayer: this.state.firstPlayer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.bottomHalf,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WordPackList_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      wordPacks: this.state.wordPacks,
      onClick: this.handlePacks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.button,
      onClick: this.toggleView,
      className: "toggle-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Toggle Colors")))));
  }

}

const styles = {
  screen: {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  topHalf: {
    display: "flex",
    flexFlow: "row wrap",
    height: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomHalf: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20%"
  },
  button: {
    display: "flex",
    backgroundColor: "white",
    width: "35%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px",
    cursor: "pointer"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Board.js":
/*!*********************************!*\
  !*** ./src/Components/Board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.js */ "./src/Components/Card.js");
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/Board.js";



class Board extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let players = this.props.words.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      word: data[0],
      displayColor: data[1],
      cardColor: data[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
    let defaultCards = this.props.words.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      word: data[0],
      displayColor: "tan",
      cardColor: data[1],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.toggleColors === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.cards,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, players) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.cards,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, defaultCards));
  }

}

const styles = {
  cards: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    height: "90%",
    alignItems: "center",
    width: "90%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/Components/Card.js":
/*!********************************!*\
  !*** ./src/Components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Static_css_Card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Static/css/Card.css */ "./src/Static/css/Card.css");
/* harmony import */ var _Static_css_Card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Static_css_Card_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/Card.js";



class Card extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      beenClicked: this.props.beenClicked
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      beenClicked: !this.state.beenClicked
    });
  }

  render() {
    return this.state.beenClicked === true && this.props.cardColor === "tan" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.clickedTanColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, this.props.word) : this.state.beenClicked === true && this.props.cardColor === "blue" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.clickedBlueColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, this.props.word) : this.state.beenClicked === true && this.props.cardColor === "red" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.clickedRedColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.props.word) : this.state.beenClicked === true && this.props.cardColor === "black" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.clickedBlackColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, this.props.word) : this.props.displayColor === "tan" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.tanColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, this.props.word) : this.props.displayColor === "blue" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.blueColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, this.props.word) : this.props.displayColor === "red" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.redColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, this.props.word) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleClick,
      className: "card",
      style: Object.assign({}, styles.card, styles.blackColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, this.props.word);
  }

}

const styles = {
  card: {
    width: "12%",
    height: "12%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    borderRadius: "10%",
    textAlign: "center",
    cursor: "pointer",
    padding: "3%"
  },
  tanColor: {
    backgroundColor: "tan",
    color: "black"
  },
  clickedTanColor: {
    backgroundColor: "#936a39",
    color: "#936a39"
  },
  blueColor: {
    backgroundColor: "#6b68ff",
    color: "white"
  },
  clickedBlueColor: {
    backgroundColor: "#0400ff",
    color: "#0400ff"
  },
  redColor: {
    backgroundColor: "#ff4e47",
    color: "white"
  },
  clickedRedColor: {
    backgroundColor: "#e60800",
    color: "#e60800"
  },
  blackColor: {
    backgroundColor: "grey",
    color: "black"
  },
  clickedBlackColor: {
    backgroundColor: "black",
    color: "black"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Components/HorizontalStartIndicator.js":
/*!****************************************************!*\
  !*** ./src/Components/HorizontalStartIndicator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/HorizontalStartIndicator.js";


class HorizontalStartIndicator extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.firstPlayer === "blue" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: Object.assign({}, styles.horizontalBar, styles.blueColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: Object.assign({}, styles.horizontalBar, styles.redColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

}

const styles = {
  horizontalBar: {
    width: "20%",
    marginRight: "40%",
    marginLeft: "40%",
    height: "4.75%",
    marginTop: ".5%",
    marginBottom: ".5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  blueColor: {
    backgroundColor: "#6b68ff"
  },
  redColor: {
    backgroundColor: "#ff4e47"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HorizontalStartIndicator);

/***/ }),

/***/ "./src/Components/VerticalStartIndicator.js":
/*!**************************************************!*\
  !*** ./src/Components/VerticalStartIndicator.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/VerticalStartIndicator.js";


class VerticalStartIndicator extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, this.props.firstPlayer === "blue" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: Object.assign({}, styles.verticalBar, styles.blueColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: Object.assign({}, styles.verticalBar, styles.redColor),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

}

const styles = {
  verticalBar: {
    width: "4%",
    height: "20%",
    marginLeft: ".25%",
    marginRight: ".25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  blueColor: {
    backgroundColor: "#6b68ff"
  },
  redColor: {
    backgroundColor: "#ff4e47"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VerticalStartIndicator);

/***/ }),

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

/***/ }),

/***/ "./src/Components/WordPackList.js":
/*!****************************************!*\
  !*** ./src/Components/WordPackList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WordPackButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordPackButton.js */ "./src/Components/WordPackButton.js");
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/Components/WordPackList.js";



class WordPackList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let wordPacks = this.props.wordPacks.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WordPackButton_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      wordPack: data,
      onClick: this.props.onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: styles.packs,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, wordPacks);
  }

}

const styles = {
  packs: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    height: "80%",
    marginRight: "5%",
    cursor: "pointer",
    paddingLeft: "0"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (WordPackList);

/***/ }),

/***/ "./src/Static/css/App.css":
/*!********************************!*\
  !*** ./src/Static/css/App.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/App.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Static/css/Card.css":
/*!*********************************!*\
  !*** ./src/Static/css/Card.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/Card.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/Card.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/Card.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Static/css/index.css":
/*!**********************************!*\
  !*** ./src/Static/css/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Static/css/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Static_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Static/css/index.css */ "./src/Static/css/index.css");
/* harmony import */ var _Static_css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Static_css_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/App.js */ "./src/Components/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/connoringlis/Desktop/FantasySoccer/react-fantasy-app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map