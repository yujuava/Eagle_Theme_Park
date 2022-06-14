
let helperVue = new Vue({
    el:'#back',
    data:{
        isOpen: false,
        helperTitle: ['關鍵字編號','關鍵字','關鍵字回應'],
        helperRows:[],      //資料的陣列
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
            helperVue.helperRows = JSON.parse(xhr.responseText); //收到打開資料,儲存到newVue的陣列
            console.log(newsVue.newsRows);
        }
        xhr.open("get","php/back_helper.php",true);   //決定請求送至PHP
        xhr.send(null);                              //完成送出
    }
})