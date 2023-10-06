<?php

function headline ($text) {
    echo "<h1>$text</h1>";
}

headline('My best website!');

function headline2 ($text) {
    return "<h1>$text</h1>";
}

echo headline2('My best website2!');



$inches = 12;

function inchesToCentimeters ($inches) {
    return $inches * 2.54;
}

echo inchesToCentimeters($inches);



$celsius = 100;

echo "<br>";

function celsiusToFahrenheit ($temperature) {
    return (9/5) * $temperature + 32;
}

echo celsiusToFahrenheit($celsius);