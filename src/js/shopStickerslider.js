
// postcard slider
let btnRight = document.getElementById('sliderRight');
let btnLeft = document.getElementById('sliderLeft');
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
btnLeft.addEventListener('click', ()=>{
    if (index==5){
        index=5;
    }else{
        index++;  
        }
        slider.style.right = -20*index + '%';
        console.log(index);
        console.log('write');
    });