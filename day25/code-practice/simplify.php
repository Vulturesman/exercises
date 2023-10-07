<?php
 
$array = array();
for($i = 1; $i <= 100; $i++) {
    array_push($array, $i);
}
 
$string = "I am a simple string";
 
// Create a variable $arrayDouble containing the double of each value of $array
$arrayDouble = array_map(function($value) {
    return $value * 2;
}, $array);
print_r($arrayDouble);
echo '<br>';
echo '<br>';
 
// Create two variables $arrayEven and $arrayOdd containing the Even numbers contained in $array and the Odd numbers contained in $array
$arrayEven = array_filter($array, function ($array) {
    return !($array & 1);
});
$arrayOdd = array_filter($array, function ($array) {
    return $array & 1;
});
print_r($arrayEven);
echo '<br>';
echo '<br>';
print_r($arrayOdd);
echo '<br>';
echo '<br>';
 
// Create a variable $arrayProduct containing the product of each numbers of $array
$arrayProduct = array_product($array);
print_r($arrayProduct);
echo '<br>';
 
// Create a variable $stringUpper containing the $string value in uppercase
$stringUpper = strtoupper($string);
print_r($stringUpper);
echo '<br>';
 
// Create a variable $stringFirstUp containing the $string value with the first character in uppercase
$stringFirstUp = ucwords($string);
print_r($stringFirstUp);