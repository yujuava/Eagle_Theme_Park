let carts = [];
if (localStorage.getItem('carts') === null) {
    let carts = [];
    localStorage.setItem('carts', JSON.stringify(carts));
} else {
    carts = JSON.parse(localStorage.getItem('carts'));
};
Vue.component('order-component', {
    props: {
        item: Object,
    },
    computed: {
        stotal() {
            let stotal = this.item.product_amount * this.item.product_price
            return stotal.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    methods: {},
    template: `
    <div class="ticket-type">
        <p>{{item.product_name}}</p>
        <input type="text" id="ticketTotal" class="col" v-model="item.product_amount" disabled>
        <input type="text" id="ticketPrice" class="col" v-model="stotal" disabled>
    </div>
    `
})
new Vue({
    el: '#product-purchase',
    data: {
        carts,
        textResult: [], //ajax回傳
        objResult: [],
        acount: '',
        password: '',
        send_result: {
            last_name: '',
            first_name: ''
        },
    },
    mounted() {},
    methods: {
        sendForm() {

            let dataorderInner = document.querySelectorAll('.dataorder');
            for (i = 0; i < dataorderInner.length; i++) {
                if (dataorderInner[i].value == "") {
                    alert('還有欄位未輸入唷~!')
                    return;
                }
            }
            alert('訂單已送出~!')
            window.location.href = "member-info.html";
            localStorage.removeItem('carts');

            // 1. 宣告XMLHttpRequest()
            let xhr = new XMLHttpRequest();

            // 2.決定傳送方法POST, 傳送目標, true代表非同步執行
            
            xhr.open("POST", "./php/product-order-about.php", true);

            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

            // 3. 封裝接收到的檔案  此處以JSON格式為例
            // 因為本案例不須跳轉頁面 在這邊把對應資料抓過來封裝成物件就好
            let sendObj = {
                carts
            };

            Object.keys(this.objResult).forEach(key => {
                if (this.objResult[key]) sendObj[key] = this.objResult[
                    key]; //如果這個key是原來的，給的資料就是原來的
                else sendObj[key] = this.defaultResult[key]; //不然給的就是新的結果
            })
            
            // 4. 透過JSON.stringify將處理好的物件封裝成JSON檔案
            

            // // 5. XMLHttpRequest送出

            let data_info = `json=${JSON.stringify(sendObj)}`;
            // // 5. XMLHttpRequest送出
            xhr.send(data_info);
        }
    },
    computed: {
        totalamount() {
            const arramount = carts.map(item => Object.values(item)[4]);
            let tamount = 0;
            arramount.forEach((item) => {
                tamount += item
            });
            return tamount;
            console.log(tamount)
        },
        total() {
            let sum = 0;
            let stotal = 0
            this.carts.forEach((item, i) => {
                stotal = item.product_amount * item.product_price
                sum += stotal
            });
            return "$ " + sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    created() {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            this.objResult = JSON.parse(xhr.responseText); //把
            this.textResult = xhr.responseText;
       
        }
        xhr.open("get", "php/login_getMember.php", true);
        xhr.send(null);
    },

})
window.addEventListener("load", function () {
    let select_year = document.querySelector("#year");
    let select_month = document.querySelector("#month");
    let opt;
    let Opt;
    for (let i = 2025; i <= 2050; i++) {
        opt = new Option(i, i);
        select_year.add(opt);
    };
    for (let i = 1; i <= 12; i++) {
        Opt = new Option(i, i);
        select_month.add(Opt);
    }
})

function setBlur(obj, target2) {
    let target = document.getElementById(target2);
    if (obj.value.length == obj.getAttribute('maxlength')) {
        // console.log(target)
        target.focus();
    }
    return;
}

// function init() {
//     document.getElementById('submit').onclick = submitOrder;
// }
// window.addEventListener('load', init);