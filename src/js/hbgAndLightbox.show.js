new Vue({
    el: '#header',
    data: {     // 變數放這裡!
        show: false,
    },
    methods: {  // 函數大部分放這裡! 
    },
    computed: { 
    },
    mounted(){

    }
});

let memberBtn = document.querySelectorAll(".member-enter");
let login = document.getElementById("login-lightbox");
let closeBtn = document.querySelectorAll(".close");
let registerBtn = document.getElementById("register-btn");
let register = document.getElementById("register-lightbox");
let alreadyhaveBtn = document.getElementById("alreadyhave-btn");
// let fullScreen = document.querySelectorAll(".full-screen");
let fullScreen = document.getElementById("full-screen");


for(let i=0 ;i<memberBtn.length ; i++){
    memberBtn[i].addEventListener("click",function(){
        fullScreen.classList.toggle("hide"); 
        login.classList.remove("hide"); 
    })
    for(let j=0 ; j<closeBtn.length ;j++){
        closeBtn[j].addEventListener("click",function(){
            login.classList.add("hide"); 
            register.classList.add("hide"); 
            fullScreen.classList.add("hide"); 
        })
    }
    registerBtn.addEventListener("click",function(){
        login.classList.add("hide"); 
        register.classList.remove("hide"); 
        // alert("hi");

    })
    alreadyhaveBtn.addEventListener("click",function(){
        register.classList.add("hide"); 
        login.classList.remove("hide"); 

    })

}