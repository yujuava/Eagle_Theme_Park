<?php
session_start();
//接收送過來的json檔
// $json = $_POST["json"];
// // //解封裝儲存到DATASET變數裡
// $dataset = json_decode($json,true);
// echo var_dump($dataset);
try{
    require_once("../connect_cgd101g3.php");
    $fileInfoArr = pathinfo($_FILES["news_pic"]["name"]);
	$fileName = uniqid().".{$fileInfoArr["extension"]}"; 

    $from = $_FILES["news_pic"]["tmp_name"];
	$to = "../images/$fileName";


    //寫入資料庫指令
    if(copy($from, $to)===true){
        $sql = "update news set news_name = :news_name, news_content = :news_content, news_pic = :news_pic, news_date = :news_date where news.news_no = :news_no";

    //合成sql指令,並綁訂對應值
        $news = $pdo->prepare($sql);
        $news->bindValue(":news_no",$_POST["news_no"]);
        $news->bindValue(":news_name",$_POST["news_name"]);
        $news->bindValue(":news_content",$_POST["news_content"]);
        $news->bindValue(":news_pic",$fileName);
        $news->bindValue(":news_date",$_POST["news_date"]);
        $news->execute();
        echo "異動成功~~";
}

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

