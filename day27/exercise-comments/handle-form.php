<?php

require_once 'lib/DBBlackbox.php';
require_once 'lib/Comment.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $commentText = $_POST['comment'];

    // validation
    if (!empty($name) && !empty($email) && !empty($commentText)) {
        $comment = new Comment($name, $email, $commentText);
        insert($comment);
        header('Location: index.php');
        exit;
    } else {
        $errorMessage = 'All fields are required.';
    }
}

header('Location: index.php'); 
exit;