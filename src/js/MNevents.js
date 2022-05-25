(function () {
    const aaaWidth = document.querySelector('.aaa').offsetWidth //1536
    const fixedWidth = document.querySelector('main').offsetWidth
    const buttonWidth = document.querySelector('button').offsetWidth
    function documentMove(e) {
        const fixedWidth = buttonWidth //16
        const w =  e.x //1519
        if (w > fixedWidth && w < aaaWidth) {
            document.querySelector('main').style.width = w + 'px'
            document.querySelector('button').style.left = w +'px'
        }
    };
    document.querySelector('button').addEventListener('mousedown', () => {
        document.addEventListener('mousemove', documentMove)
    });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', documentMove)
    });
})()