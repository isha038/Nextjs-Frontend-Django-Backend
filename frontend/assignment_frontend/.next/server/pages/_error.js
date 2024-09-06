/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./features/chartSlice.ts":
/*!********************************!*\
  !*** ./features/chartSlice.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setBarData: () => (/* binding */ setBarData),\n/* harmony export */   setCandlestickData: () => (/* binding */ setCandlestickData),\n/* harmony export */   setLineData: () => (/* binding */ setLineData),\n/* harmony export */   setPieData: () => (/* binding */ setPieData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar initialState = {\n  lineData: {\n    labels: [],\n    datasets: []\n  },\n  barData: {\n    labels: [],\n    datasets: []\n  },\n  pieData: {\n    labels: [],\n    datasets: []\n  },\n  candlestickData: null // Adjust based on your candlestick chart requirements\n};\n\nvar chartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'charts',\n  initialState: initialState,\n  reducers: {\n    setLineData: function setLineData(state, action) {\n      state.lineData = action.payload;\n    },\n    setBarData: function setBarData(state, action) {\n      state.barData = action.payload;\n    },\n    setPieData: function setPieData(state, action) {\n      state.pieData = action.payload;\n    },\n    setCandlestickData: function setCandlestickData(state, action) {\n      state.candlestickData = action.payload;\n    }\n  }\n});\nvar _chartSlice$actions = chartSlice.actions,\n  setLineData = _chartSlice$actions.setLineData,\n  setBarData = _chartSlice$actions.setBarData,\n  setPieData = _chartSlice$actions.setPieData,\n  setCandlestickData = _chartSlice$actions.setCandlestickData;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartSlice.reducer);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jaGFydFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQWtCL0MsSUFBTUMsWUFBd0IsR0FBRztFQUMvQkMsUUFBUSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ1BGLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREUsT0FBTyxFQUFFO0lBQ1BILE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREcsZUFBZSxFQUFFLElBQUksQ0FBRztBQUMxQixDQUFDOztBQUVELElBQU1DLFVBQVUsR0FBR1IsNkRBQVcsQ0FBQztFQUM3QlMsSUFBSSxFQUFFLFFBQVE7RUFDZFIsWUFBWSxFQUFaQSxZQUFZO0VBQ1pTLFFBQVEsRUFBRTtJQUNSQyxXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBR0MsS0FBSyxFQUFFQyxNQUFNLEVBQUs7TUFDOUJELEtBQUssQ0FBQ1YsUUFBUSxHQUFHVyxNQUFNLENBQUNDLE9BQU87SUFDakMsQ0FBQztJQUNEQyxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBR0gsS0FBSyxFQUFFQyxNQUFNLEVBQUs7TUFDN0JELEtBQUssQ0FBQ1AsT0FBTyxHQUFHUSxNQUFNLENBQUNDLE9BQU87SUFDaEMsQ0FBQztJQUNERSxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBR0osS0FBSyxFQUFFQyxNQUFNLEVBQUs7TUFDN0JELEtBQUssQ0FBQ04sT0FBTyxHQUFHTyxNQUFNLENBQUNDLE9BQU87SUFDaEMsQ0FBQztJQUNERyxrQkFBa0IsRUFBRSxTQUFwQkEsa0JBQWtCQSxDQUFHTCxLQUFLLEVBQUVDLE1BQU0sRUFBSztNQUNyQ0QsS0FBSyxDQUFDTCxlQUFlLEdBQUdNLE1BQU0sQ0FBQ0MsT0FBTztJQUN4QztFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUssSUFBQUksbUJBQUEsR0FBb0VWLFVBQVUsQ0FBQ1csT0FBTztFQUE5RVIsV0FBVyxHQUFBTyxtQkFBQSxDQUFYUCxXQUFXO0VBQUVJLFVBQVUsR0FBQUcsbUJBQUEsQ0FBVkgsVUFBVTtFQUFFQyxVQUFVLEdBQUFFLG1CQUFBLENBQVZGLFVBQVU7RUFBRUMsa0JBQWtCLEdBQUFDLG1CQUFBLENBQWxCRCxrQkFBa0I7QUFBd0I7QUFDOUYsaUVBQWVULFVBQVUsQ0FBQ1ksT0FBTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWdubWVudF9mcm9udGVuZC8uL2ZlYXR1cmVzL2NoYXJ0U2xpY2UudHM/ZDZiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW50ZXJmYWNlIENoYXJ0U3RhdGUge1xyXG4gIGxpbmVEYXRhOiB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgZGF0YTogbnVtYmVyW10gfT47XHJcbiAgfTtcclxuICBiYXJEYXRhOiB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgZGF0YTogbnVtYmVyW10gfT47XHJcbiAgfTtcclxuICBwaWVEYXRhOiB7XHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gICAgZGF0YXNldHM6IEFycmF5PHsgZGF0YTogbnVtYmVyW107IGJhY2tncm91bmRDb2xvcjogc3RyaW5nW10gfT47XHJcbiAgfTtcclxuICBjYW5kbGVzdGlja0RhdGE6IGFueTsgIC8vIFlvdSBjYW4gdXBkYXRlIHRoaXMgYmFzZWQgb24geW91ciBjYW5kbGVzdGljayBjaGFydCBzdHJ1Y3R1cmVcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBDaGFydFN0YXRlID0ge1xyXG4gIGxpbmVEYXRhOiB7XHJcbiAgICBsYWJlbHM6IFtdLFxyXG4gICAgZGF0YXNldHM6IFtdLFxyXG4gIH0sXHJcbiAgYmFyRGF0YToge1xyXG4gICAgbGFiZWxzOiBbXSxcclxuICAgIGRhdGFzZXRzOiBbXSxcclxuICB9LFxyXG4gIHBpZURhdGE6IHtcclxuICAgIGxhYmVsczogW10sXHJcbiAgICBkYXRhc2V0czogW10sXHJcbiAgfSxcclxuICBjYW5kbGVzdGlja0RhdGE6IG51bGwsICAvLyBBZGp1c3QgYmFzZWQgb24geW91ciBjYW5kbGVzdGljayBjaGFydCByZXF1aXJlbWVudHNcclxufTtcclxuXHJcbmNvbnN0IGNoYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2NoYXJ0cycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRMaW5lRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUubGluZURhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRCYXJEYXRhOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5iYXJEYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0UGllRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUucGllRGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldENhbmRsZXN0aWNrRGF0YTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuY2FuZGxlc3RpY2tEYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0TGluZURhdGEsIHNldEJhckRhdGEsIHNldFBpZURhdGEsIHNldENhbmRsZXN0aWNrRGF0YSB9ID0gY2hhcnRTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBjaGFydFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImxpbmVEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYXJEYXRhIiwicGllRGF0YSIsImNhbmRsZXN0aWNrRGF0YSIsImNoYXJ0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRMaW5lRGF0YSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEJhckRhdGEiLCJzZXRQaWVEYXRhIiwic2V0Q2FuZGxlc3RpY2tEYXRhIiwiX2NoYXJ0U2xpY2UkYWN0aW9ucyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/chartSlice.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction App(_ref) {\n  var Component = _ref.Component,\n    pageProps = _ref.pageProps;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Component, pageProps));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ0o7QUFFYTtBQUNGO0FBRXRCLFNBQVNHLEdBQUdBLENBQUFDLElBQUEsRUFBcUM7RUFBQSxJQUFsQ0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsU0FBUyxHQUFBRixJQUFBLENBQVRFLFNBQVM7RUFFaEQsb0JBQ0FOLDBEQUFBLENBQUNDLGlEQUFRO0lBQUNDLEtBQUssRUFBRUEsb0RBQUtBO0VBQUMsZ0JBQ3JCRiwwREFBQSxDQUFDSyxTQUFTLEVBQUtDLFNBQVksQ0FDbkIsQ0FBQztBQUViLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50X2Zyb250ZW5kLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgIHN0b3JlICBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG5cbiAgcmV0dXJuIChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIkFwcCIsIl9yZWYiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n    lang: \"en\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"body\", {\n    className: \"antialiased\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, null)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ29DO0FBRTlDLFNBQVNLLFFBQVFBLENBQUEsRUFBRztFQUNqQyxvQkFDRUwsMERBQUEsQ0FBQ0MsK0NBQUk7SUFBQ00sSUFBSSxFQUFDO0VBQUksZ0JBQ2JQLDBEQUFBLENBQUNFLCtDQUFJLE1BQUUsQ0FBQyxlQUNSRiwwREFBQTtJQUFNUSxTQUFTLEVBQUM7RUFBYSxnQkFDM0JSLDBEQUFBLENBQUNHLCtDQUFJLE1BQUUsQ0FBQyxlQUNSSCwwREFBQSxDQUFDSSxxREFBVSxNQUFFLENBQ1QsQ0FDRixDQUFDO0FBRVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3NpZ25tZW50X2Zyb250ZW5kLy4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxIZWFkIC8+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJhbnRpYWxpYXNlZFwiPlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYW5nIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_chartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/chartSlice */ \"./features/chartSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_chartSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_chartSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nvar store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    charts: _features_chartSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n});\n// Export the store\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUVsRCxJQUFNRSxLQUFLLEdBQUdGLGdFQUFjLENBQUM7RUFDM0JHLE9BQU8sRUFBRTtJQUNQQyxNQUFNLEVBQUVILDREQUFZQTtFQUN0QjtBQUNGLENBQUMsQ0FBQztBQUNGO0FBQ0EsaUVBQWVDLEtBQUssRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fzc2lnbm1lbnRfZnJvbnRlbmQvLi9zdG9yZS9zdG9yZS50cz8xMmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBjaGFydFJlZHVjZXIgZnJvbSAnLi4vZmVhdHVyZXMvY2hhcnRTbGljZSc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBjaGFydHM6IGNoYXJ0UmVkdWNlcixcclxuICB9LFxyXG59KTtcclxuLy8gRXhwb3J0IHRoZSBzdG9yZVxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcclxuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY2hhcnRSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwiY2hhcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./pages/_document.tsx\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-pages/_error */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var private_next_pages_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__]);\nprivate_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: private_next_pages_error__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZXJyb3ImYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUNoQztBQUNMO0FBQzFEO0FBQ29EO0FBQ1Y7QUFDMUM7QUFDc0Q7QUFDdEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHFEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLHFEQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLHFEQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyxxREFBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyxxREFBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLHFEQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLHFEQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLHFEQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLHlHQUFnQjtBQUMvQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXNzaWdubWVudF9mcm9udGVuZC8/NDAwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2Vycm9yXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvX2Vycm9yXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9fZXJyb3JcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=private-next-pages%2F_error&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();