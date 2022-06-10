<?php
session_start();
$json = $_POST["json"]; //json={"memId":"Handsome","memPsw":"111"}
// $json={"memId":"chen","memPsw":"chen1234"};
$datas = json_decode($json, true); //true:關聯性陣列
// echo "已收到: ", $datas["mem_id"], "<br>";
try{
  require_once("./connect_cgd101g3.php");
  $sql = "select * from `member` where mem_id=:mem_id and mem_psw=:mem_psw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_id", $datas["mem_id"]);
  $member->bindValue(":mem_psw", $datas["mem_psw"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
	  echo "查無此人";
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //寫入session
    $_SESSION["mem_no"] = $memRow["mem_no"];
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem_mail"] = $memRow["mem_mail"];

    $result = ["mem_no"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem_mail"=>$_SESSION["mem_mail"]];

    //送出登入者的姓名資料
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

