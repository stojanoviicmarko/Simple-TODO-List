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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const list = document.getElementById('list');\nconst button = document.getElementById('button');\nconst slider = document.getElementById('slider');\nconst listItem = document.getElementsByClassName('list-group-item');\nvar localArray = [];\n\nwindow.onload = function() {\n\tvar localChecked;\n\tif (localStorage.getItem('checked') == 'true') {\n\t\tlocalChecked = true;\n\t} else if (localStorage.getItem('checked') == 'false') {\n\t\tlocalChecked = false;\n\t}\n\tslider.checked = localChecked;\n\tif (slider.checked == true) {\n\t\tdocument.body.style.backgroundColor = '#242424';\n\t\tinput.style.backgroundColor = '#242424';\n\t}\n\n\tvar dataArray = JSON.parse(localStorage.getItem('items'));\n\tif (localArray != null) {\n\t\tlocalArray = dataArray;\n\t\tconsole.log(this.array);\n\t}\n\n\tif (localArray != null) {\n\t\tfor (let i = 0; i < localArray.length; i++) {\n\t\t\tconst item = document.createElement('li');\n\t\t\titem.classList.add('list-group-item');\n\t\t\titem.id = 'item';\n\t\t\titem.innerHTML = localArray[i];\n\t\t\tlist.appendChild(item);\n\t\t}\n\t}\n\n\tconsole.log(listItem);\n};\n\nfunction createItem() {\n\tconst item = document.createElement('li');\n\n\tif (input.value == '') {\n\t\tconsole.log('Enter Text');\n\t} else {\n\t\titem.classList.add('list-group-item');\n\t\titem.innerHTML = input.value;\n\t\titem.id = 'item';\n\t\tlist.appendChild(item);\n\t}\n\n\tlocalArray.push(input.value);\n\tsavingData();\n\n\tinput.value = '';\n}\n\nfunction deleteItem() {\n\tvar parent = document.getElementById('list');\n\tvar child = list.childNodes;\n\n\tif (parent.hasChildNodes()) {\n\t\twhile (parent.firstChild) {\n\t\t\tparent.removeChild(parent.firstChild);\n\t\t}\n\t}\n\tlocalStorage.setItem('items', '');\n}\n\nslider.addEventListener('change', (event) => {\n\tif (slider.checked == true) {\n\t\tlocalStorage.setItem('checked', 'true');\n\t\tdocument.body.style.backgroundColor = '#242424';\n\t\tinput.style.backgroundColor = '#242424';\n\t} else if (slider.checked == false) {\n\t\tlocalStorage.setItem('checked', 'false');\n\t\tdocument.body.style.backgroundColor = 'white';\n\t\tinput.style.backgroundColor = 'white';\n\t}\n});\n\nfunction savingData() {\n\tlocalStorage.setItem('items', JSON.stringify(localArray));\n}\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });