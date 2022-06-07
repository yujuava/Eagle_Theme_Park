 
 const cards =[{
    id:1,
    img:'./images/themePark__facWest_tourist_Lg_2.jpg',
    info:'園區暑假表演多，表演人員都很熱情，會和遊客、小朋友互動。',
 },
{
    id:2,
    img:'./images/friend.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:3,
    img:'./images/smiley-female.jpg',
    info:'適合親子打發時間用，親子時光無價啊，玩好玩滿玩得好開心哈哈。',
},
{
    id:4,
    img:'./images/happygirl.jpg',
    info:'遊樂區有適合小朋友玩的，但是也是有許多恐怖的設施，極速飛鷹啊，大家都很愛的衝刺濺水的獨木舟！是真的很刺激。',
},
{
    id:5,
    img:'./images/happy2.jpeg',
    info:'疫情期間很多游樂設施都沒開，還想說周二人少，結果發現超多學生，假日肯定人更多，洗手間擦手紙也沒有，烘乾機也不能用，而且有的馬桶超髒的。',
},
{
    id:6,
    img:'./images/happy3.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:7,
    img:'./images/happy4.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:8,
    img:'./images/themePark__attrIndian_3.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。', 
},
{
    id:9,
    img:'./images/themePark__attrIndian_2.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:10,
    img:'./images/happy.jpeg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:11,
    img:'./images/friends-having-fun.jpg',
    info:'伊果樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模。',
},
{
    id:12,
    img:'./images/smiley-female.jpg',
    info:'適合親子打發時間用，親子時光無價啊，玩好玩滿玩得好開心哈哈。',
}]


Vue.component('item-component',{
    template:`
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-pic">
                <div class="pic">
                    <a href="./visitor_experience_page.html">
                        <img :src="item.img" alt="感覺很恐怖">
                    </a>
                </div>
            </div>

            <div class="person">
                <div class="mem">
                    <img src="./images/mem.png" alt="老鷹">
                </div>

                <div class="mem-name">小鷹</div>

            </div>

            <div class="card-body">
                <p>{{item.info}}</p>
                <a href="visitor_experience_page.html" class="mdBtn-more">MORE</a>
            </div>
            <div class="card-footer"></div>
        </div>
    </div>
    `,
    props:{
        item:Object
    }
});

new Vue({
    el:'#voice-of-tourists',
    data:{
        cards,
    },
    computed: {  // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)

    },
    methods: {  // 函數大部分放這裡!


    },
})