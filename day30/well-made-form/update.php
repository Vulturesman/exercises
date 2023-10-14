<?php

require_once 'bootstrap.php';

$id = $_GET['id'] ?? null;

if ($id === null) {
    header("Location: list.php");
    exit;
}

//Optionally, if id was not found in $_GET, you can redirect the user somewhere else. They should not be here.

$city = DB::selectOne('
    SELECT *
    FROM `cities`
    WHERE `id` = ?
    ', [
        $id
    ], 
    'City'
);

$city->name = $_POST['name'] ?? $city->name;
$city->population = $_POST['population'] ?? $city->population;
$city->district = $_POST['district'] ?? $city->district;

DB::update("
    UPDATE `cities`
    SET `name` = ?, `population`= ?, `district` = ?
    WHERE `id` =?
    ", 
    [
        $city->name,
        $city->population,
        $city->district,
        $city->id
    ]
);

header("Location: edit.php?id=$id");
exit;