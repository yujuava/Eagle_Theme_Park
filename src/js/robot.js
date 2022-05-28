let robotOpen = document.getElementById('robot');
let robotArea = document.getElementById('robotArea');
let robotClose =document.getElementById('robotClose');

robotOpen.addEventListener('click',function(){
    robotArea.style.display="flex";
})

robotClose.addEventListener('click',function(){
    robotArea.style.display="none";
})