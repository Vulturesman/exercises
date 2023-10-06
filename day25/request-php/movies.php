<?php
$movies = [
    [
        'title' => 'Dark Knight',
        'rating' => 8.97,
        'year' => 2008
    ],
    [
        'title' => '12 angry men',
        'rating' => 8.99,
        'year' => 1957
    ],
    [
        'title' => 'Schindler\'s list',
        'rating' => 8.97,
        'year' => 1993
    ],
    [
        'title' => 'Pulp fiction',
        'rating' => 8.95,
        'year' => 1994
    ],
    [
        'title' => 'Lord of the Rings: Return of the King',
        'rating' => 8.94,
        'year' => 2003
    ],
    [
        'title' => 'The Shawshank redemption',
        'rating' => 9.28,
        'year' => 1994
    ],
    [
        'title' => 'The Godfather II',
        'rating' => 9.05,
        'year' => 1974
    ],
    [
        'title' => 'The good, the bad and the ugly',
        'rating' => 8.93,
        'year' => 1966
    ],
    [
        'title' => 'Fight club',
        'rating' => 8.84,
        'year' => 1999
    ],
    [
        'title' => 'The Godfather',
        'rating' => 9.21,
        'year' => 1972
    ]
    ];


    function sortMovies($movies, $sort_by, $sort_way = 'asc')
{
    if (!in_array($sort_by, ['title', 'rating', 'year'])) {
        throw new \InvalidArgumentException('Please only supply title, rating or year as the second argument to '.__FUNCTION__);
    }
 
    if (!in_array($sort_way, ['asc', 'desc'])) {
        throw new \InvalidArgumentException('Please only supply asc or desc as the third argument to '.__FUNCTION__);
    }
 
    usort($movies, function($a, $b) use ($sort_by, $sort_way) {
        if ($a[$sort_by] > $b[$sort_by]) {
            return $sort_way === 'asc' ? 1 : -1;
        } elseif ($a[$sort_by] < $b[$sort_by]) {
            return $sort_way === 'asc' ? -1 : 1;
        } else {
            return 0;
        }
    });
 
    return $movies;
}

$sort_by = $_GET['sortby'] ?? 'title';
$sort_way = $_GET['sortway'] ?? 'asc';
$sorted_movies = sortMovies($movies, $sort_by, $sort_way);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movies</title>
</head>
<body>

<!-- <?php
echo '<a href="?' . http_build_query(['sortby' => 'title', 'sortway' => 'asc']) . '">Sort by title (asc)</a><br>';
echo '<a href="?' . http_build_query(['sortby' => 'title', 'sortway' => 'desc']) . '">Sort by title (desc)</a><br>';
echo '<a href="?' . http_build_query(['sortby' => 'rating', 'sortway' => 'asc']) . '">Sort by rating (asc)</a><br>';
echo '<a href="?' . http_build_query(['sortby' => 'rating', 'sortway' => 'desc']) . '">Sort by rating (desc)</a><br>';
echo '<a href="?' . http_build_query(['sortby' => 'year', 'sortway' => 'asc']) . '">Sort by year (asc)</a><br>';
echo '<a href="?' . http_build_query(['sortby' => 'year', 'sortway' => 'desc']) . '">Sort by year (desc)</a><br>';
?> -->


<ul>

    <?php foreach ($sorted_movies as $value) : ?>
        <?php foreach ($value as $item => $data) :?>
            <li><?=$item?> : <?=$data?></li>
        <?php endforeach; ?>
        <br>
    <?php endforeach; ?>

</ul>

<div class="sorting">
  <a href="?sortby=title&sortway=asc">Sort by title (asc)</a><br>
  <a href="?sortby=title&sortway=desc">Sort by title (desc)</a><br>
  <a href="?sortby=rating&sortway=asc">Sort by rating (asc)</a><br>
  <a href="?sortby=rating&sortway=desc">Sort by rating (desc)</a><br>
  <a href="?sortby=year&sortway=asc">Sort by year (asc)</a><br>
  <a href="?sortby=year&sortway=desc">Sort by year (desc)</a><br>
</div>


</body>
</html>






