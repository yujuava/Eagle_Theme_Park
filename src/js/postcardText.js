function DoFirst(){

    let ipnutText = document.getElementById("ipnutText");
    let postcardText = document.getElementById("postcardText");
    let postcardReset = document.getElementById("postcardReset");

    // sync text with textarea
    ipnutText.addEventListener("input", syncText);
    
    function syncText(){
        postcardText.innerText = ipnutText.value;
    };

    // reset text button
    postcardReset.addEventListener("click", ()=>{
        postcardText.innerText = "";
        ipnutText.value = "";
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