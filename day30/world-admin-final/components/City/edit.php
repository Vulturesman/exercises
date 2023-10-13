<?php

require_once __DIR__ . '../../../lib/bootstrap.php';

$countries = DB::select("SELECT `countries`.`id`,`countries`.`name`
FROM `countries`", [], 'Country');

$city = new City();
$formType = 'Create';


if (isset($_GET['id'])) {
    $city->findById($_GET['id']);
    $formType = "Edit";
}

?>

<style>
    .success-message {
        color: white;
        background-color: green;
    }

    .error-message {
        color: white;
        background-color: red;
    }
</style>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $formType ?> city</title>
</head>

<body>
    <a href="./list.php">Back to the list of cities</a>
    <?php include __DIR__ . '../../../lib/Sessions/alerts.php' ?>
    <h1><?= $formType ?> city:</h1>
    <form method="post" action="store.php">
        <input id="id" name="id" type="hidden" value="<?= $city->id ?>" />
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" value="<?= htmlspecialchars((string) old('name', $city->name)) ?>" />
        <label for="district">District:</label>
        <input id="district" name="district" type="text" value="<?= htmlspecialchars((string) old('district', $city->district)) ?>" />
        <label for="district">Population:</label>
        <input id="population" name="population" type="number" min="0" value="<?= htmlspecialchars(old('population', $city->population)) ?>" />
        <select name="country_id">
            <option value="0"> SELECT COUNTRY </option>
            <?php foreach ($countries as $country) : ?>
                <option <?= old('country_id', $city->country_id) == $country->id ? "selected='selected'" : null ?> value="<?= $country->id ?>">
                    <?= $country->name ?>
                </option>
            <?php endforeach ?>
        </select>
        <input type="submit" value="<?= $formType ?>" />
    </form>
</body>

</html>