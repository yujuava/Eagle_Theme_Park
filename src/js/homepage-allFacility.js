Vue.component('card-component',{
    template:`
    <div class="card card-bdr">
        <div class="pic card-bdr">
            <div class="area">
                {{facilityRow.fac_area}}<br>
                {{facilityRow.fac_area}}
            </div>
        </div>
        <div class="info">
            <h5>{{facilityRow.fac_name}}</h5>
            <p>{{facilityRow.fac_descrip}}</p>
        </div>
    </div>

    `,
    props:{
        item:Object
    }
});

new Vue({
    el:'#all-thrill-ride',
    data:{
        currentFilter: 'ALL',   //自己設定 currentFilter的初始屬性值為ALL
    },
    // new
    data() {
        return {
            facilityRows:[],
        }
    },
    computed: {  // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)

        //回傳名字
        // cardTitles(){
        //     this.card.map(function(v){
        //         return v.name;
        //     })
        // },


        //第一個篩選
        // cardsFilter1(){
        //     if(this.currentFilter == "ALL")return this.facilityRows;
        //     return this.facilityRows.filter(v => v.fac_area == this.currentFilter)
        // },

        //第貳個篩選
        // cardsFilter2() {
        //     return this.cardsFilter1.filter(item => {       //return第一次篩選完的結果並且再篩一次
        //         let rainPass = true;    //先宣告雨天 | 孕婦 | 輪椅 =  true
        //         let pregnantPass = true;
        //         let wheelchairPass = true;
        //         if (this.rain){rainPass = item.rain};   //如果this.rain = true(就是物件裡有自選成true的那些設施)，
        //         if (this.pregnant) pregnantPass = item.pregnant;    //
        //         if (this.wheelchair) wheelchairPass = item.wheelchair;
        //         // console.log(rainPass)
        //         return rainPass && pregnantPass &&wheelchairPass;
        //     });
        // },
        facilityRow(){
            let results =[]
            this.facilityRows.foreach( v => {
                results.push({
                    key: v.fac_no,
                    name: str,
                })
            })
            alert(v)
            return results;
        },
    },
    methods: {  // 函數大部分放這裡!

        setFilter(filter) {
            this.currentFilter = filter;
		},   

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
