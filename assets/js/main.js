document.addEventListener("DOMContentLoaded", () => {
    var phoneMask = IMask(
        document.querySelector('.header-callback input[type="tel"]'), {
            mask: '+{7}(000)000-00-00'
        });

    var main_slider = new Swiper(".main-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var photo_slider = new Swiper(".photos-slider", {
        spaceBetween: 32,
        slidesPerView: 4,
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});





