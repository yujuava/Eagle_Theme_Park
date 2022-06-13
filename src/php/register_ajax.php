<?php 
// 1. 接收送過來的JSON檔案
$json = $_POST["json"]; 
// 2. 解封裝並儲存到DATASET變數裡
$dataset = json_decode($json, true); //true:關聯性陣列

try{

	require_once("../connect_cgd101g3.php");
	$sql = "select * from member WHERE mem_id=:memId";
	$validateAccount = $pdo->prepare($sql);
	$validateAccount -> bindValue(":memId", $dataset["memId"]);
	$validateAccount -> execute();
	$validateAccount -> rowCount();
    // response result to previous page
    if($validateAccount == 0){
		echo json_encode("1"); // response 1 mean memName already exsist
		exit();
	};
    if($dataset["memPsw1"] != $dataset["memPsw2"]){
		echo json_encode("1"); // response 1 mean memPsw doesn't match
		exit();
	};

	// 3. 準備寫入資料庫指令, 
	// insert這種落落長的指令 不用特別指定欄位(mem_id=:mem_id (X) ), 直接擺value上去就好
	$sql = "INSERT INTO `member` (`mem_no`, `mem_name`, `mem_lastname`, `mem_id`, `mem_psw`, `mem_tel`, `mem_mail`, `mem_state`, `mem_address`, `mem_country`, `mem_birth`, `mem_date`) VALUES (NULL, NULL, NULL, :mem_id, :mem_psw, NULL, NULL, 0, NULL, NULL, NULL, CURRENT_DATE() )";
	// 4. 合成SQL指令, 並將綁定對應值
	$register = $pdo->prepare($sql);
	$register->bindValue(":mem_id", $dataset["memId"]);
	$register->bindValue(":mem_psw", $dataset["memPsw1"]);
	$register->execute();
	echo json_encode("0"); // response 0 as sucess register

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 