<?php

class Comment
{
    public $name;
    public $email;
    public $comment;
    public $timestamp;
    public $id;

    public function __construct($name = '', $email = '', $comment = '')
    {
        $this->name = $name;
        $this->email = $email;
        $this->comment = $comment;
        $this->timestamp = date('d-m-Y H:i:s');
    }
}