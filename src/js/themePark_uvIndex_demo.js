let uvIndexVue = new Vue({
    el: '#uvIndex',
    data: {
        dataTime : "",
        uvLevel:"(暫無資料)",
        vueData:{},
    },
    methods: {
        uvIndexAPI(){
            // let xhr = new XMLHttpRequest();
            // xhr.onload = function(){ 
            //   uvIndexVue.vueData = JSON.parse(xhr.responseText);
            //   // receive uv records data that pre-substract in php
            //   let arr = [];
            //   for(let i=0;i<uvIndexVue.vueData.length; i++){
            //     Object.keys(uvIndexVue.vueData[i]).forEach(key => {
            //       if(uvIndexVue.vueData[i].sitename == '桃園' ){
            //         arr.push(uvIndexVue.vueData[i]);
            //       }
            //      });
            //   }

            //   uvIndexVue.dataTime = arr[0]["publishtime"];
            //   uvIndexVue.dataTime += "更新";
            //   uvIndexVue.uvLevel = "";
            //   uvIndexVue.uvLevel = uvIndexVue.uvIndexContrast(arr[0]["uvi"])["text"];

            //   document.getElementById("uvPic").src = uvIndexVue.uvIndexContrast(arr[0]["uvi"])["picSrc"];

            // }
            // xhr.open("GET", "./php/uvIdex.php", true);
            // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            // xhr.send(null);

          // 展示用紫外線測試資料
          let today = new Date();
          let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          let time = today.getHours() + ":" + today.getMinutes();
          let dateTime = `${date} (測試資料)`;

          uvIndexVue.dataTime = dateTime;
          uvIndexVue.uvLevel = "";
          uvIndexVue.uvLevel = uvIndexVue.uvIndexContrast(2)["text"];

          document.getElementById("uvPic").src = uvIndexVue.uvIndexContrast(2)["picSrc"];
        },
        uvIndexContrast(uvi){
          let uviData = parseFloat(uvi);
          let uvToIcon = {};
          if ( 0 <= uviData && uviData <= 2){
            uvToIcon.text = "低量";
            uvToIcon.picSrc = "./images/uv_low.png";
            return uvToIcon;
          }else if( 3 <= uviData && uviData <= 5){
            uvToIcon.text = "中量";
            uvToIcon.picSrc = "./images/uv_medium.png";
            return uvToIcon;
          }else if( 6 <= uviData && uviData <= 7){
            uvToIcon.text = "高量";
            uvToIcon.picSrc = "./images/uv_high.png";
            return uvToIcon;
          }else if( 8 <= uviData && uviData <= 10){
            uvToIcon.text = "過量";
            uvToIcon.picSrc = "./images/uv_overdose.png";
            return uvToIcon;
          }else if( uviData < 11 || uviData >11){
            uvToIcon.text = "危險";
            uvToIcon.picSrc = "./images/uv_danger.png";
            return uvToIcon;
          }else{
            uvToIcon.text = "(暫無資料)";
            uvToIcon.picSrc = "./images/uv_cloud.png";
            return uvToIcon;
          }
        }
    },
    mounted(){
      function DoFirst(){
        uvIndexVue.uvIndexAPI();
      }
      
      window.addEventListener('load', DoFirst);
    }
    
});