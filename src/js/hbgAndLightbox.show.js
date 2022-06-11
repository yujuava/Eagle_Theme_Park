let headerVue = new Vue({
    el: '#header',
    data: {     // 變數放這裡!
        mobileHbgShow: false,   //漢堡
        loginBoxShow:false, //登入燈箱
        RegisterBoxShow:false,
        //註冊燈箱

        //註冊燈箱顯示訊息
        inputAccount:"",
        accountResult:"",
        pswResult1:"",
        pswResult2:"",
        inputPsw1:"",
        inputPsw2:"",
        agreement:false,
        //小購物車計算使用
        sum:{type:[Number]},
        carts: [],
    },
    methods: {  // 函數大部分放這裡! 
        validateAccount(){
            if (this.inputAccount.length<8){
                this.accountResult = "帳號長度不足";
            }else{
                this.accountResult = "驗證";
                // call 驗證程序並去資料庫比對
            }
        },
        validatePsw1(){
            if (this.inputPsw1.length<8){
                this.pswResult1 = "PSW密碼長度不足";
            }else{
                this.pswResult1 = "等待密碼確認";
            }
        },
        validatePsw2(){
            if (this.inputPsw2.length<8){
                this.pswResult2 = "確認PSW密碼長度不足";
            }else{
                if(this.inputPsw1 == this.inputPsw2){
                    this.pswResult2 = "密碼相符";
                }else{
                    this.pswResult2 = "密碼錯誤";
                }
            }
        },         




        validate(){
        let acount = document.getElementById('account').value;
        let password = document.getElementById('password').value;
        let checkPassword = document.getElementById('checkPassword').value;
        let accept = document.getElementById('accept').checked;

        // =================註冊驗證==================
        //email(帳號)的正規表達式
        // let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 

        //密碼的正規表達式
        let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;''
        // alert(userEmail.test(acount))

        // if(userEmail.test(acount)!=true){
        //     alert("帳號請輸入e-mail格式");
        //     return;
        // }
        if(passwordCheck.test(password)!=true){
            alert("密碼請輸入大小寫英文及數字8~12碼")
            return;
        }
        if(password!=checkPassword){
            alert("密碼確認不一致")
            return;
        }
        if(accept!=true){
            alert("請勾選是否同意會員條款")
            return;
        }

        if(acount==''||password==''||passwordCheck==''){
            alert("還有欄位未輸入唷")
            return;
        }
        if(userEmail.test(acount)==passwordCheck.test(password)==(password==checkPassword==true)==accept && ((acount!='')&&(password!='')&&(passwordCheck!=''))){
            alert('恭喜註冊成功')
            return;
        }
        },
        //拿到localstorage裡carts
        getCarts() {
            if (localStorage.getItem('carts'))
            this.carts =  JSON.parse(localStorage.getItem('carts'))
        },
    },
    watch:{
        shoppingcarts(sum){
            sum = JSON.parse(localStorage.getItem('carts')).length;
            deep: true;
        }
    },
    computed: { 
        //回傳carts.length至小購物車v-model
        cartsnum(){
        return this.carts.length;
        }
    },
    mounted(){
        this.getCarts();
    }
});
