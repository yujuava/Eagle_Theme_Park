function doFirst(){
    let stampList = document.querySelectorAll('.stickerslider li');

    let changeStamp = document.getElementById('stamp');
    
    for(let i=0; i< stampList.length;i++){
        stampList[i].addEventListener('click', (e)=>{
            changeStamp.src = e.target.src;
        });
    }
}

window.addEventListener('load', doFirst);