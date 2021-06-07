/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Atlantachoice.js":
/*!******************************!*\
  !*** ./src/Atlantachoice.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".greenAtlatna\").click(function () {\n  var seatAtlantachoice = $(this).attr('d').slice(0, 4);\n  var seatAtlantaEnd = $(\"#Atlantaseat\").append(seatAtlantachoice);\n  return seatAtlantaEnd;\n});\ndocument.getElementById('datepicker').addEventListener('change', function () {\n  if (document.getElementById('datepicker').value) {\n    return document.getElementById(\"dataOutAtlanta\").innerText = \"Data wylotu:\" + document.getElementById('datepicker').value;\n  } else {\n    return document.getElementById(\"dataOutAtlanta\").style = \"none\";\n  }\n});\ndocument.getElementById('datepicker2').addEventListener('change', function () {\n  if (document.getElementById('datepicker2').value) {\n    return document.getElementById(\"dataInAtlanta\").innerText = \"Data przylotu:\" + document.getElementById('datepicker2').value;\n  } else {\n    return document.getElementById(\"dataInAtlanta\").style = \"none\";\n  }\n});\n\n//# sourceURL=webpack:///./src/Atlantachoice.js?");

/***/ }),

/***/ "./src/Londynchoice.js":
/*!*****************************!*\
  !*** ./src/Londynchoice.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".greenLondyn\").click(function () {\n  var seatLondynchoice = $(this).attr('d').slice(0, 4);\n  var seatLondynEnd = $(\"#Londynseat\").append(seatLondynchoice);\n  return seatLondynEnd;\n});\ndocument.getElementById('datepicker').addEventListener('change', function () {\n  if (document.getElementById('datepicker').value) {\n    return document.getElementById(\"dataLondyn\").innerText = \"Data wylotu:\" + document.getElementById('datepicker').value;\n  } else {\n    return document.getElementById(\"dataLondyn\").style = \"none\";\n  }\n});\ndocument.getElementById('datepicker2').addEventListener('change', function () {\n  if (document.getElementById('datepicker2').value) {\n    return document.getElementById(\"dataInLondyn\").innerText = \"Data przylotu:\" + document.getElementById('datepicker2').value;\n  } else {\n    return document.getElementById(\"dataInLondyn\").style = \"none\";\n  }\n});\n\n//# sourceURL=webpack:///./src/Londynchoice.js?");

/***/ }),

/***/ "./src/Pekinchoice.js":
/*!****************************!*\
  !*** ./src/Pekinchoice.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".greenPekin\").click(function () {\n  var seatPekinchoice = $(this).attr('d').slice(0, 4);\n  var seatPekinEnd = $(\"#Pekinseat\").append(seatPekinchoice);\n  return seatPekinEnd;\n});\ndocument.getElementById('datepicker').addEventListener('change', function () {\n  if (document.getElementById('datepicker').value) {\n    return document.getElementById(\"dataOutPekin\").innerText = \"Data wylotu:\" + document.getElementById('datepicker').value;\n  } else {\n    return document.getElementById(\"dataOutPekin\").style = \"none\";\n  }\n});\ndocument.getElementById('datepicker2').addEventListener('change', function () {\n  if (document.getElementById('datepicker2').value) {\n    return document.getElementById(\"dataInPekin\").innerText = \"Data przylotu:\" + document.getElementById('datepicker2').value;\n  } else {\n    return document.getElementById(\"dataInPekin\").style = \"none\";\n  }\n});\n\n//# sourceURL=webpack:///./src/Pekinchoice.js?");

/***/ }),

/***/ "./src/ReservedAtlanta.js":
/*!********************************!*\
  !*** ./src/ReservedAtlanta.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var passengers = document.getElementById(\"passengersAtlanta\");\nvar children = document.getElementById(\"childrenAtlatna\");\nvar extraBaggage = document.getElementById(\"extraBaggageAtlanta\");\nvar position = document.getElementById(\"positionAtlanta\");\nvar fly = document.getElementById(\"seat\");\n\nfunction cena() {\n  if (position.options[position.selectedIndex].value === \"Busines\") {\n    console.log(\"ok\");\n    return passengers.value * 2000 + children.value * 1000;\n  } else if (position.options[position.selectedIndex].value === \"Premium\") {\n    console.log(\"OK2\");\n    return passengers.value * 1000 + children.value * 500;\n  } else if (position.options[position.selectedIndex].value === \"Economy\") {\n    return passengers.value * 500 + children.value * 250;\n  } else {\n    console.log(\"Błąd\");\n  }\n}\n\n;\n\nfunction dodatkowybagaż() {\n  if (extraBaggage.options[extraBaggage.selectedIndex].value === \"yes\") {\n    return 200;\n  } else {\n    return 0;\n  }\n}\n\nfunction powrotAtlanta() {\n  if (fly.options[fly.selectedIndex].value === \"TwoTrip\") {\n    return 1000;\n  } else {\n    return 0;\n  }\n}\n\n;\n\nfunction Sum() {\n  var wynik = cena() + dodatkowybagaż() + powrotAtlanta();\n  document.getElementById(\"price\").innerHTML = \"Cena: \".concat(wynik, \" z\\u0142</br>\");\n  return wynik;\n}\n\nfunction getCurrency() {\n  fetch(\"https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json\").then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    document.getElementById(\"priceUSD\").innerHTML = \"Cena w USD: \".concat((Sum() / data.rates[0].mid).toFixed(2), \" $\");\n    console.log(data.rates[0].mid.toFixed(2));\n  });\n}\n\n;\n\nfunction pogoda() {\n  fetch(\"https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=84d23d36dd19e4c9bf57e108e560601a\").then(function (resp) {\n    return resp.json();\n  }) // Transform the data into json\n  .then(function (data) {\n    console.log(data);\n    document.getElementById(\"pogoda\").innerText = \"Temperatura w Atlancie \".concat((data.main.temp - 273.15).toFixed(1), \"C\");\n  });\n}\n\n;\n\nfunction seatAtlantaTwo() {\n  document.getElementById('Atlatnaseat2').innerHTML = \"Miejsce: \".concat(document.getElementById(\"Atlantaseat\").innerHTML);\n}\n\nvar btn = document.getElementById(\"summationAtlanta\");\nbtn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  document.getElementById(\"FieldsetAtlanta\").style.display = \"none\";\n  document.getElementById(\"plane\").style.display = \"none\";\n  document.getElementById(\"summary\").style.display = \"block\";\n  document.getElementById(\"Reserved\").innerHTML = \" \\nTwoja rezerwacja:<br> \\nIlo\\u015B\\u0107 os\\xF3b:<br> \\n\".concat(passengers.value, \"<br> \\ndzieci:<br> \\n\").concat(children.value, \"<br> \\nDodatkowy baga\\u017C:<br> \\n\").concat(extraBaggage.options[extraBaggage.selectedIndex].text, \"<br> \\nData wylotu:<br>\\n\").concat(document.getElementById('datepicker').value, \"<br>\\nData przylotu:<br>\\n\").concat(document.getElementById('datepicker2').value, \"<br>\\nKlasa:<br> \\n\").concat(position.options[position.selectedIndex].text, \"<br> \\nPrzelot:<br> \\n\").concat(fly.options[fly.selectedIndex].text, \"<br>\\nPogoda:<br>\\n\");\n  pogoda();\n  Sum();\n  getCurrency();\n  seatAtlantaTwo();\n});\n\n//# sourceURL=webpack:///./src/ReservedAtlanta.js?");

/***/ }),

/***/ "./src/ReservedLondyn.js":
/*!*******************************!*\
  !*** ./src/ReservedLondyn.js ***!
  \*******************************/
/*! exports provided: Londyn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Londyn\", function() { return Londyn; });\nvar passengersLondyn = document.getElementById(\"passengersLondyn\");\nvar childrenLondyn = document.getElementById(\"childrenLondyn\");\nvar extraBaggageLon = document.getElementById(\"extraBaggageLondyn\");\nvar flyLondyn = document.getElementById(\"seatLondynFly\");\n\nfunction priceLondyn() {\n  return passengersLondyn.value * 500 + childrenLondyn.value * 100;\n}\n\n;\n\nfunction extraBaggageLondyn() {\n  if (extraBaggageLon.options[extraBaggageLon.selectedIndex].value === \"yes\") {\n    return 50;\n  } else {\n    return 0;\n  }\n}\n\n;\n\nfunction powrotLondyn() {\n  if (flyLondyn.options[flyLondyn.selectedIndex].value === \"TwoTrip\") {\n    return 700;\n  } else {\n    return 0;\n  }\n}\n\n;\n\nfunction SumLondyn() {\n  var wynikLondyn = priceLondyn() + extraBaggageLondyn() + powrotLondyn();\n  document.getElementById(\"priceLondyn\").innerHTML = \"Cena: \".concat(wynikLondyn, \" z\\u0142</br>\");\n  return wynikLondyn;\n}\n\n;\n\nfunction getCurrencyLondyn() {\n  fetch(\"https://api.nbp.pl/api/exchangerates/rates/a/EUR/?format=json\").then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    document.getElementById(\"EUR\").innerHTML = \"Cena w EUR: \".concat((SumLondyn() / data.rates[0].mid).toFixed(2), \" \\u20AC\");\n    console.log(data.rates[0].mid.toFixed(2));\n  });\n}\n\nfunction weatherLondyn() {\n  fetch(\"https://api.openweathermap.org/data/2.5/weather?q=Londyn&appid=84d23d36dd19e4c9bf57e108e560601a\").then(function (resp) {\n    return resp.json();\n  }) // Transform the data into json\n  .then(function (dataLondyn) {\n    console.log(dataLondyn);\n    document.getElementById(\"weatherLondyn\").innerText = \"Temperatura w Londynie \".concat((dataLondyn.main.temp - 273.15).toFixed(1), \"C\");\n  });\n}\n\n;\n\nfunction seatLondynTwo() {\n  document.getElementById('Londynseat2').innerHTML = \"Miejsce: \".concat(document.getElementById(\"Londynseat\").innerHTML);\n}\n\nvar btnLondyn = document.getElementById(\"summationLondyn\");\nbtnLondyn.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  document.getElementById(\"FieldseLondyn\").style.display = \"none\";\n  document.getElementById(\"planeLon\").style.display = \"none\";\n  document.getElementById(\"summaryLondyn\").style.display = \"block\";\n  document.getElementById(\"ReservedLondyn\").innerHTML = \" \\nTwoja rezerwacja:<br> \\nIlo\\u015B\\u0107 os\\xF3b:<br> \\n\".concat(passengersLondyn.value, \"<br> \\ndzieci:<br> \\n\").concat(childrenLondyn.value, \"<br> \\nDodatkowy baga\\u017C:<br> \\n\").concat(extraBaggageLon.options[extraBaggageLon.selectedIndex].text, \"<br> \\nData wylotu:<br>\\n\").concat(document.getElementById('datepicker').value, \"<br>\\nData przylotu:<br>\\n\").concat(document.getElementById('datepicker2').value, \"<br>\\nPrzelot:<br> \\n\").concat(flyLondyn.options[flyLondyn.selectedIndex].text, \"<br>\\nPogoda:<br>\\n\");\n  weatherLondyn();\n  SumLondyn();\n  getCurrencyLondyn();\n  seatLondynTwo();\n});\nvar Londyn = function Londyn() {\n  Londyn;\n};\n\n//# sourceURL=webpack:///./src/ReservedLondyn.js?");

/***/ }),

/***/ "./src/ReservedPekin.js":
/*!******************************!*\
  !*** ./src/ReservedPekin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var passengersPekin = document.getElementById(\"passengersPekin\");\nvar childrenPekin = document.getElementById(\"childrenPekin\");\nvar extraBaggagePek = document.getElementById(\"extraBaggagePekin\");\nvar flyPekin = document.getElementById(\"seatPekinFly\");\n\nfunction pricePekin() {\n  return passengersPekin.value * 2500 + childrenPekin.value * 1000;\n}\n\n;\n\nfunction extraBaggagePekin() {\n  if (extraBaggagePek.options[extraBaggagePek.selectedIndex].value === \"yes\") {\n    return 130;\n  } else {\n    return 0;\n  }\n}\n\n;\n\nfunction powrotPekin() {\n  if (flyPekin.options[flyPekin.selectedIndex].value === \"TwoTrip\") {\n    return 850;\n  } else {\n    return 0;\n  }\n}\n\n;\n\nfunction SumPekin() {\n  var wynikPekin = pricePekin() + extraBaggagePekin() + powrotPekin();\n  document.getElementById(\"pricePekin\").innerHTML = \"Cena: \".concat(wynikPekin, \" z\\u0142</br>\");\n  return wynikPekin;\n}\n\n;\n\nfunction getCurrencyPekin() {\n  fetch(\"https://api.nbp.pl/api/exchangerates/rates/a/cny/?format=json\").then(function (respPekin) {\n    return respPekin.json();\n  }).then(function (data) {\n    document.getElementById(\"WS\").innerHTML = \"Cena w CNY:\".concat((SumPekin() / data.rates[0].mid).toFixed(2), \"\\xA5\");\n    console.log(data.rates[0].mid.toFixed(2));\n  });\n}\n\n;\n\nfunction weatherPekin() {\n  fetch(\"https://api.openweathermap.org/data/2.5/weather?q=Pekin&appid=84d23d36dd19e4c9bf57e108e560601a\").then(function (resp) {\n    return resp.json();\n  }) // Transform the data into json\n  .then(function (data) {\n    console.log(data);\n    document.getElementById(\"weatherPekin\").innerText = \"Temperatura w Pekinie \".concat((data.main.temp - 273.15).toFixed(1), \"C\");\n  });\n}\n\n;\n\nfunction seatPekinTwo() {\n  document.getElementById('Pekinseat2').innerHTML = \"Miejsce: \".concat(document.getElementById(\"Pekinseat\").innerHTML);\n}\n\nvar btnPekin = document.getElementById(\"summationPekin\");\nbtnPekin.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  document.getElementById(\"FieldsetPekin\").style.display = \"none\";\n  document.getElementById(\"planePek\").style.display = \"none\";\n  document.getElementById(\"summaryPekin\").style.display = \"block\";\n  document.getElementById(\"ReservedPekin\").innerHTML = \" \\nTwoja rezerwacja:<br> \\nIlo\\u015B\\u0107 os\\xF3b:<br> \\n\".concat(passengersPekin.value, \"<br> \\ndzieci:<br> \\n\").concat(childrenPekin.value, \"<br> \\nDodatkowy baga\\u017C:<br> \\n\").concat(extraBaggagePek.options[extraBaggagePek.selectedIndex].text, \"<br> \\nData wylotu:<br>\\n\").concat(document.getElementById('datepicker').value, \"<br>\\nData wylotu:<br>\\n\").concat(document.getElementById('datepicker2').value, \"<br>\\nPrzelot:<br> \\n\").concat(flyPekin.options[flyPekin.selectedIndex].text, \"<br>\\nPogoda:<br>\\n\\n\");\n  weatherPekin();\n  SumPekin();\n  getCurrencyPekin();\n  seatPekinTwo();\n});\n\n//# sourceURL=webpack:///./src/ReservedPekin.js?");

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/*! exports provided: choice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"choice\", function() { return choice; });\nvar select = document.getElementById(\"cityIn\");\nvar button = document.getElementById(\"Wybierz\");\nbutton.addEventListener(\"click\", function () {\n  if (select.options[select.selectedIndex].value === \"Atlanta\") {\n    console.log(\"ma\");\n    document.getElementById(\"other\").style.display = \"none\";\n    document.getElementById(\"lot\").style.display = \"none\";\n    document.getElementById(\"poradnik\").style.display = \"none\";\n    document.getElementById(\"planeAtlanta\").style.display = \"flex\";\n    document.getElementById(\"planePekin\").style.display = \"none\";\n    document.getElementById(\"planeLondyn\").style.display = \"none\";\n  } else if (select.options[select.selectedIndex].value === \"Pekin\") {\n    console.log(\"ma również\");\n    document.getElementById(\"other\").style.display = \"none\";\n    document.getElementById(\"lot\").style.display = \"none\";\n    document.getElementById(\"poradnik\").style.display = \"none\";\n    document.getElementById(\"planePekin\").style.display = \"flex\";\n    document.getElementById(\"planeLondyn\").style.display = \"none\";\n    document.getElementById(\"planeAtlanta\").style.display = \"none\";\n  } else if (select.options[select.selectedIndex].value === \"Londyn\") {\n    document.getElementById(\"other\").style.display = \"none\";\n    document.getElementById(\"lot\").style.display = \"none\";\n    document.getElementById(\"poradnik\").style.display = \"none\";\n    document.getElementById(\"planeLondyn\").style.display = \"flex\";\n    document.getElementById(\"planeAtlanta\").style.display = \"none\";\n    document.getElementById(\"planePekin\").style.display = \"none\";\n    console.log(\"nosz ty \");\n  } else {\n    document.getElementById(\"other\").style.display = \"flex\";\n    document.getElementById(\"lot\").style.display = \"flex\";\n    document.getElementById(\"poradnik\").style.display = \"flex\";\n    document.getElementById(\"planeLondyn\").style.display = \"none\";\n    document.getElementById(\"planeAtlanta\").style.display = \"none\";\n    document.getElementById(\"planePekin\").style.display = \"none\";\n  }\n});\nvar choice = function choice() {\n  choice;\n};\n\n//# sourceURL=webpack:///./src/button.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clock\", function() { return clock; });\nvar data = new Date();\n\nfunction getTime() {\n  return new Date().toLocaleTimeString();\n}\n\ndocument.getElementById('czas').innerHTML = getTime();\nsetInterval(function () {\n  document.getElementById('czas').innerHTML = getTime();\n}, 1000);\nvar clock = function clock() {\n  clock;\n};\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/currency.js":
/*!*************************!*\
  !*** ./src/currency.js ***!
  \*************************/
/*! exports provided: currency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currency\", function() { return currency; });\nfetch(\"http://api.nbp.pl/api/exchangerates/rates/A/GBP/\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  document.getElementById(\"BF\").innerHTML += \" \".concat(data.rates[0].mid.toFixed(2), \"  z\\u0142\");\n});\nfetch(\"http://api.nbp.pl/api/exchangerates/rates/A/USD/\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  document.getElementById(\"DA\").innerHTML += \" \".concat(data.rates[0].mid.toFixed(2), \" z\\u0142\");\n});\nfetch(\"http://api.nbp.pl/api/exchangerates/rates/A/CNY/\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  document.getElementById(\"JC\").innerHTML += \" \".concat(data.rates[0].mid.toFixed(2), \" z\\u0142\");\n});\nfetch(\"http://api.nbp.pl/api/exchangerates/rates/A/EUR/\").then(function (resp) {\n  return resp.json();\n}).then(function (data) {\n  document.getElementById(\"E\").innerHTML += \" \".concat(data.rates[0].mid.toFixed(2), \" z\\u0142\");\n});\nvar currency = function currency() {\n  currency;\n};\n\n//# sourceURL=webpack:///./src/currency.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/*! exports provided: dateout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateout\", function() { return dateout; });\nfunction dzień() {\n  var dzisiaj = new Date();\n  var dzien = dzisiaj.getDate();\n\n  if (dzien < 10) {\n    dzien = '0' + dzien;\n  }\n\n  var miesiac = dzisiaj.getMonth();\n\n  if (miesiac < 10) {\n    miesiac = '0' + miesiac;\n  }\n\n  var rok = dzisiaj.getFullYear();\n  return rok + '-' + miesiac + '-' + dzien;\n}\n\ndocument.getElementById(\"datepicker\").setAttribute(\"min\", dzień());\ndocument.getElementById(\"datepicker\").setAttribute(\"value\", dzień());\n\nfunction outDay() {\n  var dzisiaj2 = new Date();\n  var dzien2 = dzisiaj2.getDate() + 1;\n\n  if (dzien2 < 10) {\n    dzien2 = '0' + dzien2;\n  }\n\n  var miesiac2 = dzisiaj2.getMonth();\n\n  if (miesiac2 < 10) {\n    miesiac2 = '0' + miesiac2;\n  }\n\n  var rok2 = dzisiaj2.getFullYear();\n  return rok2 + '-' + miesiac2 + '-' + dzien2;\n}\n\ndocument.getElementById(\"datepicker2\").setAttribute(\"min\", outDay());\ndocument.getElementById(\"datepicker2\").setAttribute(\"value\", outDay());\nvar dateout = function dateout() {\n  dateout;\n};\n\n//# sourceURL=webpack:///./src/date.js?");

/***/ }),

/***/ "./src/humburger.js":
/*!**************************!*\
  !*** ./src/humburger.js ***!
  \**************************/
/*! exports provided: hum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hum\", function() { return hum; });\nvar hamburger = document.querySelector('.hamburger');\nvar nav = document.querySelector('.navigation');\n\nvar handleClick = function handleClick() {\n  hamburger.classList.toggle('hamburger--active');\n  nav.classList.toggle('navigation--active');\n};\n\nhamburger.addEventListener('click', handleClick);\nvar hum = function hum() {\n  hum;\n};\n\n//# sourceURL=webpack:///./src/humburger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ \"./src/currency.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ \"./src/button.js\");\n/* harmony import */ var _ReservedAtlanta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReservedAtlanta */ \"./src/ReservedAtlanta.js\");\n/* harmony import */ var _ReservedAtlanta__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ReservedAtlanta__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ReservedPekin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReservedPekin */ \"./src/ReservedPekin.js\");\n/* harmony import */ var _ReservedPekin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ReservedPekin__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ReservedLondyn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReservedLondyn */ \"./src/ReservedLondyn.js\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ \"./src/login.js\");\n/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zoom */ \"./src/zoom.js\");\n/* harmony import */ var _zoomPek__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zoomPek */ \"./src/zoomPek.js\");\n/* harmony import */ var _zoomLon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zoomLon */ \"./src/zoomLon.js\");\n/* harmony import */ var _Pekinchoice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Pekinchoice */ \"./src/Pekinchoice.js\");\n/* harmony import */ var _Pekinchoice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Pekinchoice__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _Atlantachoice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Atlantachoice */ \"./src/Atlantachoice.js\");\n/* harmony import */ var _Atlantachoice__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Atlantachoice__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _Londynchoice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Londynchoice */ \"./src/Londynchoice.js\");\n/* harmony import */ var _Londynchoice__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Londynchoice__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _personlist__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./personlist */ \"./src/personlist.js\");\n/* harmony import */ var _humburger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./humburger */ \"./src/humburger.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\nvar btnAtlanta = document.getElementById(\"buttonAll\");\nbtnAtlanta.addEventListener('click', function (e) {\n  e.preventDefault();\n  document.getElementById(\"other\").style.display = \"none\";\n  document.getElementById(\"lot\").style.display = \"none\";\n  document.getElementById(\"poradnik\").style.display = \"none\";\n  document.getElementById(\"planePekin\").style.display = \"none\";\n  document.getElementById(\"planeLondyn\").style.display = \"none\";\n  document.getElementById(\"planeAtlanta\").style.display = \"none\";\n  document.getElementById(\"mainAll\").style.display = 'block';\n});\nvar btnLondyn = document.getElementById(\"buttonLon\");\nbtnLondyn.addEventListener('click', function (e) {\n  e.preventDefault();\n  document.getElementById(\"other\").style.display = \"none\";\n  document.getElementById(\"lot\").style.display = \"none\";\n  document.getElementById(\"poradnik\").style.display = \"none\";\n  document.getElementById(\"planePekin\").style.display = \"none\";\n  document.getElementById(\"planeLondyn\").style.display = \"none\";\n  document.getElementById(\"planeAtlanta\").style.display = \"none\";\n  document.getElementById(\"mainAll\").style.display = 'block';\n});\nvar btnPekin = document.getElementById(\"buttonPek\");\nbtnPekin.addEventListener('click', function (e) {\n  e.preventDefault();\n  document.getElementById(\"other\").style.display = \"none\";\n  document.getElementById(\"lot\").style.display = \"none\";\n  document.getElementById(\"poradnik\").style.display = \"none\";\n  document.getElementById(\"planePekin\").style.display = \"none\";\n  document.getElementById(\"planeLondyn\").style.display = \"none\";\n  document.getElementById(\"planeAtlanta\").style.display = \"none\";\n  document.getElementById(\"mainAll\").style.display = 'block';\n});\nvar Login = function Login() {\n  Login;\n};\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ }),

/***/ "./src/personlist.js":
/*!***************************!*\
  !*** ./src/personlist.js ***!
  \***************************/
/*! exports provided: Pesron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pesron\", function() { return Pesron; });\nvar btnFinish = document.getElementById('personButton');\nbtnFinish.addEventListener('click', function (e) {\n  alert(\"Sprawdziłeś wszystkie dane?\");\n  e.preventDefault();\n  document.getElementById(\"other\").style.display = \"none\";\n  document.getElementById(\"lot\").style.display = \"none\";\n  document.getElementById(\"poradnik\").style.display = \"none\";\n  document.getElementById(\"planePekin\").style.display = \"none\";\n  document.getElementById(\"planeLondyn\").style.display = \"none\";\n  document.getElementById(\"planeAtlanta\").style.display = \"none\";\n  document.getElementById(\"mainAll\").style.display = 'none';\n  document.getElementById('personButton').style.display = \"none\";\n  document.getElementById('Personlist').style.display = \"block\";\n  fetch(\"./src/personlist.json\").then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    for (var key in data) {\n      var arr = data[key];\n\n      for (var i = 0; i < arr.length; i++) {\n        var obj = arr[i];\n        document.getElementById(\"Personlist\").innerHTML += \"\".concat(obj.Imie + obj.Nazwisko);\n        console.log(obj);\n      }\n    }\n  });\n});\nvar Pesron = function Pesron() {\n  Person;\n};\n\n//# sourceURL=webpack:///./src/personlist.js?");

/***/ }),

/***/ "./src/zoom.js":
/*!*********************!*\
  !*** ./src/zoom.js ***!
  \*********************/
/*! exports provided: Zoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Zoom\", function() { return Zoom; });\nvar zoomElement = document.getElementById(\"plane\");\nvar zoom = 1;\nvar ZOOM_SPEED = 0.1;\ndocument.addEventListener(\"wheel\", function (e) {\n  if (e.deltaY > 0) {\n    zoomElement.style.transform = \"scale(\".concat(zoom += ZOOM_SPEED, \")\");\n  } else {\n    zoomElement.style.transform = \"scale(\".concat(zoom -= ZOOM_SPEED, \")\");\n  }\n});\nvar Zoom = function Zoom() {\n  zoom;\n};\n\n//# sourceURL=webpack:///./src/zoom.js?");

/***/ }),

/***/ "./src/zoomLon.js":
/*!************************!*\
  !*** ./src/zoomLon.js ***!
  \************************/
/*! exports provided: ZoomLon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomLon\", function() { return ZoomLon; });\nvar zoomElementLon = document.getElementById(\"planeLon\");\nvar zoomLon = 1;\nvar ZOOM_SPEEDLON = 0.1;\ndocument.addEventListener(\"wheel\", function (e) {\n  if (e.deltaY > 0) {\n    zoomElementLon.style.transform = \"scale(\".concat(zoomLon += ZOOM_SPEEDLON, \")\");\n  } else {\n    zoomElementLon.style.transform = \"scale(\".concat(zoomLon -= ZOOM_SPEEDLON, \")\");\n  }\n});\nvar ZoomLon = function ZoomLon() {\n  zoomLon;\n};\n\n//# sourceURL=webpack:///./src/zoomLon.js?");

/***/ }),

/***/ "./src/zoomPek.js":
/*!************************!*\
  !*** ./src/zoomPek.js ***!
  \************************/
/*! exports provided: ZoomPek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZoomPek\", function() { return ZoomPek; });\nvar zoomElementPek = document.getElementById(\"planePek\");\nvar zoomPek = 1;\nvar ZOOM_SPEEDPEK = 0.1;\ndocument.addEventListener(\"wheel\", function (e) {\n  if (e.deltaY > 0) {\n    zoomElementPek.style.transform = \"scale(\".concat(zoomPek += ZOOM_SPEEDPEK, \")\");\n  } else {\n    zoomElementPek.style.transform = \"scale(\".concat(zoomPek -= ZOOM_SPEEDPEK, \")\");\n  }\n});\nvar ZoomPek = function ZoomPek() {\n  zoomPek;\n};\n\n//# sourceURL=webpack:///./src/zoomPek.js?");

/***/ })

/******/ });