<?php
try{
    require_once("../connect_cgd101g3.php");

    // echo "連線成功<br>";
    $sql ="SELECT i.product_order_no, i.product_total, i.product_order_price
    , p.product_name,o.product_order_time, o.mem_no,o.product_order_place, o.product_order_tp, o.order_shipping,m.mem_name
   from product p join product_order_item i on p.product_no = i.product_no
   LEFT join product_order o on i.product_order_no = o.product_order_no
   LEFT join member m on o.mem_no = m.mem_no
   order by product_order_no desc;";
    $pdoStatement = $pdo->query($sql); 
    // $x = $pdo->exec($sql);
    // echo "成功了異動了{$x}筆資料<br>";  

    $orderRow = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$orderRows = $orderRow->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($orderRows);
}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>