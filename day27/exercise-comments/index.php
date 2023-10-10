<?php

require_once 'lib/DBBlackbox.php';
require_once 'lib/Comment.php';

$errorMessage = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_GET['error'])) {
    $errorMessage = 'All fields are required.';
}

$comments = select(null, null, 'Comment');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Disney buys Star Wars maker Lucasfilm from George Lucas | BBC News</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <article>

        <div class="img">
            <img src="img/article.jpg" alt="Disney buys Star Wars maker Lucasfilm from George Lucas">
        </div>

        <h1>Disney buys Star Wars maker Lucasfilm from George Lucas</h1>

        <p class="story">Disney is buying Lucasfilm, the company behind the Star Wars films, from its chairman and founder George Lucas for $4.05bn (£2.5bn).</p>

        <p>Mr Lucas said: "It's now time for me to pass Star Wars on to a new generation of film-makers."</p>

        <p>In a statement announcing the purchase, Disney said it planned to release a new Star Wars film, episode seven, in 2015.</p>

        <p>That will be followed by episodes eight and nine and then one new movie every two or three years, the company said.</p>

    </article>

    <div class="comments">
        <h2>Comment below:</h2>

        
        <?php if (!empty($errorMessage)): ?>
            <p class="error"><?= $errorMessage; ?></p>
        <?php endif; ?>

       
        <form action="handle-form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" name="name" required><br>

            <label for="email">Email:</label>
            <input type="email" name="email" required><br>

            <label for="comment">Comment:</label>
            <textarea name="comment" rows="6" required></textarea><br>

            <button type="submit">Submit</button>
        </form>

       
        <?php if (!empty($comments)): ?>
            <h3>Comments:</h3>
            <ul>
                <?php foreach ($comments as $comment): ?>
                    <li>
                        <strong><?= $comment->name; ?>:</strong>
                        <?= $comment->comment; ?>
                        <span class="timestamp"><?= $comment->timestamp; ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>


    </div>

</body>
</html>