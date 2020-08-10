export default class Noiseify {
  /**
   * 2 params
   * @param {DOM element} $element (required)
   * @param {Object} options (optional)
   * - @param {Integer} variations: how many noise variations should be in the collection
   * - @param {String} color: white or black
   * - @param {Integer} fps: framerate to autoplay the noise
   */
  constructor($element, options = {}) {
    // Set the properties
    // Contains valid HTML element, will hold the canvas element
    this._$element = false;
    
    // Contains all the default options
    this._options = {
      variations: 6,
      color: 'black',
      fps: 5
    };

    // Merge custom options with the default ones
    this._options = Object.assign(this._options,options);
    
    // Contains the canvas element
    this._$canvas = false;
    
    // Contains the canvas context
    this._ctx = false;
    
    // Contains the various noise variations
    this._variations = [];
    
    // Hold the current variation
    this._currentVariation = 0;

    // Ready to start animating
    this._ready = false;

    // Hold current play/animating status
    this._playing = false;

    // Framerate controlled variables
    this._fps;
    this._fpsInterval;
    this._startTime;
    this._now;
    this._then;
    this._elapsed;

    // Check for valid element
    if($element && $element.nodeType) {
      // Set element
      this._$element = $element;
      
      // Initiate
      this.draw();
    }
  }


  /**
   * Initiate
   */
  draw() {
    // Set ready back to false
    this._ready = false;

    // Draw the canvas for the first time
    this._drawCanvas();
    
    // Draw noise variations (create a collection)
    this._drawNoiseVariations();

    // Ready to draw to canvas
    this._ready = true;
    
    // Draw the first variation on to the canvas
    this._drawVariationToCanvas(this._currentVariation);
  }

  /**
   * Draw the canvas
   */
  _drawCanvas() {
    // Stop the timer
    this.stop();
    // Check for canvas element
    if(!this._$canvas) {
      // There is no canvas element yet, create it
      const $canvas = document.createElement("canvas");
      
      // Add to document
      this._$element.appendChild($canvas);
      
      // Get context of the canvas and set it
      this._ctx = $canvas.getContext("2d");
      
      // Set it in our class
      this._$canvas = $canvas;
    }

    // Set width and height
    this._$canvas.width = this._$element.offsetWidth;
    this._$canvas.height = this._$element.offsetHeight;
  }

  /**
   * Draw noise variations
   * The total of variations might impact performance
   */
  _drawNoiseVariations() {
    // Set color to draw the noise
    let color = 0xFFffffff;
    // If black, overwrite the white color
    if(this._options.color=='black') {
      color = 0xFF000000;
    }
    
    // Reset the variations
    this._variations = [];
    
    // Generate a total of noise variations based on our options
    for (let i = 0; i < this._options.variations; i++) {
      // Generate noise variation and it to the variations collection
      this._variations.push(this._generateNoise(color));
    }
  }

  /**
   * Generate a noise variation/pattern in a color
   * @param {HEX color code} color;
   */
  _generateNoise(color) {
    // Get the image data of the canvas
    let imgData = this._ctx.createImageData(this._$canvas.width, this._$canvas.height);
    
    // Get a 32 array of the data, better for performance ( (width pixels x height pixels) instead of (width pixels x height pixels) * 4 RGBA channels )
    let imgDataPixels = new Uint32Array(imgData.data.buffer);
    
    // Loop over all the pixels in the canvas space
    for(var i = 0; i < imgDataPixels.length; i++) {
      // Set noise points at random
      if(Math.random() < 0.2) {
        // Alter the original image data
        imgDataPixels[i] = color;
      }
    }
    
    // Return the image data with the noise
    return imgData;
  }

  /**
   * Draw a variation of noise to the canvas
   * @param {Integer} key 
   */
  _drawVariationToCanvas(key) {
    // Draw image data to the canvas
    this._ctx.putImageData(this._variations[key], 0, 0);
  }

  /**
   * Start animation with controlled framerate
   * credits: http://jsfiddle.net/chicagogrooves/nRpVD/2/
   */
  _startAnimating(fps) {
    // Set framerate
    this._fps = fps;
    // Framerate to seconds: 1000 frames / request frame rate = seconds
    this._fpsInterval = 1000 / this._fps;
    // The time since page load. performance.now() is relative to page load and more precise in orders of magnitude. Use cases include benchmarking and other cases where a high-resolution time is required such as media (gaming, audio, video, etc.)
    this._then = window.performance.now();
    // Start time equals to then
    this._startTime = this._then;
    // Animate logic
    this._animate();
  }

  _animate(newtime) {
    // If we can play/animate
    if(this._playing) {
      // Ask for another frame
      window.requestAnimationFrame(this._animate.bind(this));

      // Set the new now time
      this._now = newtime;
      // Check of many seconds have elapsed since the last request loop
      this._elapsed = this._now - this._then;

      // If enough seconds/frames have passed
      if(this._elapsed > this._fpsInterval) {
        // Get ready for next frame by setting then = now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this._then = this._now - (this._elapsed % this._fpsInterval);

        // Increase the current variation
        if(this._currentVariation==(this._options.variations-1)) {
          // If at the end, reset
          this._currentVariation = 0;
        } else {
          // Increase
          this._currentVariation += 1;
        }

        // Draw variation to canvas
        this._drawVariationToCanvas(this._currentVariation);
        
      }
    }
  }

  /**
   * Play the noise effect
   */
  play() {
    // Set playing to true
    this._playing = true;
    // Start animation with the framerate that is set
    this._startAnimating(this._options.fps);
  }

  /**
   * Stop the noise effect from playing
   */
  stop() {
   // Stop playing
   this._playing = false;
  }

  /**
   * Destroy the current noise effect
   */
  destroy() {
    // Stop the timer
    this.stop();
    // Remove canvas
    this._$canvas.remove();
  }
}
