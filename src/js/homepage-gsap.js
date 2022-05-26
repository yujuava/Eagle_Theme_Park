
gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
    // large 電腦 996以上
    "(min-width: 996px)": function() {
        gsap.to(".ballon",{
            scrollTrigger:{
            trigger:".ballon",
            toggleActions:"restart none reverse pause",
            },
            x:20,
            y:-280,
            duration:5,
        });

        gsap.to(".cloud",{
            scrollTrigger:{
            trigger:".cloud",
            start:"100px 50%",
            toggleActions:"restart none reverse pause",
            },
            x:120,
            duration:2
        });

        gsap.to(".game-enter",{
            scrollTrigger:{
            trigger:".game-enter",
            toggleActions:"restart none reverse pause",
            },
            x:180,
            duration:2
        });

        gsap.to(".cloud-1",{
            scrollTrigger:{
            trigger:".cloud-1",
            toggleActions:"restart none reverse pause",
            },
            x:-300,
            duration:2
        });

        gsap.to(".cloud-2",{
            scrollTrigger:{
            trigger:".cloud-2",
            toggleActions:"restart none reverse pause",
            },
            x:180,
            duration:2
        });

        gsap.to(".cloud-3",{
            scrollTrigger:{
            trigger:".cloud-3",
            toggleActions:"restart none reverse pause",
            },
            x:-120,
            duration:2
        });


    },
  
    // medium 平板
    "(min-width: 768px) and (max-width: 996px)": function() {
       
        
        

    },
  
    // small 手機 769以下
    "(max-width: 769px)": function() {

        gsap.to(".ballon",{
            scrollTrigger:{
            trigger:".ballon",
            toggleActions:"restart none reverse pause",
            },
            y:-280,
            duration:2,
            yoyo:true,
            repeat:-1,
        });
        gsap.to(".ballon",{
            scrollTrigger:{
            trigger:".ballon",
            toggleActions:"restart none reverse pause",
            },
            x:70,
            duration:2,
            yoyo:true,
            repeat:-1,
        });
    

    },
      
}); 


