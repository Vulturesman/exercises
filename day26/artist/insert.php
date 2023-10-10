<?php

require_once 'Artist.php';
require_once 'DBBlackbox.php';

// prepare empty entity
$artist = new Artist;
 
// update entity from request
$artist->first_name     = $_POST['first_name'] ?? $artist->first_name; // if 'name' was not found in $_POST data, keep the current value
$artist->last_name      = $_POST['last_name'] ?? $artist->last_name;
$artist->year_of_birth  = intval($_POST['year_of_birth'] ?? $artist->year_of_birth);
$artist->genre          = $_POST['genre'] ?? $artist->genre;
 
// somehow insert the entity into the database and generate a unique ID
// here done using DBBlackbox
$id = insert($artist);