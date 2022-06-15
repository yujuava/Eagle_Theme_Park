<?php
session_start();
//接收送過來的json檔
// $json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
// $dataset = json_decode($json,true);
// echo $dataset["mem_name"];
try{
    require_once("../connect_cgd101g3.php");
    $fileInfoArr = pathinfo($_FILES["product_pic"]["name"]);
	$fileName = uniqid().".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 

	$from = $_FILES["product_pic"]["tmp_name"];
	$to = "../images/$fileName";
    if(copy( $from, $to)===true){
        //寫入資料庫指令
        $sql = "insert into `product` (`product_name`, `product_price`, `product_infor`, `product_pic`, `product_st`, `product_amount`) values (:product_name, :product_price, :product_infor, :product_pic, 0, 1)";

        //合成sql指令,並綁訂對應值
        $products = $pdo->prepare($sql);
        $products->bindValue(":product_name",$_POST["product_name"]);
        $products->bindValue(":product_price",$_POST["product_price"]);
        $products->bindValue(":product_infor",$_POST["product_infor"]);
        $products->bindValue(":product_pic",$fileName);
        $products->execute();
        echo "異動成功~~";  
    }
    

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>

