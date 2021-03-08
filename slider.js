var swiper = new Swiper('.swiper-container', {
  // Optional parameters
slidesPerView:1,
spaceBetween: 1,
boolean:true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
     type: 'bullets',
clickable: true,
  },
  breakpoints: {  
    800: {
      slidesPerView: 1.6,
      },
    
   
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});