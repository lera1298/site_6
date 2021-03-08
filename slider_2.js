var myswiper = new Swiper('.swiper-container_1', {
  // Optional parameters
slidesPerView:1,
spaceBetween: 1,
boolean:true,
breakpoints: {  
    800: {
      slidesPerView: 2.6,
      },
    
   
  },
  // If we need pagination
 
loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // And if we need scrollbar
  
});