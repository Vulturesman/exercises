<?php 
/* Declare these variables and initialize them with values:
first_name - holds your first name
surname - holds your surname */

$firstName = 'Jakub';
$lastName = 'Kozler';

echo "$firstName <br> $lastName <br>";

echo 'First name: '.$firstName.'<br>';

/*
Declare these variables and initialize them with values:
year_of_birth - holds the year of your birth
height - holds your height (cm or in, does not matter)
Now print them out in the following way:
*/

$yearOfBirth = 1993;
$height = 186;

echo "The year of birth: $yearOfBirth <br>";


/*

Define a constant SERVER_SOFTWARE with the name of your server software ('Apache').
Then use it in a sentence to print text like: */

define('SERVER_NAME','Apache');
$server = SERVER_NAME;
echo "My server is ".SERVER_NAME."<br>";
echo "My server is $server<br>";


/*
Define a constant MY_OS with the name of your operating system (e.g. 'Windows').
Then use it in a sentence to print text like:
*/

define('MY_OS', 'MacOS');
echo "My OS is ".MY_OS."<br>";

/*
Declare a function greet_world that will take no arguments and just print out (echo) the greeting Hello, world!
Call the function to see the text.
*/

function greet_world() {
    echo 'Hello World <br>';
};

greet_world();



/*
Declare a function greet that will accept one argument named $whom and use its value to decide whom to greet.
For example, calling greet('Prague') should print (echo) Hello, Prague!
Call the function twice with different arguments.
*/

function greet ($whom) {
    echo "Hello, $whom!<br>";
};

greet('Jakub');


/*
Declare a function greeting that will accept one argument named $whom and use its value to decide whom to greet.
It will be similar to the function greet, but this one will return the resulting string instead of printing it.
To see the return value you have to call the function and print (echo) its return value.
*/

function greeting ($whom) {
return "Hello, $whom! <br>";
}

echo greeting('King');

/*
The functions greet and greeting do the same operation of making a string from two parts!
While this is a very tiny piece of code, we still don't need to repeat ourselves.
Make the code more DRY by using the function greeting within the function greet.
*/



?>
