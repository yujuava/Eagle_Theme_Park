Vue.component('card-component',{
    template:`
    <div class="card card-bdr">
        <div class="pic card-bdr">
            <div class="area">
            {{item.fac_area}}<br>
               {{item.fac_area}}
            </div>
        </div>
        <div class="info">
            <h5>{{item.fac_name}}</h5>
            <p>{{item.fac_descrip}}</p>
        </div>
    </div>

    `,
    props:{
        item:Object,
    }
});

new Vue({
    el:'#all-thrill-ride',
    data:{
        item:[],
        facilityRows:[],
    },
    // new
    computed: {  // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)
    },
    methods: {  // 函數大部分放這裡!
        // setFilter(filter) {
        //     this.currentFilter = filter;
		// },   
    },
    //new
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
