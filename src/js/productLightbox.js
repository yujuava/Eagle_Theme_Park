
        let lightBtn = document.getElementById('lightBtn');
        let lightBox = document.getElementById('lightBox');
        let turnOff = document.getElementById('turnOff');

        
        // 如果燈箱沒被打開     則將DISPLAY屬性變成BLOCK(秀出來)    且將TOGGLE變成FLASE(燈箱有被開啟過)
        // 如果燈箱被打開       就將屬性DISPLAY屬性變成NONE(不見)   且將TOGGLE變成TRUE(燈箱被關掉)
        lightBtn.addEventListener('click', ()=>{
                lightBox.style.display = 'block';
        });
        turnOff.addEventListener('click', ()=>{
            lightBox.style.display = 'none';
        });
        
