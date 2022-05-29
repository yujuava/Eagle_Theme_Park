new Vue({
    el:'#back',
    methods: {   
        show:function(todo){
            document.querySelector('.backLightbox').style.display="flex";
        },            
        close:function(todo){
            // alert('123321');
            document.querySelector('.backLightbox').style.display="none";
        }    
    }
})