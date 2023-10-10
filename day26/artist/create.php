<?php

require_once 'Artist.php';

$artist = new Artist;

?>

<h1>Create a new artist</h1>

<form action="insert.php" method="post">
 
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