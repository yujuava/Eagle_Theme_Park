<?php
session_start();

try{
    require_once("../connect_cgd101g3.php");
    $fileInfoArr = pathinfo($_FILES["article_image"]["name"]);
    $fileName = uniqid().".{$fileInfoArr["extension"]}"; 
    $from = $_FILES["article_image"]["tmp_name"];
    $to = "../images/$fileName";
    if(isset($_SESSION["mem_id"]) == true){
        if(copy( $from, $to)===true){
            //寫入資料庫指令
            $sql = "insert into `article` (`article_no`, `mem_no`, `article_title`, `article_date`, `article_content`, `article_image`) values (NULL, :mem_no, :article_title, NOW(), :article_content, :article_image)";
    
            //合成sql指令,並綁訂對應值
            $post = $pdo->prepare($sql);
            $post->bindValue(":mem_no",$_SESSION["mem_no"]);
            $post->bindValue(":article_title",$_POST["article_title"]);
            $post->bindValue(":article_content",$_POST["article_content"]);
            $post->bindValue(":article_image", "./images/".$fileName);
            $post->execute();
            echo json_encode("update",JSON_NUMERIC_CHECK);
            echo "異動成功~~";  
        }
    }else{
        echo "<script>alert('請先登入')</script>";
    }


 
    

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>

