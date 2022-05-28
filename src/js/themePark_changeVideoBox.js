function DoFirst(){
    // get small video content by id
    let videoBox1 = document.getElementById('video1');
    let videoBox2 = document.getElementById('video2');
    let videoBox3 = document.getElementById('video3');
    let videoBox4 = document.getElementById('video4');
    let videoArray = [videoBox1, videoBox2, videoBox3, videoBox4];

    // get big video box inner content
    let mainParadesType = document.getElementById('paradesType');
    let mainParadesDate = document.getElementById('paradesDate');
    let mainVideoBox = document.getElementById('videoBox');
    let mainParadesTitle = document.getElementById('paradesTitle');

    // every small video box add click event and replace content to big one
    for(let i=0; i<4; i++){
        videoArray[i].addEventListener('click', ()=>{
            
            // replace parades type and date
            let paradesType = videoArray[i].querySelector('.paradesTypeDate p:nth-of-type(1)').innerHTML;
            let paradesDate = videoArray[i].querySelector('.paradesTypeDate p:nth-of-type(2)').innerHTML;

            mainParadesType.innerHTML = paradesType;
            mainParadesDate.innerHTML = paradesDate;

            // replace video
            let paradesVideo = videoArray[i].querySelector('video').src;
            mainVideoBox.src = paradesVideo;


            // replace parades title
            let paradestitle = videoArray[i].querySelector('.paradesTitle').innerHTML;
            mainParadesTitle.innerHTML = paradestitle;
            
        });
    }

}

window.addEventListener('load', DoFirst);