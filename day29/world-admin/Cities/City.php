<?php
class City
{
    public $id = null;
    public $name = null;
    public $district = null;
    public $country_id = null;
    public $population = null;

    public function insert()
    {
        DB::insert("INSERT INTO `cities` (`name`,`district`,`population`,`country_id`)
        VALUES (?,?,?,?)", [$this->name, $this->district, $this->population, $this->country_id]);

        $this->id = DB::getPdo()->lastInsertId();
    }

    public function save()
    {
        if (isset($this->id)) {
            $this->update();
        } else {
            $this->insert();
        }
    }

    public function update()
    {

        DB::update(
            "UPDATE `cities` SET `name`= ?, `district` = ?, `population` = ?, `country_id` = ? WHERE `id` = ?",
            [$this->name, $this->district, $this->population, $this->country_id, $this->id]
        );
    }

    public function findById($id)
    {
        $city = DB::selectOne("SELECT * FROM `cities` WHERE `id` =  ?", [$id], 'City');
        $this->id = $city->id;
        $this->name = $city->name;
        $this->district = $city->district;
        $this->country_id = $city->country_id;
        $this->population = $city->population;
    }
}
