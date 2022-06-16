Vue.component('table-component',{
    template:`
    <table class="innerData" >
        <tr>
            <th>商品名稱</th>
            <th>購買單價</th>
            <th>購買數量</th>
            
        </tr>
        <tr v-for="(item,index) in list" :key="index">
            <td>{{item.product_name}}</td>
            <td>{{item.product_order_price}}</td>
            <td>{{item.product_total}}個</td>
        </tr>
    </table>
    `,
    props:{
        detail:Object,
        // orderDetail:Object,
        // orderlist:Object,
        // apple: {
        //     type: Object
        // },
    },
    computed: {
        list() {
            return this.detail?.data ?? [];
        },
    },
})

let orderVue = new Vue({
    el:'#back',
    data:{
        isOpen: false,
        orderRows:[],      //資料的陣列
        results:[],
        newObj:[],
        orderlist:Object,
        // getOrder:Function,
        focusKey: '',
    },
    methods: {   
        show(){
           
        },
        setFocusId(product_order_no) {
            console.log(product_order_no)
            
            this.$nextTick(() => {
                console.log(this.showPopupItem)
            })
        },
        idpopup(product_order_no){
            this.isOpen = true;
            this.focusKey = product_order_no;
            // let idRowsList = this.orderRows.map(item => Object.values(item)[0]); 
            // // console.log(no)
        }
    },
    computed: {
        showPopupItem() {
            return this.newObj.find(v => v.product_order_no == this.focusKey) ?? this.newObj[0];
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
            // console.log(orderVue.results); 
            // let results=[result];
            var map = {};
            // orderVue.newObj = [];
            for(var i = 0; i < orderVue.orderRows.length; i++){
                var eachObj = orderVue.orderRows[i];
            if(!map[eachObj.product_order_no]){
                    orderVue.newObj.push({
                        product_order_no: eachObj.product_order_no,
                        product_order_tp: eachObj.product_order_tp,
                        product_order_time: eachObj.product_order_time,
                        mem_name: eachObj.mem_name,
                        product_order_place: eachObj.product_order_place,
                        data: [eachObj]
                    });
                    map[eachObj.product_order_no] = eachObj;
                }else{
                    for(var j = 0; j < orderVue.newObj.length; j++){
                        var dj = orderVue.newObj[j];
                        if(dj.product_order_no == eachObj.product_order_no){
                            dj.data.push(eachObj);
                        //   console.log("dj",dj);
                            break;
                        }
                    
                    }
                }
            }
            console.log("newObj:",orderVue.newObj);
        }
        
        xhr.open("get","php/get_back_pro_order.php",true);   
        //決定請求送至PHP
        xhr.send(null);                              
        //完成送出
        
      
    }
})


  

  