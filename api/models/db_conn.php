<?php

$sName = "localhost";
$uName = "admin";
$pass = "braves1995";
$db_name = "rentals";


try {
    $dbconn = new PDO("mysql:host=$sName;dbname=$db_name", $uName, $pass);
    $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connected";
} catch (PDOException $e) {
    echo "Connection failed";
}
