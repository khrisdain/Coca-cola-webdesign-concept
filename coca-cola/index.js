<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

var swiper = new swiper('.swiper-container', {
    effect: 'coverflow',
    grabCusor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination:{
        el: '.swiper-pagination'
    }
});