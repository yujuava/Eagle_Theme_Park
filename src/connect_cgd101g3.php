<?php 
// TIBAME上線用  目前先建立  大家請先別使用
	$dbname = "tibamefe_cgd101g3";
	$user = "tibamefe_since2021";
	$password = "vwRBSb.j&K#E";

	$dsn = "mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
	$options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

	$pdo = new PDO($dsn, $user, $password, $options);
?>