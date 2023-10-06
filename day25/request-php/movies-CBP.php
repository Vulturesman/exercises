<?php

include 'dataMovies.php';
require_once 'functionMovies.php';

$sort_by = $_GET['sortby'] ?? 'title';
$sort_way = $_GET['sortway'] ?? 'asc';

$sorted_movies = sortMovies($movies, $sort_by, $sort_way);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moives CBP</title>

    <style>
        th, td {
            border: 1px solid silver;
            padding: 0.25em 0.5em;;
        }
        a {
            text-decoration: none;
            display: flex;
            justify-content: center;
        }
    </style>
</head>

<body>

<a href="?sortby=title&sortway=asc">Sort by title (asc)</a><br>
<a href="?sortby=title&sortway=desc">Sort by title (desc)</a><br>
<a href="?sortby=rating&sortway=asc">Sort by rating (asc)</a><br>
<a href="?sortby=rating&sortway=desc">Sort by rating (desc)</a><br>
<a href="?sortby=year&sortway=asc">Sort by year (asc)</a><br>
<a href="?sortby=year&sortway=desc">Sort by year (desc)</a><br>

<table>
        <thead>
            <tr>
                <th>
                    <?php if ($sort_by === 'title') : ?>
                        <?php if ($sort_way === 'asc') : ?>
                            <a href="?sortby=title&sortway=desc">
                        <?php else : ?>
                            <a href="?sortby=title&sortway=asc">
                        <?php endif ; ?>
                    <?php else : ?>
                        <a href="?sortby=title&sortway=asc">
                    <?php endif ; ?>
                    Title
                    </a>
                </th>
                <th>Year</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($sorted_movies as $movie) : ?>

                <tr>
                    <td><?= $movie['title'] ?></td>
                    <td><?= $movie['year'] ?></td>
                    <td><?= $movie['rating'] ?></td>
                </tr>

            <?php endforeach; ?>
        </tbody>
</table>  
</body>
</html>