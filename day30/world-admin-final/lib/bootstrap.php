<?php

require_once 'Database_driver/DB.php';
require_once 'helpers.php';
require_once 'Sessions/Sessions.php';
require_once __DIR__ . '/../models/City.php';
require_once __DIR__ . '/../models/Country.php';


DB::connect(
    'localhost',    // location of server
    'world',        // database
    'root',         // username
    ''              // password
);

session();
