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

for(let i=0 ;i<memberBtn.length ; i++){
    memberBtn[i].addEventListener("click",function(){
        alert("按了")
        login.classList.toggle("hide"); 
        console.log(login);
    })

}