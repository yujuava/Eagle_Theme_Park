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

            <div class="tr sum">總金額{{orderlistSon.product_order_tp}}</div>
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
        pswResult1:"",
        pswResult2:"",
        inputPsw1:"",
        inputPsw2:"",

        //訂單資料
        productOrderNo:[],
        objOrderResult:{},
        // Total,
        
    },
    methods: {  // 函數大部分放這裡!
        // 按鈕換頁1
        changeA(){
        this.type = 'A';
        this.$refs.A.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        },
        // 按鈕換頁2
        changeB(){
        this.type = 'B'
        this.$refs.B.style.background="#FDB52D";
        this.$refs.A.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        },
        // 按鈕換頁3
        changeC(){
        this.type = 'C'
        this.$refs.C.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.A.style.background="#A7D4D3";
        },
        //非同步//綁會員修改完成的按鍵
        async sendData() {
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/member-info.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

            let sendObj = {};//取最後要再資料庫呈現的東西
            
            Object.keys(this.objResult).forEach(key => {
                console.log("objResult[key]",this.objResult[key]);
                if (this.objResult[key]) sendObj[key] = this.objResult[key];//如果這個key是原來的，給的資料就是原來的
                else sendObj[key] = this.defaultResult[key];//不然給的就是新的結果
            })
            console.log("會員:sendObj",sendObj)
            let data_info = `json=${JSON.stringify(sendObj)}`; 

          
            // xhr.send(JSON.stringify(sendObj));
            xhr.send(data_info);
        },
    },

    computed: {
        getOrder() {    //幾筆訂單
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

        eachTotal(){   //總金額
            // console.log('12312312')
            let total = 0;
            let sum = 0;
            this.getOrder.map((item) => {
                total = item.product_order_tp;
                // console.log("total:",item.product_order_tp)
                return total;
            }).forEach( e => {
                sum += e;
            });
            return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            
        },
        // moneyTotal(){
        //     let sum = 0;
        //     // this.eachTotal.forEach( e => {
        //     //     sum += e;
        //     // });
        //     return sum
        // },
        // money() {
        //     let aa = 10
        //     return this.eachTotal;
        // },

    },
    created(){
        //會員資料
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            // alert();
            this.objResult = JSON.parse(xhr.responseText); //把
            this.defaultResult = JSON.parse(xhr.responseText);
            this.textResult = xhr.responseText;
            // console.log("會員資料:textResult",this.textResult);
            console.log("會員資料:objResult",this.objResult)
        }
        xhr.open("get","./php/login_getMember.php",true);
        xhr.send(null);

        //訂單資料
        let xhrOrder = new XMLHttpRequest();
        xhrOrder.onload = () => {
            // alert();
            this.objOrderResult = JSON.parse(xhrOrder.responseText);
            // this.textResult = xhrOrder.responseText;
            // console.log("訂單:textResult",this.textResult);
            console.log("訂單:objOrderResult",this.objOrderResult);
            
            let set = new Set();

        }
        xhrOrder.open("get","./php/member-order.php",true);
        xhrOrder.send(null);

    },
});