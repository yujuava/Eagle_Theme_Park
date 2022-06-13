
function showAlert() {
    window.confirm("是否確認刪除?");
}


new Vue({
    el:'#back',
    data() {
        return {
            isOpen: false,
            discussTitle: ['文章編號','成立時間','會員編號','標題內容'],
            discussRows:[],
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
            this.discussRows = JSON.parse(xhr.responseText);
            console.log(this.discussRows);
        }
        xhr.open("get","./php/get_back_discuss.php",true);
        xhr.send(null);
    },
})