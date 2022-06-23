<?php
// by hana
session_start(); //
try{
  require_once("../connect_cgd101g3.php");
  $sql = "SELECT po.product_order_no, po.product_order_time, po.product_order_tp, po.order_shipping, po.mem_no, poi.product_no, poi.product_total, poi.product_order_price, p.product_name from product_order po join product_order_item poi on po.product_order_no = poi.product_order_no left join product p on p.product_no = poi.product_no where po.mem_no = :aaa 
  order by poi.product_no DESC;";  //sql= : 自訂變數

  $memberOrder = $pdo->prepare($sql);
  $memberOrder -> bindValue(":aaa", $_SESSION["mem_no"]); 
  $memberOrder ->execute();
  $memberOrderRows = $memberOrder->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($memberOrderRows,JSON_NUMERIC_CHECK);
//  echo var_dump($memberOrderResult);

}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
}
?>




