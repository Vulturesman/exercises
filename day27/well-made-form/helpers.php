<?php

/*
 "helper" fucntions that simplifies accessing methods of classes
*/


// alias for Session::instance()
function session()
{
    return Session::instance();
}

// alias for Session::instance()->old()
function old($key, $default = null)
{
    return session()->old($key, $default);
}