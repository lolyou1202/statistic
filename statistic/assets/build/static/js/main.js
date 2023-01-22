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
/* harmony import */ var _components_league__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/league */ "./assets/src/js/components/league.js");
/* harmony import */ var _components_filling_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filling-table */ "./assets/src/js/components/filling-table.js");
/* harmony import */ var _components_matches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/matches */ "./assets/src/js/components/matches.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/calendar */ "./assets/src/js/components/calendar.js");
/* harmony import */ var _components_calling_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calling-functions */ "./assets/src/js/components/calling-functions.js");







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

/***/ "./assets/src/js/components/calendar.js":
/*!**********************************************!*\
  !*** ./assets/src/js/components/calendar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendar": () => (/* binding */ calendar)
/* harmony export */ });
let calendar = function () {
  let rowsContainer = document.querySelector('.calendar__main-rows');
  let month = document.querySelector('.calendar__header p');
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDate = new Date().getDate();
  let currentDay = new Date().getDay();
  rowsContainer.innerHTML = '';
  let fillRows = function (date, currentDate, countDaysInMonth, countDaysInPreviousMonth) {
    let firstDayInMonth = date.getDay() + 6;
    if (firstDayInMonth > 6) {
      firstDayInMonth = firstDayInMonth - 7;
    }
    let weekNumb = 6;
    let continueNumb = 7 - firstDayInMonth + 1;
    let b = 1;
    let c = 1;
    let a = 1;
    for (let i = 0; i < weekNumb; i++) {
      let row = document.createElement('div');
      row.classList.add('calendar-row');
      rowsContainer.appendChild(row);
      for (let j = 0; j < 7; j++) {
        let day = document.createElement('span');
        row.appendChild(day);
        if (i == 0) {
          if (j < firstDayInMonth) {
            day.textContent = countDaysInPreviousMonth - firstDayInMonth + b;
            day.classList.add('notCurrentMonth');
            b++;
          }
          if (j >= firstDayInMonth) {
            day.textContent = c;
            if (c == currentDate) {
              day.classList.add('today');
            }
            c++;
          }
        }
        if (i > 0) {
          if (continueNumb > countDaysInMonth) {
            day.textContent = a;
            day.classList.add('notCurrentMonth');
            a++;
          }
          if (continueNumb <= countDaysInMonth) {
            day.textContent = continueNumb;
            if (continueNumb == currentDate && date.getMonth() == currentMonth && date.getFullYear() == currentYear) {
              day.classList.add('today');
            }
            continueNumb++;
          }
        }
      }
    }
  };
  let arrowClick = function (currentYear, currentMonth, currentDate, currentDay) {
    document.querySelectorAll('.calendar__header-arrow').forEach(function (element) {
      element.addEventListener('click', function (e) {
        if (element.classList.contains('arrow-left')) {
          rowsContainer.innerHTML = '';
          currentMonth = currentMonth - 1;
          load(currentYear, currentMonth, currentDate, currentDay);
        }
        if (element.classList.contains('arrow-right')) {
          rowsContainer.innerHTML = '';
          currentMonth = currentMonth + 1;
          load(currentYear, currentMonth, currentDate, currentDay);
        }
      });
    });
  };
  let load = function (currentYear, currentMonth, currentDate, currentDay) {
    let countDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let countDaysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
    let date = new Date(currentYear, currentMonth, 1);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    month.textContent = monthNames[date.getMonth()];
    fillRows(date, currentDate, countDaysInMonth, countDaysInPreviousMonth);
    document.querySelectorAll('.calendar-row span').forEach(el => {
      if (el.classList == '') {
        el.addEventListener('click', function () {
          if (this.classList.contains('active')) {
            this.classList.remove('active');
          } else {
            document.querySelectorAll('.calendar-row span').forEach(el => {
              el.classList.remove('active');
            });
            this.classList.toggle('active');
          }
          console.log(date = new Date(currentYear, currentMonth, this.textContent));
        });
      }
    });
  };
  load(currentYear, currentMonth, currentDate, currentDay);
  arrowClick(currentYear, currentMonth, currentDate, currentDay);
};


/***/ }),

/***/ "./assets/src/js/components/calling-functions.js":
/*!*******************************************************!*\
  !*** ./assets/src/js/components/calling-functions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLeague": () => (/* binding */ getLeague)
/* harmony export */ });
/* harmony import */ var _filling_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filling-table */ "./assets/src/js/components/filling-table.js");
/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matches */ "./assets/src/js/components/matches.js");
/* harmony import */ var _league__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./league */ "./assets/src/js/components/league.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar */ "./assets/src/js/components/calendar.js");




const getLeague = async (url, e) => {
  //let response = await fetch(url);
  // if (response.ok) {
  //     let data = await response.json();
  //     return data;
  // }
  if (e.target.textContent == 'Euroleague') {
    let data = {
      league: {
        show: 'Euroleague',
        property: {
          name: 'Euroleague',
          img: 'static/img/pngegg.png',
          season: {
            start: '1 Oct',
            end: '3 May',
            today: '22 Jan',
            value: '40'
          },
          country: {
            name: 'Europe',
            img: 'static/img/pngegg.png'
          }
        }
        //select: ['NBA', 'Euroleague', 'VTB League']
      },

      standings: {
        east: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Indiana'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Golden State'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLLLL',
          percent: '0.11'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '4',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '5',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '6',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '7',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '8',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '9',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '10',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '11',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '12',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '13',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '14',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '15',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }],
        west: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }]
      },
      topPlayers: [{
        position: '1',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '2',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '3',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '4',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '5',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '6',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '7',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '8',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '9',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '10',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }],
      matches: [{
        time: '12:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '15:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '16:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '18:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }]
    };
    return data;
  }
  if (e.target.textContent == 'VTB League') {
    let data = {
      league: {
        show: 'VTB League',
        property: {
          name: 'VTB League',
          img: 'static/img/pngegg.png',
          season: {
            start: '30 Nov',
            end: '1 Aug',
            today: '22 Jan',
            value: '20'
          },
          country: {
            name: 'Russia',
            img: 'static/img/pngegg.png'
          }
        }
        //select: ['NBA', 'Euroleague', 'VTB League']
      },

      standings: {
        east: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Boston'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Golden State'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLLLL',
          percent: '0.11'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '4',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '5',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '6',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '7',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '8',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '9',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '10',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '11',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '12',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '13',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '14',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '15',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }],
        west: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }]
      },
      topPlayers: [{
        position: '1',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '2',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '3',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '4',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '5',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '6',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '7',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '8',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '9',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '10',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }],
      matches: [{
        time: '12:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '15:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '16:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '18:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }]
    };
    return data;
  }
  if (e.target.textContent == 'NBA') {
    let data = {
      league: {
        show: 'NBA',
        property: {
          name: 'NBA',
          img: 'static/img/pngegg.png',
          season: {
            start: '19 Oct',
            end: '14 Jun',
            today: '18 Jan',
            value: '70'
          },
          country: {
            name: 'USA',
            img: 'static/img/pngegg.png'
          }
        }
        //select: ['NBA', 'Euroleague', 'VTB League']
      },

      standings: {
        east: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Boston'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Golden State'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLLLL',
          percent: '0.11'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '4',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '5',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '6',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '7',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '8',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '9',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '10',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '11',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '12',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '13',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '14',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '15',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }],
        west: [{
          position: '1',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '33',
          loses: '23',
          lastFive: 'WWWLL',
          percent: '0.58'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'Milwaukee'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '3',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }, {
          position: '2',
          team: {
            imageUrl: 'static/img/pngegg.png',
            name: 'GSW'
          },
          wins: '11',
          loses: '43',
          lastFive: 'LLWLW',
          percent: '0.23'
        }]
      },
      topPlayers: [{
        position: '1',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '2',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '3',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '4',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '5',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '6',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '7',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '8',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '9',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }, {
        position: '10',
        player: {
          team: 'static/img/pngegg.png',
          person: {
            img: 'static/img/pngegg.png',
            name: 'Stephen Curry',
            position: 'Guard'
          }
        },
        value: '0.58'
      }],
      matches: [{
        time: '12:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '15:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '16:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          2: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          },
          3: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }, {
        time: '18:00',
        matches: {
          1: {
            comands: {
              1: {
                name: 'Golden State Warriors',
                standings: '2',
                place: 'Home',
                img: '../img/pngegg.png'
              },
              2: {
                name: 'Orlando Magick',
                standings: '10',
                place: 'Guests',
                img: '../img/pngegg.png'
              }
            }
          }
        }
      }]
    };
    return data;
  }
};

//json при загрузке страницы
let NBA = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
  standings: {
    east: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Boston'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Golden State'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLLLL',
      percent: '0.11'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '4',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '5',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '6',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '7',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '8',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '9',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '10',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '11',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '12',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '13',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '14',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '15',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }],
    west: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }]
  },
  topPlayers: [{
    position: '1',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '2',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '3',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '4',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '5',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '6',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '7',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '8',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '9',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '10',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }],
  matches: [{
    time: '12:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '15:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '16:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '18:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }]
};
let Euroleague = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
  standings: {
    east: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Boston'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Golden State'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLLLL',
      percent: '0.11'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '4',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '5',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '6',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '7',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '8',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '9',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '10',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '11',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '12',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '13',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '14',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '15',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }],
    west: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }]
  },
  topPlayers: [{
    position: '1',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '2',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '3',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '4',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '5',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '6',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '7',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '8',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '9',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '10',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }],
  matches: [{
    time: '12:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '15:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '16:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '18:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }]
};
let VTBLeague = {
  league: {
    show: 'NBA',
    property: {
      name: 'NBA',
      img: 'static/img/pngegg.png',
      season: {
        start: '19 Oct',
        end: '14 Jun',
        today: '18 Jan',
        value: '70'
      },
      country: {
        name: 'USA',
        img: 'static/img/pngegg.png'
      }
    },
    select: ['NBA', 'Euroleague', 'VTB League']
  },
  standings: {
    east: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Boston'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Golden State'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLLLL',
      percent: '0.11'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '4',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '5',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '6',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '7',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '8',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '9',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '10',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '11',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '12',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '13',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '14',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '15',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }],
    west: [{
      position: '1',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '33',
      loses: '23',
      lastFive: 'WWWLL',
      percent: '0.58'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'Milwaukee'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '3',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }, {
      position: '2',
      team: {
        imageUrl: 'static/img/pngegg.png',
        name: 'GSW'
      },
      wins: '11',
      loses: '43',
      lastFive: 'LLWLW',
      percent: '0.23'
    }]
  },
  topPlayers: [{
    position: '1',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '2',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '3',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '4',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '5',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '6',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '7',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '8',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '9',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }, {
    position: '10',
    player: {
      team: 'static/img/pngegg.png',
      person: {
        img: 'static/img/pngegg.png',
        name: 'Stephen Curry',
        position: 'Guard'
      }
    },
    value: '0.58'
  }],
  matches: [{
    time: '12:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '15:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '16:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      2: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      },
      3: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }, {
    time: '18:00',
    matches: {
      1: {
        comands: {
          1: {
            name: 'Golden State Warriors',
            standings: '2',
            place: 'Home',
            img: '../img/pngegg.png'
          },
          2: {
            name: 'Orlando Magick',
            standings: '10',
            place: 'Guests',
            img: '../img/pngegg.png'
          }
        }
      }
    }
  }]
};
let fillingAll = function (Json) {
  (0,_league__WEBPACK_IMPORTED_MODULE_2__.fillingLeague)(Json.league);
  (0,_filling_table__WEBPACK_IMPORTED_MODULE_0__.standings)(Json.standings, 'east');
  (0,_filling_table__WEBPACK_IMPORTED_MODULE_0__.fillingTopPlayers)(Json.topPlayers);
  (0,_matches__WEBPACK_IMPORTED_MODULE_1__.fillMatches)(Json.matches);
  (0,_calendar__WEBPACK_IMPORTED_MODULE_3__.calendar)();
  window.addEventListener('resize', () => {
    (0,_matches__WEBPACK_IMPORTED_MODULE_1__.fillMatches)(Json.matches);
  });
};
fillingAll(NBA);
let list = document.querySelector('.league-selection .select-list');
list.querySelectorAll('li').forEach(element => {
  element.addEventListener('click', function (e) {
    getLeague('/asd', e).then(data => {
      fillingAll(data);
    });
  });
});

/***/ }),

/***/ "./assets/src/js/components/filling-table.js":
/*!***************************************************!*\
  !*** ./assets/src/js/components/filling-table.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillingTopPlayers": () => (/* binding */ fillingTopPlayers),
/* harmony export */   "standings": () => (/* binding */ standings)
/* harmony export */ });
let standings = function (json) {
  //Функция заполнения таблицы
  let fillingStandings = function (json, conference) {
    let body = document.querySelector('.standings__body');
    body.innerHTML = '';
    for (let key in json[conference]) {
      let li = document.createElement('li');
      li.classList.add('standings__body-item');
      li.innerHTML = `
        <div>
            <span>${json[conference][key].position}</span>
        </div>
        <div>
            <span>
                <div class="standings__team-img"></div>
                <p class="standings__team-name">${json[conference][key].team.name}</p>
            </span>
        </div>
        <div>
            <span>${json[conference][key].wins}</span>
        </div>
        <div>
            <span>${json[conference][key].loses}</span>
        </div>
        <div>
            <span>
                <div class="standings__last-five">${json[conference][key].lastFive[0]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[1]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[2]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[3]}</div>
                <div class="standings__last-five">${json[conference][key].lastFive[4]}</div>
            </span>
        </div>
        <div>
            <span>${json[conference][key].percent}</span>
        </div>
      `;
      li.querySelector('.standings__team-img').style.backgroundImage = `url(${json[conference][key].team.imageUrl})`;
      li.querySelectorAll('.standings__last-five').forEach(el => {
        if (el.textContent == 'W') {
          el.classList.add('win');
        } else if (el.textContent == 'L') {
          el.classList.add('lose');
        }
      });
      body.appendChild(li);
      if (Object.keys(json[conference]).length != Number(key) + 1) {
        let hr = document.createElement('hr');
        body.appendChild(hr);
      }
    }
  };

  //Заполнение таблицы команд при загрузке страницы
  fillingStandings(json, 'east');

  //Заполнение таблицы команд при селекции конференции
  document.querySelectorAll('.standings .conference-selection li').forEach(el => {
    el.addEventListener('click', function (e) {
      if (e.target.textContent == 'Eastern conference') {
        fillingStandings(json, 'east');
      }
      if (e.target.textContent == 'Western conference') {
        fillingStandings(json, 'west');
      }
    });
  });
};
let fillingTopPlayers = function (json) {
  let body = document.querySelector('.topPlayers__body');
  body.innerHTML = '';
  for (let key in json) {
    let li = document.createElement('li');
    li.classList.add('topPlayers__body-item');
    li.innerHTML = `
      <div>
        <span>${json[key].position}</span>
      </div>
      <div>
        <span>
          <div class="topPlayers__person-img"></div>
            <div>
              <p class="topPlayers__person-name">${json[key].player.person.name}</p>
            <div>
              <div class="topPlayers__person-team"></div>
              <div class="topPlayers__person-position">${json[key].player.person.position}</div>
            </div>
          </div>
        </span>
      </div>
      <div>
        <span>${json[key].value}</span>
      </div>
    `;
    li.querySelector('.topPlayers__person-img').style.backgroundImage = `url(${json[key].player.team})`;
    li.querySelector('.topPlayers__person-team').style.backgroundImage = `url(${json[key].player.person.img})`;
    body.appendChild(li);
    if (Object.keys(json).length != Number(key) + 1) {
      let hr = document.createElement('hr');
      body.appendChild(hr);
    }
  }
};


/***/ }),

/***/ "./assets/src/js/components/league.js":
/*!********************************************!*\
  !*** ./assets/src/js/components/league.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillingLeague": () => (/* binding */ fillingLeague)
/* harmony export */ });
let fillingLeague = function (json) {
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
  let selectLeague = function (data) {
    document.querySelector('.league-card').innerHTML = `
        <div class="league-img"></div>
        <div class="league-content">
            <p class="league-name">${data.property.name}</p>
            <div class="league-country">
                <div class="country-icon"></div>
                <p class="country-name">${data.property.country.name}</p>
            </div>
        </div>
    `;
    document.querySelector('.league-img').style.backgroundImage = `url(${data.property.img})`;
    document.querySelector('.country-icon').style.backgroundImage = `url(${data.property.country.img})`;
  };

  // let fillSelectLeague = function (json) {
  //   let list = document.querySelector('.league-selection .select-list');
  //   list.innerHTML = '';

  //   for (let i = 0; i < json.length; i++) {
  //     let li = document.createElement('li');
  //     li.textContent = json[i];
  //     list.appendChild(li);
  //   }
  // }

  fillingline(json.property.season.value, json.property.season.start, json.property.season.today, json.property.season.end);
  //fillSelectLeague(json.select)
  selectLeague(json);
};


/***/ }),

/***/ "./assets/src/js/components/matches.js":
/*!*********************************************!*\
  !*** ./assets/src/js/components/matches.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillMatches": () => (/* binding */ fillMatches)
/* harmony export */ });
let fillMatches = function (json) {
  let matches = document.querySelector('.matches');
  matches.innerHTML = '';
  let midleLine = document.createElement('div');
  midleLine.classList.add('midleLine');
  matches.appendChild(midleLine);
  for (let i = 0; i < json.length; i++) {
    let midleLineBlock = document.createElement('div');
    midleLineBlock.classList.add('midleLine__block');
    let p = document.createElement('p');
    p.textContent = json[i].time;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.beginPath();
    midleLineBlock.appendChild(p);
    matches.appendChild(midleLineBlock);
    for (let key in json[i].matches) {
      let match = document.createElement('div');
      match.classList.add('matchInBlock');
      match.innerHTML = `
                <div class="matchInBlock-command">
                    <div class="command__img"></div>
                    <div class="command__info">
                        <div class="command__info-name">
                            <p>${json[i].matches[key].comands[1].name}</p>
                            <span class="command__info-position">#
                            ${json[i].matches[key].comands[1].standings}
                            </span>
                        </div>
                        <div class="command__info-stadium">
                        ${json[i].matches[key].comands[1].place}
                        </div>
                    </div>
                </div>
                <div class="matchInBlock-command">
                    <div class="command__img"></div>
                    <div class="command__info">
                        <div class="command__info-name">
                            <p>${json[i].matches[key].comands[2].name}</p>
                            <span class="command__info-position">#
                            ${json[i].matches[key].comands[2].standings}
                            </span>
                        </div>
                        <div class="command__info-stadium">
                        ${json[i].matches[key].comands[2].place}
                        </div>
                    </div>
                </div>
            `;
      midleLineBlock.appendChild(match);
    }
    let width = midleLineBlock.offsetWidth;
    let height = midleLineBlock.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    let blockX = 270;
    let timeX = width;
    let centerX = timeX - (timeX - blockX) / 2;
    let saveHeightLine = 56;
    let saveHeightTime = 56;
    let radius = (timeX - blockX) / 6;
    for (let key in json[i].matches) {
      if (i % 2 == 1) {
        midleLineBlock.style.margin = '0 0 20px auto';
        midleLineBlock.style.padding = '0 20px 0 0';
        midleLineBlock.style.alignItems = 'flex-end';
        p.style.left = '0';
        blockX = width - 270;
        timeX = 0;
        centerX = blockX / 2;
        radius = blockX / 6;
        if (key == 1) {
          context.moveTo(timeX, saveHeightLine);
          context.lineTo(blockX, saveHeightLine);
        } else {
          if (radius > 50) {
            radius = 50;
          }
          context.moveTo(timeX, saveHeightTime);
          context.arcTo(centerX, saveHeightTime, centerX, saveHeightTime + radius, radius);
          context.lineTo(centerX, saveHeightLine - radius);
          context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
          context.lineTo(blockX, saveHeightLine);
        }
      } else {
        if (key == 1) {
          context.moveTo(timeX, saveHeightLine);
          context.lineTo(blockX, saveHeightLine);
        } else {
          if (radius > 50) {
            radius = 50;
          }
          context.moveTo(timeX, saveHeightTime);
          context.arcTo(centerX, saveHeightTime, centerX, saveHeightTime + radius, radius);
          context.lineTo(centerX, saveHeightLine - radius);
          context.arcTo(centerX, saveHeightLine, blockX, saveHeightLine, radius);
          context.lineTo(blockX, saveHeightLine);
        }
      }
      saveHeightLine = saveHeightLine + 132;
    }
    context.lineWidth = 10;
    context.strokeStyle = '#DFE7F1';
    context.stroke();
    midleLineBlock.appendChild(canvas);
  }
};


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
      elem.addEventListener('click', e => {
        button.querySelector('span').textContent = elem.textContent;
        el.querySelectorAll('li').forEach(elem => {
          elem.classList.remove('selected');
        });
        elem.classList.add('selected');
        el.classList.remove('active');
      });
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