<?php
// by hana
session_start(); //
$json = $_POST["json"]; //json={"memId":"Handsome","memPsw":"111"}
// $json={"memId":"chen","memPsw":"chen1234"};
$datas = json_decode($json, true); //true:關聯性陣列
// echo "已收到: ", $datas["mem_id"], "<br>";
try{
  require_once("../connect_cgd101g3.php");
  $sql = "select * from `member` where mem_id=:aaa and mem_psw=:bbb";  //sql= : 自訂變數
  $member = $pdo->prepare($sql);
  $member->bindValue(":aaa", $datas["memid"]); //把前台收到的包裹拆開來，包裹裡面的東西對應的欄位 送到sql 查詢!
  $member->bindValue(":bbb", $datas["mempsw"]);
  $member->execute(); //執行 -> 結果丟給$member

  if( $member->rowCount()==0){ //查詢欄位等於0  == 查無此人
	  echo 0;
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC); //用fetch pdo 把大member包裹拆開!放到row至物價
    //寫入session
    $_SESSION["mem_no"] = $memRow["mem_no"]; //把正確的欄位送到session =前面是給seesion =後面是依據mysql的
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem_mail"] = $memRow["mem_mail"];

    $_SESSION["mem_lastname"] = $memRow["mem_lastname"];
    $_SESSION["mem_tel"] = $memRow["mem_tel"];
    $_SESSION["mem_address"] = $memRow["mem_address"];
    $_SESSION["mem_country"] = $memRow["mem_country"];

    // $result = ["mem_no"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem_mail"=>$_SESSION["mem_mail"]];
    $result = ["mem_no"=>$_SESSION["mem_no"],
	"mem_id"=>$_SESSION["mem_id"],
	"mem_name"=>$_SESSION["mem_name"], 
	"mem_mail"=>$_SESSION["mem_mail"],
	"mem_lastname"=>$_SESSION["mem_lastname"],
	"mem_tel"=>$_SESSION["mem_tel"],
  "mem_address"=>$_SESSION["mem_address"],
  "mem_country"=>$_SESSION["mem_country"]];

    //送出登入者的姓名資料
    echo json_encode($result); //送去前台
    // echo 1;
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

