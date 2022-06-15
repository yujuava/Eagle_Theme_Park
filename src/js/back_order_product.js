Vue.component('table-component',{
    template:`
    <table class="innerData" >
        <tr>
            <th>商品名稱</th>
            <td>{{item.product_name}}</td>
        </tr>
        <tr>
            <th>購買單價</th>
            <td>{{item.product_order_price}}</td>
        </tr>
        <tr>
            <th>購買數量</th>
            <td>{{item.product_total}}個</td>
        </tr>
    </table>
    `,
    props:{
        item:Object,
    }
})

let orderVue = new Vue({
    el:'#back',
    data:{
        isOpen: false,
        helperTitle: ['關鍵字編號','關鍵字','關鍵字回應'],
        orderRows:[],      //資料的陣列
        results:[],
    },
    methods: {   
        show(){
            this.isOpen = true;
        },
        setFocusId(product_order_no) {
            console.log(product_order_no)
            this.focusKey = product_order_no;
            this.$nextTick(() => {
                console.log(this.showPopupItem)
            })
        },
    },
    computed: {
        showPopupItem() {
            return this.orderRows.find(v => v.product_order_no == this.focusKey) ?? this.orderRows[0];
        },

    },
    mounted(){     
        
        //第一步仔入完成才開始執行            
        console.log("init");         
        let xhr = new XMLHttpRequest();    
        //建立ajax物件取XHR    
        xhr.onload = () => {   //等待回復訊息
            orderVue.orderRows = JSON.parse(xhr.responseText); 
            //收到打開資料,儲存到newVue的陣列
            // console.log(orderVue.orderRows);

            // var result = Array.from(new Set(orderVue.orderRows.product_order_no));
            // console.log(result);
            let set = new Set();
            orderVue.results = orderVue.orderRows.filter(item => !set.has(item.product_order_no) ? set.add(item.product_order_no) : false);
            console.log(orderVue.results); 
            // let results=[result];
        }

        
        xhr.open("get","php/get_back_pro_order.php",true);   
        //決定請求送至PHP
        xhr.send(null);                              
        //完成送出
        
      
    }
})

