<?php

$array = [
    "first" => 1,
    "second" => 2,
    "third" => 3,
    "fourth" => 7
];

/* getting the value 1-2-3 */
foreach($array as $value) {
    echo "$value <br>";
};

/* getting the value 1-2-3 and key first-second-third */
foreach($array as $key => $value) {
    echo "$value <br>";
    echo "$key <br>";
};

echo count($array);
echo "<br>";
echo max($array);

var_dump($array);

?>