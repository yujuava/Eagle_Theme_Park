(function mnchange() {
    //圖片拖拉切換
    const beforeAfterWidth = document.querySelector('.before_after').offsetWidth //1536
    const fixedWidth = document.querySelector('main').offsetWidth
    const buttonWidth = document.querySelector('.center_area').offsetWidth
    let canChange = false;
    // function documentMove(e) {
    //     // if (!canChange) return;
    //     const fixedWidth = buttonWidth //16
    //     const w =  e.x || e?.touches?.[0]?.clientX //1519
    //     if (w > fixedWidth && w < beforeAfterWidth) {
    //         document.querySelector('main').style.width = w + 'px'
    //         document.querySelector('.center_area').style.left = w +'px'
    //     }
    // };
    // //button移動事件
    // document.querySelector('.center_area').addEventListener('mousedown', () => {
    //     document.addEventListener('mousemove', documentMove)
    // });

    // //點擊切換事件
    // document.addEventListener('mousedown',documentMove)

    // //滑鼠放開事件
    // document.addEventListener('mouseup', () => {
    //     document.removeEventListener('mousemove', documentMove)
    // });

    // //手機button移動事件
    // document.querySelector('.center_area').addEventListener('touchstart', () => {
    //     document.addEventListener('touchmove', documentMove)
    // });

    // //手機點擊切換事件
    // document.addEventListener('touchend',documentMove)

    // //手機放開事件
    // document.addEventListener('touchend', () => {
    //     document.removeEventListener('touchmove', documentMove)
    // });

// console.log(canChange)
   
    function a(e){
    if(canChange){  
        // console.log(e)
            // alert('123321')/
            // const fixedWidth = buttonWidth //16
            const w =  e?.x || e?.touches?.[0]?.clientX //1519
            // if (w > fixedWidth && w < beforeAfterWidth) {
                document.querySelector('main').style.width = w + 'px'
                document.querySelector('.center_area').style.left = w +'px'
            // }
        }  
    };   
    //button移動事件
    document.querySelector('.before_after').addEventListener('mousedown',function(e) {
        canChange = true;
        // console.log(e)
        a(e);
    })
    // document.querySelector('.center_area').addEventListener('mousedown',function(e) {
    //     canChange = true;
    //     console.log(e)
    //     a(e);
    // })
    document.querySelector('.before_after').addEventListener('mousemove', a)
    
    // document.querySelector('.center_area').addEventListener('mousemove', {
    //     let canChange=true})

    document.addEventListener('mouseup', function() {
        canChange = false;
    })

    document.querySelector('.before_after').addEventListener('mouseleave',function() {
        canChange = false;
    })
       
       
        
    
    
    //點擊切換事件
    // document.addEventListener('mousedown',documentMove)

    //滑鼠放開事件
    // document.addEventListener('mouseup', () => {
    //     document.removeEventListener('mousemove', documentMove)
    // });

    // //手機button移動事件
    // document.querySelector('.center_area').addEventListener('touchstart', () => {
    //     document.addEventListener('touchmove', documentMove)
    // });

    // //手機點擊切換事件
    // document.addEventListener('touchend',documentMove)

    // //手機放開事件
    // document.addEventListener('touchend', () => {
    //     document.removeEventListener('touchmove', documentMove)
    // });












































    //畫面resize
    window.onresize=mnchange;  

})()

//滾輪事件動畫
gsap.registerPlugin(ScrollTrigger);

//圖片移動
gsap.from(".after",{
    scrollTrigger:{
    trigger:".after",
    toggleActions:"play complete reverse reset",
    },
    keyframes:[{
           width:45+"vw",duration:1,},{
            width:55+"vw",duration:1
           },{
            width:50+"vw",duration:1
           },
 
    ]
});

//button移動
gsap.from(".center_area",{
    scrollTrigger:{
    trigger:".center_area",
    toggleActions:"play complete reverse reset",
    },
    keyframes:[{
        left:45+"vw",duration:1,},{
        left:55+"vw",duration:1
        },{
        left:50+"vw",duration:1
        },

 ]
});


