
    let next = document.querySelectorAll(".Next");
    let back = document.querySelectorAll(".Back");
    let carousel = document.querySelectorAll(".carousel_cards");
    let angle = 0;

    for(let i=0; i<next.length; i++){
        next[i].addEventListener("click",function(){
             angle -= 45;
             carousel[i].style.transform = `translateZ(-25rem) rotateY(${angle}deg)`; 
        });
    }

    for(let i=0; i<back.length; i++){
        back[i].addEventListener("click",function(){
             angle += 45;
             carousel[i].style.transform = `translateZ(-25rem) rotateY(${angle}deg)`; 
        });
    }

    