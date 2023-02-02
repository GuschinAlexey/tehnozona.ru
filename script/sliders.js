document.addEventListener('DOMContentLoaded', () => {
    const imagesForSlidersGlav = ['./image/1.webp', './image/2.webp', './image/3.webp'];
    let counterSlidersGlav = 0;
    const slider = document.querySelector('.images_slider'),
          left_strelka = document.querySelector('.left_strelka'),
          right_strelka = document.querySelector('.right_strelka'),
          nomer = document.querySelectorAll('.nomer');
    
    nomer[0].style.backgroundColor = 'black';

    right_strelka.addEventListener('click',  () => {++counterSlidersGlav; 
        if (counterSlidersGlav === 3) {
            counterSlidersGlav = 0;
        } else if ( counterSlidersGlav === -1){
            counterSlidersGlav = 2;
        }
            sliderbar(counterSlidersGlav)
    });
    left_strelka.addEventListener('click', () => {--counterSlidersGlav; 
        if (counterSlidersGlav === 3) {
            counterSlidersGlav = 0;
        } else if ( counterSlidersGlav === -1){
            counterSlidersGlav = 2;
        }
            sliderbar(counterSlidersGlav)
    });

    function sliderbar (a) {
            slider.classList.add('animation_opacity_zero');
            setTimeout(() => {
                slider.src = imagesForSlidersGlav[a];
                slider.classList.remove('animation_opacity_zero');
                slider.classList.add('animation_opacity_one');
                for (i = 0; i <=2; i++) {
                    if(i == a) {
                        nomer[i].style.backgroundColor = 'black';
                    } else {
                        nomer[i].style.backgroundColor = 'grey';
                    }
                }
                setTimeout(() => {
                    slider.classList.remove('animation_opacity_one');
                },500);
            }, 500);   
        };    
});