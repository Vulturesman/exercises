<?php
require_once './bootstrap.php';

$cities = DB::select("
SELECT *
FROM `cities`
ORDER BY `name` ASC
LIMIT 20", [], 'City');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List of Cities</title>
</head>

<body>
    <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>District</th>
            <th>Population</th>
        </thead>
        <tbody>
            <?php foreach ($cities as $city) : ?>
                <tr>
                    <td>
                        <?= $city->id ?>
                    </td>
                    <td>
                        <?= $city->name ?>
                    </td>
                    <td>
                        <?= $city->district ?>
                    </td>
                    <td>
                        <?= $city->population ?>
                    </td>
                </tr>
            <?php endforeach ?>
        </tbody>
    </table>


</body>

</html>