Vue.component('item-component', {
    template: `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">
            <div class="card-header"></div>
            <div class="card-pic">
                <div class="pic"> 
                    <a :href="'./visitor_experience_page.html?page-no=' + item.article_no">
                        <img :src="item.article_image" alt="感覺很恐怖">
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
                <p>{{item.article_content}}</p>
                <a :href="'./visitor_experience_page.html?page-no=' + item.article_no" class="mdBtn-more">MORE</a>
            </div>
            <div class="card-footer"></div>
        </div>
    </div>
    `,
    props: {
        item: Object
    }
});

new Vue({
    el: '#voice-of-tourists',
    data: {
        cards:[],
        focusKey:'',
    },
    created() {
        let xhr = new XMLHttpRequest();
        xhr.onload = () =>{
            this.cards = JSON.parse(xhr.responseText);
            console.log(this.cards);
        }
        xhr.open("get","php/get_back_discuss.php",true);
        xhr.send(null);
    },
    computed: {  
        showPopupItem(){
            return this.cards.find(v => v.article_no == this.focusKey) ?? this.cards[0];
        },
    },
    methods: {  // 函數大部分放這裡!
        setFocusId(article_no){
            console.log(article_no)
            this.focusKey = article_no;
            this.$nextTick(() => {
                console.log(this.showPopupItem)
            })
        }
    },
});

