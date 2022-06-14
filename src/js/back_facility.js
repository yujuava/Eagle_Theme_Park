
new Vue({
    el:'#back',
    data: {
        isOpen: false,
        facilityTitle: ['設施名稱','設施圖片','設施名稱','所屬園區','維護時間','雨天乘坐','孕婦乘坐','輪椅乘坐','設施排名',''],
        facilityRows:[],
        currentNo: 0,
        popup: {},       //在燈箱更改後的資料          
        default: {       //資料庫原本預設的資料
            fac_pic: '',       
            fac_name: '',   
            fac_area: '',   
            fac_maintain_date:'',
            fac_rainy:'',
            fac_preg:'',
            fac_wheelchair:'',
            fac_descrip: '',
            fac_chart: '',
        },
        defaultResult: {},//新的更新過的資料
        sendFacObj:{},
    },
    computed: { //一直在做
        currentItem() { //現在原本的的資料
            return this.facilityRows.find(v => v.fac_no == this.currentNo) ?? this.facilityRows[0]
        },
    },
    watch: {
        currentItem(nVal) { //如果資料有變動，就把變動的放進popup
            this.popup = nVal;
        },
    },

    methods: {  //需要呼叫   
        // 燈箱 
        show(number){
            this.currentNo = number;
            this.isOpen = true;
        },
        addHandler(){  //最上面的新增按鈕所綁定的事件
            this.popup = JSON.parse(JSON.stringify(this.default));
            this.isOpen = true;
            console.log(this.popup)
        },  
        addPro() {  //燈箱的新增按鈕
            this.isOpen = false;
            
        },  
        change() {   //燈箱的修改按鈕
            this.isOpen = false;
            
        },
        async changeFinalFac() {//非同步//綁最後的按鍵     
            let sendFacObj = JSON.stringify(this.popup);//取最後要在資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/update_back_facility.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(`json=${sendFacObj}`);
        },
    },
    mounted(){
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            this.facilityRows = JSON.parse(xhr.responseText);
            console.log("設施rows:",this.facilityRows);
        }
        xhr.open("get","./php/get_back_facility.php",true);
        xhr.send(null);
    },
})