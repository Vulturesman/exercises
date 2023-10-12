<?php

$old_array = [
    [
        'name' => 'Bruce',
        'surname' => 'Wayne',
        'occupation' => 'billionaire'
    ],
    [
        'name' => 'Clark',
        'surname' => 'Kent',
        'occupation' => 'reporter'
    ],
    [
        'name' => 'Peter',
        'surname' => 'Parker',
        'occupation' => 'photographer'
    ]
];

$new_array = [];

foreach ($old_array as $person) {
    $new_person = [];
    $new_person['full_name'] = $person['name'] . ' ' . $person['surname'];
    $new_person['job'] = $person['occupation'];

    $new_array[] = $new_person;
};


$new_array2 = array_map(function ($person) {
    return [
        'full_name' => $person['name'] . ' ' . $person['surname'],
        'job' => $person['occupation']
    ];
}, $old_array);

var_dump($new_array);
var_dump($new_array2);



class Person
{
    public $first_name = null;
    public $last_name = null;
    public $job = null;
}


$new_array_person = [];

foreach ($old_array as $person) {
    $new_person = new Person();
    $new_person->first_name = $person['name'];
    $new_person->last_name = $person['surname'];
    $new_person->job = $person['occupation'];

    $new_array_person[] = $new_person;
}

var_dump($new_array_person);
