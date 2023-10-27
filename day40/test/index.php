<?php

$sales_2019 = [
    'january' => 10000,
    'february' => 20000,
    3 => 30000,
    4 => 40000,
    'june' => 60000
];

$sales_2020 = [
    0 => 100,
    'february' => 200,
    'march' => 300,
    'april' => 400,
    'may' => 500,
    'june' => 600
];

var_dump($merged_sales = array_merge($sales_2019, $sales_2020));


$students = [
    8374 => 'John',
    9921 => 'David',
    11456 => 'Rachel'
];

for ($i = 0; $i < count($students); $i++) {
    echo '<li>' . $students[$i] . '</li>';
}

echo "<ul>";
foreach ($students as $student => $student_name) {
    echo "<li>" . $student_name . "</li>";
}
echo "</ul>";




class Product
{
    protected $price = null;

    public function __construct($a = null)
    {
        $this->price = $a;
    }

    public function setProperty($property_name, $value)
    {
        $this->$property_name = $value;
    }

    public static function setPrice($value)
    {
        static::$price = $value;
    }
}

// $product = new Product;
// $product['price'] = 123;

// $product = new Product(123);

$product = new Product;
$product->setProperty('price', 123);

// $product = new Product;
// Product::setPrice(123);

var_dump($product);
