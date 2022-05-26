(function mnchange() {
    //圖片拖拉切換
    const aaaWidth = document.querySelector('.aaa').offsetWidth //1536
    const fixedWidth = document.querySelector('main').offsetWidth
    const buttonWidth = document.querySelector('button').offsetWidth
    function documentMove(e) {
        const fixedWidth = buttonWidth //16
        const w =  e.x //1519
        if (w > fixedWidth && w < aaaWidth) {
            document.querySelector('main').style.width = w + 'px'
            document.querySelector('button').style.left = w +'px'
        }
    };
    document.querySelector('button').addEventListener('mousedown', () => {
        document.addEventListener('mousemove', documentMove)
    });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', documentMove)
    });
    // 圖片拉霸動畫
    // let timerId;
    // window.onscroll=function move(){
    // window.clearTimeout(timerId)    
    //     let num=5; 
    //     if (window.scrollY >= "1430"){
    //         function $id(id){
    //                 return document.getElementById(id)
    //             }
    //             let timerId;
    //             countDown();
    //                 timerId =window.setInterval(countDown,500)//計時器單位是毫秒
    //             function countDown(){
    //                 num--;
    //                 if(num==4){
    //                     document.querySelector('main').style.width = 45 + '%'
    //                     document.querySelector('button').style.left = 45 +'%'
    //                     document.querySelector('main').classList.add('ease')
    //                     document.querySelector('button').classList.add('ease')

    //                 }
    //                 if(num==3){
    //                     document.querySelector('main').style.width = 50 + '%'
    //                     document.querySelector('button').style.left = 50 +'%'
    //                 }
    //                 if(num==2){
    //                     document.querySelector('main').style.width = 55 + '%'
    //                     document.querySelector('button').style.left = 55 +'%'
    //                 }
    //                 if(num==1){
    //                     document.querySelector('main').style.width = 50 + '%'
    //                     document.querySelector('button').style.left = 50 +'%'
    //                 }
    //                 if(num==0){
    //                     document.querySelector('main').classList.remove('ease')
    //                     document.querySelector('button').classList.remove('ease')

    //                 }
                    
    //             }

    //         }
            
    // }

    // window.onresize=mnchange;  
})()

gsap.registerPlugin(ScrollTrigger);


gsap.to(".after",{
    scrollTrigger:{
    trigger:".after",
    toggleActions:"restart none reverse pause",
    },
    width:700,
    // y:-200,
    duration:2,
});

// gsap.to(".after",{
//     scrollTrigger:{
//     trigger:".after",
//     toggleActions:"restart none reverse pause",
//     },
//     width:900,
//     // y:-200,
//     duration:2,
// });

gsap.to(".center_area",{
    scrollTrigger:{
    trigger:".center_area",
    toggleActions:"restart none reverse pause",
    },
    left:700,
    // y:-200,
    duration:2,
});


