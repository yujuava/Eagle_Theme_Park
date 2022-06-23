let uvIndexVue = new Vue({
    el: '#uvIndex',
    data: {
        dataTime : "",
        uvLevel:"",
        uvIndexIcon:"",
        vueData:{},
    },
    methods: {
        uvIndexAPI(){
            console.log("methods");
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){ 
              let resData = JSON.parse(xhr.responseText);
              uvIndexVue.vueData = resData.records;

              let arr = [];
              for(let i=0;i<uvIndexVue.vueData.length; i++){
                Object.keys(uvIndexVue.vueData[i]).forEach(key => {
                  if(uvIndexVue.vueData[i].sitename == '桃園' ){
                    arr.push(uvIndexVue.vueData[i]);
                  }
                 });
              }
              // console.log(arr[0]);
              // console.log(arr[0]["uvi"]);

              uvIndexVue.dataTime = arr[0]["publishtime"];
              uvIndexVue.uvIndexIcon = arr[0]["publishagency"];
              let uvIndexCompare = uvIndexVue.uvIndexContrast(arr[0]["uvi"]);
              // console.log(uvIndexCompare);
              // console.log(uvIndexCompare["text"]);
              uvIndexVue.uvLevel = uvIndexVue.uvIndexContrast(arr[0]["uvi"])["text"];

              document.getElementById("uvPic");

            }
            xhr.open("GET", "./php/uvIdex.php", true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(null);
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
            uvToIcon.text = "無資料";
            uvToIcon.picSrc = "./images/uv_none.png";
            return uvToIcon;
          }
        }
    },
    created(){
      this.uvIndexAPI();
    },
});