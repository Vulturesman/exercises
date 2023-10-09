<?php

require_once 'DBBlackbox.php';
require_once '../simple-class/AudioTrack.php';

$audioTrack = new AudioTrack;
$audioTrack->title = 'Imagine';
$audioTrack->author = 'Johnnie Walker';


$id = insert($audioTrack);

var_dump($id);