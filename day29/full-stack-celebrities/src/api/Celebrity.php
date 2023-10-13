<?php

class Celebrity
{
    public ?int $id = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?string $profession = null;
    public ?int $wealth = null;
    public ?string $bio = null;
    public ?int $age = null;
    public ?string $source_of_wealth = null;
    public ?string $residence = null;
    public ?string $citizenship = null;
    public ?string $education = null;
    public ?string $marital_status = null;
    public ?int $children = null;

    public function __construct($id, $image, $name, $profession, $wealth, $bio, $age, $source_of_wealth, $residence, $citizenship, $education, $marital_status, $children) {
        $this->id = $id;
        $this->image = $image;
        $this->name = $name;
        $this->profession = $profession;
        $this->wealth = $wealth;
        $this->bio = $bio;
        $this->age = $age;
        $this->source_of_wealth = $source_of_wealth;
        $this->residence = $residence;
        $this->citizenship = $citizenship;
        $this->education = $education;
        $this->marital_status = $marital_status;
        $this->children = $children;
    }
}