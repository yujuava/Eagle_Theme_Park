// by hana
const orderDetail=[{
    id:"#1111",
    date:'2022-05-28',
    sum:'111',  //如何計算
    payState:'已收到款項',
    orderState:'已完成',
    productList:[
    {
        id:1,
        name:'伊果帽子',
        price:'700',
        count:'3',
    },
    {
        id:2,
        name:'伊果雨衣',
        price:'100',
        count:'5',
    },
    {
        id:3,
        name:'伊果短T',
        price:'700',
        count:'1',
    },
    ]
},
{
    id:"#1112",
    date:'2022-05-29',
    sum:'1332',
    payState:'已收到款項',
    orderState:'已完成',
    productList:[
    {
        id:1,
        name:'伊果褲子',
        price:'200',
        count:'2',
    },
    ]
}
]
// 會員訂單組件
Vue.component('member-order',{
    data(){
        return{}
    },
    props:{
        item:Object
    },
    computed: {
        list() {
        return this.item.productList ?? []; //如果item裡面沒有list,就空陣列
        }
    },
    template:`
    <div class="member-frame member-order big-card-bdr">
        <div class="order-table">
            <!-- 標題 -->
            <div class="th">
                <div class="th-col order-num">
                    <div>
                        <span>訂單編號</span>
                        <span>{{item.id}}</span>
                    </div>
                    <div>
                        <span>訂單日期</span>
                        <span>{{item.date}}</span>
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
                    <product-list  v-for="subitem in list" :item="subitem" :key="subitem.id"> </product-list>  
                </div>

                <div class="pc-sum pc-list">
                    <p> $ {{item.sum}}</p>

                </div>
                
                <div class="pc-pay-state pc-list">
                    <p>{{item.payState}}</p>

                </div>

                <div class="pc-order-state pc-list">
                    <p>{{item.orderState}}</p>

                </div>

        
            </div>

            <!-- 總金額 -->

            <div class="tr sum">總金額   $1255</div>
            <!-- 狀態 -->
            <div class="tr state">

                <div  class="tr-col">
                    <p>付款狀態</p>
                    <p>已收到款項</p>
                </div>

                <div  class="tr-col">
                    <p>配送狀態</p>
                    <p>已出貨</p>
                </div>

                <div  class="tr-col">
                    <p>訂單狀態</p>
                    <p></p>
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
        item:Object
    },
    method:{
        //所有總數如何相加
    },
    template:`
        <div class="tr product">
            <p class="td">{{item.name}}</p>
            <span class="td">
                <p>{{item.price}}</p>
                <p>數量: {{item.count}}</p>
            </span>
        </div>
    `,
}),


new Vue({
    el: '#memberCentre',
    data: {     // 變數放這裡!
        type:'A',
        isActive: true,
        textResult:[], //ajax回傳
        //編輯會員
        objResult: {},//原來的物件
        defaultResult: {},//新的更新過的資料
        //驗證新密碼與確認密碼相同
        pswResult1:"",
        pswResult2:"",
        inputPsw1:"",
        inputPsw2:"",

    },
    methods: {  // 函數大部分放這裡!

        changeA(){
        this.type = 'A';
        this.$refs.A.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        },
        changeB(){
        this.type = 'B'
        this.$refs.B.style.background="#FDB52D";
        this.$refs.A.style.background="#A7D4D3";
        this.$refs.C.style.background="#A7D4D3";
        },
        changeC(){
        this.type = 'C'
        this.$refs.C.style.background="#FDB52D";
        this.$refs.B.style.background="#A7D4D3";
        this.$refs.A.style.background="#A7D4D3";
        },
        async sendData() {//非同步//綁最後的按鍵
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
            console.log("sendObj",sendObj)
            let data_info = `json=${JSON.stringify(sendObj)}`; 

          
            // xhr.send(JSON.stringify(sendObj));
            xhr.send(data_info);
        },
       
    },
    computed: { // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)
    },
    created(){
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            // alert();
            this.objResult = JSON.parse(xhr.responseText); //把
            this.defaultResult = JSON.parse(xhr.responseText);
            this.textResult = xhr.responseText;
            console.log("textResult",this.textResult);
            console.log("objResult",this.objResult)
        }
        xhr.open("get","./php/login_getMember.php",true);
        xhr.send(null);
    },
});