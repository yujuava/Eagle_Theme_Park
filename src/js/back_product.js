
new Vue({
    el:'#back',
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {   
        show(){
            this.isOpen = true;
        },     
    }
})

function showAlert(){
    window.confirm("是否確認刪除?");
}