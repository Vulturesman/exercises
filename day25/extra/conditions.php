<?php

  // the variables are deliberately initialized with null so that you don't think about their current values
  // their current value can be any number
  $price = null; // integer
  $in_stock = null; // integer
  $on_sale = null; // boolean
  $max_price = null; // integer
  $amount_wanted = null; // integer

  if ($amount_wanted > 0) {};

  if ($in_stock >= $amount_wanted) {};

  if ($price <= $max_price || $on_sale) {};