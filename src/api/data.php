<?php
header('Content-Type: application/json; charset=utf-8');

require_once("./db.php");
$MFGNUM_0 = mysqli_real_escape_string($mysqli, $_GET['MFGNUM_0']);
if ($MFGNUM_0) {
    $sql = "SELECT * FROM data WHERE MFGNUM_0 = '$MFGNUM_0'";
    $result = mysqli_query($mysqli, $sql);
    echo json_encode(['data' => mysqli_fetch_all($result, MYSQLI_ASSOC)], true);
}
