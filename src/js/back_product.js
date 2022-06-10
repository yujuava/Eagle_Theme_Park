
var prods = new Vue({
    el:'#back',
    data: {
        isOpen: false,
        prodRows:[]
    },
    methods: {   
        show(){
            this.isOpen = true;
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

function showAlert(){
    window.confirm("是否確認刪除?");
}