<?php
session_start();
//接收送過來的json檔
$json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
// echo $dataset["mem_name"];
// echo "123456";
echo var_dump($dataset);
try{

    require_once("../connect_cgd101g3.php");

    //寫入資料庫指令
    $sql = "update member set mem_name = :mem_name, mem_lastname = :mem_lastname,mem_psw = :mem_psw, mem_tel = :mem_tel, mem_mail = :mem_mail,mem_address = :mem_address, mem_country = :mem_country where mem_no = :mem_no";


    //合成sql指令,並綁訂對應值
    $members = $pdo->prepare($sql);

    $members->bindValue(":mem_name",$dataset["mem_name"]);
    $members->bindValue(":mem_psw",$dataset["mem_psw"]);
    $members->bindValue(":mem_lastname",$dataset["mem_lastname"]);
    $members->bindValue(":mem_tel",$dataset["mem_tel"]);
    $members->bindValue(":mem_mail",$dataset["mem_mail"]);
    $members->bindValue(":mem_address",$dataset["mem_address"]);
    $members->bindValue(":mem_country",$dataset["mem_country"]);
    $members->bindValue(":mem_no", $dataset["mem_no"]);
    $members->execute();
    echo "異動成功~~";  

    //修改密碼
    if($dataset["mem_NewPsw"] != NULL){
        $sql = "update member set mem_psw = :mem_NewPsw where mem_no = :mem_no";
        $memberNewPsw= $pdo->prepare($sql);
        $memberNewPsw -> bindValue(":mem_no", $dataset["mem_no"]);
        $memberNewPsw -> bindValue(":mem_NewPsw", $dataset["mem_NewPsw"]);
        $memberNewPsw -> execute();
    }


	// 同時更新SESSION 新註冊會員資料為空的 若未同步更新會造成無法讀取
	$sql = "select * from `member` where mem_no=:mem_no";
	$member = $pdo->prepare($sql);
	$member -> bindValue(":mem_no", $dataset["mem_no"]);
	$member -> execute();
	$memRow = $member->fetch(PDO::FETCH_ASSOC);
    $_SESSION["mem_no"] = $memRow["mem_no"]; //把正確的欄位送到session =前面是給seesion =後面是依據mysql的
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem_mail"] = $memRow["mem_mail"];
    $_SESSION["mem_psw"] = $memRow["mem_psw"];
    $_SESSION["mem_lastname"] = $memRow["mem_lastname"];
    $_SESSION["mem_tel"] = $memRow["mem_tel"];
    $_SESSION["mem_address"] = $memRow["mem_address"];
    $_SESSION["mem_country"] = $memRow["mem_country"];

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

