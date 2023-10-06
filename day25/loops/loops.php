<?php

$time_served = 0;

while ($time_served < 10) {
    $time_served++;
    echo "The prisoner has served $time_served years...";
    echo '<br/>';
}

$time_served2 = 0;

do {
    $time_served2++;
    echo "The prisoner has served $time_served2 years... with do while";
    echo '<br/>';
} while ($time_served2 < 10);


$time_served3 = 0;

for ($time_served3; $time_served3 < 5; $time_served3++) {
    echo "The prisoner has " . 5 - $time_served3 . " years to serve... with for loop";
    echo '<br/>';
}


for ($i = 10; $i > 0; $i--) {
        if ($i === 2) {
            echo 'Paroled!';
            break;
        }
    echo "The prisoner has $i more years to serve.";
    echo '<br/>';
        if ($i > 5) {
            continue;
        }
    echo "Going to a parole hearing....";
    echo '<br/>';
}