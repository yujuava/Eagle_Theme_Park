<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 
// // 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

echo var_dump($dataset);
$total = 0;
for($i=0;$i<count($dataset["tickets"]);$i++){
	$stotal = ($dataset["tickets"][$i]["ticket_price"]*($dataset["tickets"][$i]["ticket_amount"]));
	$total += $stotal;}

// echo "商品編號:";
try{

	require_once("../connect_cgd101g3.php");

    $sql = "INSERT INTO `ticket_order` (`ticket_order_no`, `mem_no`, `ticket_order_tp`, `ticket_order_time`, `ticket_order_shipping`) VALUES (NULL,:mem_no, :ticket_order_tp,CURRENT_DATE(),'1');";
	// 記得值要綁到 與欄位的資料形態要正確
	//訂單成立匯入資料庫
	$order = $pdo->prepare($sql);
	$order->bindValue(":mem_no", $dataset["mem_no"]);
	$order->bindValue(":ticket_order_tp", $total);
	$order->execute();
	$orderNo = $pdo->lastInsertId();

	$sql = "INSERT INTO `ticket_item` (`ticket_order_no`, `ticket_no`, `ticket_total`, `ticket_order_price`) VALUES ($orderNo, :ticket_no, :ticket_amount, :ticket_price);";
		
	$orderitem = $pdo->prepare($sql);
	for($j=0;$j<count($dataset["tickets"]);$j++){
		$orderitem->bindValue(":ticket_no",$dataset["tickets"][$j]["ticket_no"]);
		$orderitem->bindValue(":ticket_amount", $dataset["tickets"][$j]["ticket_amount"]);
		$orderitem->bindValue(":ticket_price", $dataset["tickets"][$j]["ticket_price"]);
		$orderitem->execute();
	}

	echo json_encode("{}"); // response 0 as sucess order

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 