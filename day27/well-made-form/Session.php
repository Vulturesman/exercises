<?php

class Session
{
    // here will be one object of this class
    public static ?self $instance = null;

    // return a single object of the class Session
    // first time it creates it, other times it just returns the created one
    public static function instance() : self
    {
        // if the value of this class static property $instance is still null
        if (static::$instance === null) {
            // create an instance of this class and put it in the static property $instance
            //                  new Session
            static::$instance = new static; 
        }

        // return the static property $instance
        return static::$instance;
    }

    // this is where we will keep the session data...
    public array $data = [];

    // protected so that objects of this class can be created only from methods of this class (namely ::instance)
    protected function __construct()
    {
        // this will happen just once for the entire application, because we create an object of this class just once, thanks to the singleton pattern

        session_start();

        // store all the data currently in the session in this object's property
        $this->data = $_SESSION;
    }

    // puts a value into the $this->data property under specific key
    public function put($key, $value)
    {
        // put the value into this subject
        $this->data[$key] = $value;

        // put the value into the session itself (this changes the session file)
        $_SESSION[$key] = $value;
    }

    // retrieves data from the session, if not found, returns the second argument
    public function get($key, $default = null)
    {
        return $this->data[$key] ?? $default;
    }
}