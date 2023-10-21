<?php

function createRandomArray($length)
{
    $data = [];
    for ($i = 0; $i < $length; $i++) {
        $data[] = rand(1, 99);
    }
    return $data;
}

function echoArray($array)
{
    echo '<pre>' . implode('; ', $array) . '</pre>';
}

// generate random array with length 5
$data = createRandomArray(5);

echoArray($data);



function bubbleSort($data)
{
    $dataLength = count($data);
    for ($i = 0; $i < $dataLength; $i++) {
        for ($j = 0; $j < ($dataLength - $i - 1); $j++) {
            if ($data[$j] > $data[$j + 1]) {
                $tmp      = $data[$j + 1];
                $data[$j + 1] = $data[$j];
                $data[$j] = $tmp;
                var_dump($data);
            }
        }
    }
    return $data;
}

echoArray(bubbleSort($data));
