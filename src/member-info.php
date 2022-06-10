<?php
//接收送過來的json檔
$json = $_POST["json"];

// //解封裝儲存到DATASET變數裡
$dataset = json_decode($json,true);
echo $dataset.["mem_name"];
try{
    require_once("./connect_cgd101g3.php");

    //寫入資料庫指令
    $sql = "UPDATE `member` SET (`mem_name`, `mem_lastname`, `mem_id`, `mem_psw`, `mem_tel`, `mem_mail`, `mem_address`, `mem_country` WHERE `member`.`mem_no`)VALUE(`:mem_name`,`:mem_lastname`,`:mem_id`,`:mem_psw`,`:mem_tel`,`:mem_mail`,`:mem_address`,`:mem_country`,NULL)";

// 參考指令(更新) 
// UPDATE `member` SET `mem_name` = 'tyu', `mem_lastname` = 'tyu', `mem_id` = '112tyu', `mem_psw` = '123u', `mem_tel` = 'tyu', `mem_mail` = 'tyuuty', `mem_address` = 'tyuyt', `mem_country` = 'tyu' WHERE `member`.`mem_no` = 6;


    //合成sql指令,並綁訂對應值
    $edit = $pdo->prepare($sql);
    $edit->bindValue(":mem_name",$dataset["mem_name"]);
    $edit->bindValue(":mem_lastname",$dataset["mem_lastname"]);
    $edit->bindValue(":mem_tel",$dataset["mem_tel"]);
    $edit->bindValue(":mem_mail",$dataset["mem_mail"]);
    $edit->bindValue(":mem_address",$dataset["mem_address"]);
    $edit->bindValue(":mem_country",$dataset["mem_country"]);
    $exit->execute();




}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}


?>

