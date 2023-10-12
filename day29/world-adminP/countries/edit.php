<?php

require_once 'bootstrap.php';

$country = new Country();
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $country = DB::selectOne("SELECT * FROM `countries` WHERE `id` = $id", [], 'Country');
};

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Country</title>
</head>
<body>

    <h1>Create form:</h1>
    <form method="post" action="store.php">
        <label for="name">Country name: </label>
        <input id="name" type="text" name="name" value="<?= $country->name ?>">
        <label for="continent">Continent: </label>
        <input id="continent" type="text" name="continent" value="<?= $country->continent ?>">
        <label for="name">Population: </label>
        <input id="population" type="number" name="population" value="<?= $country->population ?>">
        <input type="submit" value="Create">
    </form>
    
</body>
</html>