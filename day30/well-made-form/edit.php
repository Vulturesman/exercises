<?php

require_once 'bootstrap.php';

$id = $_GET['id'] ?? null;

//Optionally, if $id is null now (if id was not found in $_GET), you can redirect the user somewhere else. They should not be here.

$city = DB::selectOne('
    SELECT *
    FROM `cities`
    WHERE `id` = ?
    ', [
        $id
    ], 
    'City'
);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
</head>
<body>
    <h1>Edit a city</h1>

    <form method="post" action="update.php?id=<?= $id ?>">
        <label for="name">Name:</label>
        <input type="text" name="name" value="<?= htmlspecialchars((string) old('name', $city->name)) ?>" id="name">
        <br>
        <label for="population">Population:</label>
        <input type="number" name="population" value="<?= htmlspecialchars(old('population', $city->population)) ?>"  id="population">
        <br>
         <label for="district">District:</label>
        <input type="text" name="district" value="<?= htmlspecialchars((string) old('district', $city->district)) ?>" id="district">
        <br>
        <input type="submit" value="Edit">
    </form>
    
    <a href="list.php">Back to List</a>
</body>
</html>