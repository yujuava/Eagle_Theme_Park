let lightBtn = document.getElementById('lightBtn');
        let lightBox = document.getElementById('lightBox');
        let turnOff = document.getElementById('turnOff');
        let boxBcg = document.getElementById('boxBcg');
        

        lightBtn.addEventListener('click', ()=>{
            lightBox.style.display = 'block';
            boxBcg.style.display = 'block';
        });

        turnOff.addEventListener('click', ()=>{
            lightBox.style.display = 'none';
            boxBcg.style.display = 'none';
        });
        