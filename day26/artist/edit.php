<?php

require_once 'Artist.php';
require_once 'DBBlackbox.php';

// find the ID of the record we want to edit in the request
$id = $_GET['id'];

// somehow retrieve existing artist from some storage
$artist = find( $id, 'Artist' );

?>

<h1>Edit the Artist</h1>

<form action="update.php?id=<?= $id ?>" method="post">
 
    <!-- display the form prefilled with entity data -->

    First Name:<br>
    <input type="text" name="first_name" value="<?= htmlspecialchars((string)$artist->first_name) ?>"><br>
    <br>
 
    Last Name:<br>
    <input type="text" name="last_name" value="<?= htmlspecialchars((string)$artist->last_name) ?>"><br>
    <br>
 
    Year of Birth:<br>
    <input type="number" name="year_of_birth" value="<?= htmlspecialchars((string)$artist->year_of_birth) ?>"><br>
    <br>
 
    Genre:<br>
    <input type="text" name="genre" value="<?= htmlspecialchars((string)$artist->genre) ?>"><br>
    <br>
 
    <button type="submit">Save</button>
 
</form>