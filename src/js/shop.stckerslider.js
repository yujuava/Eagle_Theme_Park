
// postcard slider
let btnRight = document.getElementById('sliderRight');
let slider = document.querySelector('.sticker');
let index = 0;
btnRight.addEventListener('click', ()=>{
    if (index==5){
        index=5;
    }else{
        index++;  
        }
        slider.style.left = -20*index + '%';
           
        console.log(index);
    });