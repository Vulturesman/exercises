<?php

require_once 'DBBlackbox.php';
require_once '../simple-class/AudioTrack.php';

$audioTracks = select(null, null, 'AudioTrack');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List</title>
</head>
<body>
        <ul>
            <?php foreach($audioTracks as $track) : ?>
                <li>
                    <?= $track->title ?>
                    by <?= $track->author ?>
                </li>
            <?php endforeach; ?>
        </ul>
    
</body>
</html>