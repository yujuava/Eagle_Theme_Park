<?php
session_start();

try{
    require_once("../connect_cgd101g3.php");
    $fileInfoArr = pathinfo($_FILES["fac_pic"]["name"]);
	$fileName = uniqid().".{$fileInfoArr["extension"]}"; 

	$from = $_FILES["fac_pic"]["tmp_name"];
	$to = "../images/$fileName";
    if(copy( $from, $to)===true){
        //寫入資料庫指令
        $sql = "insert into `facility` (`fac_name`, `fac_pic`, `fac_descrip`, `fac_status`, `fac_area`,`fac_maintain_data`,`fac_chart,`fac_rainy`,`fac_preg`,`fac_wheelchair`) values (:fac_name, :fac_pic,:fac_descrip, :fac_status, :fac_area,:fac_maintain_data,0,0,0,0)";

        //合成sql指令,並綁訂對應值
        $facility = $pdo->prepare($sql);
        $facility->bindValue(":fac_pic",$fileName);
        $facility->bindValue(":fac_name",$_POST["fac_name"]);
        $facility->bindValue(":fac_area",$_POST["fac_area"]);
        $facility->bindValue(":fac_maintain_data",$_POST["fac_maintain_data"]);
        $facility->bindValue(":fac_rainy",$_POST["fac_rainy"]);
        $facility->bindValue(":fac_preg",$_POST["fac_preg"]);
        $facility->bindValue(":fac_wheelchair",$_POST["fac_wheelchair"]);
        $facility->bindValue(":fac_chart",$_POST["fac_chart"]);
        
        $facility->execute();
        echo "異動成功~~";  
    }
    

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}

?>

