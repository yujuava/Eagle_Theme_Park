<?php
// by hana 
session_start();
//---1
//unset($_SESSION["memNo"]);
//unset($_SESSION["memId"]);
//unset($_SESSION["memName"]);
//unset($_SESSION["email"]); 
//---2(全刪)
//session_unset();
//---3(連session檔都刪)
session_destroy();
?>