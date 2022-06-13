
new Vue({
    el:'#back',
    data() {
        return {
            isOpen: false,
            facilityTitle: ['設施序號','設施圖片','設施名稱','所屬園區','維護時間','雨天影響','孕婦乘坐','輪椅乘坐','設施排名','編輯'],
            facilityRows:[],
        }
    },
    methods: {
        // 燈箱   
        show(){
            this.isOpen = true;
        },
             
    },
    mounted(){
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            this.facilityRows = JSON.parse(xhr.responseText);
            console.log(this.facilityRows);
        }
        xhr.open("get","./php/get_back_facility.php",true);
        xhr.send(null);
    },
})