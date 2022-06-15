<?php
//by hana
//判斷是否有這個帳密，不管在哪個頁面都登入
session_start();
if(isset($_SESSION["mem_id"]) == true){ //已登入
	// $result = ["mem_no"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem_mail"=>$_SESSION["mem_mail"]];

    $result = ["mem_no"=>$_SESSION["mem_no"],
	"mem_id"=>$_SESSION["mem_id"],
	"mem_psw"=>$_SESSION["mem_psw"],
	"mem_name"=>$_SESSION["mem_name"], 
	"mem_mail"=>$_SESSION["mem_mail"],
	"mem_lastname"=>$_SESSION["mem_lastname"],
	"mem_tel"=>$_SESSION["mem_tel"],
	"mem_address"=>$_SESSION["mem_address"],
	"mem_country"=>$_SESSION["mem_country"]];


	echo json_encode($result);
}else{
	echo "{}";
}
?>