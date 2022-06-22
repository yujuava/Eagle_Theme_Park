<?php
try{
    require_once("../connect_cgd101g3.php");

    // echo "連線成功<br>";
    $sql ="select * from product where product_st = 0";
    $pdoStatement = $pdo->query($sql); 
    // $x = $pdo->exec($sql);
    // echo "成功了異動了{$x}筆資料<br>";  

    $product = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $product->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($prodRows,JSON_NUMERIC_CHECK);
}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>