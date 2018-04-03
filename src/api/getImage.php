<?php
ini_set('display_errors',1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

parse_str($_SERVER['QUERY_STRING'], $query);
$imagedata = file_get_contents($_SERVER['DOCUMENT_ROOT']."/sites/searchinform/api/pics/{$query['id']}.jpg");
echo base64_encode($imagedata);