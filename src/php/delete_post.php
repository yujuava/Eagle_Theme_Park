<?php
$json = $_POST["json"]; 
$dataset = json_decode($json, true);

try{
    require_once("../connect_cgd101g3.php");
        //寫入資料庫指令
        $sql = "DELETE FROM article WHERE `article`.`article_no` = :articleNo";

        //合成sql指令,並綁訂對應值
        $post = $pdo->prepare($sql);
        $post->bindValue(":articleNo",$dataset["articleNo"]);
        $post->execute();
        echo "異動成功~~";  
        }
    catch(PDOException $e){
    	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
    	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
    	echo "錯誤行號 : ", $e->getLine(), "<br>";
    }
?>

