<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Board</title>
    <style>
        .board .row {
            width: 24em;
            display: flex;
            }
        .board .row > div {
            width: 3em;
            height: 3em;
        }
        .board .white {
            background-color: #c2c2c2;
        }
        .board .black {
            background-color: #525252;
        }
    </style>
</head>

<body>

<div class="board">

    <?php for($i = 0; $i < 8; $i++) { ?>

       
        <div class="row"><?= include 'test.php' ?>
        </div>     
                
        <?php } ?>




        
          



    
</body>
</html>