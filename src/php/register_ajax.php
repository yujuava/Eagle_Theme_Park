<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 

// 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

try{
	require_once("./connect_cgd101g3.php");

	// 3. 準備寫入資料庫指令, 
	// insert這種落落長的指令 不用特別指定欄位(mem_id=:mem_id (X) ), 直接擺value上去就好
	$sql = "INSERT INTO `member` (`mem_no`, `mem_id`, `mem_psw`, `mem_state`, `mem_date`) VALUES (NULL, :mem_id, :mem_psw, 0, :mem_date)";

	// $sql = "INSERT INTO `member` (`mem_no`, `mem_name`, `mem_lastname`, `mem_id`, `mem_psw`, `mem_tel`, `mem_mail`, `mem_state`, `mem_address`, `mem_country`, `mem_birth`, `mem_date`) VALUES (NULL, `mem_name`, `mem_lastname`, :mem_id, :mem_psw, `mem_tel`, `mem_mail`, 0, `mem_address`, `mem_country`, '2022-06-01', '2022-06-01')";
	
	// 4. 合成SQL指令, 並將綁定對應值
	$register = $pdo->prepare($sql);
	$register->bindValue(":mem_id", $dataset["memId"]);
	$register->bindValue(":mem_psw", $dataset["memPsw"]);
	$register->bindValue(":mem_date", $dataset["memDate"]);
	$register->execute();

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 