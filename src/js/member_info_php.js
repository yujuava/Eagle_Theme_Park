// by brady
// alert('已註冊好');
function DoFirst(){

    let confirmBtn = document.querySelector("#confirmBtn");

    function $id(id){
        return document.getElementById(id);
    };
    confirmBtn.addEventListener("click",sendForm);

    function sendForm(){
    //宣告XMLHttpRequest()
    let xhr = new XMLHttpRequest();

    // 決定傳送方法POST, 傳送目標, true代表非同步執行
    xhr.open("POST","./php/member-info.php",true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    //封裝接收到的檔案  此處以JSON格式為例
    //因為本案例不須跳轉頁面 在這邊把對應資料抓過來封裝成物件就好
    // dataset ={};
    // dataset.mem_name = (id)input_name.value;
    // dataset.mem_lastname = (id)mem_lastname.value;

    let dataset = {};
    dataset.mem_name = $id("mem_name").value;
    dataset.mem_lastname = $id("mem_lastname").value;
    // dataset.mem_id = $id("mem_id").value;
    dataset.mem_psw = $id("mem_psw").value;
    dataset.mem_tel = $id("mem_tel").value;
    dataset.mem_mail = $id("mem_mail").value;
    dataset.mem_adress = $id("mem_adress").value;
    dataset.mem_country = $id("mem_country").value;
    // dataset.mem_no = $id("mem_no").value;

    // 透過JSON.stringify將處理好物件封裝成JSON檔
    let data_info = `json=${JSON.stringify(dataset)}`;

    // XMLHttpRequest送出
    xhr.send(data_info);
    }
}


// function putname(){
// let xhr = new XMLHttpRequest();
//   xhr.onload = function(){ //只要echo就ok
//     let textResult = xhr.responseText;
//     let objResult = JSON.parse(xhr.responseText); //把字串轉成物件
//     alert(objResult.mem_lastname)
//     document.getElementById("member-name-up").innerText =(objResult.mem_lastname + objResult.mem_name);
//   }
//   xhr.open("post", "./php/login_getMember.php", true);
//   xhr.send(null);
// }





    


window.addEventListener('load',DoFirst);
// window.addEventListener('load',putname);

