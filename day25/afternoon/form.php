<?php

var_dump($_GET);
var_dump($_POST);

$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

$messages = [];

if ($email === 'jakub.typek@data4me.cz' && $password === 'love') {
    // log in
    $messages['success'][] = 'Successfully logged in';
} else {
    $messages['error'][] = 'Wrong credentials';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Handling a POST request</title>
</head>
<body>

    <form action="" method="post">

        <input type="text" name="subject" value=""><br />

        <input type="text" name="text" value=""><br />

        <input type="text" name="email" value=""><br />

        <input type="submit" value="Submit!">
    </form>
    
</body>
</html>