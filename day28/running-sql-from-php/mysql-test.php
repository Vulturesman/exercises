<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Country.php';


DB::connect(
    'localhost',        // location of server
    'world',            // database
    'root',             // username
    ''                  // password
);

$results = DB::select('SELECT * FROM `countries` WHERE `population` > ?',
[
    2000000
],
'Country'
);

$czechia = DB::selectOne(
    "SELECT *
    FROM `countries`
    WHERE `name` = ? -- instead of Czech Republic, put a question mark and to the second value (square brackets), put this value
    LIMIT 1",
    [
        'Czech Republic'
    ],
    'Country'
);

var_dump($czechia);
// var_dump($results);

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
        <?php foreach ($results as $country) : ?>
            <li>
                <?= $country->name ?> (pop.: <?= $country->population ?>)
                <br>
                <?= $country->continent ?>
            </li>
        <?php endforeach ; ?>
    </ul>

</body>
</html>