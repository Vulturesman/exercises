<?php

$cities = [
    'Tokyo',
    'Mexico City',
    'New York City',
    'Mumbai',
    'Seoul',
    'Shanghai',
    'Lagos',
    'Buenos Aires',
    'Cairo',
    'London',
];

foreach($cities as $city) {
    echo "$city, ";
}

$sorted_cities = $cities;
sort($sorted_cities);

echo "<ul>";
foreach($sorted_cities as $city) {
    echo "
    <li>
    $city
    </li>";
   };
 echo "</ul>";

$cities[] = 'Los Angeles';
$cities[] = 'Calcutta';
$cities[] = 'Osaka';
$cities[] = 'Beijing';

var_dump($cities);
echo "<br>";

$sorted_cities2 = $cities;
sort($sorted_cities2);
foreach($sorted_cities2 as $city) {
    echo "
    <ul>
    <li>
    $city
    </li>
    </ul>";
};

$counter = count($sorted_cities2);
$i=0;
while($i < $counter) {
    echo "$sorted_cities2[$i], ";
    $i++;
}
echo "<br>";

$cities3 = array(
    "Tokyo" => 200,
    "Mexico City" => 15,
    "New York City" => 300,
    "Mumbai" => 100,
    "Seoul" => 160,
    "Shanghai" => 100,
    "Lagos" => 90,
    "Buenos Aires" => 110,
    "Cairo" => 20,
    "London"=> 301
);
foreach($cities3 as $city => $price) {
    echo "A night in " . $city . " costs " . $price . " dollars. <br>";
}