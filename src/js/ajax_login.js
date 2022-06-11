let usernameLocation = document.getElementById("username-lo"); //秀出您好的位置
let mobileMemberEnter = document.getElementById("mobile-member-enter"); //手機member進入按鈕
let pcMemberEnter = document.getElementById("member-enter"); //電腦member進入按鈕
let loginBox = document.getElementById("loginBox"); //登入燈箱
let registerbox = document.getElementById("registerbox"); //註冊燈箱

// alert("更新了沒啦煩死");
// alert("hi");

// 取得會員是否已登入的資訊 (一進去就要觸發)
function getMemberInfo(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){ //只要echo就ok
    let textResult = xhr.responseText;
    let objResult = JSON.parse(xhr.responseText); //把字串轉成物件
    

    if(objResult.mem_name){
      usernameLocation.innerText = "親愛的" + objResult.mem_name + "，您好";
      pcMemberEnter.addEventListener("click",function(){
        window.location.href = "member-info.html";
        loginBox.style.display="none";
        registerbox.style.display="none";
      });
      mobileMemberEnter.addEventListener("click",function(){
        window.location.href = "member-info.html";
        loginBox.style.display="none";
        registerbox.style.display="none";
      })

    }
  }
  xhr.open("post", "./php/login_getMember.php", true);
  xhr.send(null);
}

//(燈箱的的登入按鍵btnLogin所觸發的函式sendForm)
function sendForm(){
  //================使用Ajax 回server端,取回登入者姓名, 放到頁面上   
  // alert("我是燈箱的登入");
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){ //只要echo就ok
    let textResult = xhr.responseText;
    let objResult = JSON.parse(xhr.responseText); //把字串轉成物件
    console.log("textResult:",typeof(textResult))
    console.log("objResult:",typeof(objResult))
    if( objResult !== 0){
      alert("登入成功");
        console.log("登入按鍵按下後的",textResult)
        window.location.href = "member-info.html";
        loginBox.style.display="none";
        registerbox.style.display="none";
    }else if( objResult == 0){
      alert("帳號密碼有誤");
    }
  }
  xhr.open("post", "./php/login_ajax.php", true);
  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
  //上 建立了ajax誤鍵，請求ajax
  //下 封裝使用者打出的資料->物件->json檔案

  let datas = {};
  datas.memid = document.getElementById("username").value;
  datas.mempsw = document.getElementById("userpassword").value;

  let data_info = `json=${JSON.stringify(datas)}`;
  console.log(data_info);
  xhr.send(data_info);

}

// (會員中心的登出按鍵所觸發的函式)
function logout(){
  alert("您已登出");
  
  let xhr = new XMLHttpRequest();

  window.location.href = "homepage.html#buy-big-ticket";
  xhr.open("get", "./php/logout_ajax.php", true);
  xhr.send(null);
}

function init(){


//取得會員是否已登入的資訊，一開始就觸發
getMemberInfo();

//===設定燈箱的的登入.onclick 事件處理程序是 sendForm
document.getElementById("loginBtn").onclick = sendForm;

//===設定會員中心的的登出按鍵.onclick 事件處理程序是 sendForm
document.getElementById("logoutBtn").onclick = logout;


}; 



window.addEventListener("load", init);