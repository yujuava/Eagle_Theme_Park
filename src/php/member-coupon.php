<?php
session_start();
try{

    require_once("../connect_cgd101g3.php");
    //寫入資料庫指令
    $sql = "SELECT * FROM `coupon` WHERE mem_no = :bbb";


    //合成sql指令,並綁訂對應值
    $memberCoupon = $pdo->prepare($sql);

    $memberCoupon -> bindValue(":bbb", $_SESSION["mem_no"]); 
    $memberCoupon ->execute();
    $memberCouponRows = $memberCoupon->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($memberCouponRows);
    // echo "異動成功~~";

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

