<?php
session_start();

$json = $_POST["json"]; 
$dataset = json_decode($json, true);

switch ($dataset["action"]){
    case "loginStatus":
        if(isset($_SESSION["mem_id"]) == false){
            echo json_encode("0");
        }else{
            echo json_encode("1");
        };
    break;

    case "gameComplete":
        
        if(isset($_SESSION["mem_id"]) == true){
        // 遊戲完成 開資料庫寫入酷碰
            try{
                require_once("../connect_cgd101g3.php");
                $sql = "INSERT INTO `coupon` (`coupon_no`, `mem_no`, `cupon_status`) VALUES (NULL, :mem_no, '0')";
                // 開SESSION 取得會員資料 以寫入新酷碰
                $gameCoupon = $pdo->prepare($sql);
                $gameCoupon->bindValue(":mem_no", $_SESSION["mem_no"]);
                $gameCoupon->execute();
                // sucess receive coupon
                echo json_encode("1"); 
            }catch(PDOException){
                echo json_encode("系統暫時無法提供服務, 請聯絡系統維護人員"); 
            }
        }else{
            echo json_encode("0");
        };

    break;
    
}


?>