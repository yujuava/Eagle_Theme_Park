<?php 
// 於HTML結構前預先載入PHP並與資料庫進行連線
// HMTL內容為測試資料 若能獲取會員資料代表正確執行
try{
	require_once("../connect_cgd101g3.php");

	$sql = "select * from member"; //準備好sql指令
	$member = $pdo->query($sql); //將sql指令送到mysql去執行, 回傳的是pdoStatement

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<table align='center' class='productTable'>
	<tr><th>會員編號</th><th>會員名</th><th>會員姓氏</th><th>會員帳號</th></tr>
<?php 	
	while($memdRow = $member->fetch(PDO::FETCH_ASSOC)){ //取回一筆資料放到關聯性陣列中,
?>
		<tr>
		<td><?=$memdRow["mem_no"]?></td>
		<td><?=$memdRow["mem_name"]?></td>
		<td><?=$memdRow["mem_lastname"]?></td>
		<td><?=$memdRow["mem_id"]?></td>
		</tr>
<?php
	} 
?>	
	</table>
</body>
</html>