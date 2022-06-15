<?php
// by hana
session_start(); //

try{
  require_once("../connect_cgd101g3.php");
  $sql = "SELECT po.product_order_no, po.product_order_time, po.product_order_tp, po.order_shipping, po.mem_no, poi.product_no, poi.product_total, poi.product_order_price, p.product_name from product_order po join product_order_item poi on po.product_order_no = poi.product_order_no left join product p on p.product_no = poi.product_no where po.mem_no = 13;";  //sql= : 自訂變數

  $memberOrder = $pdo->prepare($sql);
  $memberOrder->bindValue(":mem_no", $_SESSION["mem_no"]); //把前台收到的包裹拆開來，包裹裡面的東西對應的欄位 送到sql 查詢!
  $memberOrderResult = $memberOrder->execute();

//   $testRows = $memberOrderResult->fetchAll(PDO::FETCH_ASSOC);

//  echo var_dump($memberOrderResult);

 echo json_encode($memberOrderResult);
 
     

    //送出登入者的姓名資料
    // echo json_encode($result); //送去前台
    // echo 1;
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>




