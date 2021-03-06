<?php

try{
    require_once("../connect_cgd101g3.php");

    $fileInfoArr = pathinfo($_FILES["fac_pic"]["name"]);
	$fileName = uniqid().".{$fileInfoArr["extension"]}"; 

	$from = $_FILES["fac_pic"]["tmp_name"];
	$to = "../images/$fileName";

    if(copy( $from, $to)===true){
        //寫入資料庫指令
        $sql = "INSERT INTO `facility` (`fac_no`, `fac_pic`, `fac_name`, `fac_descrip`, `fac_status`, `fac_area`, `fac_maintain_date`, `fac_chart`, `fac_rainy`, `fac_preg`, `fac_wheelchair`) VALUES (NULL, :fac_pic, :fac_name, :fac_descrip, '1', :fac_area, :fac_maintain_date, :fac_chart, :fac_rainy, :fac_preg, :fac_wheelchair)";

        // $receiveData = file_get_contents("php://input");
        // $decodeData = json_decode($receiveData, true);
        // echo $decodeData;
        

        //合成sql指令,並綁訂對應值
        $facility = $pdo->prepare($sql);
        $facility->bindValue(":fac_pic", $fileName);
        $facility->bindValue(":fac_name",$_POST["fac_name"]);
        $facility->bindValue(":fac_descrip", "設施介紹");
        $facility->bindValue(":fac_area",$_POST["fac_area"]);
        $facility->bindValue(":fac_maintain_date",$_POST["fac_maintain_date"]);
        $facility->bindValue(":fac_rainy",$_POST["fac_rainy"]);
        $facility->bindValue(":fac_preg",$_POST["fac_preg"]);
        $facility->bindValue(":fac_wheelchair",$_POST["fac_wheelchair"]);
        $facility->bindValue(":fac_chart",$_POST["fac_chart"]);
        
        $result = $facility->execute();
        echo $result;
    };

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
};

?>

