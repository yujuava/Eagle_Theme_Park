<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 
// 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

try{
	require_once("../connect_cgd101g3.php");

	// 3. 準備寫入資料庫指令, 
	// insert這種落落長的指令 不用特別指定欄位(mem_id=:mem_id (X) ), 直接擺value上去就好
	$sql = "select * from member WHERE mem_id=:inputAccount";

 
	// 4. 合成SQL指令, 並將綁定對應值
	$validateAccount = $pdo->prepare($sql);
	$validateAccount -> bindValue(":inputAccount", $dataset["inputAccount"]);
	$validateAccount -> execute();

    // response result to previous page
    echo json_encode($validateAccount-> rowCount());

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 