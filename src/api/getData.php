<?php
header("Access-Control-Allow-Origin: *");

// БД тут не нужна - так что можно захардкодить)

$data = array(
    "departments" => array(
        array(
            "id" => 1,
            "name" => "Отдел #1",
            "employees" => array(
                111,
                222,
                333
            )
        ),
        array(
            "id" => 2,
            "name" => "Отдел #2",
            "employees" => array(
                444,
                555,
                666
            )
        )
    ),
    "employees" => array(
        array(
            "id" => 111,
            "dept" => 1,
            "name" => "Иван Иванович",
            "phone" => "11-11-11",
            "photo" => ""
        ),
        array(
            "id" => 222,
            "dept" => 1,
            "name" => "Сергей Сергеевич",
            "phone" => "22-22-22",
            "photo" => ""
        ),
        array(
            "id" => 333,
            "dept" => 1,
            "name" => "Петр Петрович",
            "phone" => "33-33-33",
            "photo" => ""
        ),
        array(
            "id" => 444,
            "dept" => 2,
            "name" => "Андрей Анреевич",
            "phone" => "44-44-44",
            "photo" => ""
        ),
        array(
            "id" => 555,
            "dept" => 2,
            "name" => "Александр Александрович",
            "phone" => "55-55-55",
            "photo" => ""
        ),
        array(
            "id" => 666,
            "dept" => 2,
            "name" => "Олег Олегович",
            "phone" => "66-66-66",
            "photo" => ""
        )
    )
);

echo json_encode($data);