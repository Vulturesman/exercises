<?php

require_once 'bootstrap.php';

$city = new City();


$city->name = $_POST['name'] ?? $city->name;
$city->population = $_POST['population'] ?? $city->population;
$city->district = $_POST['district'] ?? $city->district;

// var_dump($_POST);

// var_dump($city->population);

DB::insert("
    INSERT INTO `cities`
    (`name`, `population`, `district`)
    VALUES
    (?,?,?)
    ", 
    [
        $city->name,
        $city->population,
        $city->district
    ]
);


$id = DB::getPdo()->lastInsertId();

header("Location: edit.php?id=$id");
exit;