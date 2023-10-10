<?php

require_once 'bootstrap.php';

// prepare an empty entity
$song = new Song;

// $session = session();
// $session = Session::instance();
// session_start();

$errors = session()->get('errors', []);
// $old_request_data = session()->get('request_data', []);


// unset($_SESSION['errors']);
// unset($_SESSION['request_data']);

?>

<h1>Create a new song</h1>

<a href="list.php">Back to list</a>


<?php if ($errors) : ?>

    <?php foreach ($errors as $error) : ?>
        <div class="error-message">
            <?= $error ?>
        </div>
    <?php endforeach; ?>

<?php endif; ?>

<form action="insert.php" method="post">

    <!-- display the form prefilled with entity data -->

    Name:<br>
    <input type="text" name="name" value="<?= htmlspecialchars((string) old('name', $song->name)) ?>"><br>
    <br>

    Author:<br>
    <input type="text" name="author" value="<?= htmlspecialchars((string) old('author', $song->author)) ?>"><br>
    <br>

    Length:<br>
    <input type="number" name="length" value="<?= htmlspecialchars((string) old('length', $song->length)) ?>"> seconds<br>
    <br>

    Album:<br>
    <input type="text" name="album" value="<?= htmlspecialchars((string) old('album', $song->album)) ?>"
        placeholder="Please fill in the album"
    ><br>
    <br>

    <button type="submit">Save</button>

</form>