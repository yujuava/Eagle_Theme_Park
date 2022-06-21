<?php
// by hana
session_start(); //
try{
  require_once("../connect_cgd101g3.php");
  $sql = " SELECT t.ticket_name,t.ticket_price,tt.ticket_total,tor.mem_no,tor.ticket_order_tp,tor.ticket_order_shipping,tor.ticket_order_time,tor.ticket_order_no from ticket t join ticket_item tt on t.ticket_no = tt.ticket_no left join ticket_order tor on tt.ticket_order_no = tor.ticket_order_no where ticket_total > 0
  order by ticket_order_no ASC;";

  $memberTicket = $pdo->prepare($sql);
  $memberTicket ->execute();
  $memberTicketRows = $memberTicket->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($memberTicketRows);
//  echo var_dump($memberOrderResult);

}catch(PDOException $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
}
?>




