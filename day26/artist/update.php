<?php

require_once 'Artist.php';
require_once 'DBBlackbox.php';

// find the ID of the record we want to edit in the request
$id = $_GET['id'];
 
// somehow retrieve existing data from some storage
$artist = find( $id, 'Artist' );

// update data from request
$artist->first_name     = $_POST['first_name'] ?? $artist->first_name; // if 'name' was not found in $_POST data, keep the current value
$artist->last_name      = $_POST['last_name'] ?? $artist->last_name;
$artist->year_of_birth  = intval($_POST['year_of_birth'] ?? $artist->year_of_birth);
$artist->genre          = $_POST['genre'] ?? $artist->genre;

// somehow save the data into the database (using the unique ID)
update($id, $artist);