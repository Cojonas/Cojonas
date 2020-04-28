webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner */ "./components/Banner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/jonas/Projects/tv77niederbiel/components/Calendar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





function Calendar() {
  var _this = this;

  var api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    function fetchData() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(api_link));

            case 2:
              res = _context.sent;
              res.json().then(function (res) {
                setData(res);
              })["catch"](function (err) {
                return console.log(err);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  var yesterday = new Date() - 1440000;
  var timeline = data.items ? data.items.map(function (item, index) {
    var upcoming = item.start.date ? new Date(item.start.date) > yesterday : new Date(item.start.dateTime) > yesterday;
    return upcoming ? __jsx("div", {
      key: "" + index,
      style: {
        padding: "5px 0px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("span", {
      style: {
        fontWeight: "bold"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, item.start.date ? new Date(item.start.date).toLocaleDateString("de-DE", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : new Date(item.start.dateTime).toLocaleDateString("de-DE", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), ": "), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 18
      }
    }, item.summary)) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);
  }) : "";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1855298371",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Termine"), __jsx("p", {
    className: "jsx-1855298371",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Unsere n\xE4chsten Events und Termine:"), timeline, __jsx("a", {
    href: "https://calendar.google.com/calendar/embed?src=qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com&ctz=Europe%2FBerlin",
    className: "jsx-1855298371" + " " + "offer-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Zum Kalender")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1855298371",
    __self: this
  }, ".h-scrollmenu.jsx-1855298371{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{display:inline-block;}span.jsx-1855298371{text-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvbmFzL1Byb2plY3RzL3R2NzduaWVkZXJiaWVsL2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RnQixBQUcyQyxBQU1ILEFBSUUsQUFHTixlQUNuQixJQVBtQixFQUluQixDQVZrQixZQU9sQixFQU51QixtQkFDSixlQUNuQiIsImZpbGUiOiIvaG9tZS9qb25hcy9Qcm9qZWN0cy90djc3bmllZGVyYmllbC9jb21wb25lbnRzL0NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuL0xvYWRpbmdTcGlubmVyXCJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcblxuXG5mdW5jdGlvbiBDYWxlbmRhcigpIHtcblxuICAgIGNvbnN0IGFwaV9saW5rID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbS9ldmVudHM/a2V5PUFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52WmdxayZzaW5nbGVFdmVudHM9dHJ1ZSZvcmRlckJ5PXN0YXJ0VGltZSZtYXhSZXN1bHRzPTVcIlxuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlfbGluayk7XG4gICAgICAgICAgICByZXNcbiAgICAgICAgICAgICAgLmpzb24oKVxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgdmFyIHllc3RlcmRheSA9IG5ldyBEYXRlKCkgLSAxNDQwMDAwXG5cbiAgICBjb25zdCB0aW1lbGluZSA9IGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHVwY29taW5nID0gaXRlbS5zdGFydC5kYXRlID8gbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlKSA+IHllc3RlcmRheSA6IG5ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpID4geWVzdGVyZGF5XG4gICAgICAgICByZXR1cm4gdXBjb21pbmcgPyAoXG4gICAgICAgICAgICA8ZGl2IGtleT17XCJcIiArIGluZGV4fSBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT57aXRlbS5zdGFydC5kYXRlID8gbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJkZS1ERVwiLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KSA6IG5ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImRlLURFXCIsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTogPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxicj48L2JyXG4gICAgICAgICAgICAgICAgPjxzcGFuPntpdGVtLnN1bW1hcnl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKSA6IDw+PC8+XG4gICAgfVxuICAgICApIDogXCJcIlxuICAgICAgICBcblxuXG5cblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICA8aDI+VGVybWluZTwvaDI+XG4gICAgICAgICAgICA8cD5VbnNlcmUgbsOkY2hzdGVuIEV2ZW50cyB1bmQgVGVybWluZTo8L3A+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvZW1iZWQ/c3JjPXFvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwJTQwZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbSZjdHo9RXVyb3BlJTJGQmVybGluXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5adW0gS2FsZW5kZXI8L2E+XG5cbiAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjAwcHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51ID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwMHB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7ICJdfQ== */\n/*@ sourceURL=/home/jonas/Projects/tv77niederbiel/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.7178a58d37dc2c26f0a7.hot-update.js.map