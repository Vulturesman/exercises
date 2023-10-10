<?php

require_once 'bootstrap.php';

// find the ID of the record we want to edit in the request
$id = $_GET['id'];

// somehow retrieve existing data from some storage
$song = find( $id, 'Song' );

// update entity from request
$song->name     = $_POST['name'] ?? $song->name; // if 'name' was not found in $_POST data, keep the current value
$song->author   = $_POST['author'] ?? $song->author;
$song->length   = intval($_POST['length'] ?? $song->length);
$song->album    = $_POST['album'] ?? $song->album;

// somehow save the data into the database (using the unique ID)
// update($id, $song);
$song->save();

// session_start();

// $_SESSION['success_message'] = 'Song was successfully updated.';

session()->flash('success_message', 'Song was succesfully updated.');

header('Location: edit.php?id=' . $id);

exit();