<?php
try{
    require_once("../connect_cgd101g3.php");

    // echo "連線成功<br>";
    $sql ="select * from news";
    $pdoStatement = $pdo->query($sql); 
     // $x = $pdo->exec($sql);
    // echo "成功了異動了{$x}筆資料<br>";  

    $news = $pdo->query($sql);    
	$newsRow = $news->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($newsRow);     //用json格式 echo送回頁面
}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>