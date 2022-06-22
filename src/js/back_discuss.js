
// function showAlert() {
//     window.confirm("是否確認刪除?")
// }


let apple = new Vue({
    el:'#back',
    data() {
        return {
            isOpen: false,
            discussTitle: ['文章編號','成立時間','會員編號','標題內容'],
            discussRows:[],
            articleno:'',
        }
    },
    methods: {
        // 燈箱   
        show(){
            this.isOpen = true;
        }, 
        async deletePost(no){
            console.log(no);
            apple.articleno = no;
            window.confirm("是否確認刪除?");
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "php/delete_post.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let dataset = {};
            dataset.articleNo = this.articleno;
            let data_info = `json=${JSON.stringify(dataset)}`;
            xhr.send(data_info);
        }
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