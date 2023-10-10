<?php
require_once 'index.php'
?>

<h1>Here is the form</h1>

<form action="form.php" method="post">

    <?php foreach($items as $i => $text) : ?>
        <input type="text" name="items[<?= $i ?>]" value="<?= htmlspecialchars((string)$text) ?>">;
        <?=$text ?>;
        <?= $i ?>
        <?= '<br/>' ?>
    <?php endforeach; ?>
       
   
    <input type="text" name="items[<?= count($items) ?>]" value=''>
        <?= count($items) ?>
    <button type="submit">ADD</button>

</form>