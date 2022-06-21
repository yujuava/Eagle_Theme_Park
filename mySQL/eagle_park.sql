-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022-06-21 17:00:47
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
(1, 1, '西部農莊一日遊', '2022-02-01 10:20:25', '好吃好玩的都在這了 一早9:00進場玩到4:30出場，5:00到家了', './images/friend.jpg'),
(2, 2, '紐約都會打卡', '2022-03-01 17:36:11', '全台灣我私心最喜歡的主題樂園 美國大西部搭飛鷹', './images/friends-having-fun.jpg'),
(3, 3, '遊行表演一定要看', '2022-04-01 20:37:03', '遊街表演的外國人讓氣氛變得更豐富，有機會一定要停下來看看', './images/indian.jpg'),
(4, 9, '可以滿足小小孩跟大小孩的好地方', '2022-04-06 10:37:48', '小孩子小2很喜歡，身高限制要注意有那些可以玩。因為有事先查詢做功課了，只是有些沒有開放比較可惜。這次去未滿120公分部分要大人陪同，下次去滿120可自己玩的更多了。有動物園的動物可以看也是不錯啦！可以滿足小小孩跟大小孩的好地方。', './images/newyork.jpg'),
(5, 7, '超推薦先逛動物區！！', '2022-04-08 09:40:35', '動物列車可以體驗非洲草原簡介，動物都健康，對小孩來說很驚豔。周末時間幾乎都需要排隊，9:30進去，先逛動物區，中午用餐巧遇大西部嘉年華，再到南美區，就下五4點了，真的玩不完、小孩很放電。帶點零食小孩都不會餓了！', './images/shutterstock.jpg'),
(6, 10, '班牙冰淇淋很Q彈好吃！', '2022-04-10 11:40:35', '本次體驗很好，園區人員都很熱情、友善。動物園、廁所、遊樂器材皆乾淨！疫情期間遊樂設施換下一組人，每個位置也會進行消毒，人員辛苦了淨！西班牙冰淇淋很Q彈好吃，不死甜，老闆還會拿冰淇淋跟你玩，80元蠻值得的', './images/themePark__attrNY_1.jpg'),
(7, 7, '進去看野生動物。有超大的猴園，非常壯觀', '2022-04-11 14:40:35', '當天保養的設施會寫在門口，可以先看看 就不會白跑一趟。午餐漢堡店，人潮沒有很多，出餐速度還可以⋯但份量偏少～～還有野生動物園，可以做裡面的觀光巴士，進去看野生動物。有超大的猴園，非常壯觀。 還有白老虎、獅子、孔雀～ 非常壯觀！！', './images/themePark__facWest_tourist_Md_4.jpg'),
(8, 13, '可以多看官網的優惠活動', '2022-04-13 12:30:35', '趁著國旅卷最後幾天到訪～購票優惠，可以多看官網的優惠活動～每個遊樂設施的有可以用app預約的通道，這點蠻方便的哦，可以再玩的時候 預約下個設施。', './images/themepark2.jpg'),
(9, 11, '溜小孩的好地方，也適合全家老少同遊', '2022-04-15 17:40:35', '遊樂園區在國內算大，若與國外相比仍小許多，設施大多都有特色，也有許多餐車跟小遊戲可以玩，不過都是另外收費。猛獸區巴士跟草食區小火車都必須等，建議可以買200元快速通關會快很多，否則假日可能巴士得排半小時至1小時，火車也得半小時左右。', './images/themepark3.jpg'),
(10, 5, '下午兩點的遊行會漂泡泡雪，滿漂亮的建議半小時前去卡位。', '2022-04-17 16:40:35', '聖誕限定餐很可愛也還不錯吃，吉拿棒儘量平拿，小心上面的裝飾掉下來，看前面2位拿直的都掉了。下午兩點的遊行會漂泡泡雪，滿漂亮的建議半小時前去卡位。卡位位置建議下圖第一排處，如果排另外一排只能看到經過，後面表演完全被擋住。', './images/themePark__NewYorkVideoPost-4.jpg'),
(11, 6, '碰到疫情 人真的很少  設施都不用排隊 玩得很盡興', '2022-04-20 18:40:35', '碰到疫情  只好選平常日 想說人多就回家 果不其然  人真的很少  設施都不用排隊 玩得很盡興～遊樂設施至少全玩過一輪 有的還二輪三輪 小孩第一次去很高興  感受得到他們的愉悅 回程車上就睡翻了', './images/themePark__facNY_tourist_Lg_4.jpg'),
(12, 12, '有參與的小朋友跟金剛鸚鵡及小鸚鵡們合照的機會，可以讓大家多了解鳥類跟欣賞鳥類的美。', '2022-04-23 15:40:35', '連以前為了趕場放棄的秀也有看到，演員的服裝及特技都非常值得一看，還有我在埃及時才看過的中東旋轉舞。另外還推薦利用訓練過的鳥兒來宣導環保概念，很適合小朋友參觀。利用犀鳥、鵜鶘、吸蜜鸚鵡、紅鶴等做出氣勢驚人的表演，還會給有參與的小朋友跟金剛鸚鵡及小鸚鵡們合照的機會，可以讓大家多了解鳥類跟欣賞鳥類的美。', './images/themePark__facWest_info_Md_1.jpg'),
(13, 10, '強烈建議先去坐接駁車觀賞野生動物區', '2022-04-25 19:00:35', '以往經驗都是戶外教學或是畢旅來遊樂園遊玩，這次是開車來，還是選了228連假這一天，早上約9點到達時已經停滿了一區的汽車，建議先下載app預約不需久等，一進場就用最快速度預約想要玩的遊樂設施，我們還有自備雨衣帶進來玩會潑到水的遊樂設施。強烈建議先去坐接駁車觀賞野生動物區，不然下午要離開時再去觀賞會排隊花很久時間', './images/themePark__facWest_rafting_Lg_3.jpg'),
(14, 11, '適合小朋友的遊樂設施還滿多的', '2022-05-02 20:00:35', '跟其他樂園比起來，滿適合小朋友去的 適合小朋友的遊樂設施還滿多的(我覺得最適合小朋友去的是義大) 坐小火車看動物小朋友最愛 坐巴士看動物很普通，排隊很久坐車進去只看到老虎獅子等3-4種而已 鳥劇場很好，小朋友很愛，一天只有2場，先看好時間一定要去看 沒有熱水，不要帶泡麵進去泡 自備兒童+大人雨衣，泛舟會用到，園區有賣但貴很多', './images/themePark__facNY_spining_Md_3.jpg'),
(15, 13, '全台灣的遊樂園實在是很少會有這種規模', '2022-05-05 21:30:35', '遊樂園的環境實在是很令大人及小朋友喜歡，你說為什麼呢，主要是因為有動物區以及遊樂區，全台灣的遊樂園實在是很少會有這種規模', './images/themePark__facIndian_spread_Md_2.jpg'),
(16, 7, '表演一天只有表演一次而已，所以要看準時間去看，還蠻值得的', '2022-05-07 15:40:35', '是跟小孩來校外教學，因為下雨的關係有很多遊樂設施都沒有開放，不然其實是蠻好玩的\r\n1:廁所是蠻乾淨的2:餐廳用餐的話價位大概都200以上居多3:路邊的餐點平均大概都100以上4:好玩的遊樂設施都要等很久5:表演一天只有表演一次而已，所以要看準時間去看，還蠻值得的', './images/themePark__facIndian_adventure_Lg_3.jpg'),
(17, 6, '園區內服務員很熱心也認真', '2022-05-10 15:05:35', '這麼大的園區乾淨清潔，尤其是廁所，幾乎沒有味道，當然也有可能是疫情期間人少了，也因為這樣中餐廳跟牛排館都沒開，好可惜但也無可奈何，餐點真的可以再精緻一點，園區內服務員很熱心也認真，尤其動物導覽，聽得出來他們都是真心愛動物們', './images/themePark__attrWest_1.jpg'),
(18, 5, '搭著蒸氣火車緩緩越過大草原，讓遊客以不同的角度體驗西部風光', '2022-05-13 20:17:35', '在2009年時耗資新台幣2億元打造英式復古蒸氣火車，且重新規劃該園區。搭著蒸氣火車緩緩越過大草原，讓遊客以不同的角度體驗西部風光', './images/themePark__facWest_tourist_Lg_2.jpg');

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
(3, 2, 1, '2022-03-22 21:40:36', '假日人非常多，每樣設施大概排隊40-90分鐘'),
(4, 4, 13, '2022-04-11 23:18:11', '園區很大，停車場也很大，可停遊覽車大型車輛和小自客車都沒問題。等待的時間到處走走，可惜預約的時候並不知道來的時間會下雨，還是硬著頭皮來啦！\r\n'),
(5, 4, 5, '2022-04-14 12:18:11', '劇場的表演很精彩～ 特技很厲害 （但是在表演中被打擾填寫評價有點被嚇到了希望下次可以在表演結束時再邀請...）'),
(6, 5, 10, '2022-04-19 14:24:02', '很棒 基本上設施都有開 服務員解說詳細 當天來回都夠時間 雨衣有點貴（建議先在外面買）'),
(7, 5, 12, '2022-04-28 11:36:02', '售票亭旁邊的雞蛋糕超好吃，動物造型顏值很高，外皮酥脆，內裏紮實但不會太硬或太乾。份量以遊樂園來說還不錯。'),
(8, 6, 5, '2022-04-14 12:24:02', '剛好遇上聖誕活動第一天，應該小朋友會比較喜歡，有跟外國白人聖誕老公公的拍照體驗、聖誕遊行等。'),
(9, 6, 13, '2022-04-17 17:24:02', '使用國旅卷 2大1小優惠 這麼划算當然要給5星'),
(10, 6, 7, '2022-04-20 18:24:02', '台灣著名的遊樂園，裡面有很多不同主題區，不同區間的建築跟場景都設計的蠻精緻的，雖然多年來陸續增加一些設施，但整體改變不大，是一個回憶年輕的地方'),
(11, 6, 6, '2022-04-25 14:31:02', '整個園區的廁所規劃都還不錯，也很乾淨，但就是找了很久都找不到飲水機，詢問工作人員那邊有飲水機，工作人員也不知道……以提倡環保的觀點應該增設飲水機。'),
(12, 6, 12, '2022-06-14 23:18:11', '我是萬聖節后一星期帶小孩來玩的，萬聖節氣氛濃厚，有遊樂設施，有動物看，很推薦過來玩。\r\n'),
(13, 7, 6, '2022-04-28 09:35:02', '值得一來風景美麗心曠神怡，規劃很完善適合全家老小，最好早一點來逛到打烊不然會逛不完。'),
(14, 7, 8, '2022-05-02 15:35:02', '慶典活動很不一定，我們這次去全沒有，但是還是非常好玩！以前看過部落狂歡，超棒！\r\n'),
(15, 8, 11, '2022-04-14 13:26:02', '很好玩的遊樂區，遊樂設施有刺激感又不會到太恐怖'),
(16, 8, 12, '2022-04-19 13:31:02', '公司旅遊來過好幾次了覺得其實蠻不錯的 除了園區裡面遊覽車一遊 走一走蠻好的'),
(17, 8, 9, '2022-04-21 17:43:02', '建議遊玩的夥伴，可以先玩遊樂設施後，直接坐纜車到上面，一路走下來！比較不會浪費時間，一路下坡也比較好走喔！'),
(18, 9, 5, '2022-04-18 12:38:02', '連假過去感覺滿不錯的，因為地大所以不會很擁擠，應該是大家都在玩遊樂設施！'),
(19, 9, 12, '2022-04-21 14:28:02', '週五本來以為會不多人，結果剛好遇到許多國高中生的校外教學日，所以其實非常熱鬧，讓本來可能冷清的平日，變成四處都是歡笑聲的遊樂園，聽起來非常快樂！'),
(20, 10, 6, '2022-04-25 20:31:02', '從小到大去過這麼多遊樂園，有的已經倒了，覺得還是這裡最多元最好玩，設施最齊全最刺激，喜歡冒險喜歡刺激的人一定要來體驗'),
(21, 10, 8, '2022-04-30 16:31:02', '票價有點貴，可以問一下住宿的飯店，可能會有優待票，雖然貴卻是一票玩到底'),
(22, 11, 9, '2022-04-26 13:36:02', '學生時代的回憶樂園，除了遊樂設施外，還有很多DIY活動，跟驚喜的烤蕃薯免費品嚐，很適合帶小朋友來走走'),
(23, 11, 5, '2022-04-29 12:31:02', '園區內提供特色服飾租借，熱情的店員很細心的幫忙穿著小細節。還是寵物友善樂園，很適合帶毛小孩一起來遊玩。'),
(24, 12, 10, '2022-04-27 18:24:02', '善用政府的美意（國旅券）來一趟遊樂園之旅，也不知道N年沒玩這麼刺激的遊樂設施，真的很適合喜歡冒險的人來此一遊'),
(25, 12, 13, '2022-05-04 14:24:02', '寵物友善樂園，小朋友的遊樂設施也很豐富，工作人員都很和善，還可以找服務中心有熱水泡牛奶，讓我們一家有美好的回憶。'),
(26, 13, 7, '2022-05-04 15:47:02', '上次來已是十年前，這次再來回味一下，過年初三來玩很多設施都不用排隊可以狂刷，超爽'),
(27, 13, 9, '2022-05-11 17:51:02', '說個吐槽的點，對比其他國家的樂園，餐點部分真心希望有麥當勞或者星巴克等大型品牌來園區內會更好'),
(28, 14, 12, '2022-05-09 15:28:02', '離開前還體驗了一下射箭，雖然要錢但很好玩，沒體驗過的也可以去玩一下~整體下來這裡可以滿足各種不同類型遊客的需求，豐富遊客多層次的體驗，大推~'),
(29, 14, 8, '2022-05-11 18:18:02', '台灣已很少有不斷在創新、更新的主題遊樂園，且還有值得期待的未來計畫，真的會想一去再去'),
(30, 14, 3, '2022-05-19 20:12:02', '因為疫情嚴重的關係吧 假日客運幾戶幾乎沒有什麼人 完全不用等待就能玩遊戲…'),
(31, 14, 13, '2022-05-27 10:44:02', '感受用心維護，現在是疫情期間，距離入園100公尺前，就有熱情的工作人員，提醒要掃實聯制'),
(32, 15, 13, '2022-05-16 18:24:02', '自從國中畢業旅行來過，就沒有再訪過，這次帶著小鬼頭開學的最後幾天，來樂園走走，從第一步踏入門口，滿滿的懷念感湧上心頭'),
(33, 15, 5, '2022-05-30 09:41:02', '園區維護得很好，看得出來很用心，空間寬敞乾淨（真的乾淨！！！），人員親切，表演人員也很可愛用心'),
(34, 16, 10, '2022-05-13 18:24:02', '只能說人多，園區植物開得很美！！人一堆人狂拍照...另外帶家庭親子的早點進場@-@讓小孩放風吧'),
(35, 16, 8, '2022-05-17 11:24:02', '當女兒身高超過90公分後，就開始帶著她和老婆一起到全台各大遊樂場開始遊玩，上回來應該已經超過五年以上了，在這段期間內部也有了很大的變化\r\n'),
(36, 16, 11, '2022-06-01 10:51:02', '相對台灣其他的遊樂園，有更多適合小小孩玩的設施，讓女兒玩到都不想回家了，當然除了小小孩的遊樂設施外，也有適合大人玩樂的刺激設施\r\n'),
(37, 17, 10, '2022-05-16 19:40:27', '多數遊樂設施不需要排隊太久，部分會淋濕的遊樂設施在入口處有提供投幣式置物櫃，使用一次20元。園內販售雨衣含鞋套。園內消費無法使用一般信用卡，若能開放信用卡和行動支付，應能讓遊客更有意願購買。'),
(38, 17, 9, '2022-05-27 12:40:27', '上次來已是10年前，覺得保養的很好！ 環境很乾淨舒服，有感受到有持續推陳出新的主題樂園'),
(39, 18, 6, '2022-06-02 15:40:27', '有持續推陳出新的主題樂園，非常推薦以西部樂園的家屋與各式建築的展示區，有先見之明的保留與重建許多已經消失的珍貴建築。\r\n');

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_no` int NOT NULL,
  `mem_no` int NOT NULL,
  `cupon_status` tinyint NOT NULL COMMENT '0:使用, 1:未使用'
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
  `fac_maintain_date` tinyint NOT NULL COMMENT '設施維修日(1:星期一 2:星期二 3:星期三 4:星期四 5:星期五)',
  `fac_chart` tinyint NOT NULL COMMENT '熱門設施排名(0:其他 1: 第一名 2: 第二名 3: 第三名 4: 第四名)',
  `fac_rainy` tinyint NOT NULL COMMENT '雨天可乘(0: 不行 1: 可以)',
  `fac_preg` tinyint NOT NULL COMMENT '孕婦可乘(0: 不行 1: 可以)',
  `fac_wheelchair` tinyint NOT NULL COMMENT '輪椅可乘(0: 不行 1: 可以)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='設施管理';

--
-- 傾印資料表的資料 `facility`
--

INSERT INTO `facility` (`fac_no`, `fac_pic`, `fac_name`, `fac_descrip`, `fac_status`, `fac_area`, `fac_maintain_date`, `fac_chart`, `fac_rainy`, `fac_preg`, `fac_wheelchair`) VALUES
(1, 'facilities8 (20).jpg', '極速飛鷹', '在九十秒歷程中，挑戰達六層樓高的巨幅擺盪，以及雙腳懸空人體極限3G重力加速度外拋與三百六十度正反向空中旋轉，邀請年輕遊客前來挑戰膽量極限。', 1, '紐約都會', 2, 1, 0, 0, 0),
(2, 'facilities8 (2).png', '自由落體', '搭乘著座椅緩緩上升時，您在忐忑不安的心情中可以欣賞伊果樂園全貌並鳥瞰關西地區優美的風景。上升至最高點時，座椅將以自由落體的G速度向下墬落。', 1, '印安部落', 3, 2, 0, 0, 1),
(3, 'facilities8 (24).jpg', '天女散花', '乘著風遊蕩在自由的風裡這畫面就像仙女般的翩翩起舞。', 0, '印安部落', 2, 3, 0, 1, 0),
(4, 'facilities8 (18).jpg', '空中UFO', '以三百六十度轉動，倒轉世界狂飆，瞬間帶領您進入超高速的神秘世界中，有膽量的朋友千萬別放棄這個挑戰自己的機會。', 0, '西部農莊', 4, 4, 0, 0, 0),
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
  `mem_name` varchar(50) DEFAULT NULL COMMENT '會員名',
  `mem_lastname` varchar(15) DEFAULT NULL COMMENT '會員姓氏',
  `mem_id` varchar(15) NOT NULL COMMENT '會員帳號',
  `mem_psw` varchar(15) NOT NULL COMMENT '會員密碼',
  `mem_tel` varchar(10) DEFAULT NULL COMMENT '電話',
  `mem_mail` varchar(40) DEFAULT NULL COMMENT 'E-mail',
  `mem_state` tinyint(1) NOT NULL COMMENT '會員狀態\r\n(0.正常,1停權)',
  `mem_address` varchar(50) DEFAULT NULL COMMENT '會員地址',
  `mem_country` varchar(50) DEFAULT NULL COMMENT '會員國家/地區',
  `mem_birth` date DEFAULT NULL COMMENT '會員生日',
  `mem_date` date NOT NULL COMMENT '註冊時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='會員';

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`mem_no`, `mem_name`, `mem_lastname`, `mem_id`, `mem_psw`, `mem_tel`, `mem_mail`, `mem_state`, `mem_address`, `mem_country`, `mem_birth`, `mem_date`) VALUES
(1, '小明', '王', 'wang123', 'wang1234', '0935111222', 'wang123@gmail.com', 0, '中壢區民權路2號', '台灣', '1991-01-01', '2022-02-02'),
(2, '小強', '陳', 'chen', 'chen1234', '0935222333', 'chen@gmail.com', 0, '中壢區民權路3號', '台灣', '1991-01-05', '2022-03-04'),
(3, '靜香', '林', 'smellgood', 'smellgood123', '0935333444', 'smellgood@gmail.com', 0, '中壢區民權路4號', '台灣', '1990-12-10', '2022-06-05'),
(4, '丞軒', '葉', 'eagleyeh', 'eagleyeh', '0912345678', 'eagleyeh@gmail.com', 1, '桃園市中壢區復興路46號', '台灣', '1996-06-01', '2022-06-07'),
(5, '小夫', '賀', 'good', 'goodgood', '0912222522', 'good@gmail.com', 0, '台北市火星街4號7樓', '台灣', '2014-05-13', '2022-06-06'),
(6, '胖虎', '李', 'fat', 'fatfat', '0945522522', 'fat@gmail.com', 0, '台北市火星街4號6樓', '台灣', '2012-05-12', '2022-06-07'),
(7, '大雄', '葉', 'yeh', 'yehyeh', '0935522522', 'yeh@gmail.com', 0, '台北市大同路2段3號', '台灣', '2013-02-10', '2022-06-08'),
(8, '檬檬', '吳', 'mon', 'monmon', '0955522522', 'mon@gmail.com', 0, '中壢市新生路213號', '台灣', '2020-07-01', '2022-06-09'),
(9, '瓜瓜', '吳', 'gua', 'guagua', '0915522522', 'gua@gmail.com', 0, '中壢市新生路213號', '台灣', '2020-07-01', '2022-06-09'),
(10, '莓莓', '吳', 'mei', 'meimei', '0925522522', 'mei@gmail.com', 0, '中壢市新生路213號', '台灣', '2020-07-01', '2022-06-09'),
(11, '叮噹', '小', 'doraemon', 'doraemonlove', '0912222523', 'doraemon@gmail.com', 0, '台北市火星街4號8樓', '台灣', '2014-05-13', '2022-06-14'),
(12, '牛牛', '劉', 'cow', 'cowcow', '0912222524', 'cow@gmail.com', 0, '動物園草地街23號', '台灣', '2015-01-29', '2022-06-14'),
(13, '貓貓', '毛', 'cat', 'catcat', '0912222526', 'cat@gmail.com', 0, '動物園屋頂路23號', '台灣', '2015-04-02', '2022-06-14');

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `news_no` int NOT NULL COMMENT '消息編號',
  `news_pic` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息圖片',
  `news_name` varchar(10) NOT NULL COMMENT '消息名稱',
  `news_content` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '消息內容',
  `news_date` date NOT NULL COMMENT '發布日期(order by date DESC)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='最新消息';

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`news_no`, `news_pic`, `news_name`, `news_content`, `news_date`) VALUES
(1, 'burger7.jpg', '伊果美食', '伊果美食週，來自美國的五星主廚宏敏大師，歡迎各位大朋友小朋友，一起來伊果樂園享受美食唷~!!', '2022-06-17'),
(2, 'closed_Ferris-wheel_eagle.gif', '優惠快訊', '慶開幕!當月壽星購買門票只要『半價』且由駿騰大攝影師拍下您的生日美照上傳再享生日好禮一份 ! 快揪親朋好友一起來伊果樂園留下美好回憶~!', '2022-05-25'),
(3, 'shutterstock.jpg', '防疫須知', '因疫情影響，伊果樂園一切將配合政府防疫措施，並落實每小時消毒，疫情防治，我們一起努力！', '2022-06-01'),
(4, 'facilities7.jpg', '入園送燈', '入園即送兩張Light Up For You不限金額抵用券，歡樂買燈飾，家裡來點質感氣息，若想出門，趕緊來伊果樂園大玩特玩吧！歡度精彩美好假期！', '2022-06-08'),
(6, 'friend.jpg', '活動快報', '浪漫伊果，婚紗拍攝&求婚活動。走進幸福國度，漫步在異國主題村，留下深刻難忘回憶。', '2022-06-06'),
(10, 'smiley-female.jpg', '語實巨進', '伊果好友們，快來加一語實巨進，提供完善的教學課程及問答諮詢，成為伊果會員，讓您日文英文中文嘛欸通。', '2022-06-17'),
(11, '62af14ebba148.jpg', '伊果饗宴', '窯烤大雞腿週，凡穿著雞腿裝進入園區即可享有免費窯烤雞一隻，趕緊著雞腿裝出發伊果樂園~!', '2022-06-19'),
(12, '62af15a4d1b25.jpg', '果果著裝', '果果的衣服失蹤了，親愛的伊果好友們，需要大家一起幫忙找找，地點:小遊戲公園。快來幫助果果，還可以獲得優惠券唷~!', '2022-06-19');

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
  `product_st` tinyint NOT NULL COMMENT '商品狀態(0.上架,1下架)',
  `product_creat` date DEFAULT NULL COMMENT '建立日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品';

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_no`, `product_name`, `product_price`, `product_infor`, `product_amount`, `product_pic`, `product_st`, `product_creat`) VALUES
(1, '伊果保溫瓶', 600, '真空長效保溫，適合戶外、運動、居家使用。', 1, 'shop_bottle.png', 0, '2022-06-01'),
(2, '伊果帽', 800, '夏天防曬冬天防寒，讓你每次都亮麗出場的超萬用帽型', 1, 'shop_cap.png', 0, '2022-06-01'),
(3, '伊果短T', 400, '美式休閒時尚服飾，引領潮流精神', 1, 'shop_cloth.png', 0, '2022-06-01'),
(4, '伊果馬克杯', 300, '日系簡約風，實用與質感兼具，讓你愛不釋手', 1, 'shop_cup.png', 0, '2022-06-01'),
(5, '伊果鑰匙圈', 150, '伊果人氣商品，網路人氣推薦，豐富有質感', 1, 'shop_keyring.png', 0, '2022-06-01'),
(6, '伊果口罩(20入)', 300, '在防疫的同時兼具時尚美感，讓你出門開心又安心', 1, 'shop_mask.png', 0, '2022-06-01'),
(7, '伊果雨衣', 200, '攜帶方便，輕鬆收納，出門再也不怕下雨天', 1, 'shop_raincoat.png', 0, '2022-06-01');

-- --------------------------------------------------------

--
-- 資料表結構 `product_order`
--

CREATE TABLE `product_order` (
  `product_order_no` int NOT NULL COMMENT '商品訂單編號',
  `mem_no` int NOT NULL COMMENT '會員編號',
  `coupon_no` int DEFAULT NULL COMMENT '優惠券編號',
  `order_shipping` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '訂單狀態(0:未出貨、1:已出貨、2:已收貨、3:訂單完成、4:已取消)',
  `product_order_time` date DEFAULT NULL COMMENT '下訂時間',
  `product_order_way` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '取貨方式(0:宅配、1:超商取貨)',
  `product_order_place` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '取貨地點',
  `product_order_over_time` datetime DEFAULT NULL COMMENT '取貨時間',
  `product_order_real_price` int DEFAULT NULL COMMENT '實際金額(打折後)',
  `product_order_tp` int NOT NULL COMMENT '總價'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='商品訂單';

--
-- 傾印資料表的資料 `product_order`
--

INSERT INTO `product_order` (`product_order_no`, `mem_no`, `coupon_no`, `order_shipping`, `product_order_time`, `product_order_way`, `product_order_place`, `product_order_over_time`, `product_order_real_price`, `product_order_tp`) VALUES
(1, 4, NULL, '0', '2022-06-17', '0', '桃園市中壢區復興路46號', NULL, 3900, 3900),
(2, 4, NULL, '0', '2022-06-17', '0', '桃園市中壢區復興路46號', NULL, 2300, 2300),
(3, 12, NULL, '0', '2022-06-17', '0', '動物園草地街23號', NULL, 2400, 2400),
(4, 13, NULL, '0', '2022-06-17', '0', '動物園屋頂路23號', NULL, 1600, 1600),
(5, 13, NULL, '0', '2022-06-17', '0', '動物園屋頂路23號', NULL, 4500, 4500),
(6, 2, NULL, '0', '2022-06-18', '0', '中壢區民權路3號', NULL, 2200, 2200),
(7, 2, NULL, '0', '2022-06-19', '0', '中壢區民權路3號', NULL, 3000, 3000),
(8, 2, NULL, '0', '2022-06-19', '0', '中壢區民權路3號', NULL, 3400, 3400);

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

--
-- 傾印資料表的資料 `product_order_item`
--

INSERT INTO `product_order_item` (`product_order_no`, `product_no`, `product_total`, `product_order_price`) VALUES
(1, 1, 3, 600),
(1, 3, 3, 400),
(1, 4, 3, 300),
(2, 2, 1, 800),
(2, 4, 2, 300),
(2, 6, 3, 300),
(3, 3, 6, 400),
(4, 2, 1, 800),
(4, 3, 2, 400),
(5, 2, 3, 800),
(5, 3, 3, 400),
(5, 6, 3, 300),
(6, 2, 2, 800),
(6, 4, 2, 300),
(7, 1, 5, 600),
(8, 1, 3, 600),
(8, 2, 2, 800);

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

--
-- 傾印資料表的資料 `ticket`
--

INSERT INTO `ticket` (`ticket_no`, `ticket_name`, `ticket_creat`, `ticket_price`) VALUES
(1, '成人票', '2022-06-17', 900),
(2, '兒童票', '2022-06-17', 500),
(3, '愛心票', '2022-06-17', 400);

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

--
-- 傾印資料表的資料 `ticket_item`
--

INSERT INTO `ticket_item` (`ticket_order_no`, `ticket_no`, `ticket_total`, `ticket_order_price`) VALUES
(1, 1, 1, 900),
(1, 2, 2, 500),
(1, 3, 1, 400),
(2, 1, 1, 900),
(2, 2, 2, 500),
(2, 3, 1, 400),
(3, 1, 2, 900),
(3, 2, 2, 500),
(3, 3, 3, 400),
(4, 1, 1, 900),
(4, 2, 1, 500),
(4, 3, 2, 400),
(5, 1, 2, 900),
(5, 2, 3, 500),
(5, 3, 3, 400),
(6, 1, 2, 900),
(6, 2, 3, 500),
(6, 3, 3, 400),
(7, 1, 0, 900),
(7, 2, 2, 500),
(7, 3, 2, 400),
(8, 1, 2, 900),
(8, 2, 1, 500),
(8, 3, 5, 400),
(9, 1, 2, 900),
(9, 2, 1, 500),
(9, 3, 1, 400),
(10, 1, 2, 900),
(10, 2, 2, 500),
(10, 3, 0, 400);

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
-- 傾印資料表的資料 `ticket_order`
--

INSERT INTO `ticket_order` (`ticket_order_no`, `mem_no`, `ticket_order_tp`, `ticket_order_time`, `ticket_order_shipping`) VALUES
(1, 13, 2300, '2022-06-17', '1'),
(2, 13, 2300, '2022-06-17', '1'),
(3, 13, 4000, '2022-06-17', '1'),
(4, 13, 2200, '2022-06-17', '1'),
(5, 2, 4500, '2022-06-17', '1'),
(6, 2, 4500, '2022-06-17', '1'),
(7, 2, 1800, '2022-06-18', '1'),
(8, 2, 4300, '2022-06-18', '1'),
(9, 2, 2700, '2022-06-18', '1'),
(10, 2, 2800, '2022-06-19', '1');

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
  ADD PRIMARY KEY (`product_order_no`,`product_no`) USING BTREE,
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
  MODIFY `article_no` int NOT NULL AUTO_INCREMENT COMMENT '文章編號', AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_no` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

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
  MODIFY `mem_no` int NOT NULL AUTO_INCREMENT COMMENT '會員編號', AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `news_no` int NOT NULL AUTO_INCREMENT COMMENT '消息編號', AUTO_INCREMENT=13;

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
  MODIFY `product_order_no` int NOT NULL AUTO_INCREMENT COMMENT '商品訂單編號', AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order_item`
--
ALTER TABLE `product_order_item`
  MODIFY `product_order_no` int NOT NULL AUTO_INCREMENT COMMENT '商品訂單編號', AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ticket`
--
ALTER TABLE `ticket`
  MODIFY `ticket_no` int NOT NULL AUTO_INCREMENT COMMENT '票券種類編號', AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ticket_order`
--
ALTER TABLE `ticket_order`
  MODIFY `ticket_order_no` int NOT NULL AUTO_INCREMENT COMMENT '票券訂單編號', AUTO_INCREMENT=11;

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
