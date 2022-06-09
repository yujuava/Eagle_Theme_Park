<?php 
// 請修正為本地端資料庫名稱 與 本地端帳號密碼
	$dbname = "eagle_park";
	$user = "root";
	$password = "az199685";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";

	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
?>