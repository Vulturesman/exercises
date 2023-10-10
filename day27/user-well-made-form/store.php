<?php

require_once 'bootstrap.php';


// find the ID of the record we want to edit in the request
// if it is there
$id = $_GET['id'] ?? null;

// validation
$valid = true;
$errors = [];

if (empty($_POST['first_name'])) {
    $valid = false;
    $errors[] = 'First name is a required field.';
}

if (!is_numeric($_POST['year_of_birth'])) {
    $valid = false;
    $errors[] = 'Year of Birth must be a number.';
}

if ($valid === false) {

    session()->flash('errors', $errors);
    session()->flashRequest();

    if ($id) {
        header('Location: edit.php?id='.$id);
    } else {
        header('Location: edit.php');
    }
    exit();
}

if ($id) {
    // edit
    $user = find( $id, 'User' );
} else {
    // create
    $user = new User;
}

// update entity from request
$user->first_name     = $_POST['first_name'] ?? $user->first_name; // if 'name' was not found in $_POST data, keep the current value
$user->last_name   = $_POST['last_name'] ?? $user->last_name;
$user->year_of_birth   = intval($_POST['year_of_birth'] ?? $user->year_of_birth);
$user->username    = $_POST['username'] ?? $user->username;

// somehow save the data into the database (using the unique ID)
// update($id, $user);
$user->save();

// for the next request (for edit.php)
session()->flash('success_message', 'User was successfully saved.');

// redirect to edit.php
header('Location: edit.php?id=' . $id);

exit();