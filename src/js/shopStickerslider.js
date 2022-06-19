
// postcard slider
let btnRight = document.getElementById('sliderRight');
let btnLeft = document.getElementById('sliderLeft');
let slider = document.querySelector('.sticker');
let index = 0;
btnRight.addEventListener('click', ()=>{
    if (index==5){
        index=0;
    }else{
        index++;  
        }
        slider.style.left = -20*index + '%';
    });
btnLeft.addEventListener('click', ()=>{
    if (index==0){
        index=0;
        console.log(index);
    }else{
        index--;  
        console.log(index);
        }
        slider.style.left = -20*index + '%';
    });

// document.getElementById('shopBtn').addEventListener('click',function(){
//     alert("恭喜完成明信片~~");
//     console.log(shopBtn);
// });