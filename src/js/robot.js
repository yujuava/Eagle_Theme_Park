
new Vue({
    el: '#cus_service',
    component: {},
    computed: {},
    created() {
        this.showTimer();
    },
    watch: {},
    mounted() { },
    props: {},
    destroyed() { },
    data() {
        return {
            openRobot: false,
            customerText: "",
            info: [
                {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    name: "robot",
                    content: "歡迎蒞臨伊果樂園~我是果果，有什麼需要協助的嗎?",
                    question: [],
                },
            ],
            timer: null,
            robotQuestion: [
                { id: 1, content: "最新優惠活動是什麼?", index: 1 },
                { id: 2, content: "肚子餓了，哪裡有餐廳?", index: 2 },
                { id: 3, content: "該如何抵達伊果樂園?", index: 3 },
                { id: 4, content: "我要在哪裡購票?", index: 4 },
                { id: 5, content: "哪裡可以買到紀念品?", index: 5 },
            ],
            robotAnswer: [
                { id: 1, content: "請直接查看最新消息唷~", index: 1 },
                { id: 2, content: "園區內有三個主題餐廳以及多個小攤販~讓你盡情玩樂不怕餓肚子", index: 2 },
                { id: 3, content: "本園區位置方便, 自行開車或搭乘大眾交通都可以", index: 3 },
                { id: 4, content: "我們共有三種票券, 可以網路或現場購票~", index: 4 },
                { id: 5, content: "園區內提供多種商品, 也可以網路購買唷~", index: 5 },
            ],
        };
    },
    methods: {
        show() {
            this.openRobot = true;
        },
        // 用戶發送訊息
        sentMsg() {
            clearTimeout(this.timer);
            this.showTimer();
            let text = this.customerText.trim();
            if (text != "") {
                var obj = {
                    type: "rightinfo",
                    time: this.getTodayTime(),
                    content: text,
                };
                this.info.push(obj);
                this.appendRobotMsg(this.customerText);
                this.customerText = "";
                this.$nextTick(() => {
                    var contentHeight = document.getElementById("content");
                    contentHeight.scrollTop = contentHeight.scrollHeight;
                });
            }
        },
        // 機器人回答消息
        appendRobotMsg(text) {
            clearTimeout(this.timer);
            this.showTimer();
            text = text.trim();
            let answerText = "";
            let flag;
            for (let i = 0; i < this.robotAnswer.length; i++) {
                if (this.robotAnswer[i].content.indexOf(text) != -1) {
                    flag = true;
                    answerText = this.robotAnswer[i].content;
                    break;
                }
            }
            if (flag) {
                let obj = {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    name: "robot",
                    content: answerText,
                    question: [],
                };
                this.info.push(obj);
            } else {
                answerText = "您可能想問: ";
                let obj = {
                    type: "leftinfo",
                    time: this.getTodayTime(),
                    name: "robot",
                    content: answerText,
                    question: this.robotQuestion,
                };
                this.info.push(obj);
            }
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            });
        },
        sentMsgById(val, id) {
            clearTimeout(this.timer);
            this.showTimer();

            let robotById = this.robotAnswer.filter((item) => {
                return item.id == id;
            });
            let obj_l = {
                type: "leftinfo",
                time: this.getTodayTime(),
                name: "robot",
                content: robotById[0].content,
                question: [],
            };
            let obj_r = {
                type: "rightinfo",
                time: this.getTodayTime(),
                name: "robot",
                content: val,
                question: [],
            };
            this.info.push(obj_r);
            this.info.push(obj_l);
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            });
        },
        // 點擊機器人的單個問題
        clickRobot(val, id) {
            this.sentMsgById(val, id);
        },
        // 結束語
        endMsg() {
            let happyEnding = {
                type: "leftinfo",
                time: this.getTodayTime(),
                content: "很高興為您服務，期待下次見",
                question: [],
            };
            this.info.push(happyEnding);
            this.$nextTick(() => {
                var contentHeight = document.getElementById("content");
                contentHeight.scrollTop = contentHeight.scrollHeight;
            });
        },
        showTimer() {
            this.timer = setTimeout(this.endMsg, 1000 * 60);
        },
        getTodayTime() {
            // 獲取當前時間
            var day = new Date();
            let seconds = day.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds;
            } else {
                seconds = seconds;
            }
            let minutes = day.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            } else {
                minutes = minutes;
            }
            let time =
                day.getFullYear() +
                "-" +
                (day.getMonth() + 1) +
                "-" +
                day.getDate() +
                " " +
                day.getHours() +
                ":" +
                minutes +
                ":" +
                seconds;
            return time;
        },
    }

})