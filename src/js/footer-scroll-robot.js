// js 電腦版導覽列滾輪 機器人&top

window.addEventListener("load",function(){  
    document.addEventListener("scroll",function(){
        let ScrollNum = document.documentElement.scrollTop;
        let screenHeight = screen.height;
        // console.log(screenHeight)
        let robot = document.getElementById("robot");
        let top = document.getElementById("top");
        // console.log(ScrollNum)
            if(ScrollNum>screenHeight){
                robot.classList.remove("hide");
                robot.classList.add("flex");
                top.classList.remove("hide");
                top.classList.add("flex");
            }else{
                robot.classList.remove("flex");
                robot.classList.add("hide");
                top.classList.remove("flex");
                top.classList.add("hide");
            }

    }, false);

});

// gsap footer氣球
gsap.to(".ft-ballon1",{
    x:100,
    y:-20,
    duration:2,
    repeat:-1,
    ease: "power2.inOut",
});

gsap.to(".ft-ballon2",{
    x:160,
    y:-40,
    duration:2,
    repeat:-1,
    ease: "power2.inOut",
});

gsap.to(".ft-ballon3",{
    x:140,
    y:-30,
    duration:2,
    repeat:-1,
    ease: "power2.inOut",
});

