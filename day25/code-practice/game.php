<?php

function compare (int $numOne, int $numTwo) {
    return $numOne <=> $numTwo;
}

function giveClue (int $diff) {
    switch($diff) {
        case 0:
            echo "The given number is too height.";
            break;
        case 1: 
            echo "The given number is too low.";
            break;
        case -1:
            echo "The given number is too height.";
            break;
    }
};

function getGivenNumber() 
{
    return readline("Please give a number: ");
}

function replay() 
{
    switch(readline("Do you want to replay ? (y/n) ")) {
        case "yes":
            return true;
            break;
        case "y":
            return true;
            break;
        default:
            return false;
            break;
    }
}

function play()
{
    $random = rand(0, 10000);
    do {
        $given = getGivenNumber();
    } while(giveClue(compare($random, $given)));
}

do {
    play();
} while(replay());
