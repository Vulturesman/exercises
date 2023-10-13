<?php

require_once 'bootstrap.php';

$city = new City();

// var_dump($city);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create</title>
</head>
<body>
    <h1>Create a city</h1>

   <form method="post" action="insert.php">
        <label for="name">Name:</label>
        <input type="text" name="name" value="<?= htmlspecialchars((string) old('name', $city->name)) ?>" id="name">
        <br>
        <label for="population">Population:</label>
        <input type="number" name="population" value="<?= htmlspecialchars(old('population', $city->population)) ?>"  id="population">
        <br>
         <label for="district">District:</label>
        <input type="text" name="district" value="<?= htmlspecialchars((string) old('district', $city->district)) ?>" id="district">
        <br>
        <input type="submit" value="Create">
   </form>
</body>
</html>