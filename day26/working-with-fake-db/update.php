<?php

require_once 'DBBlackbox.php';
require_once '../simple-class/AudioTrack.php';

$track = find(1, 'AudioTrack');

$track->length = 183;
$track->genre = 'beat box';
$track->author = 'Jim Beam';

update(1, $track);


$track = find(4, 'AudioTrack');

$track->length = 132;
$track->title = 'Keep Rollin';
$track->genre = 'Hot Latin';
$track->author = 'Jack Daniels';

update(4, $track);