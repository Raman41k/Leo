const swiper = new Swiper(".mySwiper", {
    loop:true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});