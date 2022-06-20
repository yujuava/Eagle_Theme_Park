<?php
session_start();
$json = $_POST["json"]; 
$dataset = json_decode($json, true);

try{
    require_once("../connect_cgd101g3.php");
    if(isset($_SESSION["mem_id"]) == true){
        //寫入資料庫指令
        $sql = "insert into `comment` (`comment_no`, `article_no`,`mem_no`, 
        `comment_date`, `comment_content`) values (NULL,:article_no, :mem_no , NOW(), :comment_content)";

        // //合成sql指令,並綁訂對應值
        $comment = $pdo->prepare($sql);
        $comment->bindValue(":mem_no",$_SESSION["mem_no"]);
        $comment->bindValue(":article_no",$dataset["article_no"]);
        $comment->bindValue(":comment_content",$dataset["comment_content"]);
        $comment->execute();
        echo json_encode("update");
    }else{
        echo '請先登入';
    }


 
    

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>

