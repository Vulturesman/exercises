<?php

require_once "DB.php";

class City
{
    public function insert($name, $district, $population, $the_country)
    {
        // SQL INSERT query
        $sql = "INSERT INTO cities (name, district, population, country_id) VALUES (?, ?, ?, ?)";
        // Inserting
        if (DB::insert($sql, [$name, $district, $population, $the_country])) {
            echo 'Inserted form class!';
        }
    }
}