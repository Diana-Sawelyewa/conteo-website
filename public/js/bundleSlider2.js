/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modalSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/modalSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modalSlider () {
const widthWindow = window.innerWidth; 
const imgs = document.querySelector('.pictures').querySelectorAll(`[class^="${'pic'}"]`); 
const modal = document.querySelector('.modal');

document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
};

let slider = document.querySelector('.slider'),
  sliderList = slider.querySelector('.slider-list'),
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slide'),
  arrows = slider.querySelectorAll('.slider-buttons'),
  prev = arrows[0],
  next = arrows[1],
  myWidth = window.getComputedStyle(slides[0]).width,
  slideWidth = window.innerWidth, 
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lengthSlides = slides.length - 1,
  lastTrf = lengthSlides * slideWidth,
  posThreshold = slideWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/;

  imgs.forEach((item,i)=> {
    item.onclick=()=> {
        modal.style.display = "flex";
        document.body.style.overflow = 'hidden'; 
        sliderTrack.style.transform = `translate3d(-${i * slideWidth}px, 0px, 0px)`;
        slideIndex = i;
        prev.classList.toggle('disabled', slideIndex === 0);
        next.classList.toggle('disabled', slideIndex === lengthSlides);
    }
})

  const getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };
  const slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === lengthSlides);
  }

  const swipeStart = function() {
    let evt = getEvent();
    if (allowSwipe) {
      transition = true;
      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;
      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;
      sliderTrack.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  };
  const swipeAction = function() {
    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > lengthSlides || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < lengthSlides) {
        isSwipe = true;
      }
    }
    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }
      if (slideIndex === lengthSlides) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  };
  const swipeEnd = function() {
    posFinal = posInit - posX1;
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);
    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');
    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }
      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }
  };
  const setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  };
  window.addEventListener('resize', ()=> {
    slideWidth = window.innerWidth;
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
  })
  const reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };
sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');
sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);
arrows.forEach(item=> {
item.addEventListener('click', function() {
  let target = event.target;
  if (target.classList.contains('next')) {
    slideIndex++;
  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }
  slide();
})});

document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            slideIndex++;
            if (slideIndex < slides.length) {
            slide();  
            } else {
              slideIndex--;
            }
        } else if (event.key === 'ArrowLeft') {
            slideIndex--;    
            if (slideIndex > -1) {
              slide();  
              }    else {
                slideIndex++;
              }    
        } else if (event.key === 'Escape') {
          modal.style.display = 'none'; 
          document.body.style.overflow = 'auto';
        } else {
          return;
        }
    }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modalSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalSlider */ "./src/js/modules/modalSlider.js");




window.addEventListener('DOMContentLoaded', () => {


    (0,_modules_modalSlider__WEBPACK_IMPORTED_MODULE_0__["default"])();



})
/******/ })()
;
//# sourceMappingURL=bundle.js.map