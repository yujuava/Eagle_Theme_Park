
    let next = document.querySelectorAll(".Next");
    let back = document.querySelectorAll(".Back");
    let carousel = document.querySelectorAll(".carousel_cards");
    let arr = [0, 0, 0];

    for(let i=0; i<next.length; i++){
        next[i].addEventListener("click",function(){
             // angle
             arr[i] -= 45;
             carousel[i].style.transform = `translateZ(-25rem) rotateY(${arr[i]}deg)`; 
        });
    }

    for(let i=0; i<back.length; i++){
        back[i].addEventListener("click",function(){
             // angle
             arr[i] += 45;
             carousel[i].style.transform = `translateZ(-25rem) rotateY(${arr[i]}deg)`; 
        });
    }

    