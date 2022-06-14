<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 
// 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

echo $dataset.mem_no
// echo "商品編號:";
try{

	require_once("../connect_cgd101g3.php");

    $sql = "INSERT INTO `product_order` (`product_order_no`, `mem_no`, `coupon_no`, `order_shipping`, `product_order_time`, `product_order_way`, `product_order_place`, `product_order_over_time`, `product_order_real_price`, `product_order_tp`) VALUES (NULL,:mem_no, NULL, '0',CURRENT_DATE(), '0', :mem_address, NULL, NULL, :product_order_tp);"




	// 4. 合成SQL指令, 並將綁定對應值


	$order = $pdo->prepare($sql);
	$order->bindValue(":mem_no", $dataset["mem_no"]);
	$order->bindValue(":mem_address", $dataset["mem_address"]);
	$order->execute();
	echo json_encode("0"); // response 0 as sucess order

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 