// canvas
// gloval variables
var typeTop, typeMiddle, typeBottom, topFlag, middleFlag, bottomFlag, couponMsg = false;

function DoFirst(){
    let fontSize = 30; // default font size 
    let md_fontSize = 30;
    let sm_fontSize = 20;
    let textBcg_x = 210;  // default TextBcg x
    let textBcg_y = 35;    // default TextBcg x
    let md_TextBcg_x = 210;
    let md_TextBcg_y = 35;
    let sm_TextBcg_x = 140;
    let sm_TextBcg_y = 30;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    var OriginWindowWidth = window.innerWidth;
    canvas.width = document.getElementsByClassName('gameCol')[0].offsetWidth - 30;
    canvas.height = canvas.width;

    if(OriginWindowWidth<768){
        fontSize = sm_fontSize;
        textBcg_x = sm_TextBcg_x;
        textBcg_y = sm_TextBcg_y;       
    }else{
        fontSize = md_fontSize;
        textBcg_x = md_TextBcg_x;
        textBcg_y = md_TextBcg_y;
    }

    function resizeCanvas() {
        // minus padding value within html/css
        
        let newWidth = window.innerWidth;
       if ( newWidth != OriginWindowWidth){
            canvas.width = document.getElementsByClassName('gameCol')[0].offsetWidth - 30;
            canvas.height = canvas.width;
       
            if(OriginWindowWidth<768){
                fontSize = sm_fontSize;
                textBcg_x = sm_TextBcg_x;
                textBcg_y = sm_TextBcg_y;
            }else{
                fontSize = md_fontSize;
                textBcg_x = md_TextBcg_x;
                textBcg_y = md_TextBcg_y;
            }

            drawStuff(); 
       }

    }
    
    // resizeCanvas();
          
    function drawStuff() {
        // draw canvas

        // show game progress
        let eagleImg = new Image();  // 這裡是讀取外部圖片語法, 需要先建立Image物件 並在頁面讀取完成時才載入
        let Bcg = new Image();
        let TextBcg = new Image();
        eagleImg.src = './images/games__clothesEagleLost.png';
        Bcg.src = './images/games__clothesBcg.jpg';
        TextBcg.src = './images/games__clothesEagleTextBcg.png';
        eagleImg.onload = () => {
            context.drawImage(Bcg, 0, 0, canvas.width, canvas.height);
            context.drawImage(eagleImg, canvas.width*0.3, canvas.height*0.1, canvas.width*0.4, canvas.height*0.8);
            context.drawImage(TextBcg, canvas.width*0.05-5, canvas.height*0.95-textBcg_y+5, textBcg_x, textBcg_y);
            context.fillStyle='#245D68'; 
            context.font = `${fontSize}px Arial`;
            context.fillText("更衣進度: 0 / 3", canvas.width*0.05, canvas.height*0.95); 
        };
        
        let topImg1 = new Image();
        topImg1.src = './images/games__clothesTop-1.png';
        let topImg2 = new Image();
        topImg2.src = './images/games__clothesTop-2.png';
        let topImg3 = new Image();
        topImg3.src = './images/games__clothesTop-3.png';

        let middleImg1 = new Image();
        middleImg1.src = './images/games__clothesMiddle-1.png';
        let middleImg2 = new Image();
        middleImg2.src = './images/games__clothesMiddle-2.png';
        let middleImg3 = new Image();
        middleImg3.src = './images/games__clothesMiddle-3.png';

        let bottomImg1 = new Image();
        bottomImg1.src = './images/games__clothesBottom-1.png';
        let bottomImg2 = new Image();
        bottomImg2.src = './images/games__clothesBottom-2.png';
        let bottomImg3 = new Image();
        bottomImg3.src = './images/games__clothesBottom-3.png';     


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

        // remove Clear button
        // document.getElementById('btnClear').addEventListener('click', () =>{
        //     context.clearRect(0, 0, canvas.width, canvas.height); 
        //     context.drawImage(Bcg, 0, 0, canvas.width, canvas.height);
        //     context.drawImage(eagleImg, canvas.width*0.3, canvas.height*0.1, canvas.width*0.4, canvas.height*0.8);
        //     topFlag = false;
        //     middleFlag = false;
        //     bottomFlag = false;
        //     couponMsg = false;
        //     typeTop = undefined;
        //     typeMiddle = undefined;
        //     typeBottom = undefined;
        //     context.fillStyle='#245D68'; 
        //     context.font = `${fontSize}px Arial`;
        //     context.fillText("更衣進度: 0/3", canvas.width*0.05, canvas.height*0.95); 
        // });


        function drawClothes(){
            context.clearRect(0, 0, canvas.width, canvas.height); 
            context.drawImage(Bcg, 0, 0, canvas.width, canvas.height);
            context.drawImage(eagleImg, canvas.width*0.3, canvas.height*0.1, canvas.width*0.4, canvas.height*0.8);
            if( typeof typeTop !== "undefined" ){
                context.rotate(15 * Math.PI/180 );
                context.drawImage(typeTop, canvas.width*0.43, canvas.height*-0.1, canvas.width*0.3, canvas.height*0.3);
                context.setTransform(1, 0, 0, 1, 0, 0);
                topFlag = true;
            }
            
            if( typeof typeMiddle !== "undefined" ){
                context.drawImage(typeMiddle, canvas.width*0.32, canvas.width*0.53, canvas.width*0.38, canvas.width*0.18);
                middleFlag = true;
            }

            if( typeof typeBottom !== "undefined" ){
                context.drawImage(typeBottom, canvas.width*0.4, canvas.width*0.7, canvas.width*0.2, canvas.width*0.2);
                bottomFlag = true;
            }

            let progressArray = [topFlag, middleFlag,bottomFlag];
            let progressResult = progressArray.filter(Boolean).length;
            context.drawImage(TextBcg, canvas.width*0.05-5, canvas.height*0.95-textBcg_y+5, textBcg_x, textBcg_y);
            context.fillStyle='#245D68'; 
            context.font = `${fontSize}px Arial`;
            context.fillText(`更衣進度: ${progressResult} / 3`, canvas.width*0.05, canvas.height*0.95); 
            
            if( progressResult == 3 && couponMsg == false){
                couponMsg = true;
                setTimeout( ()=> {
                        alert('恭喜獲得優惠券!');
                    } , 500 );
            }
        }

        drawClothes();
    }
 
    setTimeout(() => {
        drawStuff();
    }, 1500);
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
}

window.addEventListener('load', DoFirst);
