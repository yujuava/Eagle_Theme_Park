<?php
session_start();
//接收送過來的json檔
$json = $_POST["json"];
// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
echo var_dump($dataset);
try{
    require_once("../connect_cgd101g3.php");

    //寫入資料庫指令

    $sql = "update ticket set ticket_price = :ticket_price WHERE ticket.ticket_no = :ticket_no";


    // $sql = "update news set news_name = :news_name, news_content = :news_content, news_pic = :news_pic, news_date = :news_date where news.news_no = :news_no";

    //合成sql指令,並綁訂對應值
    $news = $pdo->prepare($sql);
    $news->bindValue(":ticket_no",$dataset["ticket_no"]);
    $news->bindValue(":ticket_price",$dataset["ticket_price"]);
    $news->execute();
    echo "異動成功~~";

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

