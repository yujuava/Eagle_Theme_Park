-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-05 14:49:26
-- 伺服器版本： 8.0.29
-- PHP 版本： 8.1.6

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

-- --------------------------------------------------------

--
-- 資料表結構 `emp`
--

CREATE TABLE `emp` (
  `emp_no` int NOT NULL COMMENT '管理員編號',
  `emp_id` varchar(15) NOT NULL COMMENT '管理員帳號',
  `emp_psw` varchar(15) NOT NULL COMMENT '管理員密碼',
  `emp_status` tinyint NOT NULL COMMENT '管理員狀態',
  `emp_enroll_date` datetime NOT NULL COMMENT '管理員建立時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理員';

-- --------------------------------------------------------

--
-- 資料表結構 `facility`
--

CREATE TABLE `facility` (
  `fac_no` int NOT NULL COMMENT '設施編號',
  `fac_name` varchar(10) NOT NULL COMMENT '設施名稱',
  `fac_descrip` varchar(50) NOT NULL COMMENT '設施描述',
  `fac_status` tinyint NOT NULL COMMENT '設施狀態(0: 維修 1: 正常)',
  `fac_area` varchar(4) NOT NULL COMMENT '設施所屬園區',
  `fac_rep_date` char(4) NOT NULL COMMENT '設施維修日(1:星期一 2:星期二 3:星期三 4:星期四 5:星期五 6:星期六 7:星期日)',
  `fac_chart` tinyint NOT NULL COMMENT '熱門設施排名(0:其他 1: 第一名 2: 第二名 3: 第三名)',
  `fac_rainy` tinyint NOT NULL COMMENT '雨天可乘(0: 不行 1: 可以)',
  `fac_preg` tinyint NOT NULL COMMENT '孕婦可乘(0: 不行 1: 可以)',
  `fac_wheelchair` tinyint NOT NULL COMMENT '輪椅可乘(0: 不行 1: 可以)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='設施管理';

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

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `news_no` int NOT NULL COMMENT '消息編號',
  `news_name` varchar(10) NOT NULL COMMENT '消息名稱',
  `news_content` varchar(50) NOT NULL COMMENT '消息內容',
  `news_date` datetime NOT NULL COMMENT '發布日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='最新消息';

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
  `product_pic` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '商品圖片',
  `product_st` tinyint NOT NULL COMMENT '商品狀態(0.正常,1下架,2缺貨)',
  `product_creat` int DEFAULT NULL COMMENT '建立日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品';

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
  `ticket_item_no` int NOT NULL,
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
  ADD PRIMARY KEY (`ticket_item_no`);

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
  MODIFY `article_no` int NOT NULL AUTO_INCREMENT COMMENT '文章編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_no` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_no` int NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `emp`
--
ALTER TABLE `emp`
  MODIFY `emp_no` int NOT NULL AUTO_INCREMENT COMMENT '管理員編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `facility`
--
ALTER TABLE `facility`
  MODIFY `fac_no` int NOT NULL AUTO_INCREMENT COMMENT '設施編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `mem_no` int NOT NULL AUTO_INCREMENT COMMENT '會員編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `news_no` int NOT NULL AUTO_INCREMENT COMMENT '消息編號';

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
  MODIFY `product_no` int NOT NULL AUTO_INCREMENT COMMENT '商品編號';

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
-- 資料表的限制式 `ticket_order`
--
ALTER TABLE `ticket_order`
  ADD CONSTRAINT `ticket_order_ibfk_1` FOREIGN KEY (`mem_no`) REFERENCES `member` (`mem_no`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
