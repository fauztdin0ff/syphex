/*------------------------------
GSAP animations
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {

   gsap.registerPlugin(ScrollTrigger);

   ScrollTrigger.normalizeScroll(true);

   // Проверка существования элементов
   function elementExists(selector) {
      if (typeof selector === "string") {
         return document.querySelector(selector) !== null;
      }
      return !!selector;
   }

   // Настройки по умолчанию для анимаций
   const defaultFadeIn = { opacity: 0, y: 50, duration: 1, ease: "power2.out" };
   const defaultScaleIn = { scale: 0, duration: 1, ease: "power2.out" };

   // Основные анимации
   if (elementExists("body")) {
      gsap.to("body", { opacity: 1, duration: 0.5, ease: "linear" });
   }

   if (elementExists(".header")) {
      gsap.from(".header", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
   }

   if (elementExists(".hero__graphic")) {
      gsap.from(".hero__graphic", { ...defaultFadeIn, y: 20, duration: 2, delay: 1, ease: "back.out(5.7)" });
   }

   // Hero секция
   [".hero__title", ".hero__subtitle", ".hero__att"].forEach((selector, index) => {
      if (elementExists(selector)) {
         gsap.from(selector, { ...defaultFadeIn, delay: 1.3 + index * 0.3 });
      }
   });

   if (elementExists(".hero__button")) {
      gsap.from(".hero__button", { ...defaultFadeIn, delay: 2.3, ease: "power2" });
   }

   if (elementExists(".hero__card")) {
      gsap.from(".hero__card", {
         ...defaultFadeIn,
         scaleX: -1,
         stagger: 0.3,
         duration: 1,
      });
   }

   // Decorations Future
   const isMobile = window.matchMedia("(max-width: 600px)").matches;
   const moveValues = isMobile ? [-70, -100, -150, -90, -250] : [-60, -30, -50, -200, -300];

   gsap.utils.toArray(".decore-future-1, .decore-future-2, .decore-future-3, .decore-future-4, .decore-future-5").forEach((img, i) => {
      if (elementExists(img)) {
         gsap.from(img, { ...defaultFadeIn, delay: i * 0.2 });

         gsap.to(img, {
            y: moveValues[i],
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
               trigger: img,
               start: "top bottom",
               end: "bottom top",
               scrub: 2,
               invalidateOnRefresh: true,
            },
         });
      }
   });

   // Benefits секция
   if (elementExists(".benefits__title")) {
      gsap.from(".benefits__title", defaultFadeIn);
   }

   if (elementExists(".benefits__card")) {
      gsap.from(".benefits__card", {
         ...defaultFadeIn,
         stagger: 0.3,
         scrollTrigger: {
            trigger: ".benefits__cards",
            start: "top bottom",
            end: "bottom top",
         },
      });
   }

   // Intro и другие заголовки
   [
      ".intro__title",
      ".intro__subtitle",
      ".support__att",
      ".support__title",
      ".support__subtitle",
      ".pays__title",
      ".pays__subtitle",
      ".feedbacks__title",
      ".get-start__title",
      ".steps__title",
      ".steps__subtitle",
      ".offers__title",
      ".offers__subtitle",
      ".rewards__title",
   ].forEach((selector) => {
      if (elementExists(selector)) {
         gsap.from(selector, {
            ...defaultFadeIn,
            scrollTrigger: {
               trigger: selector,
               start: "top 75%",
               toggleActions: "play none none none",
            },
         });
      }
   });

   // Pedestal
   if (elementExists(".pedestal__number")) {
      gsap.from(".pedestal__number", {
         ...defaultFadeIn,
         scrollTrigger: {
            trigger: ".pedestal",
            start: "top 40%",
            toggleActions: "play none none none",
         },
      });
   }

   // Apps секция
   if (elementExists(".apps__body")) {
      ScrollTrigger.create({
         trigger: ".apps__body",
         start: "top 80%",
         end: "bottom 20%",
         onEnter: () => document.querySelector(".apps__body").classList.add("show"),
         onLeaveBack: () => document.querySelector(".apps__body").classList.remove("show"),
      });
   }

   // Feedbacks
   if (elementExists(".feedback")) {
      gsap.from(".feedback", {
         scaleY: 0,
         duration: 1,
         ease: "power2.out",
         stagger: 0.2,
         scrollTrigger: {
            trigger: ".feedback",
            start: "top 80%",
            toggleActions: "play none none none",
         },
      });
   }

   // Pays секция
   if (elementExists(".pays__logo")) {
      gsap.from(".pays__logo", {
         ...defaultScaleIn,
         x: 100,
         stagger: 0.2,
         scrollTrigger: {
            trigger: ".pays__logos",
            start: "top 80%",
            toggleActions: "play none none none",
         },
      });
   }

   if (elementExists(".pays__screen-2")) {
      gsap.from(".pays__screen-2", {
         y: "15%",
         duration: 2,
         scrollTrigger: {
            trigger: ".pays__screen-2",
            start: "top 90%",
            end: "top 20%",
            scrub: 2,
         },
      });
   }

   if (elementExists(".pays__screen-3")) {
      gsap.from(".pays__screen-3", {
         y: "30%",
         duration: 1,
         scrollTrigger: {
            trigger: ".pays__screen-3",
            start: "top 80%",
            end: "top 5%",
            scrub: 2,
         },
      });
   }

   // Support секция
   if (elementExists(".support__team img")) {
      gsap.from(".support__team img", {
         ...defaultScaleIn,
         x: 100,
         stagger: 0.2,
         scrollTrigger: {
            trigger: ".support__team",
            start: "top 80%",
            toggleActions: "play none none none",
         },
      });
   }

   // Leaderboard секция
   if (elementExists(".leaderboard__pedestal")) {
      gsap.to(".leaderboard__pedestal", {
         scale: 0.8,
         duration: 1,
         scrollTrigger: {
            trigger: ".leaderboard",
            start: "top top",
            end: "bottom top",
            scrub: 1,
         },
      });
   }

   // Apps Infographic секция
   [".apps__label-1", ".apps__label-2"].forEach((selector, index) => {
      if (elementExists(selector)) {
         gsap.from(selector, {
            y: index === 0 ? "300%" : "-300%",
            duration: 2,
            scrollTrigger: {
               trigger: ".apps__infographic",
               start: "top 90%",
               end: "top 0%",
               scrub: 2,
            },
         });
      }
   });

   // Feedbacks Rating
   if (elementExists(".feedback__rating svg")) {
      gsap.from(".feedback__rating svg", {
         ...defaultScaleIn,
         stagger: 0.2,
         scrollTrigger: {
            trigger: ".feedback",
            start: "top 80%",
            toggleActions: "play none none none",
         },
      });
   }

   // Get Started Cards
   let mm = gsap.matchMedia();

   // Для мобильных устройств (max-width: 768px)
   mm.add("(max-width: 768px)", () => {
      if (elementExists(".get-start__card-3")) {
         gsap.from(".get-start__card-3", {
            x: "50%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".get-start__card-3",
               start: "top 90%",
               end: "top 10%",
               toggleActions: "play none none none",
               scrub: 2,
            },
         });
      }

      if (elementExists(".get-start__card-1")) {
         gsap.from(".get-start__card-1", {
            x: "50%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".get-start__card-1",
               start: "top 90%",
               end: "top 10%",
               toggleActions: "play none none none",
               scrub: 2,
            },
         });
      }

      if (elementExists(".get-start__card-2")) {
         gsap.from(".get-start__card-2", {
            x: "-50%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".get-start__card-2",
               start: "top 90%",
               end: "top 10%",
               toggleActions: "play none none none",
               scrub: 2,
            },
         });
      }
   });

   // Для десктопов (min-width: 769px)
   mm.add("(min-width: 769px)", () => {
      if (elementExists(".get-start__card-3")) {
         gsap.from(".get-start__card-3", {
            x: "-50%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".get-start__card-3",
               start: "top 90%",
               end: "top 10%",
               toggleActions: "play none none none",
               scrub: 2,
            },
         });
      }

      if (elementExists(".get-start__card-1")) {
         gsap.from(".get-start__card-1", {
            x: "50%",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".get-start__card-1",
               start: "top 90%",
               end: "top 10%",
               toggleActions: "play none none none",
               scrub: 2,
            },
         });
      }
   });
   // Affiliate секция
   if (elementExists(".affiliate__video")) {
      gsap.from(".affiliate__video", { opacity: 0, x: 120, duration: 4, delay: 1, ease: "back.out(5.7)" });
   }

   [".affiliate__title", ".affiliate__subtitle", ".affiliate__att"].forEach((selector, index) => {
      if (elementExists(selector)) {
         gsap.from(selector, {
            ...defaultFadeIn,
            delay: 1.3 + index * 0.3,
         });
      }
   });

   if (elementExists(".affiliate__button")) {
      gsap.from(".affiliate__button", { ...defaultFadeIn, delay: 2.3, ease: "power2" });
   }

   // Steps секция
   if (elementExists(".steps__item")) {
      gsap.from(".steps__item", {
         y: 20,
         opacity: 0,
         duration: 1.5,
         stagger: 0.2,
         ease: "power2.out",
         scrollTrigger: {
            trigger: ".steps__item",
            start: "top 80%",
         },
      });
   }

   // Offers секция
   if (elementExists(".offers__card")) {
      gsap.set(".offers__card", {
         y: -100,
         opacity: 0,
         boxShadow: "0 0 0px rgba(0, 150, 255, 0)",
      });

      gsap.to(".offers__card", {
         y: 0,
         opacity: 1,
         boxShadow: "0 0 20px rgba(0, 150, 255, 0.4)",
         duration: 1.2,
         ease: "bounce.out",
         stagger: {
            each: 0.15,
            from: "center",
         },
         scrollTrigger: {
            trigger: ".offers__cards",
            start: "top 80%",
            toggleActions: "play none none none",
         },
      });
   }

   // Refer секция
   if (elementExists(".refer__text")) {
      gsap.from(".refer__text", {
         y: 100,
         scrollTrigger: {
            trigger: ".refer__text",
            start: "top 80%",
            scrub: 2,
            toggleActions: "play none none none",
         },
      });
   }

   // Structure секция
   if (elementExists(".structure__line")) {
      gsap.to(".structure__line", {
         Animation: "draw 5s ease-in-out forwards",
         scrollTrigger: {
            trigger: ".structure__content",
            start: "top 80%",
         },
      });
   }

   if (elementExists(".structure__screen")) {
      gsap.from(".structure__screen", {
         y: "25%",
         duration: 2,
         scrollTrigger: {
            trigger: ".structure__image",
            start: "top 90%",
            end: "top 20%",
            scrub: 2,
         },
      });
   }

   [".structure__label-1", ".structure__label-2"].forEach((selector, index) => {
      if (elementExists(selector)) {
         gsap.from(selector, {
            y: index === 0 ? "200%" : "-100%",
            duration: 2,
            scrollTrigger: {
               trigger: ".structure__image",
               start: "top 90%",
               end: "top 0%",
               scrub: 2,
            },
         });
      }
   });

   // Affiliate Decorations
   const moveValuesAf = isMobile ? [-30, -300] : [-50, -100];

   gsap.utils.toArray(".affiliate__decor-1, .affiliate__decor-2").forEach((img, i) => {
      if (elementExists(img)) {
         gsap.to(img, {
            y: moveValuesAf[i],
            ease: "linear",
            immediateRender: false,
            scrollTrigger: {
               trigger: img,
               start: "top bottom",
               end: "bottom top",
               scrub: 2,
               invalidateOnRefresh: true,
            },
         });
      }
   });

   let resizeTimeout;
   window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
         ScrollTrigger.refresh();
      }, 200);
   });


});