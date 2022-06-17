<?php
session_start();
echo "123321";
try{
    require_once("../connect_cgd101g3.php");
    $fileInfoArr = pathinfo($_FILES["news_pic"]["name"]);
	$fileName = uniqid().".{$fileInfoArr["extension"]}"; 

	$from = $_FILES["news_pic"]["tmp_name"];
	$to = "../images/$fileName";
    if(copy( $from, $to)===true){
        //寫入資料庫指令
        $sql = "insert into `news` (`news_name`, `news_content`, `news_pic`, `news_date`) values (:news_name, :news_content, :news_pic, :news_date)";

        //合成sql指令,並綁訂對應值
        $news = $pdo->prepare($sql);
        $news->bindValue(":news_name",$_POST["news_name"]);
        $news->bindValue(":news_content",$_POST["news_content"]);
        $news->bindValue(":news_date",$_POST["news_date"]);
        $news->bindValue(":news_pic",$fileName);
        $news->execute();
        echo "異動成功~~";  
    }
    

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>

