// import 'swiper/css/bundle';
import Swiper from '../../vendor/swiper';

const initTeamSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-team', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    // centeredSlides: true,

    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

const initReview = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper-reviews', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,

    navigation: {
      nextEl: '.swiper-button-next-reviews',
      prevEl: '.swiper-button-prev-reviews',
    },
  });
};

export const initSwipers = () => {
  initTeamSwiper();
  initReview();
};
