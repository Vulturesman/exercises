<?php

$temperature = 36.5;

function isHealthy ($temp, $units = 'c') {
if ($units === 'f') {
 $result = 5/9 * ($temp - 32);
}
 return $result < 37 ? 'true' : 'false';
}

echo isHealthy($temperature, 'f');


echo '<br/>';

$number = 42;

function evenOrOdd ($number) {
    return $number % 2 === 0 ? 'even' : 'odd';
}

echo evenOrOdd($number);

echo '<br/>';

$weekday = 'Friday';

function sayWeekday ($nameOfDay) {
    echo "Today is $nameOfDay!";
}

sayWeekday($weekday);

echo '<br/>';


$year_of_birth = 1990;

function sayBirthday ($year) {
    $this_year = date('Y');
    echo "I was born in $year so this year i am celebrating my " . ($this_year - $year) . " birthday!!!!";
}

sayBirthday($year_of_birth);


echo '<br/>';




function assessHeight ($height) {
    if ($height > 160 && $height < 180) {
        return 'average';
    } else if ( $height < 160) {
        return 'small';
    } else {
        return 'tall';
    }
}

echo assessHeight(155);

echo '<br/>';




function getLanguageUsage ($language) {
    $lower = strtolower($language);

        switch ($lower) {
            case 'php':
            case 'python':
            case 'ruby':
                echo 'serverside';
                break;
            case 'javascript': 
                echo 'clientside';
                break;
            default:
            echo 'i don\'t know...';
        }
}

getLanguageUsage('PHP');
echo '<br/>';
getLanguageUsage('python');
echo '<br/>';
getLanguageUsage('ruby');
echo '<br/>';
getLanguageUsage('javascript');
echo '<br/>';
getLanguageUsage('node');
echo '<br/>';
getLanguageUsage('phP');
echo '<br/>';
getLanguageUsage('JavaScript');
echo '<br/>';
getLanguageUsage('Php');

echo '<br/>';


/*
Logical operators
We have these variables:
$age (integer)
$gender (string)
$employed (boolean)
Write conditions representing these sentences:
if the age is less than 25
if employed
if age is above 34 and not employed
if the age is not greater than 18
if the age is lower than 12 and gender is female
if age is greater or equal to 18 and is not employed
if age is greater or equal to 60, is employed and is a female
if (someone) is a male above 20 or is an unemployed female above 25
Don't worry about the code inside the condition.
*/

if ($age < 25) {};

if ($employed) {};

if ($age > 34 && !$employed) {};

if ($age <= 18) {};

if ($age < 12 && $gender === 'female') {};

if ($age >= 18 && !$employed) {};

if ($age >= 60 && $employed && $gender === 'female') {};

if (($gender === 'male' && $age > 20) || ($gender === 'female' && $age > 25));