let uvIndexVue = new Vue({
    el: '#uvIndex',
    data: {
        dataTime : "",
        uvLevel:"",
        uvIndexIcon:"",
        res1Data:""
    },
    methods: {
        uvIndexAPI(){
            console.log("methods");
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){ 
              let resData = JSON.parse(xhr.responseText);
            //   console.log(resData);
            //   console.log( typeof(resData) );
        
            //   console.log(resData['records'].find( v=> {v["sitename"]=="桃園"}));


              this.dataTime = `${resData['records'][1]['publishtime']}`;
            //   this.uvLevel = resData['records'][1]['uvi'];
              
              console.log(resData['records'][1]["sitename"]);
              console.log("receive data and mounted");


            }
            xhr.open("GET", "./php/uvIdex.php", true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(null);
        }
    },
    created(){
        console.log("init");
        this.uvIndexAPI();
        console.log("created");
    }






});