<?php
session_start();
//接收送過來的json檔
$json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
try{
    require_once("../connect_cgd101g3.php");

    //寫入資料庫指令
    $sql = "update product set product_name = :product_name, product_price = :product_price, product_infor = :product_infor, product_amount = :product_amount, product_pic = :product_pic, product_st = :product_st, product_creat = :product_creat where product.product_no = :product_no";

    //合成sql指令,並綁訂對應值
    $products = $pdo->prepare($sql);
    $products->bindValue(":product_name",$dataset["product_name"]);
    $products->bindValue(":product_price",$dataset["product_price"]);
    $products->bindValue(":product_infor",$dataset["product_infor"]);
    $products->bindValue(":product_amount",$dataset["product_amount"]);
    $products->bindValue(":product_pic",$dataset["product_pic"]);
    $products->bindValue(":product_st",$dataset["product_st"]);
    $products->bindValue(":product_creat",$dataset["product_creat"]);
    $products->bindValue(":product_no", $dataset["product_no"]);
    $products->execute();
    echo "異動成功~~";

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

