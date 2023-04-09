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
window.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector(".column-product__video");
  video.addEventListener("click", function () {
    if (video.classList.contains("ready")) {
      return;
    }

    video.classList.add("ready");
    var src = video.dataset.src;
    video.insertAdjacentHTML(
      "afterbegin",
      '  <iframe src="' +
        src +
        '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  });
});

if (document.querySelector(".presentation")) {
  new Swiper(".slider-presentation", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: ".presentation-slider__pag",
      clickable: true,
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
