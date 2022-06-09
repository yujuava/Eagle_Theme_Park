<?php 
// TIBAME上線用
//	$dbname = "tibamefe_cgd101g3";
//	$user = "tibamefe_since2021";
//	$password = "vwRBSb.j&K#E";

// 離線連線本地端使用 請改為自己的資料庫名稱 使用者帳號 密碼
	$dbname = "eagle_park";
	$user = "root";
	$password = "root";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
?>