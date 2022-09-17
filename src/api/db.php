<?php

$mysqli = new mysqli("103.212.121.106:3306","excel","343@Excel","admin_excel");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>