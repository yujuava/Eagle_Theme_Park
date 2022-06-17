Vue.component('list-component', {
    template: `
    <div>
        <div class="card">
            <div class="card-header"></div>
            <div class="card-pic">
                <div class="pic">
                    <img :src="item.article_image">
                </div>  
            </div>
            <div class="card-body">
                
                <div class="mem">
                    <div class="mem-pic">
                        <img :src="item.article_image">
                    </div>
                    
                    <div class="mem-name">{{item.mem_name}}</div>
                </div>
                <p>{{item.article_content}}</p>
            </div>
            <div class="card-footer"></div>
        </div>
        
        <div class="message-area">
            <div class="item" v-for="comment in comments" :key="comment.comment_no">
                <div class="pic">
                    <img :src="item.article_image" alt="">
                </div>
                <div class="message-strip">
                    <div class="message">
                        <div class="name">{{comment.mem_name}}</div>
                        <div class="message-content">
                            <p>{{comment.comment_content}}</p>
                            <div class="time">{{comment.comment_date}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="message-bar">
                <div class="pic">
                    <img :src="item.article_image" alt="">
                </div>
                <input type="text" placeholder="留言">
                <a href="#"><i class="fa-solid fa-paper-plane"></i></a>
            </div>
            <div class="message-footer"></div>
        </div>
    </div>
    `,
    props: {
        item: Object,
        comments: {
            type: Array,
            default: [],
        },
    }
})
new Vue({
    el: '#pages',
    data: {
        article: { "article_no": 1, "mem_no": 1, "article_title": "", "article_date": "", "article_content": "", "article_image": "", "mem_name": "" },
        comments: {},
    },
    methods: {
        async getArticle() {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "./php/articleAndComment.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

            xhr.onload = () => {
                this.article = JSON.parse(xhr.responseText)[0][0];
                this.comments = JSON.parse(xhr.responseText)[1];
            };
            // substract currrent page no
            let currentURL = window.location.href;
            currentURL.split("page-no=");

            let dataset = {};
            dataset.articleNo = currentURL.split("page-no=")[1];
            let data_info = `json=${JSON.stringify(dataset)}`;
            // 3. sent data to php
            xhr.send(data_info);
        },
        async sendComment() {
            // 這邊處理點擊後送最新的留言到php
            // 完成後重新呼叫文章留言內容
            //     xhr.onload = () => {
            //         this.getArticle();
            //    };
        },
    },
    created() {
        let uri = window.location.href.split('?');
        if (uri.length == 2) {
            let vars = uri[1].split('&');
            let getVars = {};
            let tmp = '';
            vars.forEach(function (v) {
                tmp = v.split('=');
                if (tmp.length == 2)
                    getVars[tmp[0]] = tmp[1];
            });
            console.log(getVars);
            // do 
        }
    },
    mounted() {
        this.getArticle();
    }
})
