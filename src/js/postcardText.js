function DoFirst(){

    let ipnutText = document.getElementById("ipnutText");
    let postcardText = document.getElementById("postcardText");
    let postcardDIV = document.querySelector(".postcard");

    console.log(postcardDIV.clientWidth);
    console.log(postcardDIV.clientHeight);
    let init = true;
    
    $('#postcardText').draggable({
        cursor: "crosshair",
        containment: '#dragContainer',
        drag: function(){
            $('#postcardText').position();
        },
    });

    ipnutText.addEventListener("input", syncText);

    function syncText(){
        postcardText.innerText = ipnutText.value;
    };

    function cssAdjust(){

    };

}

window.addEventListener('load', DoFirst);


