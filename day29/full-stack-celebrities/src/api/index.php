<?php

require_once './DB.php';
require_once './Celebrity.php';

DB::connect(
    'localhost',
    'celebrities',
    'root',
    ''
);

$results = DB::select('SELECT * FROM `celebrities` ORDER BY `wealth` DESC LIMIT 10', [], 'Celebrity');

$celebrities = [];

foreach ($results as $result) {
    $celebrity = new Celebrity(
        $result->id,
        $result->image,
        $result->name,
        $result->profession,
        $result->wealth,
        $result->bio,
        $result->age,
        $result->source_of_wealth,
        $result->residence,
        $result->citizenship,
        $result->education,
        $result->marital_status,
        $result->children
    );
}
    $celebrities[] = $celebrity;

    // JSON Headers????
header('Content-Type: application/json');

echo json_encode($celebrities);