<?php
 
  $calling_codes = [
    'AR' => '+54',
    'CZ' => '+420',
    'DE' => '+49',
    'HU' => '+36',
    'US' => '+1'
  ];
 
  $country_names = [
    'US' => 'USA',
    'HU' => 'Hungary',
    'CZ' => 'Czechia',
    'AR' => 'Argentina',
    'DE' => 'Germany',
    'DK' => 'Denmark',
    'IN' => 'India'
  ];


  $result = [];

  foreach($calling_codes as $country => $code) {

        foreach($country_names as $country2 => $fullName) {

            if ($country === $country2) {
            $result[] = "The calling code of $fullName is $code!";
            }
        }
    
  }
var_dump($result);
 
?>