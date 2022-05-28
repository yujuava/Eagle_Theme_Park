let fly = gsap.fromTo("#airplane",{
    x:0,
},{
    x:-1850,
    duration:11,
    yoyo:true,
    ease: "power2.inOut", 
});
gsap.fromTo("#airplane",{
    y:50,
},
{
    y:80,
    duration:1,
    repeat:-1,
    yoyo:true,
    ease: "power2.inOut",
});