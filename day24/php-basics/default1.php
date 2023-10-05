<?php
/* Default argument values #1
Write a function element that would return HTML code for a generic element.
It would accept up to 3 arguments:
$element - the name of the element (e.g. 'h1')
$innerhtml - optional the HTML within the element (a string). It's default value will be an empty string ''. To keep things simple, let's say that this function will only handle elements with pair tags.
$attributes - optional a string of all HTML attributes (e.g. 'class="foo"'). It's default value will be an empty string ''. */

function element($element, $innerhtml = '', $attributes = '') {
return "<$element $attributes>$innerhtml</$element>";
};

echo element('p', '');
echo element('p', 'some text');
echo element('p', 'some text', 'class="foo"');

/* solution: 
function element($element, $innerhtml = '', $attributes = '')
{
    return "<{$element}" . ($attributes ? ' ' . $attributes : '') . ">" . $innerhtml . "</{$element}>";
} */

/*
Default argument values #2
Write a function convert_weight that would take up to two arguments:
$value - the weight, presumably a number
$unit - expected 'kg' or 'lb'. It's default value will be 'kg'
The function will return the weight converted into either kilograms or pounds based on the second argument. The second argument describes the unit for the weight given, so the function should convert into the other one.
The ratio is 1 kg = 2.20462262 lb.
*/

function convert_weight($value, $unit="kg") {
$convert = 2.20462262;
return $unit === "kg" ? $value * $convert : $value / $convert;
}; 

echo convert_weight(1, 'lb');
echo "<br>";
echo convert_weight(1, 'kg');
echo "<br>";
echo convert_weight(1); 

/*
function convert_weight($value, $unit = 'kg')
{
    switch ($unit) {
        default:
        case 'kg':
            return 2.20462262 * $value;
            break;
        case 'lb':
            return $value / 2.20462262;
            break;
    }
} 
*/

?>