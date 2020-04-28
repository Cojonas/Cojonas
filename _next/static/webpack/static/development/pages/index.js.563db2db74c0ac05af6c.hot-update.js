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
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("title", {
    className: "jsx-295749535",
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
    className: "jsx-295749535",
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
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-295749535",
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
    className: "jsx-295749535" + " " + "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: backgroundStyle,
    className: "jsx-295749535" + " " + "backgroundGallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-295749535" + " " + "backgroundOpacity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("center", {
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-295749535" + " " + "stickyBottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-295749535" + " " + "titleText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "jsx-295749535",
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
    className: "jsx-295749535" + " " + "top-background-tiny",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  })))), __jsx("center", {
    className: "jsx-295749535",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-295749535" + " " + "content-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-295749535" + " " + "content-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, props.children))), __jsx("div", {
    className: "jsx-295749535" + " " + "footer",
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
    id: "295749535",
    __self: this
  }, ".backgroundGallery.jsx-295749535{background :url(\"/static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;background-attachment:fixed;min-height:400px;position:relative;}.backgroundOpacity.jsx-295749535{background:rgba(0,0,0,0.5);position:absolute;min-height:400px;width:100%;}.stickyBottom.jsx-295749535{background:white;}.gradientBackground.jsx-295749535{background:linear-gradient(180deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.1) 4%,rgba(255,255,255,0.1) 8%,rgba(255,255,255,1) 100%);}.title.jsx-295749535{background:url(\"static/Bier.png\");background-repeat:no-repeat;background-position:center;background-size:300px 200px;height:300px;margin-left:-150px;padding:30px;width:100%;z-index:1000;position:absolute;width:300px;text-align:center !important;left:50vw;bottom:0;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.titleText.jsx-295749535{color:black;font-size:14px;background:rgba(255,255,255,0.8);background-repeat:no-repeat;background-position:center;background-size:300px 200px;padding:30px;width:100%;position:absolute;width:300px;-webkit-box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);-moz-box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);box-shadow:10px 10px 85px 0px rgba(0,0,0,0.75);text-align:center !important;left:50vw;bottom:30px;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}@-webkit-keyframes rollIn{0%.jsx-295749535{-webkit-transform:translateX(-100%) scale(0.001) rotate(-3000deg);}50%.jsx-295749535{-webkit-transform:translateX(200%) scale(1.6) rotate(0deg);}100%.jsx-295749535{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}@-webkit-keyframes rollIn-jsx-295749535{0%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}50%{-webkit-transform:translateX(200%) scale(1) rotate(0deg);-ms-transform:translateX(200%) scale(1) rotate(0deg);transform:translateX(200%) scale(1) rotate(0deg);}100%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}@keyframes rollIn-jsx-295749535{0%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}50%{-webkit-transform:translateX(200%) scale(1) rotate(0deg);-ms-transform:translateX(200%) scale(1) rotate(0deg);transform:translateX(200%) scale(1) rotate(0deg);}100%{-webkit-transform:translateX(-100%) scale(0.1) rotate(-3000deg);-ms-transform:translateX(-100%) scale(0.1) rotate(-3000deg);transform:translateX(-100%) scale(0.1) rotate(-3000deg);}}.rollIn.jsx-295749535{-webkit-animation-name:rollIn;-webkit-animation-name:rollIn-jsx-295749535;animation-name:rollIn-jsx-295749535;-webkit-animation-direction:alternate-reverse;-webkit-animation-direction:alternate-reverse;animation-direction:alternate-reverse;-webkit-animation-duration:10s;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}.topTextWrapper.jsx-295749535{max-width:1024px;}.top-background-tiny.jsx-295749535{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-295749535{background-color:#20232a;height:100px;width:100%;}.top.jsx-295749535{background:#222;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;height:auto;width:100%;color:black;text-align:left;}.top.jsx-295749535 .img-foreground.jsx-295749535{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-295749535{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:left;max-width:1024px;}.content-box.jsx-295749535{position:relative;padding:0px 5px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvbmFzL1Byb2plY3RzL3R2NzduaWVkZXJiaWVsL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLYSxBQUtzRSxBQVd0QixBQU1WLEFBRzJILEFBRzFHLEFBdUJ0QixBQWtDMEQsQUFHUCxBQUdLLEFBUVQsQUFHUCxBQUdRLEFBSzlCLEFBYWIsQUFJUSxBQU1BLEFBTVQsQUFXTCxBQVFnQixBQVNULFlBbkhILENBbUdKLEdBWFcsQ0FySDFCLEFBcUdBLENBNENvQixPQXhDTCxBQU1FLENBa0JILENBdklRLEFBcUNlLEFBeUdMLEdBaEROLElBbEZNLEFBNEloQixFQXhDRixFQU1BLEFBTWtCLEFBWVYsT0F2SUYsQ0F5SnBCLENBekNBLEVBNUgwQixBQWtJMUIsTUF3QmdDLEdBTm5CLENBakVSLENBbEMyQixFQXBDakIsQUFXZ0IsRUE4RHpCLEVBTkQsQUF3RDJCLEdBYXBCLEVBcEpvQixFQWFoQyxNQXdJQSxJQUswQixLQXpHSyxDQXpCQyxLQWdIWCxLQXZJVSxNQTBKWixDQWxCSixJQWhDbUMsS0F2RGxCLEVBekJmLEFBaUhELElBa0JLLEtBMUpXLEdBeUlaLENBakhHLEdBUHZCLEtBMklBLEtBM0dpQixFQTBGakIsSUFsSGlCLEtBeEJJLEVBaUROLEFBc0QyQixHQVZ0QyxHQXBFVyxLQTBCTyxJQWpEQSxFQXdCTCxPQWdFYixBQU1DLEtBNUNXLENBekJNLEdBdkJ0QixRQWlEMkQsT0F6QjNDLFlBR2lCLHdCQXlFRSxLQXZFckIsT0FxQjBDLEdBcEIxQyxTQUN5QixPQXNFWiw0QkFyRUksS0FtQm9CLHFCQW1EZCwwQkFoREosT0FpREosc0JBOUNmLFVBQ0csRUF4QmpCLFVBeUJ1QyxjQStDdEMscUJBOUM4Qiw2RkFHL0IiLCJmaWxlIjoiL2hvbWUvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE5hbWVCYWRnZSBmcm9tIFwiLi9OYW1lQmFkZ2VcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCJcblxuaW1wb3J0IFwiLi4vYm9vdHN0cmFwLm1pbi5jc3NcIlxuaW1wb3J0IFwiLi4vQXBwLmNzc1wiXG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuL0J1cmdlckljb25cIjtcblxuXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHNpdGVzID0gW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL3RlYW1zXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlRlYW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICAgICAgaHJlZjogXCIvbWl0Z2xpZWRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiTWl0Z2xpZWRzY2hhZnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI2XCIsXG4gICAgICAgICAgICBocmVmOiBcIi92ZXJlaW5zaGVpbVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJWZXJlaW5zaGVpbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjVcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2tvbnRha3RcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiS29udGFrdFwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgICB2YXIgYmFja2dyb3VuZFN0eWxlID0ge31cblxuICAgIC8qXG4gICAgaWYgKHByb3BzLnBpY3R1cmVzKSB7XG4gICAgICAgIGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcXFwiJyArIHByb3BzLnBpY3R1cmVzW2N1cnJlbnRdLnBpY3R1cmUgKyAnXFxcIidcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSAoY3VycmVudCArIDEpICUgcHJvcHMucGljdHVyZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnQobmV4dCksIDUwMDApO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH0sIFtjdXJyZW50XSk7XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy90ZW5uaXNfY291cnRfc2FuZC5qcGcpXCJcblxuICAgICAgICB9XG4gICAgfVxuICAgICovXG5cblxuXG5cblxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5UVjc3IE5pZWRlcmJpZWw8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxEcmF3ZXIgc2l0ZXM9e3NpdGVzfSBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gY2xvc2VEcmF3ZXI9eygpID0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9IC8+XG5cblxuICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA5MjJweClcIiBvbkNoYW5nZT17KG1hdGNoZXMpID0+IHNldElzTW9iaWxlKG1hdGNoZXMpfSAvPlxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlzTW9iaWxlID8gPD48QnVyZ2VySWNvbiBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gdG9nZ2xlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3Blbil9PjwvQnVyZ2VySWNvbj4gPE5hbWVCYWRnZSAvPiA8Lz5cblxuICAgICAgICAgICAgICAgIDogPD48Lz5cbiAgICAgICAgfVxuXG4gICAgICAgIDxIZWFkZXIgc2l0ZXM9e3NpdGVzfSBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gdG9nZ2xlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3Blbil9IG5hdk5hbWU9e3Byb3BzLm5hdk5hbWV9IGlzVG9wPXtpc1RvcH0gbW9iaWxlPXtpc01vYmlsZX0gPjwvSGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9IGNsYXNzTmFtZT1cImJhY2tncm91bmRHYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kT3BhY2l0eVwiPlxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3lCb3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BUZXh0V3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZ2dlclwiPntwcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gc2V0SXNUb3AoaXNWaXNpYmxlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhY2tncm91bmQtdGlueVwiIC8+XG4gICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jZW50ZXI+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPEZvb3RlciBzaXRlcz17c2l0ZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICA8L3N0eWxlPlxuXG5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcblxuXG4gICAgICAgICAgICAgICAgLmJhY2tncm91bmRHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCA6IHVybChcIi9zdGF0aWMvdGVubmlzX2NvdXJ0X3NhbmQuanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kT3BhY2l0eSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDo0MDBweDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0aWNreUJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JhZGllbnRCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIDQlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgOCUsICAgIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcInN0YXRpYy9CaWVyLnBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMHB4IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwdnc7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCA7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGl0bGVUZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwcHggMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDg1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDg1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA4NXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG5cblxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MHZ3O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDMwcHggO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gIFxuXG4gICAgICAgICAgICAgICAgLmFuaW1hdGVkIHtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHJvbGxJbiB7XG4gICAgICAgICAgICAgICAgICAgIDAlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMC4wMDEpIHJvdGF0ZSgtMzAwMGRlZyk7IFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgNTAlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKSBzY2FsZSgxLjYpIHJvdGF0ZSgwZGVnKTsgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAxMDAlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMC4xKSByb3RhdGUoLTMwMDBkZWcpOyBcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gIFxuIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHJvbGxJbiB7XG4gICAgICAgICAgICAgICAgICAgIDAlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgc2NhbGUoMC4xKSByb3RhdGUoLTMwMDBkZWcpOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA1MCUgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpIHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTsgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSBzY2FsZSgwLjEpIHJvdGF0ZSgtMzAwMGRlZyk7IFxuICAgICAgICAgICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvbGxJbiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGUtcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlLXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG5cblxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wVGV4dFdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC10aW55IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICAgICA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3AgIC5pbWctZm9yZWdyb3VuZCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cblxuXG4gICAgPC8+XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuIl19 */\n/*@ sourceURL=/home/jonas/Projects/tv77niederbiel/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.563db2db74c0ac05af6c.hot-update.js.map