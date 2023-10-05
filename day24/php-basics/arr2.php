<?php
/*
Building an array
Declare an empty array in a variable $students
Add the string 'Thomas' to it as the next numerically indexed element.
Add the string 'Kathy' to it as the next numerically indexed element.
Add the string 'Eve' to it as the next numerically indexed element.
Add the string 'Bernard' to it as the next numerically indexed element.
*/


$students = [];
$students[] = 'Thomas';
$students[] = 'Kathy';
$students[] = 'Eve';
$students[] = 'Bernard';

/*
Foreach loop #1
Write a foreach loop that will loop through the array $students and echo each element (you can combine it with some HTML for nicer output)
*/

foreach($students as $student) {
    echo "<h3>$student</h3>";
};

/*
Building an array #2
Declare an empty array in a variable $divisible_by_seven
Write a for loop that will loop through numbers 0 to 100
Whenever the current number is divisible by 7, add the number to the array $divisible_by_seven as the next numerically indexed element.
*/

$divisible_by_seven = [];

for($i = 0; $i <= 100; $i++) {
    if ($i % 7 === 0 ) {
        $divisible_by_seven[] = $i;
    }
}

/* 
Write a foreach loop that will loop through the array $divisible_by_seven and echo each element (you can combine it with some HTML for nicer output)
*/

foreach($divisible_by_seven as $nr7) {
    echo "<h4>$nr7</h4>";
}

/*
Building a multidimensional array #1
Declare an empty array in a variable $cast_crew
Add a new empty array [] to it as an element with the key 'cast'.
Add the string 'John David Washington' to the array $cast_crew['cast'] it as the next numerically indexed element.
Add the string 'Robert Pattinson' to the array $cast_crew['cast'] it as the next numerically indexed element.
Add the string 'Elizabeth Debicki' to the array $cast_crew['cast'] it as the next numerically indexed element.
Add the string 'Christopher Nolan' to the array $cast_crew['director'] it as the next numerically indexed element (yes, that array does not exist yet).
*/

$cast_crew = [];
$cast_crew['cast'] = []; 

$cast_crew['cast'][] = 'John David Washington';
$cast_crew['cast'][] = 'Robert Pattinson';
$cast_crew['cast'][] = 'Elizabeth Debicki';
$cast_crew['director'][] = 'Christopher Nolan';

echo $cast_crew['cast'][2];
echo $cast_crew['director'][0];

/*
Foreach loop #3
Write a foreach loop that will loop through the array $cast_crew['cast'] and echo each element (you can combine it with some HTML for nicer output)
*/

foreach($cast_crew['cast'] as $crew) {
    echo "<br>This is the $crew from our cast crew!";
};

/* 
Foreach loop #4
Write a foreach loop that will loop through the array $cast_crew.
Within the foreach loop write another foreach loop that will loop through the current element and echo each element (you can combine it with some HTML for nicer output).*/

foreach($cast_crew as $crews) {
    foreach($crews as $member) {
        echo "<p>$member</p>";
}

};

/*Building a multidimensional array #2
Declare an array in a variable $cast_crew. The array will have (from declaration) two elements. Their keys will be 'actors' and 'directors', their values will be an empty array.
Copy-paste the following code into your code:

*/

$cast_crew2 = [
    'actors' => [],
    'directors' => [],
];

$people = [
    [
        'name' => 'John David Washington',
        'job' => 'actor'
    ],
    [
        'name' => 'Robert Pattinson',
        'job' => 'actor'
    ],
    [
        'name' => 'Christopher Nolan',
        'job' => 'director'
    ],
    [
        'name' => 'Steven Spielberg',
        'job' => 'director'
    ],
    [
        'name' => 'Michael Caine',
        'job' => 'actor'
    ]
];

foreach($people as $element) {
   if ($element['job'] === 'actor') {
        $cast_crew2['actors'][] = $element['name'];
    }
    if ($element['job'] === 'director') {
        $cast_crew2['directors'][] = $element['name'];
    }
}

var_dump($cast_crew2);


/*
Merging arrays
Declare a new variable $default_values and initialize its value as an array with keys 'title', 'year', 'plot' and 'duration'. The values of all those elements will be null
Declare a new variable $movie and initialize its value as an array with the following keys and values:
key 'title', value 'Tenet'
key 'year', value 2020
key 'rating', value 7.5
key 'duration', value 150
To the variable $movie, assign the return value of calling the function array_merge where the first argument will be the variable $default_values and the second argument will be the variable $movie
*/


$default_values = [
    'title' => null,
    'year' => null,
    'plot' => null,
    'duration' => null,
];

$movie = [
    'title' => 'Tenet',
    'year' => 2020,
    'plot' => 7.5,
    'duration' => 150,
];

$movie = array_merge($default_values, $movie);

/*
Testing element existence
Copy-paste the following array of movies:
*/

$movies2 = [
    [
        'title' => 'Dunkerk',
        'year' => 2017,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Tenet',
        'year' => 2020,
        'pg' => 13
    ],
    [
        'title' => 'Interstellar',
        'year' => 2014,
        'pg' => 13,
        'favourite' => false
    ],
    [
        'title' => 'Inception',
        'year' => 2010,
        'pg' => 13,
        'favourite' => true
    ],
    [
        'title' => 'The Prestige',
        'year' => 2006,
        'pg' => 13
    ],
    [
        'title' => 'Batman begins',
        'year' => 2005,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight',
        'year' => 2008,
        'pg' => 12,
        'favourite' => true
    ],
    [
        'title' => 'The Dark Knight Rises',
        'year' => 2012,
        'pg' => 12,
        'favourite' => false
    ],
];

$favourite_movies = [];

foreach($movies2 as $element) {
       if (isset($element['favourite']) && $element['favourite']) {
        $favourite_movies[] = $element['title'];
}
}

var_dump($favourite_movies);

?>