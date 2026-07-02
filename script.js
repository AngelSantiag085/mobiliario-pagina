new Swiper(".letrasSwiper", {
    loop: true,
    speed:800,
    autoplay: {
        delay: 4000,
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
    },
    pagination: {
        el: ".letrasSwiper .swiper-pagination",
        clickable: true,
    },
    grabCursor:true,
    touchEventsTarget:"container",
});

new Swiper(".numerosSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".numerosSwiper .swiper-pagination",
        clickable: true,
    },
});

new Swiper(".mamparasSwiper", {
    loop:true,
    autoplay: {
        delay:3000,
    },
    pagination: {
        el: ".mamparasSwiper .swiper-pagination",
        clickable:true,
    },
});
new Swiper(".barrasSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".barrasSwiper .swiper-pagination",
        clickable: true,
    },
});