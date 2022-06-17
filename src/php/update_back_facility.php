<?php
session_start();
//接收送過來的json檔
$json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
// echo $dataset["mem_name"];
try{
    require_once("../connect_cgd101g3.php");

     //寫入資料庫指令

     $sql = "update facility set fac_pic = :fac_pic,
     fac_name = :fac_name,
     fac_descrip = :fac_descrip,
     fac_status = :fac_status,
     fac_area = :fac_area,
     fac_maintain_date = :fac_maintain_date,
     fac_chart = :fac_chart, fac_rainy=:fac_rainy,fac_preg = :fac_preg,
     fac_wheelchair=:fac_wheelchair
     where fac_no = :fac_no";

     //合成sql指令,並綁訂對應值
     $facility = $pdo->prepare($sql);
     // $products->bindValue(":product_no",$dataset["product_no"]);
     $facility->bindValue(":fac_no",$dataset["fac_no"]);
     $facility->bindValue(":fac_pic",$dataset["fac_pic"]);
     $facility->bindValue(":fac_name",$dataset["fac_name"]);
     $facility->bindValue(":fac_descrip",$dataset["fac_descrip"]);
     $facility->bindValue(":fac_status",$dataset["fac_status"]);
     $facility->bindValue(":fac_area",$dataset["fac_area"]);
     $facility->bindValue(":fac_maintain_date",$dataset["fac_maintain_date"]);
     $facility->bindValue(":fac_chart", $dataset["fac_chart"]);
     $facility->bindValue(":fac_rainy", $dataset["fac_rainy"]);
     $facility->bindValue(":fac_preg", $dataset["fac_preg"]);
     $facility->bindValue(":fac_wheelchair", $dataset["fac_wheelchair"]);
     $facility->execute();
    //  echo "異動成功~~";



}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

