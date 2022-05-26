// 電腦版導覽列滾輪

window.addEventListener("load",function(){  

    let screenWidth = screen.width;

    if (window.innerWidth > 996){
        document.addEventListener("scroll",function(){
            let ScrollNum = document.documentElement.scrollTop;
            let header = document.getElementById("header");
            // alert(window.innerWidth)
            // console.log(ScrollNum)
                if(ScrollNum>1300){
                    header.classList.remove("hide");
                    header.classList.add("show");
                }else{
                    header.classList.remove("show");
                    header.classList.add("hide");
                }
        }, false);
    }else{
        header.classList.remove("hide");
    };

});
