
let empVue = new Vue({
    el:'#back',
    data:{
        isOpen: false,
        empTitle: ['管理員編號','管理員帳號','管理員狀態','管理員建立時間'],
        empRows:[],      //資料的陣列
    },
    methods: {   
        show(){
            this.isOpen = true;
        },     
    },
    mounted(){     //第一步仔入完成才開始執行            
        console.log("init");         
        let xhr = new XMLHttpRequest();    //建立ajax物件取XHR
        // xhr.onload = function(){
        //     this.memRows = JSON.parse(xhr.responseText);
        //     alert(this.memRows);
        //     console.log(this.memRows);
        // }
        xhr.onload = () => {   //等待回復訊息
            empVue.empRows = JSON.parse(xhr.responseText); //收到打開資料,儲存到newVue的陣列
            console.log(empVue.empRows);
        }
        xhr.open("get","php/back_emp.php",true);   //決定請求送至PHP
        xhr.send(null);                              //完成送出
    }
})

