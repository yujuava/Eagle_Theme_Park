//===設定btnLogin.onclick 事件處理程序是 sendForm
let member;
function sendForm(){
    //================使用Ajax 回server端,取回登入者姓名, 放到頁面上    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      let member = JSON.parse(xhr.responseText);   
    //   document.getElementById("username-lo").innerText = member.mem_name;
      //將登入表單上的資料清空，並隱藏起來
    //   document.getElementById('username').value = '';
    //   document.getElementById('userpassword').value = '';
    }
    
    xhr.open("post", "./php/login_ajax.php", true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    let datas = {};
    datas.mem_id = document.getElementById("username").value;
    datas.mem_psw = document.getElementById("userpassword").value;

    let data_info = `json=${JSON.stringify(datas)}`;
    console.log(data_info);
    xhr.send(data_info);
  }


//取得會員是否已登入的資訊
function getMemberInfo(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      member = JSON.parse(xhr.responseText);
      if(member.mem_name){
        document.getElementById("username-lo").innerText = "親愛的" + member.mem_name + "，您好";
        document.getElementById("member-enter").addEventListener("click",function(){
            window.location.href = "member-info.html";
            document.getElementById("loginBox").style.display="none";
            document.getElementById("loginBox").style.display="none";
            document.getElementById("registerbox").style.display="none";
        })
        document.getElementById("mobile-member-enter").addEventListener("click",function(){
            window.location.href = "member-info.html";
            document.getElementById("loginBox").style.display="none";
            document.getElementById("loginBox").style.display="none";
            document.getElementById("registerbox").style.display="none";
        })
      }
    }
    xhr.open("post", "./php/login_getMember.php", true);
    xhr.send(null);
  }

function init(){
//取得會員是否已登入的資訊
getMemberInfo();

//===設定spanLogin.onclick 事件處理程序是 showLoginForm
// $id('spanLogin').onclick = showLoginForm;

//===設定btnLogin.onclick 事件處理程序是 sendForm
document.getElementById("loginBtn").onclick = sendForm;

//===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
// $id('btnLoginCancel').onclick = cancelLogin;

}; //window.onload

  //window.onload=init;
window.addEventListener("load", init);