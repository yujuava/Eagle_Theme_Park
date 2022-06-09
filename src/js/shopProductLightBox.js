function DoFirst(){
    let turnOff = document.getElementById('turnOff');   
    let lightBox = document.getElementById('lightBox');
    let allProduct = document.querySelectorAll('.item');
    // 物件名稱.addEventListener("觸發事件", 處理函式)
    turnOff.addEventListener("click", function(){
        lightBox.style.display = 'none';
        boxBcg.style.display = 'none';
    }); 
        console.log( turnOff);
    // 這是測試用燈箱  會直接跳出來
    for(let i=0; i<allProduct.length; i++){
        allProduct[i].addEventListener('click', function(){
            
            // 每個被點到的物件 利用選取器去抓下面的資料
            // 這個是抓.card下面 第一個P元素  就會抓到名稱
            let productName = allProduct[i].querySelector('.card p:nth-of-type(1)');
            console.log(productName);
            let productPrice = allProduct[i].querySelector('.card p:nth-of-type(2)');
            
            let  productPic= allProduct[i].querySelector('.itempic img');
            // 燈箱被打開時 對應的欄位要被上面抓到的資料取代
            lightBox.querySelector('.productName p:nth-of-type(2)').innerHTML = productName.innerHTML;

            lightBox.querySelector('.productPrice p:nth-of-type(2)').innerHTML = productPrice.innerHTML;

            lightBox.querySelector('.column img').src = productPic.src;

            lightBox.style.display = 'block';
            boxBcg.style.display = 'block';
            
        });
    }

}

window.addEventListener('load', DoFirst);