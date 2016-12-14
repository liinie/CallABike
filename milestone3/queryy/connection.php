<?php
$username = "msp";
$password = "msp";
$host = "localhost";
$database="bike";

$con = mysqli_connect($host, $username, $password, $database) or die("Some error occured during connection ".mysqli_error($con));