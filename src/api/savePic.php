<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$file = pathinfo($_FILES['file']['name']);
parse_str($_SERVER['QUERY_STRING'], $query);
$uploaddir = $_SERVER['DOCUMENT_ROOT'].'/sites/searchinform/api/pics/';
// $uploadfile = $uploaddir . basename($_FILES['file']['name']);
$uploadfile = $uploaddir . basename($query['id'].'.'.$file['extension']);

if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
    //echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Ошибка загрузки!\n";
    print_r($_FILES);
}

