<?php

class Country
{
    public $id = null;
    public $code = null;
    public $code_alpha2 = null;
    public $name = null;
    public $continent = null;
    public $continent_id = null;
    public $region = null;
    public $surface_area = null;
    public $population = null;
    public $gnp = null;
    public $head_of_state = null;
    public $capital_city_id = null;

    public function insert()
    {
        DB::insert("INSERT INTO `countries` (`name`, `continent`, `population`)
        VALUES (?,?,?)", [$this->name, $this->continent, $this->population]);

        $this->id = DB::getPdo()->lastInsertId();
    }
}