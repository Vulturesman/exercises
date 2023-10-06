<?php

var_dump($_GET);
var_dump($_POST);


if (isset($_GET['name'])) {
    $name = $_GET['name'];
} else {
    // create name with a default value
    $name = null;
}
// from now on there is always variable name


// the same as code above -> this is new way
$name = $_GET['name'] ?? null;
//The Null Coalescing Operator ??

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<a href="?<?= http_build_query([
    'name' => 'Jakub Typek (The 4th)',
    'today' => 'Today is friday'
])?>">Greet Jakub</a>

<a href="?name=Typek">Greet Teepack</a>

<?php if ($name) : ?>
    <h1>Hello, <?= $name ?></h1>

<?php else : ?>;
    <p>Please supply your name in get... like name=Jakub</p>
<?php endif; ?>

</body>
</html>