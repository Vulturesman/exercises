<?php

require_once 'bootstrap.php';

$countries = DB::select(
"SELECT *
FROM `countries`
ORDER BY `name` DESC
LIMIT 0, 20
", [], 'Country');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List of Countries</title>
</head>
<body>
    <ul>
        <?php foreach($countries as $country) : ?>
            <li><?= $country->name ?> (pop.: <?= $country->population ?>)</li>
        <?php endforeach ; ?>
    </ul>
</body>
</html>