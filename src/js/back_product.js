
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
            product_pic: '',
            product_st: ''
        },
        objResult: {},  // 原來的物件
        defaultResult: {},  // 新的更新過的資料
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
        addHandler() {  // 左上新增商品
            this.popup = JSON.parse(JSON.stringify(this.default));
            this.isOpen = true;
        },
        async changeHandler() {  //修改商品  // 非同步  // 綁最後的按鍵
            console.log('changeHandler')
            let sendObj = JSON.stringify(this.popup);  // 取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/update_back_product.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(`json=${sendObj}`);

            window.confirm("是否確認修改?");
            this.isOpen = false;
        },
        async addPro() {  //新增商品  // 非同步  // 綁最後的按鍵
            console.log('addPro')
            let sendObj = JSON.stringify(this.popup);  // 取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行

            let formData = new FormData();
            formData.append("product_name", this.popup.product_name);
            formData.append("product_infor", this.popup.product_infor);
            formData.append("product_price", this.popup.product_price);
            formData.append("product_pic", document.getElementById("uploadPic").files[0]);

            xhr.open("POST","./php/add_back_product.php",true);
            
            xhr.send(formData);

            window.confirm("是否確認新增?");
            this.isOpen = false;
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