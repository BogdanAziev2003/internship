let swiper = new Swiper(".newsSwiper", {

  slidesPerView: 'auto',
  keyboardControl: true,
  grabCursor: true,
  loop:true,
  spaceBetween: 32,
  navigation: {
      nextEl: '.news__navigation-right-arrow',
      prevEl: '.news__navigation-left-arrow',
    },

    on: {
  slideChange: function(swiper){
    document.querySelector('.news__nvigation-count_active').innerHTML = (swiper.realIndex <10?"0":'') + (+swiper.realIndex+1);
  }
}
});