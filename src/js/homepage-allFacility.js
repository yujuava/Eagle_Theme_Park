const cards=[{
    id:1,
    name:'伊果飛車',
    area1:"紐約",
    area2:"都會",
    img: './images/facilities.jpg',
    info:"亞洲第一座U型滑軌懸吊式螺旋雲霄飛，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里。",
    rain:true,
    pregnant:false,
    wheelchair:false,
},
{
    id:2,
    name:'仙女散花',
    area1:"印安",
    area2:"部落",
    img: './images/facilities8 (24).jpg',
    info:"亞洲第一座U型滑軌懸吊式螺旋雲霄飛，瞬間最高時速122公里。",
    rain:false,
    pregnant:true,
    wheelchair:false,
},
{   
    id:3,
    name:'天旋地轉',
    area1:"紐約",
    area2:"都會",
    img: './images/facilities8 (8).jpg',
    info:"亞洲第一座U型滑軌懸吊式螺旋雲霄飛，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里。",
    rain:false,
    pregnant:false,
    wheelchair:true,
},
{
    id:4,
    name:'摩天輪',
    area1:"西部",
    area2:"農莊",
    img: './images/facilities2.jpg',
    info:"亞洲第一座U型滑軌懸吊式螺旋雲霄飛，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里。",
    rain:true,
    pregnant:true,
    wheelchair:true,
},
{
    id:5,
    name:'大海盜',
    area1:"印安",
    area2:"部落",
    img: './images/facilities8 (2).jpg',
    info:"大海盜在搖動擺盪時，您可體驗庫克船長當年乘風破浪、冒險犯難的感受，一顆心隨著船起伏，驚險又刺激，可說是一種挑戰極限的設施。",
    rain:true,
    pregnant:false,
    wheelchair:false,
},
{
    id:6,
    name:'空中UFO',
    area1:"西部",
    area2:"農莊",
    img: './images/facilities8 (18).jpg',
    info:"以三百六十度轉動，倒轉世界狂飆，瞬間帶領您進入超高速的神秘世界中，有膽量的朋友千萬別放棄這個挑戰自己的機會。",
    rain:false,
    pregnant:false,
    wheelchair:false,
},
{
    id:7,
    name:'旋轉木馬',
    area1:"紐約",
    area2:"都會",
    img: './images/facilities8 (1).jpg',
    info:"在美侖美奐的皇宮中，您可以幻想自己是小王子或是小公主，乘著飛天白馬輕鬆遨遊在皇宮中，觀賞、巡視皇宮各角落的景觀。",
    rain:true,
    pregnant:true,
    wheelchair:false,
},
{
    id:8,
    name:'極速飛鷹',
    area1:"紐約",
    area2:"都會",
    img: './images/facilities8 (20).jpg',
    info:"在九十秒歷程中，挑戰達六層樓高的巨幅擺盪，以及雙腳懸空人體極限3G重力加速度外拋與三百六十度正反向空中旋轉，邀請年輕遊客前來挑戰膽量極限。",
    rain:false,
    pregnant:false,
    wheelchair:false,
},
{
    id:9,
    name:'伊飛沖天',
    area1:"西部",
    area2:"農莊",
    img: './images/facilities8 (3).jpg',
    info:"亞洲第一座U型滑軌懸吊式螺旋雲霄飛，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里。",
    rain:false,
    pregnant:false,
    wheelchair:false,
},
{
    id:10,
    name:'自由落體',
    area1:"印安",
    area2:"部落",
    img: './images/facilities8 (2).png',
    info:"搭乘著座椅緩緩上升時，您在忐忑不安的心情中可以欣賞伊果樂園全貌並鳥瞰關西地區優美的風景。上升至最高點時，座椅將以自由落體的G速度向下墬落。",
    rain:false,
    pregnant:false,
    wheelchair:true,
},
{
    id:11,
    name:'急流泛舟',
    area1:"西部",
    area2:"農莊",
    img: './images/water.jpg',
    info:"這是美國大西部內最大型的遊樂設施，亦是目前國內最大型的人工泛舟河道，水道全長七百四十公尺，每艘圓型橡膠船可乘坐二至九人，全程約七分鐘。",
    rain:true,
    pregnant:false,
    wheelchair:false,
},
{
    id:12,
    name:'飛鷹歷險',
    area1:"印安",
    area2:"部落",
    img: './images/facilities8 (4).jpg',
    info:"從火山口三層樓高的急流處瞬間俯衝而下，剎那間驚險的讓您來不及尖叫，剌激的感覺就在那一瞬間，最適合心臟強、膽子夠大、並且愛刺激的朋友前往冒險。",
    rain:false,
    pregnant:false,
    wheelchair:false,
},
]

Vue.component('card-component',{
    template:`
    <div class="card card-bdr">
        <div class="pic card-bdr">
            <img :src="item.img" alt="Image">
            <div class="area">
                {{item.area1}}<br>
                {{item.area2}}
            </div>
        </div>
        <div class="info">
            <h5>{{item.name}}</h5>
            <p>{{item.info}}</p>
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
        cards,
        currentFilter: 'ALL',   //自己設定 currentFilter的初始屬性值為ALL
        count: 0,
        rain: false,
        pregnant: false,
        wheelchair: false,
    },
    computed: {  // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)

        cardTitles() {
            return this.cards.map(v => v.name); 
        },

        //以上是簡寫，以下是完整寫法
        //把cards這個陣列放進v陣列，並取出v.name，然後回傳 這個動作是"cardTitle()"這個函式
        cardTitles(){
            this.card.map(function(v){
                return v.name;
            })
        },

        // cardsFilter1() {
        //     return this.cards.filter(item =>item.area1 == this.currentFilter || this.currentFilter == 'ALL');
        // },

        //篩選 this.currentFilter 等於 ALL(初始值)的時候 或 等於 item.area1(紐約|印安|西部) 放進 "item"裡面，並回傳，
        // 這個動作是"cardsFilter1()"這個函式
        //*只有箭頭函式的this會指到vue本身，所以非箭頭函式要加上let thus = this;

        //第一個篩選

        cardsFilter1(){
            let thus = this;
            let results = this.cards.filter(function(item){
                return item.area1 == thus.currentFilter || thus.currentFilter == 'ALL'
            })
            return results;
        },

        // cardsFilter1(){
        //     if(this.currentFilter == "ALL")return this.cards;
        //     return this.cards.filter(v => v.area1 == this.currentFilter)

        // },

        //第貳個篩選
        cardsFilter2() {
            return this.cardsFilter1.filter(item => {       //return第一次篩選完的結果並且再篩一次
                let rainPass = true;    //先宣告雨天 | 孕婦 | 輪椅 =  true
                let pregnantPass = true;
                let wheelchairPass = true;
                if (this.rain){rainPass = item.rain};   //如果this.rain = true(就是物件裡有自選成true的那些設施)，
                if (this.pregnant) pregnantPass = item.pregnant;    //
                if (this.wheelchair) wheelchairPass = item.wheelchair;
                // console.log(rainPass)
                return rainPass && pregnantPass &&wheelchairPass;
            });
        },


        tabList() {
            let arr = [];
            let results= [];
            this.cards.forEach(v => {
                const str = v.area1 + v.area2;
                if (arr.indexOf(str) == -1) {
                    arr.push(str);
                    results.push({
                        key: v.area1,
                        name: str,
                    });
                }
            })

            return results;
        },
    },
    methods: {  // 函數大部分放這裡!

        setFilter(filter) {
            this.currentFilter = filter;
		},   

    },
})
