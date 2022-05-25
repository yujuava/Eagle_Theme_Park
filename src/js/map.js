let area = document.querySelectorAll(".area");
let box =  document.querySelectorAll(".box");
let allpath = document.querySelectorAll(".area path"); //所有色塊

for(let i=0;i<area.length;i++){

    area[i].addEventListener("click",function(e){
    
        for(let a=0;a<allpath.length;a++){
        console.log(allpath[a])
        allpath[a].classList.remove("map-click");    // 所有色塊先回復原狀
        // box[i].classList.add("hide");   
        }

        let areaPath = this.querySelectorAll("path")  //先找到點到的區域裡面的色塊
            for(let j=0 ; j<areaPath.length ; j++){
                areaPath[j].classList.toggle("map-click");  //裡面區塊都換上顏色
            }
        
        let screenWidth = screen.width;
        if (window.innerWidth > 996){

            for(let b=0;b<area.length;b++){     //第一次與第二次的判斷
                if(i !== b){
                    box[b].classList.add("hide");    //打開對應的燈箱
                }if(i == b){
                    box[b].classList.remove("hide");   
                }
            }
                
        }   

 

      
    })
}

