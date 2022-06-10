let headerVue = new Vue({
    el: '#header',
    data: {     // 變數放這裡!
        mobileHbgShow: false,   //漢堡
        loginBoxShow:false, //登入燈箱
        RegisterBoxShow:true,
        //註冊燈箱

        //註冊燈箱顯示訊息
        inputAccount:"",
        accountResult:"",
        pswResult1:"",
        pswResult2:"",
        inputPsw1:"",
        inputPsw2:"",
        agreement:false,

        sum:{type:[Number]},    //衝突的
        carts: [],  //衝突的
        // sum:{type:[Number]},
        // acount: '',
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
                    validateResult = JSON.parse(xhr.responseText);
                    if(validateResult == '1'){
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
                    this.pswResult1 = "密碼相符";
                    this.pswResult2 = "密碼相符";
                }else{
                    this.pswResult2 = "密碼錯誤";
                }
            }
        },
        prepareRegister(){
            if(this.agreement==true){

                // 檢查所有資料是否符合規範
                //!!之後判斷參數要改  不然會爆
                // acount==''||password==''||passwordCheck==''
                if( this.accountResult == "帳號可使用"
                    && this.pswResult1 == "密碼相符"
                    && this.pswResult2 == "密碼相符" ){
                    document.getElementById('account').disabled = true;
                    document.getElementById('password').disabled = true;
                    document.getElementById('checkPassword').disabled = true;
                    document.getElementById('register').disabled = false;
                }else{
                    alert("請檢查輸入資料");
                    // 需要一點時間差 警示跳完才勾選 下面要慢一點才能取消到
                    setTimeout( function(){
                        document.getElementById('accept').checked=false;
                    } ,200);
                }
            }else{
                // lock all input data 通通給我鎖起來  別想傳怪東西到資料庫
                document.getElementById('account').disabled = false;
                document.getElementById('password').disabled = false;
                document.getElementById('checkPassword').disabled = false;
                document.getElementById('register').disabled = true;
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
        getCarts() {
            if (localStorage.getItem('carts'))
            this.carts =  JSON.parse(localStorage.getItem('carts'))
        },

    },
    // watch:{
       


    //     shoppingcarts(sum){
    //         sum = JSON.parse(localStorage.getItem('carts')).length;
    //         deep: true;
    //     },
    //         immediate: true;
    //     },
    //     acount() {

    //     },
    // },
    // computed: { 
      

    //     cartsnum(){
    //     return this.carts.length;
    //     }
    // },
    // mounted(){
    //     this.getCarts();
    // }
});
