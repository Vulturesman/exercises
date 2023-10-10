<?php

require_once 'Song.php';
require_once 'DBBlackbox.php';

// get all records from the database
$songs = select(0, 0, 'Song');
?>

<ul>
    <?php foreach ($songs as $song) : ?>
        <li>
            <?= $song->name ?>
 
            <a href="edit.php?id=<?= $song->id ?>">edit</a>
        </li>
    <?php endforeach; ?>
</ul>