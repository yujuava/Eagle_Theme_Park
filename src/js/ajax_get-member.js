// by hana
// const orderDetail=[{
//     id:"#1111",
//     date:'2022-05-28',
//     sum:'111',  //如何計算
//     payState:'已收到款項',
//     orderState:'已完成',
//     productList:[
//     {
//         id:1,
//         name:'伊果帽子',
//         price:'700',
//         count:'3',
//     },
//     {
//         id:2,
//         name:'伊果雨衣',
//         price:'100',
//         count:'5',
//     },
//     {
//         id:3,
//         name:'伊果短T',
//         price:'700',
//         count:'1',
//     },
//     ]
// },
// {
//     id:"#1112",
//     date:'2022-05-29',
//     sum:'1332',
//     payState:'已收到款項',
//     orderState:'已完成',
//     productList:[
//     {
//         id:1,
//         name:'伊果褲子',
//         price:'200',
//         count:'2',
//     },
//     ]
// }
// ]

//===============================================

// 會員訂單組件
Vue.component('member-order',{
    data(){
        return{
            
        }
    },
    props:{ //爸爸傳什麼給小孩，小孩在這裡接
        orderlist:Object,
        // getOrder:Function,
        orderlistSon: {
            type: Object
        },

    },
    computed: {
        // list() {
        // return this.item.productList ?? []; //如果item裡面沒有list,就空陣列
        // }
        list() {
            return this.orderlistSon.data ?? [];
        },

       
    },
    methods: {
        statusText(num) {
            if (num == 0) return '未出貨'
            if (num == 1) return '已出貨'
            if (num == 2) return '已收貨'
            if (num == 3) return '訂單完成'
            return '已取消'
        },
    },
    template:`
    <div class="member-frame member-order big-card-bdr">
        <div class="order-table">
            <!-- 標題 -->
            <div class="th">
                <div class="th-col order-num">
                    <div>
                        <span>訂單編號</span>
                        <span>{{orderlistSon.product_order_no}}</span>
                    </div>
                    <div>
                        <span>訂單日期</span>
                        <span>{{orderlistSon.product_order_time}}</span>
                    </div>
                </div>
                <div class="th-col">
                    <span>總金額</span>
                </div>
                <div class="th-col">
                    <span>付款狀態</span>
                </div>
                <div class="th-col">
                    <span>訂單狀態</span>
                </div>

            </div>

            <!-- 商品欄位 -->
            <div class="all-tr">
                <div class="product-list">
                   <product-list  v-for="orderDetail in list" :item="orderDetail" :apple ="orderDetail"> </product-list> 
                </div>

                <div class="pc-sum pc-list">
                    <p> $ {{orderlistSon.product_order_tp}}</p>

                </div>
                
                <div class="pc-pay-state pc-list">
                    <p>已收到款項</p>

                </div>

                <div class="pc-order-state pc-list">
                    <p>{{statusText(orderlistSon.order_shipping)}}</p>

                </div>

        
            </div>

            <!-- 總金額 -->

            <div class="tr sum">總金額$ {{orderlistSon.product_order_tp}}</div>
            <!-- 狀態 -->
            <div class="tr state">

                <div  class="tr-col">
                    <p>付款狀態</p>
                    <p>已收到款項</p>
                </div>

                <div  class="tr-col">
                    <p>配送狀態</p>
                    <p>未出貨</p>
                </div>

                <div  class="tr-col">
                    <p>訂單狀態</p>
                    <p>{{statusText(orderlistSon.order_shipping)}}</p>
                </div>

            </div>

        </div>
        
    </div>
    `
}),

//會員票券組件
Vue.component('member-ticket',{
    data(){
        return{
            
        }
    },
    props:{ //爸爸傳什麼給小孩，小孩在這裡接
        ticketlist:Object,
        ticketlistSon: {
            type: Object
        },

    },
    computed: {
        tList() {
            return this.ticketlistSon.data ?? [];
        },
    },
    methods: {
    },
    template:`
    <div class="member-frame member-order big-card-bdr">
        <div class="order-table">
            <!-- 標題 -->
            <div class="th">
                <div class="th-col order-num">
                    <div>
                        <span>訂單編號</span>
                        <span>{{ticketlistSon.ticket_order_no}}</span>
                    </div>
                    <div>
                        <span>訂單日期</span>
                        <span>{{ticketlistSon.ticket_order_time}}</span>
                    </div>
                </div>
                <div class="th-col">
                    <span>總金額</span>
                </div>
                <div class="th-col">
                    <span>付款狀態</span>
                </div>
                <div class="th-col">
                    <span>訂單狀態</span>
                </div>

            </div>

            <!-- 商品欄位 -->
            <div class="all-tr">
                <div class="product-list">
                    <ticket-list  v-for="ticketDetail in tList" :item="ticketDetail" :banana ="ticketDetail"> </ticket-list>
                </div>

                <div class="pc-sum pc-list">
                    <p> $ {{ticketlistSon.ticket_order_tp}}</p>

                </div>
                
                <div class="pc-pay-state pc-list">
                    <p>已收到款項</p>

                </div>

                <div class="pc-order-state pc-list">
                    <p>未取票</p>

                </div>

        
            </div>

            <!-- 總金額 -->

            <div class="tr sum">總金額$ {{ticketlistSon.ticket_order_tp}}</div>
            <!-- 狀態 -->
            <div class="tr state">

                <div  class="tr-col">
                    <p>付款狀態</p>
                    <p>已收到款項</p>
                </div>

                <div  class="tr-col">
                    <p>配送狀態</p>
                    <p>未出票</p>
                </div>

                <div  class="tr-col">
                    <p>訂單狀態</p>
                    <p>未完成</p>
                </div>

            </div>

        </div>
        
    </div>
    `
}),

// 商品明細組件
Vue.component('product-list',{
    data(){
        return{}
    },
    props:{
        orderDetail:Object,
        orderlist:Object,
        apple: {
            type: Object,
        },
    },
    method:{
        //所有總數如何相加
    },
    template:`
        <div class="tr product">
            <p class="td">{{apple.product_name}}</p>   
            <span class="td">
                <p>{{apple.product_order_price}}</p>
                <p>數量: {{apple.product_total}}</p>
            </span>
        </div>
    `,
}),

// 票券明細組件
Vue.component('ticket-list',{
    data(){
        return{}
    },
    props:{
        ticketDetail:Object,
        ticketlist:Object,
        banana: {
            type: Object,
        },
    },
    method:{
        //所有總數如何相加
    },
    template:`
        <div class="tr product">
            <p class="td"> {{banana.ticket_name}} </p>   
            <span class="td">
                <p> {{banana.ticket_price}} </p>
                <p>數量: {{banana.ticket_total}} </p>
            </span>
        </div>
    `,
}),


new Vue({
    el: '#memberCentre',
    data: { 
        //按鈕
        type:'A',
        isActive: true,
        //會員資料
        textResult:[], //ajax回傳
        //編輯會員
        objResult: {},//原來的物件
        defaultResult: {},//新的更新過的資料

        //驗證新密碼與確認密碼相同
        inputOriPsw:'', //輸入的原密碼
        OriPswHint:'', //提示字元
        inputnewPsw1:'',    //輸入新密碼1
        NewPswHint1:'', //提示字元
        inputnewPsw2:'',    //確認輸入的新密碼
        NewPswHint2:'', //提示字元

        //商品訂單資料
        // productOrderNo:[],
        objOrderResult:{},
        //票券訂單資料
        objTicketResult:{},
        // Total,
        //優惠券資料
        objCouponResult:[],
        useState:['未使用','已使用'],
        couponShow:"未使用",
        currentState:"未使用",
    },
    methods: {  // 函數大部分放這裡!
        // 按鈕換頁1
        changeA(){
        this.type = 'A';
        this.$refs.A.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        this.$refs.D.style.background="#A7D4D3";
        },
        // 按鈕換頁2
        changeB(){
        this.type = 'B'
        this.$refs.B.style.background="#FDB52D";
        this.$refs.A.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        this.$refs.D.style.background="#A7D4D3";
        },
        // 按鈕換頁3
        changeC(){
        this.type = 'C'
        this.$refs.C.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.A.style.background="#A7D4D3";
        this.$refs.D.style.background="#A7D4D3";
        },
        // 按鈕換頁4
        changeD(){
            this.type = 'D'
            this.$refs.D.style.background="#FDB52D";
            this.$refs.B.style.background="#A7D4D3";
            this.$refs.A.style.background="#A7D4D3";
            this.$refs.C.style.background="#A7D4D3";

        },
        isclose(){
            couponShow = false;
        },
        validateOriPsw(){   //輸入舊密碼
            if(this.inputOriPsw == this.objResult.mem_psw){
                this.OriPswHint = "密碼正確";
                console.log('正確');
            }else{
                this.OriPswHint = "密碼錯誤";
                // console.log('xx');
            }
        },
        validateNewPsw1(){
            console.log(this.inputnewPsw1.length);
            if (this.inputnewPsw1.length<8){
                this.NewPswHint1 = "密碼長度不足";
                // console.log("密碼長度不足");
            }else{
                // console.log("跳出來");
                let passwordCheck = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                console.log(this.inputnewPsw1);
                if(passwordCheck.test(this.inputnewPsw1)!=true){
                    this.NewPswHint1 = "密碼請輸入大小寫英文及數字8~12碼";
                    // console.log("not pass");
                }else{
                    console.log("pass");
                    this.NewPswHint1 = "此密碼可用";
                }
            }
        },
        validateNewPsw2(){
            if (this.inputnewPsw2 == this.inputnewPsw1){
                this.NewPswHint2 = "新密碼確認正確";
            }else{
                this.NewPswHint2 = "新密碼確認不正確";
            }
        },


        //非同步//綁會員修改完成的按鍵
        async sendData() {
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/member-info.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

            let sendObj = {};//取最後要再資料庫呈現的東西
            console.log("sendObj",sendObj);
            
            Object.keys(this.objResult).forEach(key => {
                console.log("objResult[key]",this.objResult[key]);
                if (this.objResult[key]) sendObj[key] = this.objResult[key];//如果這個key是原來的，給的資料就是原來的
                else sendObj[key] = this.defaultResult[key];//不然給的就是新的結果
            });
            // sendObj.oldPSW = "this.inputOriPsw"
            sendObj.mem_NewPsw = this.inputnewPsw1;
            console.log("會員:sendObj",sendObj)
            let data_info = `json=${JSON.stringify(sendObj)}`; 

          
            // xhr.send(JSON.stringify(sendObj));
            xhr.send(data_info);
            alert("修改成功");
            location.reload();
        },


    },

    computed: {
        getOrder() {    //幾筆商品訂單
              var map = {},
                  newObj = [];
              for(var i = 0; i < this.objOrderResult.length; i++){
                  var eachObj = this.objOrderResult[i];
                  // console.log("每個物件:",eachObj);
                if(!map[eachObj.product_order_no]){
                      newObj.push({
                        product_order_no: eachObj.product_order_no,
                        product_order_tp: eachObj.product_order_tp,
                        order_shipping: eachObj.order_shipping,
                        product_order_time: eachObj.product_order_time,                     
                        data: [eachObj],
                      });
                      map[eachObj.product_order_no] = eachObj;
                  }else{
                      for(var j = 0; j < newObj.length; j++){
                          var dj = newObj[j];
                          if(dj.product_order_no == eachObj.product_order_no){
                              dj.data.push(eachObj);
                            //   console.log("dj",dj);
                              break;
                          }
                      }
                  }
              }
            console.log("newObj:",newObj);
            return newObj;
        },

        getTicket() {    //幾筆票券訂單
            var map = {},
            newTObj = [];
            for(var i = 0; i < this.objTicketResult.length; i++){
                var eachTObj = this.objTicketResult[i];
                // console.log("每個物件:",eachObj);
              if(!map[eachTObj.ticket_order_no]){
                newTObj.push({
                    ticket_order_no: eachTObj.ticket_order_no,
                    ticket_name: eachTObj.ticket_name,
                    ticket_order_time: eachTObj.ticket_order_time,
                    ticket_order_tp:eachTObj.ticket_order_tp,
                    ticket_price: eachTObj.ticket_price,
                    ticket_total: eachTObj.ticket_total,        
                    data: [eachTObj],
                    });
                    map[eachTObj.ticket_order_no] = eachTObj;
                }else{newTObj
                    for(var j = 0; j < newTObj.length; j++){
                        var dj = newTObj[j];
                        if(dj.ticket_order_no == eachTObj.ticket_order_no){
                            dj.data.push(eachTObj);
                            break;
                        }
                    }
                }
            }
            console.log("newTObj:",newTObj);
            return newTObj;
        },
        eachProductTotal(){   //商品總金額
            // console.log('12312312')
            let totalS = 0;
            let sumS = 0;
            this.getOrder.map((item) => {
                totalS = item.product_order_tp;
                // console.log("total:",item.product_order_tp)
                return totalS;
            }).forEach( e => {
                sumS += e;
            });
            return sumS;
            // return sumS.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
        eachtTicketTotal(){   //票券總金額
            let totalT = 0;
            let sumT = 0;
            this.getTicket.map((item) => {
                totalT = item.ticket_order_tp;
                // console.log("total:",item.product_order_tp)
                return totalT;
            }).forEach( e => {
                sumT += e;
            });
            return sumT;
            // return sumT.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
        eachTotal(){    //商品+票券總金額
            // return 123;
            let total = this.eachProductTotal + this.eachtTicketTotal;

            let result = total.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');

            return result;

            // return (this.eachProductTotal + this.eachtTicketTotal).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            // return (this.eachProductTotal + this.eachtTicketTotal);
        },

    },
    created(){
        //============會員資料============
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            // alert();
            this.objResult = JSON.parse(xhr.responseText); //把
            this.defaultResult = JSON.parse(xhr.responseText);
            this.textResult = xhr.responseText;
            // console.log("會員資料:textResult",this.textResult);
            console.log("會員資料:objResult",this.objResult)
        },
        xhr.open("get","./php/login_getMember.php",true);
        xhr.send(null);

        //============商品訂單============
        let xhrOrder = new XMLHttpRequest();
        xhrOrder.onload = () => {
            this.objOrderResult = JSON.parse(xhrOrder.responseText);
            console.log("商品訂單:objOrderResult",this.objOrderResult);
            // let set = new Set();
        },
        xhrOrder.open("get","./php/member-order.php",true);
        xhrOrder.send(null);

        //============票券訂單============

        let xhrTicket = new XMLHttpRequest();
        xhrTicket.onload = () => {
            this.objTicketResult = JSON.parse(xhrTicket.responseText);
            console.log("票券訂單:objTicketResult",this.objTicketResult);

        },
        xhrTicket.open("get","./php/member-ticket.php",true);
        xhrTicket.send(null);


        //============會員優惠券============
        let xhrCoupon = new XMLHttpRequest();
        xhrCoupon.onload = () => {
            this.objCouponResult = JSON.parse(xhrCoupon.responseText);
            console.log("優惠券:objCouponResult",this.objCouponResult);

        },
        xhrCoupon.open("get","./php/member-coupon.php",true);
        xhrCoupon.send(null);

    },
});