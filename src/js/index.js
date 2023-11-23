import mobileNav from './modules/mobile-nav.js';
mobileNav();

import autoComplete from './modules/autoComplete';
autoComplete();

import easepick from './modules/easepick.js';
easepick();

import swiper from './modules/swiper-popular.js';
swiper();

import swiperTestimonials from './modules/swiper-testimonials.js';

import scrollReveal from './modules/scrollReveal.js';
scrollReveal();

const navList = document.querySelectorAll('.nav__list__item');

navList.forEach (item => {
    item.addEventListener('click', () => {
        navList.forEach(i => {
            i.classList.remove('active');
        })
        item.classList.add('active');
    })
})