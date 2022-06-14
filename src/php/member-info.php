<?php
session_start();
//接收送過來的json檔
$json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
// echo $dataset["mem_name"];
try{
    require_once("../connect_cgd101g3.php");

    //寫入資料庫指令
    $sql = "update member set mem_name = :mem_name, mem_lastname = :mem_lastname, mem_id = :mem_id, mem_psw = :mem_psw, mem_tel = :mem_tel, mem_mail = :mem_mail,mem_address = :mem_adress, mem_country = :mem_country where member.mem_no = :mem_no";


    //合成sql指令,並綁訂對應值
    $members = $pdo->prepare($sql);
    $members->bindValue(":mem_id",$_SESSION["mem_id"]);
    $members->bindValue(":mem_psw",$dataset["mem_psw"]);
    $members->bindValue(":mem_name",$dataset["mem_name"]);
    $members->bindValue(":mem_lastname",$dataset["mem_lastname"]);
    $members->bindValue(":mem_tel",$dataset["mem_tel"]);
    $members->bindValue(":mem_mail",$dataset["mem_mail"]);
    $members->bindValue(":mem_adress",$dataset["mem_adress"]);
    $members->bindValue(":mem_country",$dataset["mem_country"]);
    $members->bindValue(":mem_no", $_SESSION["mem_no"]);
    $members->execute();
    echo "異動成功~~";

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>
