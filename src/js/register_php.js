function DoFirst(){

    let registerBtn = document.querySelector(".registerBtn");
    
    function $id(id){
        return document.getElementById(id);
    };
    registerBtn.addEventListener("click", sendForm);



    function sendForm(){

        // 1. 宣告XMLHttpRequest()
        let xhr = new XMLHttpRequest();
        
        // 2.決定傳送方法POST, 傳送目標, true代表非同步執行
        xhr.open("POST", "./register_ajax.php", true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

        // 3. 封裝接收到的檔案  此處以JSON格式為例
        // 因為本案例不須跳轉頁面 在這邊把對應資料抓過來封裝成物件就好
        let dataset = {};
        dataset.memId = $id("acount").value;
        dataset.memPsw = $id("password").value;
  
        // 4. 透過JSON.stringify將處理好的物件封裝成JSON檔案
        let data_info = `json=${JSON.stringify(dataset)}`;

        // 5. XMLHttpRequest送出
        xhr.send(data_info);
      }

}

window.addEventListener('load', DoFirst);