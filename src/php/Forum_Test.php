<?php 
try{
	require_once("../connect_cgd101g3.php");

	$sql = "SELECT `article`.*, `member`.`mem_name`, `article`.`article_no` FROM `article` LEFT JOIN `member` ON `article`.`mem_no` = `member`.`mem_no` WHERE `article`.`article_no` = '6';"; //準備好sql指令
	$article = $pdo->query($sql); //將sql指令送到mysql去執行, 回傳的是pdoStatement
	$articledRow = $article->fetchAll(PDO::FETCH_ASSOC);

	$sql = "SELECT `comment`.*, `article`.`article_no`, `member`.`mem_name` 
	FROM `comment` LEFT JOIN `article` ON `comment`.`article_no` = `article`.`article_no` 
	LEFT JOIN `member` ON `comment`.`mem_no` = `member`.`mem_no`
	WHERE `article`.`article_no` = '6';";

	$comment = $pdo->query($sql); //將sql指令送到mysql去執行, 回傳的是pdoStatement
	$commentdRow = $comment->fetchAll(PDO::FETCH_ASSOC);

	echo "<br>我是分隔線<br>";
	echo "articledRow資料原始型態<br>";
	echo var_dump($articledRow);

	echo "<br>我是分隔線<br>";
	echo "commentdRow資料原始型態<br>";
	echo var_dump($commentdRow);

	echo "<br>我是分隔線<br>";
	echo "合成結果陣列<br>";
	// array_unshift($articledRow, "queryResult: articledRow");
	// array_unshift($commentdRow, "queryResult: commentdRow");
	$responseResults = array();
	array_push($responseResults ,$articledRow, $commentdRow);
	echo var_dump($responseResults);


	echo "<br>我是分隔線<br>";
	echo json_encode( $responseResults );
	echo "<br>我是分隔線<br>";



}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 
