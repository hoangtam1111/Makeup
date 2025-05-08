new Swiper('.story-wrapper', {
    loop: true,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 6
        },
        
    }
  })

const stories = document.querySelectorAll('video');
    
    stories.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reset video to the beginning
        });
    });