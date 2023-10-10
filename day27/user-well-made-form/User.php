<?php

class User
{
    public ?int $id = null;
    public ?string $first_name = null;
    public ?string $last_name = null;
    public ?int $year_of_birth = 0;
    public ?string $username = null;

    public function save()
    {
        if ($this->id !== null) {
            update($this->id, $this);
        } else {
            $this->id = insert($this);
        }
    }
}