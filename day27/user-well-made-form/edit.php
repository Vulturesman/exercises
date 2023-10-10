<?php

require_once 'bootstrap.php';


// find the ID of the record we want to edit in the request
// if it is there
$id = $_GET['id'] ?? null;

if ($id) {
    // edit
    $user = find( $id, 'User' );
} else {
    // create
    $user = new User;
}

// take the value of success_message from the session if it is there
$success_message = session()->get('success_message', null);

$errors = session()->get('errors', []);

?>

<?php if ($id) : ?>
    <h1>Edit this user</h1>
<?php else : ?>
    <h1>Create a new user</h1>
<?php endif; ?>

<a href="list.php">Back to users' list</a>

<?php include 'alerts.php'; ?>

<?php if ($id) : ?>
    <form action="store.php?id=<?= $id ?>" method="post">
<?php else : ?>
    <form action="store.php" method="post">
<?php endif; ?>

    <!-- display the form prefilled with entity data -->

    First Name:<br>
    <input type="text" name="first_name" value="<?= htmlspecialchars((string) old('first_name', $user->first_name)) ?>"><br>
    <br>

    Last Name:<br>
    <input type="text" name="last_name" value="<?= htmlspecialchars((string) old('last_name', $user->last_name)) ?>"><br>
    <br>

    Year of Birth:<br>
    <input type="text" name="year_of_birth" value="<?= htmlspecialchars((string) old('year_of_birth', $user->year_of_birth)  ) ?>"><br>
    <br>

    Username:<br>
    <input type="text" name="username" value="<?= htmlspecialchars((string) old('username', $user->username)) ?>"
        placeholder="Please give us your username"
    ><br>
    <br>

    <button type="submit">Save</button>

</form>