<?php
/**
 * Created by PhpStorm.
 * User: lin xu
 * Date: 28.11.2016
 * Time: 18:03
 */
include "connection.php";

$strSQL = "SELECT  `RENTAL_ZONE_X_COORDINATE`, `RENTAL_ZONE_Y_COORDINATE` FROM  `hackathon_rental_zone_call_a_bike`";
$query = mysqli_query($con, $strSQL);

if ( ! $query ) {
    echo mysqli_error("fail to query");
    die;
}

$data = array();

for ($x = 0; $x < mysqli_num_rows($query); $x++) {
    $data[] = mysqli_fetch_assoc($query);
}

echo json_encode($data);

mysqli_close($con);
?>