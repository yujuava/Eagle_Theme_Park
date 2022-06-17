<?php 
$json = $_POST["json"]; 
$dataset = json_decode($json, true);

try{
	require_once("../connect_cgd101g3.php");

	$sql = "SELECT `article`.*, `member`.`mem_name`, `article`.`article_no` FROM `article` LEFT JOIN `member` ON `article`.`mem_no` = `member`.`mem_no` WHERE `article`.`article_no` = :articleNo;"; //準備好sql指令
	$article = $pdo->prepare($sql); //將sql指令送到mysql去執行, 回傳的是pdoStatement
	$article -> bindValue(":articleNo", $dataset["articleNo"]);
	$article -> execute();
	$articledRow = $article->fetchAll(PDO::FETCH_ASSOC);

	$sql = "SELECT `comment`.*, `article`.`article_no`, `member`.`mem_name` 
	FROM `comment` LEFT JOIN `article` ON `comment`.`article_no` = `article`.`article_no` 
	LEFT JOIN `member` ON `comment`.`mem_no` = `member`.`mem_no`
	WHERE `article`.`article_no` = :articleNo;";

	$comment = $pdo->prepare($sql);
	$comment -> bindValue(":articleNo", $dataset["articleNo"]);
	$comment -> execute();
	$commentdRow = $comment->fetchAll(PDO::FETCH_ASSOC);

	

	// array_unshift($articledRow, "queryResult: articledRow");
	// array_unshift($commentdRow, "queryResult: commentdRow");
	$responseResults = array();
	array_push($responseResults ,$articledRow, $commentdRow);
	// echo var_dump($responseResults);

	echo json_encode( $responseResults );


}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 
