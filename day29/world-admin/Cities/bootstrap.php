<?php
require_once './DB.php';
require_once './helpers.php';
require_once './Sessions.php';
require_once './City.php';

DB::connect(
    'localhost',    // location of server
    'world',        // database
    'root',         // username
    ''              // password
);

session();
