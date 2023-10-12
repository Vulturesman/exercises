<?php
require_once './bootstrap.php';

$city = new City();
$formType = 'Create';
if (isset($_GET['id'])) {
    $city->findById($_GET['id']);
    $formType = "Edit";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $formType ?> city</title>
</head>

<body>
    <h1><?= $formType ?> city:</h1>
    <form method="post" action="store.php">
        <input id="id" name="id" type="hidden" value="<?= $city->id ?>" />
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" value="<?= $city->name ?>" />
        <label for="district">District:</label>
        <input id="district" name="district" type="text" value="<?= $city->district ?>" />
        <label for="district">Population:</label>
        <input id="population" name="population" type="number" min="0" value="<?= $city->population ?>" />
        <!-- TODO: GET COUNTRIES FROM DB -->
        <!-- <select>
            <?php foreach ($countries as $country) : ?>
                <option value="<?= $country->id ?>"><?= $country->name ?></option>
            <?php endforeach ?>
        </select> -->
        <input type="submit" value="<?= $formType ?>" />
    </form>
</body>

</html>