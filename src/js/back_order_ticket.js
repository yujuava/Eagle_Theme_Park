
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