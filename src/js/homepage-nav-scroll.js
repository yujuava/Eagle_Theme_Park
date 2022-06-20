// 電腦版導覽列滾輪

window.addEventListener("load",function(){  

    let screenWidth = screen.width;
    
    if (window.innerWidth > 996){
        document.addEventListener("scroll",function(){
            let ScrollNum = document.documentElement.scrollTop;
            // alert(window.innerWidth)
            // console.log(ScrollNum)
                if(ScrollNum>1300){
                    document.getElementById("header").classList.remove("hide");
                    document.getElementById("header").classList.add("show");
                }else{
                    document.getElementById("header").classList.remove("show");
                    document.getElementById("header").classList.add("hide");
                }
        }, false);
    }else{
        document.getElementById("header").classList.remove("hide");
    };

});
