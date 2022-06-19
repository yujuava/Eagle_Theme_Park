
var newsVue = new Vue({
    el:'#back',
    data: {
        newsRows:[],      //資料的陣列
        isOpen: false,
        // prodRows:[],
        currentNo: 0,
        popup: {},
        default: {
            news_name: '',
            news_content: '',
            news_pic: '',
            news_date: '',
        },
        objResult: {},  // 原來的物件
        defaultResult: {},  // 新的更新過的資料
        // newsTitle: ['消息編號','消息名稱','消息內容','發布日期'],
    },
    computed: {
        currentItem() {
            return this.newsRows.find(v => v.news_no == this.currentNo) ?? this.newsRows[0]
        },
    },
    watch: {
        currentItem(nVal) {
            this.popup = nVal;
        },
    },
    methods: {   
        show(no){
            this.currentNo = no;
            this.isOpen = true;
        },
        addHandler() {  // 左上新增商品
            this.popup = JSON.parse(JSON.stringify(this.default));
            this.isOpen = true;
        },
        async changeHandler() {  //修改商品  // 非同步  // 綁最後的按鍵
            //判斷使否新增照片如果沒有使用 this.popup.news_pic
            let newPic = document.getElementById("uploadPic").files[0]?.name?? this.popup.news_pic;
            this.popup.news_pic = newPic;  
            let sendObj = JSON.stringify(this.popup);  // 取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行
            xhr.open("POST","./php/update_back_news.php",true);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(`json=${sendObj}`);

            window.confirm("是否確認修改?");
            this.isOpen = false;
        },
        async addNews() {  //新增商品  // 非同步  // 綁最後的按鍵
            let sendObj = JSON.stringify(this.popup);  // 取最後要再資料庫呈現的東西
            let xhr = new XMLHttpRequest();
            // 決定傳送方法POST, 傳送目標, true代表非同步執行

            let formData = new FormData();
            formData.append("news_name", this.popup.news_name);
            formData.append("news_content", this.popup.news_content);
            formData.append("news_date", this.popup.news_date);
            formData.append("news_pic", document.getElementById("uploadPic").files[0]);

            xhr.open("POST","./php/add_back_news.php",true);
            
            xhr.send(formData);

            window.confirm("是否確認新增?");
            this.isOpen = false;
        },
    },
})
function getNews() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
         newsVue.newsRows = JSON.parse(xhr.responseText);
        console.log(newsVue.newsRows);
    }
    xhr.open("get", "./php/back_news.php", true);
    xhr.send(null);
}
window.addEventListener("load", function () {
    getNews();
})
