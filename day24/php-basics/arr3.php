<?php

/* 
Create a <ol> list for movies.
Using inline foreach write out all the items in this list as <li> items in a list.
 */


$movies = [
  'The Shawshank redemption',
  'The Godfather',
  'The Godfather II',
  'Dark Knight', 
  '12 angry men', 
  'Schindler\'s list',
  'Pulp fiction',
  'Lord of the Rings: Return of the King',
  'The good, the bad and the ugly',
  'Fight club'
];

echo "<ol>";
foreach($movies as $movie) {
    echo "<li>$movie</li>";
}
echo "</ol>";


/*
Exercise
Rewrite your previous code to use for loop instead. Use the count function to write the condition of the loop.
*/

echo "<ol>";
for($i = 0; $i < count($movies); $i++) {
    echo"<li>$movies[$i]</li>";
};

echo "</ol>";


/*
Exercise
Sort the list of movies alphabetically before printing it out.
*/

echo "<ol>";

echo "</ol>";




?>