<?php

require_once "DB.php";
require_once "DB_functions.php";

require_once "Country.php";
require_once "City.php";

$success = DB::connect('localhost', 'world', 'root', '');


    $name = $_POST['name'] ??  null;
    $district = $_POST['district'] ??  null;
    $population = $_POST['population'] ??  null;
    $the_country = $_POST['country_id'] ?? null;

    $city = new City;

    $city->insert($name, $district, $population, $the_country);



