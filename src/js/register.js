document.getElementById('register').addEventListener('click',function(){
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
        alert("帳號請輸入e-mail格式")
    }
    if(passwordCheck.test(password)!=true){
        alert("密碼請輸入大小寫英文及數字8~12碼")
    }
    if(password!=checkPassword){
        alert("密碼確認不一致")
    }
    if(accept!=true){
        alert("請勾選是否同意會員條款")
    }
    if(userEmail.test(acount)==passwordCheck.test(password)==(password==checkPassword==true)==accept){
        alert('恭喜註冊成功')
    }
})