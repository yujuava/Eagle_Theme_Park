function DoFirst(){
    // get DOM item from page 
    // detectArea for touchEvent where contains slider
    // slider must find ratio for contral
    let detectArea = document.querySelector('.themePark__AttrSection');
    let slider = document.querySelectorAll('#slider input');

    // define touchEvent to determine slide direction
    let startX, endX;

    // detect touch start and record X coordinate
    detectArea.addEventListener('touchstart', (e)=>{
        startX = e.touches[0].clientX;
    });

    // detect touch end and determine direction for next step
    detectArea.addEventListener('touchend', (e)=>{
        endX = e.changedTouches[0].clientX;

        // if u want see how coordinate changes
        // console.log(`start: ${startX}, end: ${endX}`);
        
        // calculate distance, and set sensitivity by movingDistance 
        // limitDistance is minimun scroll distance to prevent vertical scroll triggered unnecessary action 
        let dir =  startX - endX;
        let movingDistance = 50;
        let limitDistance = -20;

        // get entire length of slider
        // find current checked item by findChecked function
        let checkedIndex = findChecked(slider);
        let checkedIndexLength = slider.length -1;

        if( dir > movingDistance){
        // slider to right
            if( checkedIndex == checkedIndexLength){
                checkedIndex = 0;
                slider[checkedIndex].checked =true;
            }else{
                slider[checkedIndex+1].checked =true;
            }
        }else if( dir < movingDistance && dir < limitDistance){
        // if limitDistance not set, vertical scroll will make statement below work
            if( checkedIndex == 0){
                checkedIndex = checkedIndexLength;
                slider[checkedIndex].checked =true;
            }else{
                slider[checkedIndex-1].checked =true;
            }
        }

    });

    // I can't find a function that directly find index of checked radio
    function findChecked(radioNodeList){
        for(let i=0; radioNodeList.length; i++){
            if(radioNodeList[i].checked){
                return i;      
            }
        }
    }

}

window.addEventListener('load', DoFirst);