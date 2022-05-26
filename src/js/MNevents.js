(function mnchange() {
    //圖片拖拉切換
    const aaaWidth = document.querySelector('.aaa').offsetWidth //1536
    const fixedWidth = document.querySelector('main').offsetWidth
    const buttonWidth = document.querySelector('.center_area').offsetWidth

    function documentMove(e) {
        const fixedWidth = buttonWidth //16
        const w =  e.x //1519
        if (w > fixedWidth && w < aaaWidth) {
            document.querySelector('main').style.width = w + 'px'
            document.querySelector('.center_area').style.left = w +'px'
        }
    };
    document.querySelector('.center_area').addEventListener('mousedown', () => {
        // alert('我在這')

        document.addEventListener('mousemove', documentMove)
    });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', documentMove)
    });
    window.onresize=mnchange;  
})()

gsap.registerPlugin(ScrollTrigger);


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

gsap.from(".center_area",{
    scrollTrigger:{
    trigger:".center_area",
    toggleActions:"restart none reverse pause",
    },
    keyframes:[{
        left:45+"vw",duration:1,},{
        left:55+"vw",duration:1
        },{
        left:50+"vw",duration:1
        },

 ]
});


