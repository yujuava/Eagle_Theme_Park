
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
        addHandler() {
            this.popup = JSON.parse(JSON.stringify(this.default));
            this.isOpen = true;
        },
        showAlert() {
            window.confirm("是否確認刪除?");
        },
        addPro() {  //燈箱的新增按鈕
            
        },  
        change() {   //燈箱的修改按鈕
            
        }
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