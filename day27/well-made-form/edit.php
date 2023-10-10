<?php

require_once 'Song.php';
require_once 'DBBlackbox.php';

// find the ID of the record we want to edit in the request
$id = $_GET['id'];

// somehow retrieve existing song from some storage
$song = find( $id, 'Song' );

// In the receiving script (after redirect), start the session so we can work with $_SESSION
session_start();

// take the value of success_message from the session if it is there
$success_message = $_SESSION['success_message'] ?? null;

// delete the success_message from the session == "flashing"
unset($_SESSION['success_message']);

?>

<h1>Edit a song</h1>

<a href="list.php">Back to list</a>

<?php if ($success_message) : ?>
 
    <div class="success-message"><?= $success_message ?></div>
 
<?php endif; ?>

<form action="update.php?id=<?= $id ?>" method="post">

    <!-- display the form prefilled with entity data -->

    Name:<br>
    <input type="text" name="name" value="<?= htmlspecialchars((string)$song->name) ?>"><br>
    <br>

    Author:<br>
    <input type="text" name="author" value="<?= htmlspecialchars((string)$song->author) ?>"><br>
    <br>

    Length:<br>
    <input type="number" name="length" value="<?= htmlspecialchars((string)$song->length) ?>"> seconds<br>
    <br>

    Album:<br>
    <input type="text" name="album" value="<?= htmlspecialchars((string)$song->album) ?>"><br>
    <br>

    <button type="submit">Save</button>

</form>