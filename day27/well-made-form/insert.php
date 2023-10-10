<?php

require_once 'bootstrap.php';

// validation
$valid = true;
$errors = [];

if (empty($_POST['name'])) {
    $valid = false;
    $errors[] = 'Name is a required field!';
}

if (!is_numeric($_POST['length'])) {
    $valid = false;
    $errors[] = 'Length must be a number!';
}

if ($valid === false) {

    session()->put('errors', $errors);
    session()->put('request_data', $_POST);

    // session_start();
    // $_SESSION['errors'] = $errors;
    // $_SESSION['request_data'] = $_POST;

    header('Location: create.php');
    exit();
}


// prepare empty entity
$song = new Song;

// update entity from request
$song->name     = $_POST['name'] ?? $song->name; // if 'name' was not found in $_POST data, keep the current value
$song->author   = $_POST['author'] ?? $song->author;
$song->length   = intval($_POST['length'] ?? $song->length);
$song->album    = $_POST['album'] ?? $song->album;

// yes change:
// $song->album    = $_POST['album'];

// no change:
// $song->album    = $song->album;

// somehow insert the entity into the database and generate a unique ID
// here done using DBBlackbox
$id = insert($song);
// $song->save();

//session_start();

session()->put('success_message', 'Song was successfully saved.');
// $_SESSION['success_message'] = 'Song was successfully saved.';

//          once finished, go to edit.php?id=5 - for example
header('Location: edit.php?id=' . $id);

// optional, as we are at the end anyway...
exit();