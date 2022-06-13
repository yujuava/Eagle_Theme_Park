// by brady
// alert('已註冊好');
 function $id(id){
        return document.getElementById(id);
    };
function DoFirst(){

    let confirmBtn = document.querySelector("#confirmBtn");

   
    confirmBtn.addEventListener("click",sendForm);

    function sendForm(){
    //宣告XMLHttpRequest()
    alert('更改完成')
    let xhr = new XMLHttpRequest();

    // 決定傳送方法POST, 傳送目標, true代表非同步執行
    xhr.open("POST","./php/member-info.php",true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");


    let dataset = {};
    dataset.mem_name = $id("mem_name").value;
    dataset.mem_lastname = $id("mem_lastname").value;
    // dataset.mem_id = $id("mem_id").value;
    dataset.mem_psw = $id("mem_psw").value;
    dataset.mem_tel = $id("mem_tel").value;
    dataset.mem_mail = $id("mem_mail").value;
    dataset.mem_adress = $id("mem_adress").value;
    dataset.mem_country = $id("mem_country").value;

    // 透過JSON.stringify將處理好物件封裝成JSON檔
    let data_info = `json=${JSON.stringify(dataset)}`;
console.log(data_info);
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





    



