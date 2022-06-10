// alert('已註冊好');
function DoFirst(){

    let confirmBtn = document.querySelector("#confirmBtn");

    // function $id(id){
    //     return document.
    // }

    confirmBtn.addEventListener("click",sendForm);

    function sendForm(){
    //宣告XMLHttpRequest()
    let xhr = new XMLHttpRequest();

    // 決定傳送方法POST, 傳送目標, true代表非同步執行
    xhr.open("POST","./member-info.php",true);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    //封裝接收到的檔案  此處以JSON格式為例
    //因為本案例不須跳轉頁面 在這邊把對應資料抓過來封裝成物件就好
    let dataset ={};
    dataset.mem_name = "Hello";

    // 透過JSON.stringify將處理好物件封裝成JSON檔
    let dataInfo = `json=${JSON.stringify(dataset)}`;

    //XMLHttpRequest送出
    xhr.send(dataInfo);
    }
}

window.addEventListener('load',DoFirst);


