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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _noiseify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noiseify */ \"./src/js/noiseify.js\");\n// Import the noise class\n // Get HTML element to add the noise to\n\nvar $container = document.querySelector('[data-container'); // If there is an element\n\nif ($container) {\n  // Initiate an instance\n  var noise = new _noiseify__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($container, {\n    variations: 6,\n    fps: 6,\n    color: 'black'\n  });\n  noise.play();\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/noiseify.js":
/*!****************************!*\
  !*** ./src/js/noiseify.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Noiseify; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Noiseify = /*#__PURE__*/function () {\n  /**\n   * 2 params\n   * @param {DOM element} $element (required)\n   * @param {Object} options (optional)\n   * - @param {Integer} variations: how many noise variations should be in the collection\n   * - @param {String} color: white or black\n   * - @param {Integer} fps: framerate to autoplay the noise\n   */\n  function Noiseify($element) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Noiseify);\n\n    // Set the properties\n    // Contains valid HTML element, will hold the canvas element\n    this._$element = false; // Contains all the default options\n\n    this._options = {\n      variations: 6,\n      color: 'black',\n      fps: 5\n    }; // Merge custom options with the default ones\n\n    this._options = Object.assign(this._options, options); // Contains the canvas element\n\n    this._$canvas = false; // Contains the canvas context\n\n    this._ctx = false; // Contains the various noise variations\n\n    this._variations = []; // Hold the current variation\n\n    this._currentVariation = 0; // Ready to start animating\n\n    this._ready = false; // Hold current play/animating status\n\n    this._playing = false; // Framerate controlled variables\n\n    this._fps;\n    this._fpsInterval;\n    this._startTime;\n    this._now;\n    this._then;\n    this._elapsed; // Check for valid element\n\n    if ($element && $element.nodeType) {\n      // Set element\n      this._$element = $element; // Initiate\n\n      this.draw();\n    }\n  }\n  /**\n   * Initiate\n   */\n\n\n  _createClass(Noiseify, [{\n    key: \"draw\",\n    value: function draw() {\n      // Set ready back to false\n      this._ready = false; // Draw the canvas for the first time\n\n      this._drawCanvas(); // Draw noise variations (create a collection)\n\n\n      this._drawNoiseVariations(); // Ready to draw to canvas\n\n\n      this._ready = true; // Draw the first variation on to the canvas\n\n      this._drawVariationToCanvas(this._currentVariation);\n    }\n    /**\n     * Draw the canvas\n     */\n\n  }, {\n    key: \"_drawCanvas\",\n    value: function _drawCanvas() {\n      // Stop the timer\n      this.stop(); // Check for canvas element\n\n      if (!this._$canvas) {\n        // There is no canvas element yet, create it\n        var $canvas = document.createElement(\"canvas\"); // Add to document\n\n        this._$element.appendChild($canvas); // Get context of the canvas and set it\n\n\n        this._ctx = $canvas.getContext(\"2d\"); // Set it in our class\n\n        this._$canvas = $canvas;\n      } // Set width and height\n\n\n      this._$canvas.width = this._$element.offsetWidth;\n      this._$canvas.height = this._$element.offsetHeight;\n    }\n    /**\n     * Draw noise variations\n     * The total of variations might impact performance\n     */\n\n  }, {\n    key: \"_drawNoiseVariations\",\n    value: function _drawNoiseVariations() {\n      // Set color to draw the noise\n      var color = 0xFFffffff; // If black, overwrite the white color\n\n      if (this._options.color == 'black') {\n        color = 0xFF000000;\n      } // Reset the variations\n\n\n      this._variations = []; // Generate a total of noise variations based on our options\n\n      for (var i = 0; i < this._options.variations; i++) {\n        // Generate noise variation and it to the variations collection\n        this._variations.push(this._generateNoise(color));\n      }\n    }\n    /**\n     * Generate a noise variation/pattern in a color\n     * @param {HEX color code} color;\n     */\n\n  }, {\n    key: \"_generateNoise\",\n    value: function _generateNoise(color) {\n      // Get the image data of the canvas\n      var imgData = this._ctx.createImageData(this._$canvas.width, this._$canvas.height); // Get a 32 array of the data, better for performance ( (width pixels x height pixels) instead of (width pixels x height pixels) * 4 RGBA channels )\n\n\n      var imgDataPixels = new Uint32Array(imgData.data.buffer); // Loop over all the pixels in the canvas space\n\n      for (var i = 0; i < imgDataPixels.length; i++) {\n        // Set noise points at random\n        if (Math.random() < 0.2) {\n          // Alter the original image data\n          imgDataPixels[i] = color;\n        }\n      } // Return the image data with the noise\n\n\n      return imgData;\n    }\n    /**\n     * Draw a variation of noise to the canvas\n     * @param {Integer} key \n     */\n\n  }, {\n    key: \"_drawVariationToCanvas\",\n    value: function _drawVariationToCanvas(key) {\n      // Draw image data to the canvas\n      this._ctx.putImageData(this._variations[key], 0, 0);\n    }\n    /**\n     * Start animation with controlled framerate\n     * credits: http://jsfiddle.net/chicagogrooves/nRpVD/2/\n     */\n\n  }, {\n    key: \"_startAnimating\",\n    value: function _startAnimating(fps) {\n      // Set framerate\n      this._fps = fps; // Framerate to seconds: 1000 frames / request frame rate = seconds\n\n      this._fpsInterval = 1000 / this._fps; // The time since page load. performance.now() is relative to page load and more precise in orders of magnitude. Use cases include benchmarking and other cases where a high-resolution time is required such as media (gaming, audio, video, etc.)\n\n      this._then = window.performance.now(); // Start time equals to then\n\n      this._startTime = this._then; // Animate logic\n\n      this._animate();\n    }\n  }, {\n    key: \"_animate\",\n    value: function _animate(newtime) {\n      // If we can play/animate\n      if (this._playing) {\n        // Ask for another frame\n        window.requestAnimationFrame(this._animate.bind(this)); // Set the new now time\n\n        this._now = newtime; // Check of many seconds have elapsed since the last request loop\n\n        this._elapsed = this._now - this._then; // If enough seconds/frames have passed\n\n        if (this._elapsed > this._fpsInterval) {\n          // Get ready for next frame by setting then = now, but also adjust for your\n          // specified fpsInterval not being a multiple of RAF's interval (16.7ms)\n          this._then = this._now - this._elapsed % this._fpsInterval; // Increase the current variation\n\n          if (this._currentVariation == this._options.variations - 1) {\n            // If at the end, reset\n            this._currentVariation = 0;\n          } else {\n            // Increase\n            this._currentVariation += 1;\n          } // Draw variation to canvas\n\n\n          this._drawVariationToCanvas(this._currentVariation);\n        }\n      }\n    }\n    /**\n     * Play the noise effect\n     */\n\n  }, {\n    key: \"play\",\n    value: function play() {\n      // Set playing to true\n      this._playing = true; // Start animation with the framerate that is set\n\n      this._startAnimating(this._options.fps);\n    }\n    /**\n     * Stop the noise effect from playing\n     */\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      // Stop playing\n      this._playing = false;\n    }\n    /**\n     * Destroy the current noise effect\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      // Stop the timer\n      this.stop(); // Remove canvas\n\n      this._$canvas.remove();\n    }\n  }]);\n\n  return Noiseify;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/noiseify.js?");

/***/ })

/******/ });