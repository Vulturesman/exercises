<?php

require_once 'bootstrap.php';

$citiesPerPage = 30;

// pagination - what is the current page?
if (isset($_GET['page'])) {
    $currentPage = intval($_GET['page']);
} else {
    $currentPage = 1;
}

$offset = ($currentPage - 1) * $citiesPerPage;

$query = "SELECT * FROM `cities` ORDER BY `population` DESC LIMIT $offset, $citiesPerPage";
$class = 'City';
$cities = DB::select($query, $values = [], $class = null);

// var_dump($cities);

// calculating the total cities
$totalCitiesQuery = "SELECT COUNT(*) as total FROM `cities`";
$totalCities = DB::select($totalCitiesQuery, $values = [], $class = null);
$totalItems = $totalCities[0]->total;

// Calculate the total number of pages
$totalPages = ceil($totalItems / $citiesPerPage);

// Calculate the previous and next page numbers
$prevPage = ($currentPage > 1) ? $currentPage - 1 : false;
$nextPage = ($currentPage < $totalPages) ? $currentPage + 1 : false;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List</title>
</head>
<body>
    <h1>List of Cities</h1>

    <a href="create.php">Create a new City</a>

    <table>
        <caption>Details of selected cities:</caption>
        <thead>
            <tr>
                <th>Name</th>
                <th>District</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($cities as $oneCity) : ?>
            <tr>
                <td><?= $oneCity->name ?></td>
                <td><?= $oneCity->district ?></td>
                <td><?= $oneCity->population ?></td>
                <td><a href="edit.php?id=<?= $oneCity->id ?>">Edit</a></td>
            </tr>
           <?php endforeach ; ?>
        </tbody>
    </table>

    <!-- Pagination -->
    <div class="pagination">
        <?php if ($prevPage) : ?>
            <a href="?page=<?= $prevPage ?>">< Previous <?= $citiesPerPage ?> cities</a>
        <?php endif; ?>
                <span>|</span>
        <?php if ($nextPage) : ?>
            <a href="?page=<?= $nextPage ?>">Next <?= $citiesPerPage ?> cities ></a>
        <?php endif; ?>
    </div>

</body>
</html>