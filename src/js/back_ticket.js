
let ticketVue = new Vue({
    el:'#back',
    data:{
        isOpen: false,
        ticketTitle: ['票券種類名稱','票券價格'],
        ticketRows:[],      //資料的陣列
        popup: {},
        currentNo: 0,
        default: {
            news_price: '',
        },

    },
    computed: {
        currentItem() {
            return this.ticketRows.find(v => v.ticket_no == this.currentNo) ?? this.ticketRows[0]
        },
    },
    watch: {
        currentItem(nVal) {
            this.popup = nVal;
        },
    },
    methods: {   
        async changeHandler() {  //修改商品  // 非同步  // 綁最後的按鍵
            console.log('changeHandler')
            let sendObj = JSON.stringify(this.popup);  // 取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/update_back_ticket.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(`json=${sendObj}`);

            window.confirm("是否確認修改?");
            this.isOpen = false;
        },
        show(no){
            this.currentNo = no;
            this.isOpen = true;
        },    
    },
    mounted(){     //第一步仔入完成才開始執行            
        console.log("init");         
        let xhr = new XMLHttpRequest();    //建立ajax物件取
        xhr.onload = () => {   //等待回復訊息
            ticketVue.ticketRows = JSON.parse(xhr.responseText); //收到打開資料,儲存到newVue的陣列
            // console.log(newsVue.newsRows);
        }
        xhr.open("get","php/back_ticket.php",true);   //決定請求送至PHP
        xhr.send(null);                              //完成送出
    }
})