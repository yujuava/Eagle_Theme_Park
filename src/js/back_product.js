
var prods = new Vue({
    el:'#back',
    data: {
        isOpen: false,
        prodRows:[],
        currentNo: 0,
        popup: {},
        default: {
            product_name: '',
            product_infor: '',
            product_price: '',
            product_pic: ''
        },
        objResult: {},//原來的物件
        defaultResult: {},//新的更新過的資料
    },
    computed: {
        currentItem() {
            return this.prodRows.find(v => v.product_no == this.currentNo) ?? this.prodRows[0]
        },
    },
    watch: {
        currentItem(nVal) {
            this.popup = nVal;
        },
    },
    methods: {   
        show(no){
            this.currentNo = no;
            this.isOpen = true;
        },
        addPro() {},
        addHandler() {
            this.popup = JSON.parse(JSON.stringify(this.default));
            this.isOpen = true;
        },
        showAlert() {
            window.confirm("是否確認刪除?");
        },
        async changeHandler() {//非同步//綁最後的按鍵
            console.log('changeHandler')
            let sendObj = JSON.stringify(this.popup);//取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/update_back_product.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(`json=${sendObj}`);
        },
    }
})

function getProducts() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
         prods.prodRows = JSON.parse(xhr.responseText);
        console.log(prods.prodRows);
    }
    xhr.open("get", "./php/get_back_product.php", true);
    xhr.send(null);
}
window.addEventListener("load", function () {
    getProducts();
})