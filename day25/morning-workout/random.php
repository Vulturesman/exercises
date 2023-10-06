<?php

$facts = [
[ 
    'fact' => 'In Holland’s embassy in Moscow, Russia, the staff noticed that the two Siamese cats kept meowing and clawing at the walls of the building. Their owners finally investigated, thinking they would find mice. Instead, they discovered microphones hidden by Russian spies. The cats heard the microphones when they turned on.',
    'length' => 318,
],
[ 
    'fact' => 'Funny fact',
    'length' => 15,
],
[ 
    'fact' => 'fact another story of a useless cat, that was eaten by dog.',
    'length' => 66,
],
[ 
    'fact' => 'This is just a great example',
    'length' => 75,
],
];

$random_fact_i = rand(0, count($facts) - 1);

$fact = $facts[$random_fact_i];

header('Content-Type: application/json');

echo json_encode($fact);

?>