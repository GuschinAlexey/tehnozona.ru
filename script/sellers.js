document.addEventListener('DOMContentLoaded', () => {
    const right_str = document.querySelector('.sellers_strelka_right');
    let counter = -600,
        margin = document.querySelector('.sellers_slider').style.marginLeft;

        right_str.addEventListener('click', () => {
            if (counter >= 600) {
                counter = -600;
            } else if (counter <= -400){
               counter = 600;
            }
            counter -= 200;
            margin = document.querySelector('.sellers_slider').style.marginLeft = counter + 'px'; 
           console.log(document.querySelector('.sellers_slider').style.marginLeft);
        });
});