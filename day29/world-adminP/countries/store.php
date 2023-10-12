<?php

require_once 'bootstrap.php';

$data = $_POST;

$country = new Country();
$country->name = $data['name'];
$country->continent = $data['continent'];
$country->population = $data['population'];

$country->insert();

header("Location: edit.php?id=$country->id");