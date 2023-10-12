<?php
require_once './bootstrap.php';

$data = $_POST;
$id = $data['id'] ?? null;

$errors = [];
if (!isset($data['name']) || is_numeric($data['name']))
{
    $errors[] = 'The name field is required and cannot be a number!';
}
if (!isset($data['district']) || is_numeric($data['district']))
{
    $errors[] = 'The district field is required and cannot be a number!';
}
if (!isset($data['population']) || !is_numeric($data['population']))
{
    $errors[] = 'The population field is required!';
}

if(!empty($errors))
{
    session()->flash('errors', $errors);
    session()->flashRequest();
    header("Location: edit.php?id=$id");
    exit();
}

$city = new City();
if ($id)
{
    $city->findById($data['id']);
    $action = 'edited';
}


$action = 'inserted';


$city->name = $data['name'];
$city->district = $data['district'];
$city->population = $data['population'];
$city->save();

session()->flash('success_message', "The city was $action");

header("Location: edit.php?id=$city->id");
