<?php

$page_title = 'Shopping list';
$page = 'home';
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}
$items = [];
if (!empty($_POST['items'])) {
    var_dump($_POST);
    $items = $_POST['items'];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET, POST, arrays</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1><?= $page_title ?></h1>
    <?php $page === 'home' ? include 'home.php' : '' ?>
    <?php $page === 'form' ? include 'form.php' : '' ?>

    <nav>
    <a href="?page=home">Home</a>
    <a href="?page=form">Form</a>
</nav>
</body>
</html>