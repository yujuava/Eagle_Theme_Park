   //加減事件
   let minus = document.querySelectorAll('.minus');
   let plus = document.querySelectorAll('.plus')
   let num = document.querySelectorAll('.num')

   for(let i=0 ; i<minus.length ; i++){
       minus[i].addEventListener("click",function(){
       if(num[i].value <= 0){
           num[i].value ==0 
       }else{
           num[i].value --;
       }

       })
       plus[i].addEventListener("click",function(){
           if(num[i].value >= 9 ){
               num[i].value = 9;

           }else{
               num[i].value ++;
           }
       })

   }
