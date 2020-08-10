// Import the noise class
import Noiseify from './noiseify';

// Get HTML element to add the noise to
const $container = document.querySelector('[data-container');

// If there is an element
if($container) {
  // Initiate an instance
  const noise = new Noiseify($container,{
    variations: 6,
    fps: 6,
    color: 'black'
  });
  noise.play();
}
