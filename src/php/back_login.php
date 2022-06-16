<?php
//取得表單送來的資料
session_start();
try{
	//連線
	require_once("../connect_cgd101g3.php"); 
	//執行sql指令
	$sql = "select * from emp where emp_id = :emp_id and emp_psw = :emp_psw";
	$emp = $pdo->prepare($sql);
    $emp->bindValue(":emp_id", $_POST["empId"]);
	$emp->bindValue(":emp_psw", $_POST["empPsw"]);
    $emp->execute();
	
}catch(PDOException $e){
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";
    exit("end---"); //php停止執行, 並輸出訊息	
}
if($emp->rowCount() == 0){//若查無此人的資料即為帳密錯誤, 請重新登入~<br>
	echo "<script>window.alert('帳密錯誤, 請重新登入');location.href='../back_login.html'</script>";
}else{//若有此人資料，請取回資料並顯示登入者名字 
	$empRow = $emp->fetch(PDO::FETCH_ASSOC);
    $_SESSION["empId"] = $empRow["emp_id"];
    $_SESSION["empPsw"] = $empRow["emp_psw"];
	echo "<script>window.alert('歡迎登入伊果樂園後台');location.href='../back_emp.html'</script>";
}
?>