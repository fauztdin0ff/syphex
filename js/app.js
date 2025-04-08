/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
         });
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }


         /*------------------------------Burger menu---------------------------*/
         document.addEventListener("DOMContentLoaded", function () {
            const menuIcon = document.querySelector(".menu__icon");
            const menuBody = document.querySelector(".menu__body");
            const body = document.querySelector("body");
            const menuBodyClose = document.querySelector(".menu__body-close");

            if (menuIcon && menuBody) {
               // Открытие/закрытие меню по иконке
               menuIcon.addEventListener("click", function () {
                  menuIcon.classList.toggle("active");
                  menuBody.classList.toggle("active");
                  body.classList.toggle("no-scroll");
               });

               // Закрытие меню при клике на ссылку внутри меню
               menuBody.addEventListener("click", function (event) {
                  if (event.target.tagName === "A" || event.target.closest("a")) {
                     menuIcon.classList.remove("active");
                     menuBody.classList.remove("active");
                     body.classList.remove("no-scroll");
                  }
               });

               // Закрытие меню при клике на кнопку закрытия
               if (menuBodyClose) {
                  menuBodyClose.addEventListener("click", function () {
                     menuIcon.classList.remove("active");
                     menuBody.classList.remove("active");
                     body.classList.remove("no-scroll");
                  });
               }

               // Закрытие меню при клике вне области меню
               document.addEventListener("click", function (event) {
                  if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
                     menuIcon.classList.remove("active");
                     menuBody.classList.remove("active");
                     body.classList.remove("no-scroll");
                  }
               });
            }
         });


         /***/
      })
/******/]);
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
         /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
   }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
         }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


      /*------------------------------Header fixed---------------------------*/
      const header = document.querySelector('.header');

      window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
            header.classList.add('fixed');
         } else {
            header.classList.remove('fixed');
         }
      });


      /*------------------------------
      Lang
      ---------------------------*/
      function initLangDropdown(langButtonSelector, langListSelector) {
         const langButton = document.querySelector(langButtonSelector);
         const langList = document.querySelector(langListSelector);
         let hoverTimeout;

         if (langButton && langList) {
            langButton.addEventListener('mouseover', function () {
               clearTimeout(hoverTimeout);
               langButton.classList.add('active');
               langList.classList.add('active');
            });

            langButton.addEventListener('mouseout', function () {
               hoverTimeout = setTimeout(function () {
                  langButton.classList.remove('active');
                  langList.classList.remove('active');
               }, 300);
            });

            langButton.addEventListener('click', function (event) {
               event.stopPropagation();
               langButton.classList.toggle('active');
               langList.classList.toggle('active');
            });

            document.addEventListener('click', function (event) {
               if (!langButton.contains(event.target) && !langList.contains(event.target)) {
                  langButton.classList.remove('active');
                  langList.classList.remove('active');
               }
            });
         }
      }

      initLangDropdown('.header__lang', '.header__lang-list');
      initLangDropdown('.footer__lang', '.footer__lang-list');

      document.addEventListener("DOMContentLoaded", function () {
         const langActive = document.querySelector(".header__lang-active");

         const langMap = {
            English: "En",
            Português: "Pt",
            Deutsch: "De",
         };

         function shortenLang() {
            if (window.innerWidth < 600) {
               const langText = langActive.childNodes[0].nodeValue.trim();
               langActive.dataset.fullLang = langText;

               const shortLang = langMap[langText] || langText.slice(0, 2);
               langActive.childNodes[0].nodeValue = shortLang;
            } else {
               if (langActive.dataset.fullLang) {
                  langActive.childNodes[0].nodeValue = langActive.dataset.fullLang;
               }
            }
         }

         shortenLang();
         window.addEventListener("resize", shortenLang);
      });

      /*------------------------------
      Move hero cards
      ---------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const heroCards = document.querySelector(".hero__cards");
         const heroCardsMob = document.querySelector(".hero__cards-mob");
         const heroText = document.querySelector(".hero__text");

         if (!heroCards || !heroCardsMob || !heroText) return;

         function moveHeroCards() {
            if (window.innerWidth < 600) {
               if (heroCards.parentElement !== heroCardsMob) {
                  heroCardsMob.appendChild(heroCards);
               }
            } else {
               if (heroCards.parentElement !== heroText) {
                  heroText.appendChild(heroCards);
               }
            }
         }

         moveHeroCards();
         window.addEventListener("resize", moveHeroCards);
      });


      /*------------------------------
      Brands carousel   
      ---------------------------*/
      const brandsSlider = document.querySelector(".intro__brands-slider");

      if (brandsSlider) {
         const brandsSwiper = new Swiper(brandsSlider, {
            slidesPerView: "auto",
            spaceBetween: 15,
            loop: true,
            freeMode: true,
            simulateTouch: false,
            slideToClickedSlide: false,
            speed: 4000,
            autoplay: {
               delay: 0,
               disableOnInteraction: false,
            },
         });
      }



      /*------------------------------
      Table
      ---------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const table = document.querySelector(".leaderboard__table");
         if (!table) return;

         const tableBody = table.querySelector("tbody");
         let isTableVisible = false;
         let updateInterval = null;

         async function loadNewUsers() {
            try {
               const response = await fetch("./users.json");
               if (!response.ok) throw new Error("Ошибка загрузки JSON");
               return await response.json();
            } catch (error) {
               console.error("Ошибка загрузки пользователей:", error);
               return [];
            }
         }

         async function updateLeaderboard() {
            if (!isTableVisible) return;

            let rows = Array.from(tableBody.querySelectorAll("tr"));

            if (rows.length > 7) {
               while (rows.length > 7) {
                  tableBody.removeChild(rows.pop());
               }
            }

            const positions = rows.map(row => row.getBoundingClientRect().top);

            rows.forEach(row => {
               updateProfit(row);
            });

            if (Math.random() < 0.33) {
               const newUsers = await loadNewUsers();
               if (newUsers.length > 0) {
                  replaceLastUser(newUsers);
               }
            }

            rows = Array.from(tableBody.querySelectorAll("tr"));
            rows.sort((a, b) => getProfitValue(b) - getProfitValue(a));

            rows.forEach((row, index) => {
               row.cells[0].textContent = index + 4; // Обновляем позицию
            });

            tableBody.innerHTML = "";
            rows.forEach(row => tableBody.appendChild(row));

            rows.forEach((row, index) => {
               const newPosition = row.getBoundingClientRect().top;
               const delta = positions[index] - newPosition;

               row.style.transform = `translateY(${delta}px)`;
               row.style.transition = "none";

               requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                     row.style.transition = "transform 0.5s ease-in-out";
                     row.style.transform = "";
                  });
               });
            });
         }

         function updateProfit(row) {
            let profitCell = row.querySelector(".cell-profit");
            if (!profitCell) return;
            let currentProfit = getProfitValue(row);
            let change = Math.floor(Math.random() * 500) * (Math.random() > 0.5 ? 1 : -1);
            let newProfit = Math.max(1000, currentProfit + change);
            profitCell.textContent = `+$${newProfit.toLocaleString()}`;
         }

         function replaceLastUser(newUsers) {
            let rows = Array.from(tableBody.querySelectorAll("tr"));

            if (rows.length >= 7) {
               let lastRow = rows[rows.length - 1];
               lastRow.style.opacity = "0";
               lastRow.style.transition = "opacity 0.5s";

               setTimeout(() => {
                  lastRow.remove();
                  addNewUser(newUsers);
               }, 500);
            } else {
               addNewUser(newUsers);
            }
         }

         function addNewUser(newUsers) {
            let newUser = newUsers[Math.floor(Math.random() * newUsers.length)];

            let newRow = document.createElement("tr");
            newRow.innerHTML = `
         <td></td> <!-- Позиция -->
         <td class="cell-with-image">
             <div class="cell-flex">
                 <img src="${newUser.img}" alt="">
                 <div class="cell-text">
                     <p>${newUser.name}</p>
                 </div>
             </div>
         </td>
         <td class="cell-with-image">
             <div class="cell-flex">
                 <img src="${newUser.assetImg}" alt="">
                 <div class="cell-text">
                     <p>${newUser.asset}</p>
                     <span>${newUser.assetType}</span>
                 </div>
             </div>
         </td>
         <td class="cell-country">${newUser.country}</td> <!-- Страна -->
         <td class="cell-profit">+$${newUser.profit.toLocaleString()}</td> <!-- Прибыль -->
      `;

            if (newRow.cells.length < 5) {
               console.error("Неверная структура новой строки:", newRow);
               return;
            }

            let rows = Array.from(tableBody.querySelectorAll("tr"));
            rows.push(newRow);
            rows.sort((a, b) => getProfitValue(b) - getProfitValue(a));

            rows.forEach((row, index) => {
               row.cells[0].textContent = index + 4; // Обновляем позицию
            });

            tableBody.innerHTML = "";
            rows.forEach(row => tableBody.appendChild(row));
         }

         function getProfitValue(row) {
            let profitCell = row.querySelector(".cell-profit");
            if (!profitCell) return 0;
            return parseInt(profitCell.textContent.replace(/\D/g, ""), 10);
         }

         function toggleUpdateInterval(visible) {
            isTableVisible = visible;
            if (visible) {
               if (!updateInterval) {
                  updateInterval = setInterval(updateLeaderboard, Math.random() * (4000 - 2000) + 2000);
               }
            } else {
               clearInterval(updateInterval);
               updateInterval = null;
            }
         }

         const observer = new IntersectionObserver(
            ([entry]) => {
               toggleUpdateInterval(entry.isIntersecting);
            },
            { threshold: 0.1 }
         );

         observer.observe(table);
      });


      /*------------------------------
      Brands carousel   
      ---------------------------*/
      let rewardsSwiper = null;
      const rewardsSlider = document.querySelector(".rewards__slider");

      function initRewardsSlider() {
         if (window.innerWidth >= 980 && rewardsSlider && !rewardsSwiper) {
            rewardsSwiper = new Swiper(rewardsSlider, {
               loop: true,
               freeMode: false,
               speed: 800,
               navigation: {
                  nextEl: '.rewards__slider-next',
                  prevEl: '.rewards__slider-prev',
               },
               breakpoints: {
                  980: {
                     slidesPerView: 3,
                     spaceBetween: 15,
                  },
                  1200: {
                     slidesPerView: 3.7,
                     spaceBetween: 16,
                  }
               }
            });
         } else if (window.innerWidth < 980 && rewardsSwiper) {
            rewardsSwiper.destroy(true, true);
            rewardsSwiper = null;
         }
      }

      initRewardsSlider();

      window.addEventListener('resize', () => {
         initRewardsSlider();
      });



      /*------------------------------
      Back to top
      ---------------------------*/
      document.addEventListener("DOMContentLoaded", () => {
         const backToTop = document.querySelector(".back-to-top");

         if (backToTop) {
            window.addEventListener("scroll", () => {
               backToTop.classList.toggle("visible", window.scrollY > 200);
            });

            backToTop.addEventListener("click", () => {
               window.scrollTo({ top: 0, behavior: "smooth" });
            });
         }
      });

   })();

   /******/
})()
   ;