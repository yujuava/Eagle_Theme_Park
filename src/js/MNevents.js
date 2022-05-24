(function(){
    const fixedWidth = document.querySelector('main').offsetWidth
    function documentMove(e){
        const w = document.documentElement.offsetWidth-e.x
        if(w>fixedWidth && w<document.documentElement.offsetWidth - fixedWidth){
            document.querySelector('main').style.width=w+'px'
        }
    }
    document.querySelector('button').addEventListener('mousedown',()=>{
        document.addEventListener('mousemove',documentMove)
    })

    document.addEventListener('mouseup',()=>{
        document.removeEventListener('mousemove',documentMove)
    })
})()