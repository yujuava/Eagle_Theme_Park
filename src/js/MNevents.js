(function mnchange() {
    //圖片拖拉切換
    const beforeAfterWidth = document.querySelector('.before_after').offsetWidth //1536
    const fixedWidth = document.querySelector('main').offsetWidth
    const buttonWidth = document.querySelector('.center_area').offsetWidth
    let canChange = false;
    //做一個操作開關
    function movechange(e){
    if(canChange){  
        
            const w =  e?.x || e?.touches?.[0]?.clientX //1519
                document.querySelector('main').style.width = w + 'px'
                document.querySelector('.center_area').style.left = w +'px'
        }  
    };   
    //電腦移動事件
    document.querySelector('.before_after').addEventListener('mousedown',function(e) {
        canChange = true;
        movechange(e);
    })
    document.querySelector('.before_after').addEventListener('mousemove', movechange)
    
    //電腦放開事件
    document.addEventListener('mouseup', function() {
        canChange = false;
    })

    document.querySelector('.before_after').addEventListener('mouseleave',function() {
        canChange = false;
    })

    //手機移動事件
    document.querySelector('.before_after').addEventListener('touchstart',function(e) {
        canChange = true;
        movechange(e);
    })

    document.querySelector('.before_after').
    addEventListener('touchmove', movechange)

    //手機放開事件
    document.addEventListener('touchend', function() {
        canChange = false;
    })

    document.querySelector('.before_after').addEventListener('touchleave',function() {
        canChange = false;
    })
    
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
           width:45+"vw",duration:0.7,},{
            width:55+"vw",duration:0.7
           },{
            width:50+"vw",duration:0.7
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
        left:45+"vw",duration:0.7,},{
        left:55+"vw",duration:0.7
        },{
        left:50+"vw",duration:0.7
        },

 ]
});


