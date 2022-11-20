let case_swiper = new Swiper(".caseSwiper", {

    slidesPerView: 'auto',
    keyboardControl: true,
    grabCursor: true,
    loop:true,
    spaceBetween: 32,
    navigation: {
        nextEl: '.case__navigation-right-arrow',
        prevEl: '.case__navigation-left-arrow',
      },
  
      on: {
    slideChange: function(swiper){
      document.querySelector('.case__nvigation-count_active').innerHTML = (swiper.realIndex <10?"0":'') + (+swiper.realIndex+1);
    }
  }
  });