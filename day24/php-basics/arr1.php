<?php

/*
Create an empty array $cars_i_want.
Have a look at it using var_dump. Observe the source code if you don't have XDebug installed.
*/

$cars_i_want = [];
var_dump($cars_i_want);


/* adding items to an array
Without modifying the code from the previous exercise, add several items into your $cars_i_want array, one by one (one statement for every car). Let them be automatically numerically indexed (i.e. specify no keys when adding them).*/


$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Skoda';

var_dump($cars_i_want);

/*
retrieving array values
Print the following sentences using values that you retrieve from the $cars_i_want array by their numeric keys:
For myself I would buy ABC.<br> where ABC will be the name of the car in the list with the key 1.
For my spouse I would buy XYZ.<br> where XYZ will be the name of the car in the list with the key 3.
Now write another statement (don't change previous code) to change the value of the item with key 4 to 'Smart'.
Print the sentence Each of my kids will get a DEF.<br> where DEF will be the name of the car in the list with the key 4.
*/

echo "<br>For myself I would buy $cars_i_want[1] <br>";
echo "For my spouse I would buy $cars_i_want[3] <br>";
$cars_i_want[4] = 'Smart';

var_dump($cars_i_want);

echo "<br>Each of my kids will get a $cars_i_want[4] <br>";

/*
echo 'For myself I would buy ' . $cars_i_want[1] . '.<br>';
echo 'For my spouse I would buy ' . $cars_i_want[3] . '.<br>';
 
$cars_i_want[4] = 'Smart';
 
echo 'Each of my kids will get a ' . $cars_i_want[4] . '.<br>';

*/


/*
Take the array from the previous exercises.
Print the tag for the start of an HTML unordered list.
For each item in the array print a line <li>Car name</li> where 'Car name' is the value of the current array item.
Print the tag for the end of an HTML unordered list.
*/

echo "<ul>";
foreach($cars_i_want as $value) {
echo "<li>$value</li>";
}
echo "</ul>";

/*
Associative arrays
Take the following array:
$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];
Then first print this sentence: You can have a Porsche for just 1150000 CZK. by inserting the number 1150000 into the string from the array.
Then loop through the array with a foreach loop and print sentences like:
The price of Skoda Octavia is 270000 CZK.<br>
The price of Volkswagen Golf is 170000 CZK.<br>
etc.
Use both the car models and the prices (keys and values) inside the printed sentences, don't retype them there.
*/

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000,
];

echo 'You can have a Porsche for just ' . $car_prices['Porsche 911'] . ' CZK. <br>';

foreach($car_prices as $key => $value) {
    echo "You can have a $key for $value CZK. <br>";
}




?>