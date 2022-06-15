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
	$validateResult = $validateAccount -> rowCount();
    // response result to previous page
    if($validateResult != 0){
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

	session_start();
	// 同時寫入SESSION以便後續都入使用
	// 寫入session後直接帶入
	$sql = "select * from `member` where mem_id=:mem_id";
	$member = $pdo->prepare($sql);
	$member -> bindValue(":mem_id", $dataset["memId"]);
	$member -> execute();
	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    $_SESSION["mem_no"] = $memRow["mem_no"]; //把正確的欄位送到session =前面是給seesion =後面是依據mysql的
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem_mail"] = $memRow["mem_mail"];
    $_SESSION["mem_psw"] = $memRow["mem_psw"];
    $_SESSION["mem_lastname"] = $memRow["mem_lastname"];
    $_SESSION["mem_tel"] = $memRow["mem_tel"];
    $_SESSION["mem_address"] = $memRow["mem_address"];
    $_SESSION["mem_country"] = $memRow["mem_country"];


	// response 0 as sucess register
	// Note: even echo a single word, strongly recommend encode dataType in Object
	echo json_encode("0"); 

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 