webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _NameBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NameBadge */ "./components/NameBadge.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer.js");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bootstrap.min.css */ "./bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _BurgerIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BurgerIcon */ "./components/BurgerIcon.js");

var _jsxFileName = "/home/jonas/Projects/tv77niederbiel/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












function Layout(props) {
  var sites = [{
    id: "1",
    href: "/",
    display: "Start"
  }, {
    id: "2",
    href: "/about",
    display: "Über uns"
  }, {
    id: "3",
    href: "/teams",
    display: "Teams"
  }, {
    id: "4",
    href: "/mitglied",
    display: "Mitgliedschaft"
  }, {
    id: "6",
    href: "/vereinsheim",
    display: "Vereinsheim"
  }, {
    id: "5",
    href: "/kontakt",
    display: "Kontakt"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isTop = _useState[0],
      setIsTop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDrawerOpen = _useState2[0],
      setIsDrawerOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMobile = _useState3[0],
      setIsMobile = _useState3[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var backgroundStyle = {};
  /*
  if (props.pictures) {
      backgroundStyle = {
          backgroundImage: 'url(\"' + props.pictures[current].picture + '\"'
      }
       React.useEffect(() => {
           const next = (current + 1) % props.pictures.length;
          const id = setTimeout(() => setCurrent(next), 5000);
          return () => clearTimeout(id);
      }, [current]);
    } else {
      backgroundStyle = {
          backgroundImage: "url(/static/tennis_court_sand.jpg)"
       }
  }
  */

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, "TV77 Niederbiel"), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  })), __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(react_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: "(max-width: 922px)",
    onChange: function onChange(matches) {
      return setIsMobile(matches);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), isMobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BurgerIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 26
    }
  }), " ", __jsx(_NameBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 132
    }
  }), " ") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    navName: props.navName,
    isTop: isTop,
    mobile: isMobile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2196677833" + " " + "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: backgroundStyle,
    className: "jsx-2196677833" + " " + "backgroundGallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "backgroundOpacity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("center", {
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "stickyBottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "titleText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, props.title))))), __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "top-background-tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  })))), __jsx("center", {
    className: "jsx-2196677833",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "content-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2196677833" + " " + "content-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, props.children))), __jsx("div", {
    className: "jsx-2196677833" + " " + "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sites: sites,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  })), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2196677833",
    __self: this
  }, ".backgroundGallery.jsx-2196677833{background :url(\"/static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed;min-height:400px;position:relative;}.backgroundOpacity.jsx-2196677833{background:rgba(0,0,0,0.5);position:absolute;min-height:400px;width:100%;}.stickyBottom.jsx-2196677833{background:white;}.gradientBackground.jsx-2196677833{background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 4%,rgba(255,255,255,0.1) 8%,rgba(255,255,255,1) 100%);}.title.jsx-2196677833{background:url(\"static/Bier.png\");background-repeat:no-repeat;background-position:center;background-size:300px 200px;height:300px;margin-left:-150px;padding:30px;width:100%;z-index:1000;position:absolute;width:300px;text-align:center !important;left:50vw;bottom:0;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.titleText.jsx-2196677833{color:black;font-size:12px;background:rgba(255,255,255,0.8);background-repeat:no-repeat;background-position:center;background-size:300px 200px;padding:30px;width:100%;position:absolute;width:300px;-webkit-box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);-moz-box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);text-align:center !important;left:50vw;bottom:30px;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}@-webkit-keyframes rollIn{0%.jsx-2196677833{-webkit-transform:translateX(-100%) scale(0.001) rotate(-3000deg);}50%.jsx-2196677833{-webkit-transform:translateX(200%) scale(1.6) rotate(0deg);}100%.jsx-2196677833{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}@-webkit-keyframes rollIn-jsx-2196677833{0%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}50%{-webkit-transform:translateX(200%) scale(1) rotate(0deg);-ms-transform:translateX(200%) scale(1) rotate(0deg);transform:translateX(200%) scale(1) rotate(0deg);}100%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}@keyframes rollIn-jsx-2196677833{0%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}50%{-webkit-transform:translateX(200%) scale(1) rotate(0deg);-ms-transform:translateX(200%) scale(1) rotate(0deg);transform:translateX(200%) scale(1) rotate(0deg);}100%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}.rollIn.jsx-2196677833{-webkit-animation-name:rollIn;-webkit-animation-name:rollIn-jsx-2196677833;animation-name:rollIn-jsx-2196677833;-webkit-animation-direction:alternate-reverse;-webkit-animation-direction:alternate-reverse;animation-direction:alternate-reverse;-webkit-animation-duration:10s;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}.topTextWrapper.jsx-2196677833{max-width:1024px;}.top-background-tiny.jsx-2196677833{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-2196677833{background-color:#20232a;height:100px;width:100%;}.top.jsx-2196677833{background:#222;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;height:auto;width:100%;color:black;text-align:left;}.top.jsx-2196677833 .img-foreground.jsx-2196677833{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-2196677833{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:left;max-width:1024px;}.content-box.jsx-2196677833{position:relative;padding:0px 5px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvbmFzL1Byb2plY3RzL3R2NzduaWVkZXJiaWVsL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLYSxBQUtzRSxBQVd0QixBQU1WLEFBRzJILEFBRzFHLEFBdUJ0QixBQWtDMEQsQUFHUCxBQUdLLEFBUVQsQUFHUCxBQUdRLEFBSzlCLEFBYWIsQUFJUSxBQU1BLEFBTVQsQUFXTCxBQVFnQixBQVNULFlBbkhILENBbUdKLEdBWFcsQ0FySDFCLEFBcUdBLENBNENvQixPQXhDTCxBQU1FLENBa0JILENBdklRLEFBcUNlLEFBeUdMLEdBaEROLElBbEZNLEFBNEloQixFQXhDRixFQU1BLEFBTWtCLEFBWVYsT0F2SUYsQ0F5SnBCLENBekNBLEVBNUgwQixBQWtJMUIsTUF3QmdDLEdBTm5CLENBakVSLENBbEMyQixFQXBDakIsQUFXZ0IsRUE4RHpCLEVBTkQsQUF3RDJCLEdBYXBCLEVBcEpvQixFQWFoQyxNQXdJQSxJQUswQixLQXpHSyxDQXpCQyxLQWdIWCxLQXZJVSxNQTBKWixDQWxCSixNQWhDbUMsR0F2RGxCLEVBekJmLEFBaUhELElBa0JLLEtBMUpXLEdBeUlaLENBakhHLEdBUHZCLEtBMklBLEtBM0dpQixFQTBGakIsSUFsSGlCLEtBeEJJLEVBaUROLEVBc0QyQixDQVZ0QyxHQXBFVyxLQTBCTyxJQWpEQSxFQXdCTCxPQWdFYixBQU1DLEtBNUNXLENBekJNLEdBdkJ0QixRQWlEMkQsT0F6QjNDLFlBR2lCLDBCQXlFRSxHQXZFckIsT0FxQjBDLEdBcEIxQyxTQUN5QixTQXNFWiwwQkFyRUksS0FtQm9CLHVCQW1EZCx3QkFoREosU0FpREosb0JBOUNmLFVBQ0csRUF4QmpCLFVBeUJ1QyxnQkErQ3RDLG1CQTlDOEIsNkZBRy9CIiwiZmlsZSI6Ii9ob21lL2pvbmFzL1Byb2plY3RzL3R2NzduaWVkZXJiaWVsL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBOYW1lQmFkZ2UgZnJvbSBcIi4vTmFtZUJhZGdlXCJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IE1lZGlhIGZyb20gXCJyZWFjdC1tZWRpYVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuL0RyYXdlclwiXG5cbmltcG9ydCBcIi4uL2Jvb3RzdHJhcC5taW4uY3NzXCJcbmltcG9ydCBcIi4uL0FwcC5jc3NcIlxuXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi9CdXJnZXJJY29uXCI7XG5cblxuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgICBjb25zdCBzaXRlcyA9IFtcblxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiU3RhcnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgICBocmVmOiBcIi9hYm91dFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCLDnGJlciB1bnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgICBocmVmOiBcIi90ZWFtc1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJUZWFtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL21pdGdsaWVkXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIk1pdGdsaWVkc2NoYWZ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNlwiLFxuICAgICAgICAgICAgaHJlZjogXCIvdmVyZWluc2hlaW1cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVmVyZWluc2hlaW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI1XCIsXG4gICAgICAgICAgICBocmVmOiBcIi9rb250YWt0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gICAgdmFyIGJhY2tncm91bmRTdHlsZSA9IHt9XG5cbiAgICAvKlxuICAgIGlmIChwcm9wcy5waWN0dXJlcykge1xuICAgICAgICBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFxcIicgKyBwcm9wcy5waWN0dXJlc1tjdXJyZW50XS5waWN0dXJlICsgJ1xcXCInXG4gICAgICAgIH1cblxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gKGN1cnJlbnQgKyAxKSAlIHByb3BzLnBpY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50KG5leHQpLCA1MDAwKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9LCBbY3VycmVudF0pO1xuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9zdGF0aWMvdGVubmlzX2NvdXJ0X3NhbmQuanBnKVwiXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8dGl0bGU+VFY3NyBOaWVkZXJiaWVsPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8RHJhd2VyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IGNsb3NlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfSAvPlxuXG5cbiAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogOTIycHgpXCIgb25DaGFuZ2U9eyhtYXRjaGVzKSA9PiBzZXRJc01vYmlsZShtYXRjaGVzKX0gLz5cblxuICAgICAgICB7XG4gICAgICAgICAgICBpc01vYmlsZSA/IDw+PEJ1cmdlckljb24gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IHRvZ2dsZURyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pfT48L0J1cmdlckljb24+IDxOYW1lQmFkZ2UgLz4gPC8+XG5cbiAgICAgICAgICAgICAgICA6IDw+PC8+XG4gICAgICAgIH1cblxuICAgICAgICA8SGVhZGVyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IHRvZ2dsZURyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pfSBuYXZOYW1lPXtwcm9wcy5uYXZOYW1lfSBpc1RvcD17aXNUb3B9IG1vYmlsZT17aXNNb2JpbGV9ID48L0hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZFN0eWxlfSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kR2FsbGVyeVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZE9wYWNpdHlcIj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5Qm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wVGV4dFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaWdnZXJcIj57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHNldElzVG9wKGlzVmlzaWJsZSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2VudGVyPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxGb290ZXIgc2l0ZXM9e3NpdGVzfSAvPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgPC9zdHlsZT5cblxuXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG5cblxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kR2FsbGVyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoXCIvc3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcblxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmFja2dyb3VuZE9wYWNpdHkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6NDAwcHg7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGlja3lCb3R0b20ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyYWRpZW50QmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSA0JSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIDglLCAgICByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzdGF0aWMvQmllci5wbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMDBweCAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MHZ3O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDAgO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA4NXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA4NXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggODVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuXG5cbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTB2dztcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAzMHB4IDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuXG4gICAgICAgICAgICAgICAgfVxuICBcblxuICAgICAgICAgICAgICAgIC5hbmltYXRlZCB7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByb2xsSW4ge1xuICAgICAgICAgICAgICAgICAgICAwJSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDAuMDAxKSByb3RhdGUoLTMwMDBkZWcpOyBcbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIDUwJSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSkgc2NhbGUoMS42KSByb3RhdGUoMGRlZyk7IFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgMTAwJSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDAuMSkgcm90YXRlKC0zMDAwZGVnKTsgXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICBcbiBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyByb2xsSW4ge1xuICAgICAgICAgICAgICAgICAgICAwJSB7IFxuICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNjYWxlKDAuMSkgcm90YXRlKC0zMDAwZGVnKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgNTAlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKSBzY2FsZSgxKSByb3RhdGUoMGRlZyk7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDEwMCUgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMC4xKSByb3RhdGUoLTMwMDBkZWcpOyBcbiAgICAgICAgICAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yb2xsSW4ge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiByb2xsSW47XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuXG5cbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcFRleHRXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC1jb2xvciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAgICAgO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wICAuaW1nLWZvcmVncm91bmQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuXG5cblxuICAgIDwvPlxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/jonas/Projects/tv77niederbiel/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.1008caf541c1e17af0fe.hot-update.js.map