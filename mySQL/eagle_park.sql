-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-13 15:03:57
-- 伺服器版本： 8.0.29
-- PHP 版本： 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `eagle_park`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `article_no` int NOT NULL COMMENT '文章編號',
  `mem_no` int NOT NULL COMMENT '會員編號',
  `article_title` varchar(255) NOT NULL COMMENT '文章標題',
  `article_date` datetime NOT NULL COMMENT '文章發布日期',
  `article_content` varchar(255) NOT NULL COMMENT '文章內容,最大字數300字',
  `article_image` varchar(255) NOT NULL COMMENT '文章圖片'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='發布文章';

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`article_no`, `mem_no`, `article_title`, `article_date`, `article_content`, `article_image`) VALUES
(1, 1, '西部農莊一日遊', '2022-02-01 10:20:25', '好吃好玩的都在這了 一早9:00進場玩到4:30出場，5:00到家了', './image/001.jpg'),
(2, 2, '紐約都會打卡', '2022-03-01 17:36:11', '全台灣我私心最喜歡的主題樂園 美國大西部搭飛鷹', './images/002.jpg'),
(3, 3, '遊行表演一定要看', '2022-04-01 20:37:03', '遊街表演的外國人讓氣氛變得更豐富，有機會一定要停下來看看', './images/003.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `comment`
--

CREATE TABLE `comment` (
  `comment_no` int NOT NULL,
  `article_no` int NOT NULL,
  `mem_no` int NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_content` varchar(255) NOT NULL COMMENT '最大字數300字'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='文章留言';

--
-- 傾印資料表的資料 `comment`
--

INSERT INTO `comment` (`comment_no`, `article_no`, `mem_no`, `comment_date`, `comment_content`) VALUES
(1, 1, 2, '2022-02-15 11:38:06', '跟其他樂園比起來，滿適合小朋友去的'),
(2, 2, 3, '2022-06-07 21:38:06', '關園時間滿早的，有空先去坐小火車看動物'),
(3, 2, 1, '2022-03-22 21:40:36', '假日人非常多，每樣設施大概排隊40-90分鐘');

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_no` int NOT NULL,
  `mem_no` int NOT NULL,
  `cupon_status` tinyint NOT NULL COMMENT '0:狀態未定, 1:狀態未定'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='優惠劵';

-- --------------------------------------------------------

--
-- 資料表結構 `cust_service`
--

CREATE TABLE `cust_service` (
  `key_word_no` int NOT NULL COMMENT '關鍵字編號',
  `key_word` varchar(10) NOT NULL COMMENT '關鍵字',
  `key_reply` varchar(30) NOT NULL COMMENT '關鍵字回應'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='客服機器人';

--
-- 傾印資料表的資料 `cust_service`
--

INSERT INTO `cust_service` (`key_word_no`, `key_word`, `key_reply`) VALUES
(1, '你好', '歡迎蒞臨依果樂園, 我是果果~有什麼需要協助的嗎?'),
(2, '飲食', '園區內有三個主題餐廳以及多個小攤販~讓你盡情玩樂不怕餓肚子'),
(3, '交通', '本園區位置方便, 自行開車或搭乘大眾交通都可以'),
(4, '購票', '我們共有三種票券, 可以網路或現場購票~'),
(5, '商品', '園區內提供多種商品, 也可以網路購買唷~');

-- --------------------------------------------------------

--
-- 資料表結構 `emp`
--

CREATE TABLE `emp` (
  `emp_no` int NOT NULL COMMENT '管理員編號',
  `emp_id` varchar(15) NOT NULL COMMENT '管理員帳號',
  `emp_psw` varchar(15) NOT NULL COMMENT '管理員密碼',
  `emp_status` tinyint NOT NULL COMMENT '管理員狀態(0:停權 1:正常)',
  `emp_enroll_date` datetime NOT NULL COMMENT '管理員建立時間(order by date DESC)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理員';

--
-- 傾印資料表的資料 `emp`
--

INSERT INTO `emp` (`emp_no`, `emp_id`, `emp_psw`, `emp_status`, `emp_enroll_date`) VALUES
(1, 'eagle1', 'eagle1', 1, '2022-05-02 10:16:36'),
(2, 'eagle2', 'eagle2', 1, '2022-05-09 11:36:36'),
(3, 'eagle3', 'eagle3', 1, '2022-05-16 10:19:54'),
(4, 'eagle4', 'eagle4', 0, '2022-05-23 12:19:54');

-- --------------------------------------------------------

--
-- 資料表結構 `facility`
--

CREATE TABLE `facility` (
  `fac_no` int NOT NULL COMMENT '設施編號',
  `fac_pic` varchar(20) NOT NULL,
  `fac_name` varchar(10) NOT NULL COMMENT '設施名稱',
  `fac_descrip` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '設施描述',
  `fac_status` tinyint NOT NULL COMMENT '設施狀態(0: 維修 1: 正常)',
  `fac_area` varchar(4) NOT NULL COMMENT '設施所屬園區',
  `fac_maintain_date` tinyint NOT NULL COMMENT '設施維修日(1:星期一 2:星期二 3:星期三 4:星期四 5:星期五 6:星期六 7:星期日)',
  `fac_chart` tinyint NOT NULL COMMENT '熱門設施排名(0:其他 1: 第一名 2: 第二名 3: 第三名)',
  `fac_rainy` tinyint NOT NULL COMMENT '雨天可乘(0: 不行 1: 可以)',
  `fac_preg` tinyint NOT NULL COMMENT '孕婦可乘(0: 不行 1: 可以)',
  `fac_wheelchair` tinyint NOT NULL COMMENT '輪椅可乘(0: 不行 1: 可以)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='設施管理';

--
-- 傾印資料表的資料 `facility`
--

INSERT INTO `facility` (`fac_no`, `fac_pic`, `fac_name`, `fac_descrip`, `fac_status`, `fac_area`, `fac_maintain_date`, `fac_chart`, `fac_rainy`, `fac_preg`, `fac_wheelchair`) VALUES
(1, 'facilities8 (20).jpg', '極速飛鷹', '在九十秒歷程中，挑戰達六層樓高的巨幅擺盪，以及雙腳懸空人體極限3G重力加速度外拋與三百六十度正反向空中旋轉，邀請年輕遊客前來挑戰膽量極限。', 1, '紐約都會', 6, 1, 0, 0, 0),
(2, 'facilities8 (2).png', '自由落體', '搭乘著座椅緩緩上升時，您在忐忑不安的心情中可以欣賞伊果樂園全貌並鳥瞰關西地區優美的風景。上升至最高點時，座椅將以自由落體的G速度向下墬落。', 1, '印安部落', 3, 2, 0, 0, 1),
(3, 'facilities8 (24).jpg', '天女散花', '乘著風遊蕩在自由的風裡這畫面就像仙女般的翩翩起舞。', 0, '印安部落', 2, 3, 0, 1, 0),
(4, 'facilities8 (18).jpg', '空中UFO', '以三百六十度轉動，倒轉世界狂飆，瞬間帶領您進入超高速的神秘世界中，有膽量的朋友千萬別放棄這個挑戰自己的機會。', 0, '西部農莊', 4, 0, 0, 0, 0),
(5, 'facilities2.jpg', '摩天輪', '這可說是西部農莊的小小摩天輪，雖然不高，但玩過的遊客不管是小朋友、銀髮族還是熱戀的情侶都讚不絕口，在摩天蓬車上它帶給您無限的歡樂，也讓您心中裝滿了歡樂的記憶。', 1, '西部農莊', 1, 0, 1, 1, 1),
(6, 'facilities8 (1).jpg', '旋轉木馬', '在美侖美奐的皇宮中，您可以幻想自己是小王子或是小公主，乘著飛天白馬輕鬆遨遊在皇宮中，觀賞、巡視皇宮各角落的景觀。', 1, '紐約都會', 5, 0, 1, 1, 0),
(7, 'facilities.jpg', '伊果飛車', '當列車從最高點俯衝而下時，還會發出響亮的鈴鐺聲，就像是火車的汽笛般。全程雖僅需30秒，但卻已足以讓您回味無窮。', 1, '紐約都會', 3, 0, 1, 0, 0),
(8, 'facilities8 (8).jpg', '天旋地轉', '坐上高達18層樓加上360度大旋轉明星遊樂設施，心理的忐忑在醞釀翻轉，天旋地轉啟動後，才是尖叫聲此起彼落無限延續的開端。', 1, '紐約都會', 4, 0, 0, 0, 1),
(9, 'facilities8 (2).jpg', '大海盜', '大海盜在搖動擺盪時，您可體驗庫克船長當年乘風破浪、冒險犯難的感受，一顆心隨著船起伏，驚險又刺激，可說是一種挑戰極限的設施。', 1, '印安部落', 5, 0, 1, 0, 0),
(10, 'facilities8 (4).jpg', '飛鷹歷險', '從火山口三層樓高的急流處瞬間俯衝而下，剎那間驚險的讓您來不及尖叫，剌激的感覺就在那一瞬間，最適合心臟強、膽子夠大、並且愛刺激的朋友前往冒險。', 1, '印安部落', 1, 0, 0, 0, 0),
(11, 'facilities8 (3).jpg', '伊飛沖天', '亞洲第一座U型滑軌懸吊式螺旋雲霄飛，軌道全長190公尺，最大落差達56公尺，瞬間最高時速122公里。', 1, '西部農莊', 2, 0, 0, 0, 0),
(12, 'water.jpg', '激流泛舟', '目前國內最大型的人工泛舟河道，水道全長七百四十公尺，每艘圓型橡膠船可乘坐二至九人，全程約七分鐘。', 1, '西部農莊', 4, 0, 1, 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `mem_no` int NOT NULL COMMENT '會員編號',
  `mem_name` varchar(50) NOT NULL COMMENT '會員名',
  `mem_lastname` varchar(15) NOT NULL COMMENT '會員姓氏',
  `mem_id` varchar(15) NOT NULL COMMENT '會員帳號',
  `mem_psw` varchar(15) NOT NULL COMMENT '會員密碼',
  `mem_tel` varchar(10) NOT NULL COMMENT '電話',
  `mem_mail` varchar(40) NOT NULL COMMENT 'E-mail',
  `mem_state` tinyint(1) NOT NULL COMMENT '會員狀態\r\n(0.正常,1停權)',
  `mem_address` varchar(50) NOT NULL COMMENT '會員地址',
  `mem_country` varchar(50) NOT NULL COMMENT '會員國家/地區',
  `mem_birth` date NOT NULL COMMENT '會員生日',
  `mem_date` date NOT NULL COMMENT '註冊時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='會員';

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`mem_no`, `mem_name`, `mem_lastname`, `mem_id`, `mem_psw`, `mem_tel`, `mem_mail`, `mem_state`, `mem_address`, `mem_country`, `mem_birth`, `mem_date`) VALUES
(1, '小明', '王', 'wang123', 'wang1234', '0935111222', 'wang123@gmail.com', 0, '中壢區民權路2號', '台灣', '1991-01-01', '2022-02-02'),
(2, '小強', '陳', 'chen', 'chen1234', '0935222333', 'chen@gmail.com', 0, '中壢區民權路3號', '台灣', '1991-01-05', '2022-03-04'),
(3, '靜香', '林', 'smellgood', 'smellgood123', '0935333444', 'smellgood@gmail.com', 0, '中壢區民權路4號', '台灣', '1990-12-10', '2022-06-05'),
(4, '丞軒', '葉', 'eagleyeh', 'eagleyeh', '0912345678', 'eagleyeh@gmail.com', 1, '桃園市中壢區復興路46號', '台灣', '1996-06-01', '2022-06-07');

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `news_no` int NOT NULL COMMENT '消息編號',
  `news_name` varchar(10) NOT NULL COMMENT '消息名稱',
  `news_content` varchar(50) NOT NULL COMMENT '消息內容',
  `news_date` datetime NOT NULL COMMENT '發布日期(order by date DESC)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='最新消息';

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`news_no`, `news_name`, `news_content`, `news_date`) VALUES
(1, '休園公告', '2022/06/28-06/30 因進行設施調整及維護，將暫停對外開放 造成您的不便，敬請見諒。', '2022-06-06 16:46:03'),
(2, '優惠快訊', '慶開幕! 當月壽星購買門票只要『半價』 ! 快揪親朋好友一起來伊果樂園留下美好回憶', '2022-05-25 10:46:03'),
(3, '防疫須知', '因疫情影響，伊果樂園一切將配合政府防疫措施，並落實每小時消毒，疫情防治，我們一起努力！', '2022-06-01 11:30:42');

-- --------------------------------------------------------

--
-- 資料表結構 `postcard`
--

CREATE TABLE `postcard` (
  `postcard_no` int NOT NULL,
  `mem_no` int NOT NULL,
  `postcard_co_no` int NOT NULL,
  `postcard_bg_pic_no` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='明信片';

-- --------------------------------------------------------

--
-- 資料表結構 `postcard_co`
--

CREATE TABLE `postcard_co` (
  `postcard_co_no` int NOT NULL,
  `photo_path` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='明信片封面';

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_no` int NOT NULL COMMENT '商品編號',
  `product_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品名稱',
  `product_price` int NOT NULL COMMENT '商品價格',
  `product_infor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '商品資訊',
  `product_amount` int NOT NULL DEFAULT '1' COMMENT '商品預設數量',
  `product_pic` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品圖片',
  `product_st` tinyint NOT NULL COMMENT '商品狀態(0.正常,1下架,2缺貨)',
  `product_creat` date DEFAULT NULL COMMENT '建立日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品';

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_no`, `product_name`, `product_price`, `product_infor`, `product_amount`, `product_pic`, `product_st`, `product_creat`) VALUES
(1, '伊果保溫瓶', 600, '真空長效保溫，適合戶外、運動、居家使用。', 1, 'shop_bottle.png', 0, '2022-06-01'),
(2, '伊果帽', 300, '夏天防曬冬天防寒，讓你每次都亮麗出場的超萬用帽型', 1, 'shop_cap.png', 0, '2022-06-01'),
(3, '伊果短T', 400, '美式休閒時尚服飾，引領潮流精神', 1, 'shop_cloth.png', 0, '2022-06-01'),
(4, '伊果馬克杯', 300, '日系簡約風，實用與質感兼具，讓你愛不釋手', 1, 'shop_cup.png', 0, '2022-06-01'),
(5, '伊果鑰匙圈', 150, '伊果人氣商品，網路人氣推薦，豐富有質感', 1, 'shop_keyring.png', 0, '2022-06-01'),
(6, '伊果口罩(10入)', 150, '在防疫的同時兼具時尚美感，讓你出門開心又安心', 1, 'shop_mask.png', 0, '2022-06-01'),
(7, '伊果雨衣', 200, '攜帶方便，輕鬆收納，出門再也不怕下雨天', 1, 'shop_raincoat.png', 0, '2022-06-01');

-- --------------------------------------------------------

--
-- 資料表結構 `product_order`
--

CREATE TABLE `product_order` (
  `product_order_no` int NOT NULL COMMENT '商品訂單編號',
  `mem_no` int NOT NULL COMMENT '會員編號',
  `coupon_no` int NOT NULL COMMENT '優惠券編號',
  `order_shipping` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '訂單狀態(0:未出貨、1:已出貨、2:已收貨、3:訂單完成、4:已取消)',
  `product_order_time` date DEFAULT NULL COMMENT '下訂時間',
  `product_order_way` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '取貨方式(0:宅配、1:超商取貨)',
  `product_order_place` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '取貨地點',
  `product_order_over_time` datetime DEFAULT NULL COMMENT '取貨時間',
  `product_order_real_price` int DEFAULT NULL COMMENT '實際金額(打折後)',
  `product_order_tp` int NOT NULL COMMENT '總價'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品訂單';

-- --------------------------------------------------------

--
-- 資料表結構 `product_order_item`
--

CREATE TABLE `product_order_item` (
  `product_order_no` int NOT NULL COMMENT '商品訂單編號',
  `product_no` int NOT NULL COMMENT '商品編號',
  `product_total` tinyint DEFAULT NULL COMMENT '購買商品數量',
  `product_order_price` int NOT NULL COMMENT '當時商品價格'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品訂單項目';

-- --------------------------------------------------------

--
-- 資料表結構 `ticket`
--

CREATE TABLE `ticket` (
  `ticket_no` int NOT NULL COMMENT '票券種類編號',
  `ticket_name` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '票券種類名稱',
  `ticket_creat` date NOT NULL COMMENT '票券種類建立日期',
  `ticket_price` int NOT NULL COMMENT '票券價格'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='票券種類';

-- --------------------------------------------------------

--
-- 資料表結構 `ticket_item`
--

CREATE TABLE `ticket_item` (
  `ticket_order_no` int NOT NULL COMMENT '票券訂單編號',
  `ticket_no` int NOT NULL COMMENT '票券種類編號',
  `ticket_total` tinyint NOT NULL COMMENT '購買票券數量',
  `ticket_order_price` int NOT NULL COMMENT '當時票券價格'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='票券訂單項目';

-- --------------------------------------------------------

--
-- 資料表結構 `ticket_order`
--

CREATE TABLE `ticket_order` (
  `ticket_order_no` int NOT NULL COMMENT '票券訂單編號',
  `mem_no` int NOT NULL COMMENT '會員編號',
  `ticket_order_tp` int NOT NULL COMMENT '票券訂單總價',
  `ticket_order_time` date NOT NULL COMMENT '票券訂單下定時間',
  `ticket_order_shipping` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '票券訂單狀態(1:已出票、2:已取消)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='票券訂單';

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_no`),
  ADD KEY `mem_no` (`mem_no`);

--
-- 資料表索引 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_no`),
  ADD KEY `mem_no` (`mem_no`),
  ADD KEY `article_no` (`article_no`);

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_no`),
  ADD KEY `mem_no` (`mem_no`);

--
-- 資料表索引 `cust_service`
--
ALTER TABLE `cust_service`
  ADD PRIMARY KEY (`key_word_no`);

--
-- 資料表索引 `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`emp_no`);

--
-- 資料表索引 `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`fac_no`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`mem_no`);

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_no`);

--
-- 資料表索引 `postcard`
--
ALTER TABLE `postcard`
  ADD PRIMARY KEY (`postcard_no`),
  ADD KEY `mem_no` (`mem_no`),
  ADD KEY `postcard_co_no` (`postcard_co_no`);

--
-- 資料表索引 `postcard_co`
--
ALTER TABLE `postcard_co`
  ADD PRIMARY KEY (`postcard_co_no`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_no`);

--
-- 資料表索引 `product_order`
--
ALTER TABLE `product_order`
  ADD PRIMARY KEY (`product_order_no`),
  ADD KEY `mem_no` (`mem_no`),
  ADD KEY `coupon_no` (`coupon_no`);

--
-- 資料表索引 `product_order_item`
--
ALTER TABLE `product_order_item`
  ADD PRIMARY KEY (`product_order_no`),
  ADD KEY `product_no` (`product_no`);

--
-- 資料表索引 `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ticket_no`);

--
-- 資料表索引 `ticket_item`
--
ALTER TABLE `ticket_item`
  ADD KEY `ticket_order_no` (`ticket_order_no`),
  ADD KEY `ticket_no` (`ticket_no`);

--
-- 資料表索引 `ticket_order`
--
ALTER TABLE `ticket_order`
  ADD PRIMARY KEY (`ticket_order_no`),
  ADD KEY `mem_no` (`mem_no`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `article_no` int NOT NULL AUTO_INCREMENT COMMENT '文章編號', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_no` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cust_service`
--
ALTER TABLE `cust_service`
  MODIFY `key_word_no` int NOT NULL AUTO_INCREMENT COMMENT '關鍵字編號', AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `emp`
--
ALTER TABLE `emp`
  MODIFY `emp_no` int NOT NULL AUTO_INCREMENT COMMENT '管理員編號', AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `facility`
--
ALTER TABLE `facility`
  MODIFY `fac_no` int NOT NULL AUTO_INCREMENT COMMENT '設施編號', AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `mem_no` int NOT NULL AUTO_INCREMENT COMMENT '會員編號', AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `news_no` int NOT NULL AUTO_INCREMENT COMMENT '消息編號', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `postcard`
--
ALTER TABLE `postcard`
  MODIFY `postcard_no` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `postcard_co`
--
ALTER TABLE `postcard_co`
  MODIFY `postcard_co_no` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_no` int NOT NULL AUTO_INCREMENT COMMENT '商品編號', AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order`
--
ALTER TABLE `product_order`
  MODIFY `product_order_no` int NOT NULL AUTO_INCREMENT COMMENT '商品訂單編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order_item`
--
ALTER TABLE `product_order_item`
  MODIFY `product_order_no` int NOT NULL AUTO_INCREMENT COMMENT '商品訂單編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticket_no` int NOT NULL AUTO_INCREMENT COMMENT '票券種類編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ticket_order`
--
ALTER TABLE `ticket_order`
  MODIFY `ticket_order_no` int NOT NULL AUTO_INCREMENT COMMENT '票券訂單編號';

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`article_no`) REFERENCES `article` (`article_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `coupon`
--
ALTER TABLE `coupon`
  ADD CONSTRAINT `coupon_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `postcard`
--
ALTER TABLE `postcard`
  ADD CONSTRAINT `postcard_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `postcard_ibfk_2` FOREIGN KEY (`postcard_co_no`) REFERENCES `postcard_co` (`postcard_co_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `product_order`
--
ALTER TABLE `product_order`
  ADD CONSTRAINT `product_order_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_order_ibfk_2` FOREIGN KEY (`coupon_no`) REFERENCES `coupon` (`coupon_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `product_order_item`
--
ALTER TABLE `product_order_item`
  ADD CONSTRAINT `product_order_item_ibfk_1` FOREIGN KEY (`product_order_no`) REFERENCES `product_order` (`product_order_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_order_item_ibfk_2` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `ticket_item`
--
ALTER TABLE `ticket_item`
  ADD CONSTRAINT `ticket_item_ibfk_1` FOREIGN KEY (`ticket_order_no`) REFERENCES `ticket_order` (`ticket_order_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ticket_item_ibfk_2` FOREIGN KEY (`ticket_no`) REFERENCES `ticket` (`ticket_no`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `ticket_order`
--
ALTER TABLE `ticket_order`
  ADD CONSTRAINT `ticket_order_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
