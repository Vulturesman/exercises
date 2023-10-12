<?php
require_once './bootstrap.php';

$data = $_POST;
$city = new City();
if ($haveId = isset($data['id'])) {
    $city->findById($data['id']);
}

$city->name = $data['name'];
$city->district = $data['district'];
$city->population = $data['population'];
$city->save();

session()->flash('success', 'The city was inserted');

header("Location: edit.php?id=$city->id");
