// const { exit } = require("browser-sync");
// const { tree } = require("gulp");

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
                // sent data to php for validate existence
                // 1. create ajax procedure
                let xhr = new XMLHttpRequest();
                xhr.open("POST", "./php/validateMemId.php", true);
                xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
                // 4. waiting for response and render result to page
                xhr.onload = function () {
                    let validateResult = JSON.parse(xhr.responseText);
                    if(validateResult != '0'){
                        headerVue.accountResult = "請使用其他帳號";
                    }else{
                        headerVue.accountResult = "帳號可使用";
                    }
               };
                // 2. package account data
                let dataset = {};
                dataset.inputAccount = this.inputAccount;
                let data_info = `json=${JSON.stringify(dataset)}`;
                // 3. sent data to php
                xhr.send(data_info);
            }
        },
        validatePsw1(){
            if (this.inputPsw1.length<8){
                this.pswResult1 = "密碼長度不足";
            }else{
                let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
                if(passwordCheck.test(this.inputPsw1)!=true){
                    this.pswResult1 = "密碼請輸入大小寫英文及數字8~12碼";
                }else{
                    this.pswResult1 = "此密碼可用";
                }
                
                
            }
        },
        validatePsw2(){
            if (this.inputPsw2.length<8){
                this.pswResult2 = "密碼長度不足";
            }else{
                if(this.inputPsw1 == this.inputPsw2){
                    this.pswResult1 = "密碼相符";
                    this.pswResult2 = "密碼相符";
                }else{
                    this.pswResult2 = "密碼錯誤";
                }
            }
        },
        prepareRegister(){
            headerVue.agreement = true;
        },
        sendRegister(){
            if(headerVue.agreement == false){
                alert("請同意使用者條款");
                return;
            }
            // lock all input data 通通給我鎖起來  別想傳怪東西到資料庫
            // 1. 宣告XMLHttpRequest()
            let xhr = new XMLHttpRequest();
            // 2.決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST", "./php/register_ajax.php", true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.onload = function () {
                validateResult = JSON.parse(xhr.responseText);
                if(validateResult == '1'){
                    alert("輸入資料有誤 請檢查");
                }else{
                    alert("註冊成功 準備跳轉會員中心");
                }
            };
            // 3. 封裝接收到的檔案  此處以JSON格式為例
            // 因為本案例不須跳轉頁面 在這邊把對應資料抓過來封裝成物件就好
            let dataset = {};
            dataset.memId = headerVue.inputAccount;
            dataset.memPsw1 = headerVue.inputPsw1;
            dataset.memPsw2 = headerVue.inputPsw2;
            // 4. 透過JSON.stringify將處理好的物件封裝成JSON檔案
            let data_info = `json=${JSON.stringify(dataset)}`;
            // 5. XMLHttpRequest送出
            xhr.send(data_info);
        },
        // validate(){
        // let acount = document.getElementById('account').value;
        // let password = document.getElementById('password').value;
        // let checkPassword = document.getElementById('checkPassword').value;
        // let accept = document.getElementById('accept').checked;

        // // =================註冊驗證==================
        // //email(帳號)的正規表達式
        // // let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 

        // //密碼的正規表達式
        // let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;''
        // // alert(userEmail.test(acount))

        // // if(userEmail.test(acount)!=true){
        // //     alert("帳號請輸入e-mail格式");
        // //     return;
        // // }
        // // if(passwordCheck.test(password)!=true){
        // //     alert("密碼請輸入大小寫英文及數字8~12碼")
        // //     return;
        // // }
        // // if(password!=checkPassword){
        // //     alert("密碼確認不一致")
        // //     return;
        // // }
        // // if(accept!=true){
        // //     alert("請勾選是否同意會員條款")
        // //     return;
        // // }
        // // if(acount==''||password==''||passwordCheck==''){
        // //     alert("還有欄位未輸入唷")
        // //     return;
        // // }
        // // if(userEmail.test(acount)==passwordCheck.test(password)==(password==checkPassword==true)==accept && ((acount!='')&&(password!='')&&(passwordCheck!=''))){
        // //     alert('恭喜註冊成功')
        // //     return;
        // // }
        // },
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
