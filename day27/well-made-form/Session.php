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

        // adds the contents of $_SESSION['flashed_data'] (if there are any) to $this->data
        $this->data = array_merge($this->data, $_SESSION['flashed_data'] ?? []);
        
        // deletes flashed_data from the session
        unset($_SESSION['flashed_data']);
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

    // puts the value under the given key into 'flashed_data' element of the session data
    // like that, if the entire 'flashed_data' element is removed from the session, all the flashed data will be gone!
    public function flash($key, $value)
    {
        $_SESSION['flashed_data'][$key] = $value;
    }
}