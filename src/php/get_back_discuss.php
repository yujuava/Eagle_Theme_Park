<?php
try{
    require_once("../connect_cgd101g3.php");

    // echo "連線成功<br>";
    // $sql ="select * from article";
    // $pdoStatement = $pdo->query($sql); 
    // // $x = $pdo->exec($sql);
    // // echo "成功了異動了{$x}筆資料<br>";  

    // $discuss = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	// $discussRows = $discuss->fetchAll(PDO::FETCH_ASSOC);
    // echo json_encode($discussRows);



    // 測試 回傳文章表格與會員名稱
    $sql = "SELECT `article`.*, `member`.`mem_name`, `article`.`article_no` FROM `article` LEFT JOIN `member` ON `article`.`mem_no` = `member`.`mem_no`"; //準備好sql指令
	$article = $pdo->query($sql);
	$articledRow = $article->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode( $articledRow );



}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>