Vue.component('table-component',{
    template:`
    <table class="innerData" id="innerOrder">
        <tr>
            <th>票券名稱</th>
            <th>購買單價</th>
            <th>購買張數</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
            <td>{{item.ticket_name}}</td>
            <td>{{item.ticket_price}}</td>
            <td>{{item.ticket_total}}張</td>
        </tr>
    </table>
    `,
    props:{
        detail:Object,
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
        focusKey: '',
    },
    methods: {   
        idpopup(ticket_order_no){
            this.isOpen = true;
            this.focusKey = ticket_order_no;
        }
    },
    computed: {
        showPopupItem() {
            return this.newObj.find(v => v.ticket_order_no == this.focusKey) ?? this.newObj[0];
        },
        // showPopupItem() {
        //     return this.newObj.ticket_order_no
        // },
    },
    mounted(){     
        
        //第一步仔入完成才開始執行            
        console.log("init");         
        let xhr = new XMLHttpRequest();    
        //建立ajax物件取XHR    
        xhr.onload = () => {   //等待回復訊息
            orderVue.orderRows = JSON.parse(xhr.responseText); 
            //收到打開資料,儲存到newVue的陣列
            let set = new Set();
            orderVue.results = orderVue.orderRows.filter(item => !set.has(item.ticket_order_no) ? set.add(item.ticket_order_no) : false);
            var map = {};
            for(var i = 0; i < orderVue.orderRows.length; i++){
                var eachObj = orderVue.orderRows[i];
            if(!map[eachObj.ticket_order_no]){
                    orderVue.newObj.push({
                        ticket_order_no: eachObj.ticket_order_no,
                        ticket_order_tp: eachObj.ticket_order_tp.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","),
                        ticket_order_time: eachObj.ticket_order_time,
                        mem_name: eachObj.mem_name,
                        mem_no: eachObj.mem_no,
                        data: [eachObj]
                    });
                    map[eachObj.ticket_order_no] = eachObj;
                }else{
                    for(var j = 0; j < orderVue.newObj.length; j++){
                        var dj = orderVue.newObj[j];
                        if(dj.ticket_order_no == eachObj.ticket_order_no){
                            dj.data.push(eachObj);
                            break;
                        }
                    
                    }
                }
            }
            console.log("newObj:",orderVue.newObj);
        }
        
        xhr.open("get","php/get_back_ticket_order.php",true);   
        //決定請求送至PHP
        xhr.send(null);                              
        //完成送出
        
      
    }
})
