<?php
try{
    require_once("connectLocalDb.php");

    echo "連線成功<br>";
    $sql ="select * from member";
    $pdoStatement = $pdo->query($sql); 
    $x = $pdo->exec($sql);
    echo "成功了異動了{$x}筆資料<br>";  
}catch(PDOEception $e){
    echo"錯誤訊息:" ,$e->getMessage(),"<br>";
    echo"錯誤行號:" ,$e->getLine(),"<br>";
};
?>
<!DOCTYPE html>
<html lang="en">
<head>
    @@include('layout/meta.html', {
        "title" : "會員管理"
    })
</head>
<!-- 改body class名稱 -->
<body class="back_member back_reset">
    @@include('layout/backNav.html')

    <div class="back_content">
        <h2>會員管理</h2>
        <table class="box">
            <?php 
                $row = $pdoStatement->fetch();
                // =========================================================
                while($row = $pdoStatement->fetch(PDO::FETCH_ASSOC)){
            ?>
                    <tr>
                    <th>序號</th>
                    <th>會員帳號</th>
                    <th>會員名稱</th>
                    <th>建立時間</th>
                    </tr>
                
                    <tr>
                    <td> <?php echo $row["mem_no"] ?> </td>
                    <td> <?php echo $row["mem_id"] ?> </td>
                    <td> <?= $row["mem_name"] ?> </td>
                    <td> <?= $row["mem_birth"] ?> </td>
                    </tr>
            <?php
                };
            ?>
        </table>
    </div>

    <!--  ===============map ===============  -->
    <!-- @@include('layout/map.html') -->
    <!-- footer  -->
    <!-- @@include('layout/footer.html') -->
</body>
</html>