Vue.component('card-component', {
    methods: {
        openNews: function (todo) {
            document.querySelector('.news_inner').style.display = "flex";
        }
    },
    template: `
    <div @click="openNews" class="newspaper_item">
        <h4>{{item.news_name}}</h4>
        <div class="picture">
            <img :src="'images//' + item.news_pic">
        </div>
        <div class="inner_text">
            <p>{{item.news_content}}</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    `,
    props: {
        item: Object
    }
});

Vue.component('news-component',{
    methods: {

    },
    template:`
    <div class="change_inner">
        <h4>{{item.news_name}}</h4>
        <div class="inner">
            <div class="inner_picture">
                <img :src="'images//' + item.news_pic">
            </div>
            <div class="inner_artical">
                <p>{{item.news_content}}</p>
            </div>
        </div>
    </div>
    `,
    props:{
        item:Object,
        newsSource:Object,
    }
});

new Vue({
    el: '#all_news',
    data: {
        cards: [],
        focusKey: '',
    },
    computed: {
        showPopupItem() {
            return this.cards.find(v => v.news_no == this.focusKey) ?? this.cards[0];
        },
    },
    methods: {
        close: function (todo) {
            document.querySelector('.news_inner').style.display = "none";
        },
        setFocusId(news_no) {
            console.log(news_no)
            this.focusKey = news_no;
            this.$nextTick(() => {
                console.log(this.showPopupItem)
            })
        },
    },

    created() {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            // alert();
            this.cards = JSON.parse(xhr.responseText); //把

        }
        xhr.open("get", "php/back_news.php", true); //決定請求送至PHP
        xhr.send(null);
    },
}),



new Vue({
    el:'#facility',
    data:{
        facilityRows:[],
    },
    computed: {  
        filterFacDate1() {   //星期一維修
            let filterArr = this.facilityRows.filter(v => v.fac_maintain_date == 1)
            return filterArr;
        },
        filterFacDate2() {   //星期二維修
            let filterArr = this.facilityRows.filter(v => v.fac_maintain_date == 2)
            return filterArr;
        },
        filterFacDate3() {   //星期三維修
            let filterArr = this.facilityRows.filter(v => v.fac_maintain_date == 3)
            return filterArr;
        },
        filterFacDate4() {   //星期四維修
            let filterArr = this.facilityRows.filter(v => v.fac_maintain_date == 4)
            return filterArr;
        },
        filterFacDate5() {   //星期五維修
            let filterArr = this.facilityRows.filter(v => v.fac_maintain_date == 5)
            return filterArr;
        },
    },
    methods: { 

    },
    created() {
        //==========================================================
        //==============撈設施資料==============
        let facXhr = new XMLHttpRequest();
        facXhr.onload = () => {
            this.facilityRows = JSON.parse(facXhr.responseText);
            console.log("最新消息的設施rows:",this.facilityRows);
        },
        facXhr.open("get","./php/get_back_facility.php",true);
        facXhr.send(null);
    },
})