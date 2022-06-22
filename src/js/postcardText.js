function DoFirst(){

    let inputText = document.getElementById("inputText");
    let postcardText = document.getElementById("postcardText");
    let postcardReset = document.getElementById("postcardReset");

    // sync text with textarea
    inputText.addEventListener("input", syncText);
    
    function syncText(){
        postcardText.innerText = inputText.value;
    };

    // reset text button
    postcardReset.addEventListener("click", ()=>{
        postcardText.innerText = "";
        inputText.value = "";
    });

    var dragItem = document.getElementById("postcardText");
    var container = document.querySelector(".postcard");

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }



    // save postcard as image
    setUpDownloadPageAsImage();
    function setUpDownloadPageAsImage() {
      document.getElementById("postcardSave").addEventListener("click", function() {
        html2canvas(container).then(function(canvas) {
          // var  _canvas = document.createElement("canvas");
          // _canvas.setAttribute('width', 1088);
          // _canvas.setAttribute('height', 579);
          // var ctx = _canvas.getContext('2d');
          // ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 1088, 579);

          simulateDownloadImageClick(canvas.toDataURL(), 'postcardContent.png');});

          // find current postcard image
          let cover = document.querySelectorAll(".mySlides");
          for (let i=0; i<cover.length; i++){
            if( cover[i].style.display == "block"){
              currentCover = i;
              break;
            }
          };
          html2canvas(cover[currentCover]).then(function(canvas) {

            // var  _canvas = document.createElement("canvas");
            // _canvas.setAttribute('width', 1080);
            // _canvas.setAttribute('height', 570);
            // var ctx = _canvas.getContext('2d');
            // ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, 1080, 570);
      
            simulateDownloadImageClick(canvas.toDataURL(), 'postcardCover.png');});

      });
    }

        function simulateDownloadImageClick(uri, filename) {
          var link = document.createElement('a');
          if (typeof link.download !== 'string') {
            window.open(uri);
          } else {
            link.href = uri;
            link.download = filename;
            accountForFirefox(clickLink, link);
          }
        }
    
        function clickLink(link) {
          link.click();
        }
    
        function accountForFirefox(click) { // wrapper function
          let link = arguments[1];
          container.appendChild(link);
          click(link);
          container.removeChild(link);
        }

}

window.addEventListener('load', DoFirst);