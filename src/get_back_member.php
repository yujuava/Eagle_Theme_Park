<?php
try{
    require_once("connectLocalDb.php");

    // echo "連線成功<br>";
    $sql ="select * from member";
    $pdoStatement = $pdo->query($sql); 
    // $x = $pdo->exec($sql);
    // echo "成功了異動了{$x}筆資料<br>";  

    $member = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$memRows = $member->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($memRows);
}catch(PDOEception $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>