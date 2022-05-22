
gsap.registerPlugin(ScrollTrigger);

gsap.to(".ballon",{
    scrollTrigger:{
    trigger:".cloud",
    toggleActions:"restart none reverse pause",
    },
    x:20,
    y:-200,
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
