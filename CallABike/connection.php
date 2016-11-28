<?php
/**
 * Created by PhpStorm.
 * User: lin xu
 * Date: 28.11.2016
 * Time: 17:33
 */
$username = "root";
$password = "";
$host = "localhost";
$database="infovis";

$con = mysqli_connect($host, $username, $password, $database) or die("Some error occured during connection ".mysqli_error($con));
?>