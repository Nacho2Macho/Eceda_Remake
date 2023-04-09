"use strict";


const menu = document.querySelector(".menu-header");
const menuBtn = document.querySelector(".menu__icon");
const body = document.body;
if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
  menu.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("lock");
    });
  });
}

new Swiper(".clients__slider", {
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  loop: true,
  parallax: true,
  navigation: {
    nextEl: ".slider-clients__button--next",
    prevEl: ".slider-clients__button--prev",
  },
  pagination: {
    el: ".product-slider__dotts",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1370: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
if (document.querySelector(".feedback")) {
  new Swiper(".slider-feedback", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: ".feedback-slider__button--next",
      prevEl: ".feedback-slider__button--prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1330: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}
if (document.querySelector(".feedback__none")) {
  new Swiper(".slider-feedback", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: ".product-new__dotts",
      clickable: true,
      type: "bullets",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1330: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}