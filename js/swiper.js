let swiper = new Swiper(".swiper", {

    slidesPerView: "auto",
    freeMod: true, 
    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    navigation: {
        nextEl: 'news__navigation-right-arrow',
        prevEl: 'news__navigation-left-arrow',
      },
  });


  function prevSlide(){
    navigationNext(swiper);
  }

  function nextSlide(){
    navigationNext(swiper);

  }