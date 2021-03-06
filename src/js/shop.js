let carts = [];
Vue.component('product-component', {

    methods: {
        show() {
            this.$emit("open-lightbox");
        }
    },
    template: `
    <div @click="show" class="itemColumn">
        <div class="item">
            <div class="itempic" id="lightBtn">
                <img :src="'images//' + item.product_pic">
            </div>
            <div class="card">
                <h4>{{item.product_name}}</h4>
                <p>{{'$'+item.product_price}}</p>
            </div>
        </div>
    </div> `,
    props: {
        item: Object,
        isOpen: false,
    }
});
// 燈箱
Vue.component('productdetail-component', {

    methods: {
        countadd(id, amount) {
            this.$emit('count', id, amount)
        },
        addtocart(id, amount) {
            this.$emit('tocart', id, amount)
        }
    },
    template: `
    <div class="column">
        <div class="columnpic">
            <img :src="'images//' + item.product_pic">
        </div>
        <div class="column inforcolumn">
            <div class="productName">
                <p>{{'商品名稱: '+item.product_name}}</p>
            </div>
            <div class="productName">
                <p>{{'商品描述: '+item.product_infor}}</p>
            </div>
            <div class="productPrice">
                <p>{{'價格: $ '+item.product_price}}</p>
            </div>
            <form>
                <div class="count">
                    <div @click="countadd(item.product_no,-1)"class="addamount">
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <input type="text" class="num" min="0" v-model="item.product_amount" disabled>
                    <div class="addamount" @click="countadd(item.product_no,1)">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <input type="button" @click="addtocart(item.product_no)" value="加入購物車" class="mdBtn-addCart">
            </form>
        </div>
    </div>    
    `,
    props: {
        item: Object,
        isOpen: false,
    }
});

var prods = new Vue({
    el: "#product-list",
    data: {
        isOpen: false,
        focusKey: '',
        carts,
        prodRows: [],
    },
    computed: {
        showthispro() {
            //打開箱對應商品燈箱內容
            return this.prodRows.find(v => v.product_no == this.focusKey) ?? this.prodRows[0];
        },
    },
    watch: {
        shoppingcarts(carts) {
            localStorage.shoppingcarts = JSON.stringify(carts);
        }
    },
    methods: {
        //計算燈箱內商品數量加減
        countadd(id, amount) {
            let index = this.prodRows.findIndex(v => v.product_no == id);
            let currentAmount = parseInt(this.prodRows[index].product_amount);
            this.prodRows[index]['product_amount'] = currentAmount + amount < 1 ? 1 : currentAmount + amount;
            // let idRowsList = this.prodRows.map(item => Object.values(item)[0]);
            // let realId = idRowsList.indexOf(id)
            // let item = this.prodRows[realId].product_amount + amount;
            // if (item >= 1) {
            //     this.prodRows[realId].product_amount = item;
            // }
        },
        show() {
            this.isOpen = true;
        },
        setFocusId(product_no) {
            this.focusKey = product_no;
            this.$nextTick(() => {})
        },
        //加入購物車被點擊時商品資料加入localstorage
        addcartlocal(id, amount) {
            //關燈箱
            this.isOpen = false;
            //拿到最新的CARTS
            if (localStorage.getItem('carts') === null) {
                localStorage.setItem('carts', JSON.stringify(carts));
                //當localStorage已存在資料陣列，指定一個內容與陣列資料庫相同的陣列
            } else {
                carts = JSON.parse(localStorage.getItem('carts'));
            };
            //如果有相同ID -> 更新相對應ID的數量
            const idList = carts.map(item => Object.values(item)[0]);
            //有存在(更新數量放回localstorage)
            let idRowsList = this.prodRows.map(item => Object.values(item)[0]);
            let realId = idRowsList.indexOf(id)
            if (idList.indexOf(id) != -1) {
                carts[idList.indexOf(id)].product_amount += this.prodRows[realId].product_amount
                alert('已加入購物車')
                //不存在(整筆商品放入localstorage)
            } else {
                // console.log(id)
                let sumid = this.prodRows[realId];
                carts.push(sumid)
                alert('已加入購物車')
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            //同步更新小購物車數量
            headerVue.getCarts();
        }
    },
})
const prodRows = [];

function getProducts() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        prods.prodRows = JSON.parse(xhr.responseText);
    }
    xhr.open("get", "./php/get_product_st.php", true);
    xhr.send(null);
}
window.addEventListener("load", function () {
    getProducts();
})