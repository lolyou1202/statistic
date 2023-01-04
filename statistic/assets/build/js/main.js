/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/_components.js":
/*!**************************************!*\
  !*** ./assets/src/js/_components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select */ "./assets/src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_filling_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filling-line */ "./assets/src/js/components/filling-line.js");
/* harmony import */ var _components_filling_line__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_filling_line__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./assets/src/js/_functions.js":
/*!*************************************!*\
  !*** ./assets/src/js/_functions.js ***!
  \*************************************/
/***/ (() => {

// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

//Подключение drag&drop списка
// import Sortable from 'sortablejs';

// const dropItems = document.querySelector('.tasks__main')

// new Sortable(dropItems, {
//   handle: '.drag__control',
//   animation: 250,
// });

/***/ }),

/***/ "./assets/src/js/_vars.js":
/*!********************************!*\
  !*** ./assets/src/js/_vars.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./assets/src/js/components/filling-line.js":
/*!**************************************************!*\
  !*** ./assets/src/js/components/filling-line.js ***!
  \**************************************************/
/***/ (() => {

let fillingline = function (value, start, today, end) {
  let line = document.querySelector('.league-progress__line-current');
  let keyFrames = document.createElement('style');
  keyFrames.innerHTML = `
        @keyframes linefilling {
            0% {
                max-width: 0;
            }
            100% {
                max-width: ${value}%;
            }
        }

        .league-progress__line-current {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            border-radius: 50px;
            height: 10px;
            background: var(--primary-font);
            opacity: 30%;
            width: ${value}%;
            animation: linefilling 1s ease-in-out;
        }
    `;
  line.appendChild(keyFrames);
  let dateStart = document.querySelector('.league-progress__start');
  let dateEnd = document.querySelector('.league-progress__end');
  let dateToday = document.querySelector('.league-progress__today');
  dateStart.textContent = start;
  dateStart.style.left = 0;
  dateEnd.textContent = end;
  dateEnd.style.right = 0;
  dateToday.textContent = today;
  dateToday.style.left = `${value}%`;
  dateToday.style.transform = 'translateX(-50%)';
};
fillingline(30, '19 Oct', '1 Jan', '14 Jun');

/***/ }),

/***/ "./assets/src/js/components/select.js":
/*!********************************************!*\
  !*** ./assets/src/js/components/select.js ***!
  \********************************************/
/***/ (() => {

document.querySelectorAll('.select').forEach(el => {
  let button = el.querySelector('button');
  button.addEventListener('click', e => {
    el.classList.toggle('active');
    el.querySelectorAll('li').forEach(elem => {
      if (elem.textContent == button.querySelector('span').textContent) {
        el.querySelectorAll('li').forEach(elem => {
          elem.classList.remove('selected');
        });
        elem.classList.add('selected');
      }
    });
  });
  el.querySelectorAll('li').forEach(elem => {
    elem.addEventListener('click', e => {
      button.querySelector('span').textContent = elem.textContent;
      el.classList.toggle('active');
    });
  });
  document.addEventListener('click', e => {
    if (!el.contains(e.target)) {
      el.classList.remove('active');
    }
  });
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./assets/src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./assets/src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./assets/src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map