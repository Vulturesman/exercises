<?php
 
// Put your function here
function literInBottle($radius, $height) {
$volume = 3.1416 * ($radius * $radius) * $height;
$cmToLiter = $volume / 1000;
return $cmToLiter;
} 

echo literInBottle(5, 50);

$radius = null;
do {
    $radius = readline("Please enter the radius: ");
} while($radius == null);
 
$height = null;
do {
    $height = readline("Please enter the heigth: ");
} while($height == null);

 
echo literInBottle($radius, $height);