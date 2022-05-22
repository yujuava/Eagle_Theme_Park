// canvas
// gloval variables
var typeTop, typeMiddle, typeBottom, topFlag, middleFlag, bottomFlag, couponMsg = false;

function DoFirst(){

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
  
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
          
    function resizeCanvas() {
        // minus padding value within html/css
        console.log('resize detected');
        canvas.width = document.getElementsByClassName('gameCol')[0].offsetWidth - 30;
        canvas.height = canvas.width;
       
        drawStuff(); 
    }
    
    resizeCanvas();
          
    function drawStuff() {
        // draw canvas

        // show game progress
        context.fillStyle='#245D68'; 
        context.font = "30px Arial";
        context.fillText("換衣服進度: 0/3", 10, 30); 

        let eagleImg = new Image();                 // 這裡是讀取外部圖片語法, 需要先建立Image物件 並在頁面讀取完成時才載入
        eagleImg.src = '../images/games__clothesEagleLost.png';
        eagleImg.onload = () => {
            context.drawImage(eagleImg, canvas.width*0.2, canvas.width*0.2, canvas.width*0.6, canvas.width*0.6);

        };

        
        
        let topImg1 = new Image();
        topImg1.src = '../images/games__clothesTop-1.png';
        let topImg2 = new Image();
        topImg2.src = '../images/games__clothesTop-2.png';
        let topImg3 = new Image();
        topImg3.src = '../images/games__clothesTop-3.png';

        let middleImg1 = new Image();
        middleImg1.src = '../images/games__clothesMiddle-1.png';
        let middleImg2 = new Image();
        middleImg2.src = '../images/games__clothesMiddle-2.png';
        let middleImg3 = new Image();
        middleImg3.src = '../images/games__clothesMiddle-3.png';

        let bottomImg1 = new Image();
        bottomImg1.src = '../images/games__clothesBottom-1.png';
        let bottomImg2 = new Image();
        bottomImg2.src = '../images/games__clothesBottom-2.png';
        let bottomImg3 = new Image();
        bottomImg3.src = '../images/games__clothesBottom-3.png';     


        // dress array
        let topDOMArray = document.querySelectorAll('.closetTop li');
        let topImgArray = [topImg1, topImg2, topImg3];

        for(let i=0; i<topDOMArray.length; i++){
            topDOMArray[i].addEventListener('click', function(){
                typeTop = topImgArray[i];
                drawClothes();
            });
        }

        let middleDOMArray = document.querySelectorAll('.closetMiddle li');
        let middleImgArray = [middleImg1, middleImg2, middleImg3];
        
        for(let i=0; i<middleDOMArray.length; i++){
            middleDOMArray[i].addEventListener('click', function(){
                typeMiddle = middleImgArray[i];
                drawClothes();
            });
        }

        let bottomDOMArray = document.querySelectorAll('.closetBottom li');
        let bottomImgArray = [bottomImg1, bottomImg2, bottomImg3];
        
        for(let i=0; i<bottomDOMArray.length; i++){
            bottomDOMArray[i].addEventListener('click', function(){
                typeBottom = bottomImgArray[i];
                drawClothes();
            });
        };

        document.getElementById('btnClear').addEventListener('click', () =>{
            context.clearRect(0, 0, canvas.width, canvas.height); 
            context.drawImage(eagleImg, canvas.width*0.2, canvas.width*0.2, canvas.width*0.6, canvas.width*0.6);
            topFlag = false;
            middleFlag = false;
            bottomFlag = false;
            couponMsg = false;
            typeTop = undefined;
            typeMiddle = undefined;
            typeBottom = undefined;
            context.fillStyle='#245D68'; 
            context.font = "30px Arial";
            context.fillText(`換衣服進度: 0/3`, 10, 30); 
        });



        function drawClothes(){
            context.clearRect(0, 0, canvas.width, canvas.height); 
            context.drawImage(eagleImg, canvas.width*0.2, canvas.width*0.2, canvas.width*0.6, canvas.width*0.6);
            if( typeof typeTop !== "undefined" ){
                context.drawImage(typeTop, canvas.width*0.4, canvas.width*0.06, canvas.width*0.3, canvas.width*0.3);
                topFlag = true;
            }
            
            if( typeof typeMiddle !== "undefined" ){
                context.drawImage(typeMiddle, canvas.width*0.32, canvas.width*0.53, canvas.width*0.38, canvas.width*0.18);
                middleFlag = true;
            }

            if( typeof typeBottom !== "undefined" ){
                context.drawImage(typeBottom, canvas.width*0.35, canvas.width*0.7, canvas.width*0.3, canvas.width*0.08);
                bottomFlag = true;
            }

            let progressArray = [topFlag, middleFlag,bottomFlag];
            let progressResult = progressArray.filter(Boolean).length;

            context.fillStyle='#245D68'; 
            context.font = "30px Arial";
            context.fillText(`換衣服進度: ${progressResult}/3`, 10, 30); 
            
            if( progressResult == 3 && couponMsg == false){
                couponMsg = true;
                setTimeout( ()=> {
                        alert('恭喜獲得優惠券!');
                    } , 500 );
            }
        }
    }
}

window.addEventListener('load', DoFirst);
