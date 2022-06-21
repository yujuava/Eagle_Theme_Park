let ticketVue = new Vue({
    el: '#ticket',
    data:{
        tickets:[],
    },
    mounted() {     //第一步仔入完成才開始執行            
        console.log("init");
        let xhr = new XMLHttpRequest();    //建立ajax物件取
        xhr.onload = () => {   //等待回復訊息
            ticketVue.tickets = JSON.parse(xhr.responseText); //收到打開資料,儲存到newVue的陣列
            console.log(ticketVue.tickets);
        }
        xhr.open("get", "./php/back_ticket.php", true);   //決定請求送至PHP
        xhr.send(null);                              //完成送出
    }
})
