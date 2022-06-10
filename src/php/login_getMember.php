<?php
//判斷是否有這個帳密
session_start();
if(isset($_SESSION["mem_id"]) == true){ //已登入
	$result = ["mem_no"=>$_SESSION["mem_no"], "mem_id"=>$_SESSION["mem_id"], "mem_name"=>$_SESSION["mem_name"], "mem_mail"=>$_SESSION["mem_mail"]];
	echo json_encode($result);
}else{
	echo "{}";
}
?>