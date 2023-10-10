<?php

require_once 'bootstrap.php';

$users = select(10, 0, 'User');

?>

<a href="edit.php">Add new user</a>

<ul>
    <?php foreach ($users as $user) : ?>
        <li>
            <?= $user->first_name ?>

            <a href="edit.php?id=<?= $user->id ?>">EDIT</a>
        </li>
    <?php endforeach; ?>
</ul>