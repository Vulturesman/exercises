<?php
require_once '../../lib/bootstrap.php';

$data = $_POST;

$errors = [];
if (!isset($data['name']) || is_numeric($data['name'])) {
    $errors[] = 'The name field is required and cannot be a number!';
}

if (!isset($data['district']) || is_numeric($data['district'])) {
    $errors[] = 'The district field is required and cannot be a number!';
}

if (!isset($data['population']) || !is_numeric($data['population'])) {
    $errors[] = 'The population field is required and must be a number!';
}

if (!is_numeric($data['country_id']) || $data['country_id'] <= 0) {
    $errors[] = 'Country have to be selected!';
}

$id = $data['id'] ?? null;

if (!empty($errors)) {
    session()->flash('errors', $errors);
    session()->flashRequest();
    if ($id) {
        header("Location: edit.php?id=$id");
        exit();
    }
    header("Location: edit.php");
    exit();
}

$city = new City();
$action = 'inserted';
if ($id) {
    $city->findById($data['id']);
    $action = 'edited';
}

$city->name = $data['name'];
$city->district = $data['district'];
$city->population = $data['population'];
$city->country_id = $data['country_id'];
$city->save();
session()->flash('success_message', "The city was $action");
header("Location: edit.php?id=$city->id");
