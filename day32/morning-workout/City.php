<?php

class City
{
    public $id = null;
    public $name = null;
    public $country_id = null;
    public $district = null;
    public $population = null;

    public static function getCitiesForCountry($country_id)
    {
        return DB::select('
            SELECT *
            FROM `cities`
            WHERE `country_id` = ?
        ', [
            $country_id
        ], 'City');
    }

    public function __get($prop)
    {
        if ($prop === 'country') {
            // select coiuntry for this city from the DB
            // $country = DB::selectOne("
            // SELECT *
            // FROM `countries`
            // WHERE `id` = ?
            // ", [
            //     $this->country_id
            // ],
            // 'Country'
            // )
            // return the selected country
        }
    }
}
