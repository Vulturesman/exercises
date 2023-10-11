<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'City.php';

DB::connect(
    'localhost',        // location of server
    'world',            // database
    'root',             // username
    ''                  // password
);

// $results = DB::select(
//     'SELECT * 
//     FROM `cities`
//     ORDER BY `population` DESC
//     LIMIT 25',
// [
// ],
// 'City'
// );

 function get_cities($page_nr) 
 {
    $cities_page = 20;
    $scale = ($page_nr - 1) * $cities_page;

    $result = DB::select(
    "SELECT * 
    FROM `cities`
    ORDER BY `population` DESC
    LIMIT $cities_page
    OFFSET $scale",
    [
    ],
    'City'
    );
    return $result;
 };

 $results = get_cities(3);

// $first_20_cities = get_cities(1); // returns "page" 1 of cities
 
// $second_20_cities = get_cities(2); // returns "page" 2 of cities


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Running SQL from PHP</title>
</head>
<body>

    <ul>
        <?php foreach ($results as $city) : ?>
            <li>
                <?= $city->name ?> (pop.: <?= $city->population ?>)
            </li>
        <?php endforeach ; ?>
    </ul>

</body>
</html>