<?php

require_once 'bootstrap.php';

$id = $_GET['id'] ?? null;

if ($id === null) {
    header("Location: list.php");
    exit;
}
// validation
$valid = true;
$errors = [];

if (empty($_POST['name'])) {
    $valid = false;
    $errors[] = 'Name is a required field.';
}

if (!is_numeric($_POST['population'])) {
    $valid = false;
    $errors[] = 'Population must be a number and is required.';
}

if (empty($_POST['district'])) {
    $valid = false;
    $errors[] = 'District is a required field.';
}


if (!$valid) {
    session()->flash('errors', $errors);
    session()->flashRequest();
    header('Location: edit.php?id='.$id);
    exit();
}



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

session()->flash('success_message', 'The record was successfully edited');
header("Location: edit.php?id=$id");
exit;