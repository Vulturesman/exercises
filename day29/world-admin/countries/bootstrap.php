<?php

require_once 'DB.php';
require_once 'Session.php';
require_once 'helpers.php';
require_once 'Country.php';

DB::connect(
    'localhost',        // location of server
    'world',            // database
    'root',             // username
    ''                  // password
);

session();