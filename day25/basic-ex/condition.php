<?php $title = 'Inline PHP practice'; 

$vehicles = [
    'Bicycle' => 50,
    'Car' => 150,
    'Train' => 110
];

$messages = [
    'Preparing to do some stuff...',
    'Doing amazing stuff...',
    'Stuff is done.'
];

// $messages = [];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
</head>
<body>
    <h1><?= $title ?></h1>

    <?php foreach ($vehicles as $type => $speed) : ?>

        <table>
            <tr>
                <th>Means of transport</th>
                <th>Max. speed (km/h)</th>
            <tr>
            <tr>
                <td><?= $type ?></td>
                <td><?= $speed ?></td>
            </tr>
        </table>

    <?php endforeach; ?>


    <?php if ($messages) : ?>
        
        <ul class="messages" style="padding: 1em; border: 1px solid black; margin: 1em;">

            <?php foreach ($messages as $message) : ?>
        
                <li><?= $message ?></li>

            <?php endforeach; ?>

        </ul>

    <?php endif; ?>

       
</body>
</html>



<!-- 
inline foreach loop
Put this array of data into the PHP section of the file from the previous exercise:
$vehicles = [
    'Bicycle' => 50,
    'Car' => 150,
    'Train' => 110
];
Within the body of the document, using the foreach loop and echo (or the short PHP echo tag) render a table of vehicles and their top speeds.
This is a table with one sample row made from this data:
<table>
    <tr>
        <th>Means of transport</th>
        <th>Max. speed (km/h)</th>
    <tr>
    <tr>
        <td>Bicycle</td>
        <td>50</td>
    </tr>
</table> -->
