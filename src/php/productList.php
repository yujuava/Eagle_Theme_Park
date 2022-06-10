<?php 
// 於HTML結構前預先載入PHP並與資料庫進行連線
// HMTL內容為測試資料 若能獲取商品資料代表正確執行
try{
	require_once("../mySQL/connectLocalDb.php");

	$sql = "select * from product"; //準備好sql指令
	$product = $pdo->query($sql); //將sql指令送到mysql去執行, 回傳的是pdoStatement

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
<style>
	body{
		background-color: #FFFBEF;
	}
	th {
                background-color: #A7D4D3;
                padding: 7px;
        }

    td {
            vertical-align: middle;
            padding: 10px;
			text-align: center;
			border-bottom: 1px solid #A7D4D3;
        }
</style>
<body>


<table align='center' class='productTable'>
	<tr><th>商品編號</th><th>商品圖片</th><th>商品名稱</th><th>商品價格</th><th>商品資訊</th><th>商品狀態</th><th>建立日期</th></tr>
<?php 	
	while($prodRow = $product->fetch(PDO::FETCH_ASSOC)){//取回一筆資料放到關聯性陣列中,
?>
		<tr>
		<td><?=$prodRow["product_no"]?></td>
		<td><img width="100" src="images/<?=$prodRow["product_pic"]?>"></td>
		<td><?=$prodRow["product_name"]?></td>
		<td><?=$prodRow["product_price"]?></td>
		<td><?=$prodRow["product_infor"]?></td>
        <td><?=$prodRow["product_st"]?></td>
        <td><?=$prodRow["product_creat"]?></td>
		</tr>
<?php
	} 
?>	
	</table>
</body>
</html>