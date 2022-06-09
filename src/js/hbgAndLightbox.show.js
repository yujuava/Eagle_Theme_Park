new Vue({
    el: '#header',
    data: {     // 變數放這裡!
        mobileHbgShow: false,   //漢堡
        loginBoxShow:false, //登入燈箱
        RegisterBoxShow:false,  //註冊燈箱
    },
    methods: {  // 函數大部分放這裡! 
        validate(){
        let acount = document.getElementById('acount').value;
        let password = document.getElementById('password').value;
        let checkPassword = document.getElementById('checkPassword').value;
        let accept = document.getElementById('accept').checked;

        // =================註冊驗證==================
        //email(帳號)的正規表達式
        let userEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 

        //密碼的正規表達式
        let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;''
        // alert(userEmail.test(acount))

        if(userEmail.test(acount)!=true){
            alert("帳號請輸入e-mail格式");
            return;
        }
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
    },
    computed: { 
    },
    mounted(){
    }
});