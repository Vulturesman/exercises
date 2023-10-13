<?php
require_once '../../lib/bootstrap.php';

$itemsInList = 20;
$page = 0;
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}
$offset = $page * $itemsInList;

$cities = DB::select("
SELECT *
FROM `cities`
ORDER BY `id` DESC
LIMIT $offset, $itemsInList", [], 'City');
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
            <th>Name</th>
            <th>District</th>
            <th>Population</th>
            <th>Action</th>
        </thead>
        <tbody>
            <?php foreach ($cities as $city) : ?>
                <tr>
                    <td>
                        <?= $city->name ?>
                    </td>
                    <td>
                        <?= $city->district ?>
                    </td>
                    <td>
                        <?= $city->population ?>
                    </td>
                    <td>
                        <a href="./edit.php?id=<?= $city->id ?>">Edit</a>
                    </td>
                </tr>
            <?php endforeach ?>
        </tbody>

        <!-- paging -->

    </table>
    <?php if ($page > 0) : ?>
        <a href="?page=<?= $page - 1  ?>">
            < </a>
            <?php endif ?>
            <a href="?page=<?= $page ?>"><?= $page ?></a>
            <a href="?page=<?= $page + 1 ?>">></a>
</body>

</html>