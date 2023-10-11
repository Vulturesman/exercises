SELECT *
FROM `countries`
WHERE 1;


SELECT *
FROM `countries`
WHERE `population` > 20000000;

SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population`;

SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population`
LIMIT 10;

SELECT `id`, `name`, `population`
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population`
LIMIT 10;

SELECT *
FROM `countries` 
WHERE `name` = 'Czech Republic'
LIMIT 1;

-- 56

SELECT *
FROM `cities`
WHERE `country_id` = 56
ORDER BY `population` DESC
LIMIT 10;