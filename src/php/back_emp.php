<?php
//抓後台頁面的會員資料
try{
    require_once("../connect_cgd101g3.php");
    // echo "連線成功<br>";
    $sql ="SELECT * FROM `emp`";
    $emp = $pdo->query($sql);    //取變數名稱 ,執行第6行
    // $x = $pdo->exec($sql);
    // echo "成功了異動了{$x}筆資料<br>";  
	$empRow = $emp->fetchAll(PDO::FETCH_ASSOC);  //把資料打包處裡,存到newsRow(盡量)
    echo json_encode($empRow);     //用json格式 echo送回頁面
}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>