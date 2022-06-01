function DoFirst(){
    let cardHeight = document.querySelector(".card");
    let cardSection = document.querySelector(".themePark__Attractions");

    setTimeout( function(){
        if(window.innerWidth<400){
            cardSection.style.height = `${cardHeight.clientHeight*1.8}px`;
        } 
        else{
            cardSection.style.height = `${cardHeight.clientHeight*1.6}px`;
        }
    } , 1500);

    window.addEventListener('resize', ()=>{
        setTimeout( function(){
            if(window.innerWidth<400){
                cardSection.style.height = `${cardHeight.clientHeight*1.8}px`;
            } 
            else{
                cardSection.style.height = `${cardHeight.clientHeight*1.6}px`;
            }
        } , 1500);
    });
}
window.addEventListener('load', DoFirst);