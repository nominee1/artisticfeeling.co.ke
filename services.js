const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
   
  
  });

  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });
