if (localStorage.getItem('carts') === null) {
    let carts = [];
    localStorage.setItem('carts', JSON.stringify(carts));
    //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
} else {
    //把localstorage裡casts資料拿回來
    carts = JSON.parse(localStorage.getItem('carts'));
};
new Vue({
    el: '#shoppingcart',
    data: {
        isOpen: false,
        carts,
    },
    watch: {
    },
    methods: {
        amountreduce(id, amount,index) {
            //找物件的第[0]個取出來擺一個新陣列
            const idList = carts.map(item => Object.values(item)[0]);
            //取id相同的兩個陣列位置+新的amount
            let item = carts[idList.indexOf(id)].product_amount + amount;
            //判斷新的amount是否有大於0                    
            if (item >0) {
                //大於0新的amount更新carts對應位置的amount
                carts[idList.indexOf(id)].product_amount = item
                //更新localstorage數量
                localStorage.setItem('carts', JSON.stringify(carts));
            }else{
                //刪除對應的carts[index]
                carts.splice(index, 1);
                localStorage.setItem('carts',JSON.stringify(carts));
                headerVue.getCarts();

            }
        },
        //刪除按鍵
        deleteitem(index) {
            //刪除對應的carts[index]
            carts.splice(index, 1);
            localStorage.setItem('carts',JSON.stringify(carts));
            //同步更新小購物車數字
            headerVue.getCarts();

        },
    },
    computed: {
        // 目前購買的總金額計算
        calculate() {
            let sum = 0;
            let stotal = 0
            this.carts.forEach((item, i) => {
                stotal = item.product_amount * item.product_price
                sum += stotal
            });
            return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
    },
})
function checkmember(){
    if(carts==''){
        alert('購物車沒有商品唷~!');
        return;
    }else if(document.getElementById("username-lo").innerText==""){
        loginBox.style.display="flex"; 
    }else{
        window.location.href = "shopOrder.html";
    }
}
function init(){
    document.getElementById('checkmember').onclick=checkmember;
}
window.addEventListener("load", init);