<?php

require_once 'DBBlackbox.php';
require_once '../simple-class/AudioTrack.php';

$track = find(2, 'AudioTrack');

var_dump($track);