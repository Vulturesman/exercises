<?php

require_once 'bootstrap.php';

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
    header('Location: create.php');
    exit();
}

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

session()->flash('success_message', 'The record was successfully saved');
header("Location: edit.php?id=$id");
exit;