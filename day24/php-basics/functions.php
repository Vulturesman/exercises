<?php 
function raiseNumber($insertedNumber) {
    $insertedNumber++;
    echo $insertedNumber;
}

$number = 1;
raiseNumber($number);

echo '<br>';
echo $number;

/*
Write a function headline that would return HTML code for a headline.
It would accept 2 arguments:
the text within the headline (a string)
a number 1-6 specifying the importance of the headline
If the function was called with only one argument, the resulting headline will be a <h1> 
*/

function headline($text, $tag=1) {
    return $tag > 0 && $tag <7 ? "<h$tag>$text</h$tag>" : "Bro' specify 1-6 header<br>";
}

echo headline('Foo', 2);
echo headline('Bar');
echo headline('test', 4);
echo headline('test', 8);
echo headline('test', 0);

?>