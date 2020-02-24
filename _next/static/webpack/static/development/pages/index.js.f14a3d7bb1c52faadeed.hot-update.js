webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _NameBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NameBadge */ "./components/NameBadge.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
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

var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Layout.js";














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
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isTop = _useState2[0],
      setIsTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isDrawerOpen = _useState4[0],
      setIsDrawerOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      isMobile = _useState6[0],
      setIsMobile = _useState6[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var backgroundStyle = {};

  if (props.pictures) {
    backgroundStyle = {
      backgroundImage: 'url(\"' + props.pictures[current].picture + '\"'
    };
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      var next = (current + 1) % props.pictures.length;
      var id = setTimeout(function () {
        return setCurrent(next);
      }, 5000);
      return function () {
        return clearTimeout(id);
      };
    }, [current]);
  } else {
    backgroundStyle = {
      backgroundImage: "url(/static/tennis_court_sand.jpg)"
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "TV77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: "(max-width: 922px)",
    onChange: function onChange(matches) {
      return setIsMobile(matches);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), isMobile ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BurgerIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NameBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " ") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    navName: props.navName,
    isTop: isTop,
    mobile: isMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: backgroundStyle,
    className: "jsx-633189092" + " " + "backgroundGallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "stickyBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "topTextWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-633189092" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, props.title)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-633189092",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-633189092" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "633189092",
    __self: this
  }, ".backgroundGallery.jsx-633189092{background :url(\"/static/clubheim_draussen.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;min-height:500px;position:relative;}.stickyBottom.jsx-633189092{width:100%;position:absolute;padding:10px;bottom:0;background:linear-gradient(180deg,rgba(17,17,17,0) 0%,rgba(17,17,17,0.80) 15%,rgba(17,17,17,1) 100%);}.topTextWrapper.jsx-633189092{max-width:1024px;}.top-background-tiny.jsx-633189092{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-633189092{background-color:#20232a;height:100px;width:100%;}.top.jsx-633189092{background:#222;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;height:auto;width:100%;color:white;text-align:left;}.top.jsx-633189092 .img-foreground.jsx-633189092{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-633189092{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:left;max-width:1024px;}.content-box.jsx-633189092{background:#111;position:relative;top:-0px;padding:10px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKYSxBQUtzRSxBQVN0QyxBQU9NLEFBSVEsQUFNQSxBQU1ULEFBV0wsQUFRZ0IsQUFTWCxXQWxERSxFQWtDUCxHQVhXLEFBNEJKLENBNUN0QixRQUllLEFBTUUsQ0FrQkgsQ0FPa0IsRUF6Q2YsS0FtREosRUF4Q0MsRUFNQSxBQU1rQixBQVlWLElBbENULENBbURJLElBeENqQixFQXRCMEIsQUE0QjFCLEVBaEI2RyxJQXdDN0UsQ0FXaEIsRUFqQkgsUUFabUIsRUErQmhDLENBbEJZLEVBOUNvQixRQStDaEMsSUFLMEIsV0FsQkwsS0FqQ1UsTUFvRFosQ0FsQkosV0FDQyxJQWtCSyxLQXBEQSxHQW1DRCxTQW1CcEIsS0FyRHNCLEVBb0N0QixPQTNCQSxTQVBBIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBOYW1lQmFkZ2UgZnJvbSBcIi4vTmFtZUJhZGdlXCJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuaW1wb3J0IE1lZGlhIGZyb20gXCJyZWFjdC1tZWRpYVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5pbXBvcnQgRHJhd2VyIGZyb20gXCIuL0RyYXdlclwiXG5cbmltcG9ydCBcIi4uL2Jvb3RzdHJhcC5taW4uY3NzXCJcbmltcG9ydCBcIi4uL0FwcC5jc3NcIlxuXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi9CdXJnZXJJY29uXCI7XG5cblxuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgICBjb25zdCBzaXRlcyA9IFtcblxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiU3RhcnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgICBocmVmOiBcIi9hYm91dFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCLDnGJlciB1bnNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgICAgICBocmVmOiBcIi90ZWFtc1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJUZWFtc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL21pdGdsaWVkXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIk1pdGdsaWVkc2NoYWZ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNlwiLFxuICAgICAgICAgICAgaHJlZjogXCIvdmVyZWluc2hlaW1cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVmVyZWluc2hlaW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI1XCIsXG4gICAgICAgICAgICBocmVmOiBcIi9rb250YWt0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gICAgdmFyIGJhY2tncm91bmRTdHlsZSA9IHt9XG4gICAgaWYgKHByb3BzLnBpY3R1cmVzKSB7XG4gICAgICAgIGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcXFwiJyArIHByb3BzLnBpY3R1cmVzW2N1cnJlbnRdLnBpY3R1cmUgKyAnXFxcIidcbiAgICAgICAgfVxuXG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSAoY3VycmVudCArIDEpICUgcHJvcHMucGljdHVyZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnQobmV4dCksIDUwMDApO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH0sIFtjdXJyZW50XSk7XG5cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3N0YXRpYy90ZW5uaXNfY291cnRfc2FuZC5qcGcpXCJcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8dGl0bGU+VFY3NyBOaWVkZXJiaWVsPC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiAvPlxuXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8RHJhd2VyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IGNsb3NlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfSAvPlxuXG5cbiAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogOTIycHgpXCIgb25DaGFuZ2U9eyhtYXRjaGVzKSA9PiBzZXRJc01vYmlsZShtYXRjaGVzKX0gLz5cblxuICAgICAgICB7XG4gICAgICAgICAgICBpc01vYmlsZSA/IDw+PEJ1cmdlckljb24gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IHRvZ2dsZURyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pfT48L0J1cmdlckljb24+IDxOYW1lQmFkZ2UgLz4gPC8+XG5cbiAgICAgICAgICAgICAgICA6IDw+PC8+XG4gICAgICAgIH1cblxuICAgICAgICA8SGVhZGVyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IHRvZ2dsZURyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pfSBuYXZOYW1lPXtwcm9wcy5uYXZOYW1lfSBpc1RvcD17aXNUb3B9IG1vYmlsZT17aXNNb2JpbGV9ID48L0hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFja2dyb3VuZFN0eWxlfSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kR2FsbGVyeVwiPlxuXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHNldElzVG9wKGlzVmlzaWJsZSl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5Qm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFRleHRXcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlnZ2VyXCI+e3Byb3BzLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2VudGVyPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxGb290ZXIgc2l0ZXM9e3NpdGVzfSAvPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgPC9zdHlsZT5cblxuXG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG5cblxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kR2FsbGVyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoXCIvc3RhdGljL2NsdWJoZWltX2RyYXVzc2VuLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0aWNreUJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsMTcsMTcsMCkgMCUsICByZ2JhKDE3LDE3LDE3LDAuODApIDE1JSwgcmdiYSgxNywxNywxNywxKSAxMDAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcFRleHRXcmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC1jb2xvciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAgICAgO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wICAuaW1nLWZvcmVncm91bmQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cblxuXG4gICAgPC8+XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.f14a3d7bb1c52faadeed.hot-update.js.map