<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 
// // 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

// echo var_dump($dataset);
$total = 0;
// $ary = $dataset["carts"];
// $stotal = $ary[0]["product_price"] * $ary[0]["product_amount"]
for($i=0;$i<count($dataset["carts"]);$i++){
	$stotal = ($dataset["carts"][$i]["product_price"]*($dataset["carts"][$i]["product_amount"]));
	$total += $stotal;}
echo $total;
// echo var_dump(($ary[0]["product_price"] * $ary[0]["product_amount"]))
// echo var_dump(($dataset["carts"][0]["product_price"]*($dataset["carts"][0]["product_amount"])));
// echo $dataset["mem_name"];
// echo var_dump(count($dataset["carts"]));

// echo $dataset.mem_no
// echo "商品編號:";
try{

	require_once("../connect_cgd101g3.php");

    $sql = "INSERT INTO `product_order` (`product_order_no`, `mem_no`, `coupon_no`, `order_shipping`, `product_order_time`, `product_order_way`, `product_order_place`, `product_order_over_time`, `product_order_real_price`, `product_order_tp`) VALUES (NULL,:mem_no, NULL, '0',CURRENT_DATE(), '0', :mem_address, NULL, :product_order_tp, :product_order_tp);";
	// 記得值要綁到 與欄位的資料形態要正確
	//訂單成立匯入資料庫
	$order = $pdo->prepare($sql);
	$order->bindValue(":mem_no", $dataset["mem_no"]);
	$order->bindValue(":mem_address", $dataset["mem_address"]);
	$order->bindValue(":product_order_tp", $total);
	$order->execute();


	$sql = "INSERT INTO `product_order_item` (`product_order_no`, `product_no`, `product_total`, `product_order_price`) VALUES (NULL, :product_no, :product_amount, :product_price);";
	$orderitem = $pdo->prepare($sql);

	for($j=0;$j<count($dataset["carts"]);$j++){
		$orderitem->bindValue(":product_no",$dataset["carts"][$j]["product_no"]);
		$orderitem->bindValue(":product_amount", $dataset["carts"][$j]["product_amount"]);
		$orderitem->bindValue(":product_price", $dataset["carts"][$j]["product_price"]);
	}
	$orderitem->execute();

	echo json_encode("0"); // response 0 as sucess order

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 