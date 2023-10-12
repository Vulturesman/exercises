-- Write a SQL query that would select all rows from the cities table with the string Holland at the end of the district column.
SELECT *
FROM `cities`
WHERE `district` LIKE '%holland';


-- Write a SQL query that would select all rows from the cities table with the string ville anywhere within the name column.

SELECT *
FROM `cities`
WHERE `name` LIKE '%ville%'

-- Write an SQL query to select the 10 largest cities (order by population) from the cities table that are in one of the V4 countries: Czechia, Slovakia, Poland, Hungary (their country is specified with their country_id column)
-- Use IN
-- The country_id values are: 56, 199, 172, 98

SELECT *
FROM `cities`
WHERE `country_id` IN (56, 188, 172, 98)
ORDER BY `population` DESC
LIMIT 10;

-- Write SQL query to insert a row into the regions table (it has columns id, name and slug) and execute it.
-- The values will be:
-- 'Eastern Europe' for name
-- 'eastern-europe' for slug
-- no mention of id, in the columns or values

INSERT
INTO `regions`
(`name`, `slug`)
VALUES
('Eastern Europe', 'eastern-europe');


-- Write SQL query to insert a row into the regions table and execute it.
-- The values will be:
-- 'Western Europe' for name
-- 'western-europe' for slug
-- no mention of id, in the columns or values

INSERT
INTO `regions`
(`name`, `slug`)
VALUES
('Western Europe', 'western-europe');

-- Write SQL query to insert 3 more rows into the regions table and execute it.
-- The values will be (name and slug):
-- 'North America' and 'north-america'
-- 'Central America' and 'central-america'
-- 'South America' and 'south-america'

INSERT
INTO `regions`
(`name`, `slug`)
VALUES
('North America', 'north-america'),
('Central America', 'central-america'),
('South America', 'south-america');

-- Write SQL to update the record in table cities that has the column id with the value 3339.
-- Set it's name column to 'Prague'

UPDATE `cities`
SET `name` = 'Prague'
WHERE `id` = 3339;

-- Write SQL to update the record in table cities that has the column id with the value 3339.
-- Set it's population column to 1294513

UPDATE `cities`
SET `population` = '1294513'
WHERE `id` = 3339;

-- Write and execute SQL query to update all records in the countries table that have the value 'Andorra' in the column name and set the value of their column head_of_state to 'Xavier Espot Zamora'

UPDATE `countries`
SET `head_of_state` = 'Xavier Espot Zamora'
WHERE `name` = 'Andorra';

-- Write and execute SQL query to update all records in the countries table that have the value 'George W. Bush' in the column head_of_state and set the value of their column head_of_state to 'Joseph Robinette Biden Jr.'

UPDATE `countries`
SET `head_of_state` = 'Joseph Robinette Biden Jr.'
WHERE `head_of_state` = 'George W. Bush';

-- Write and execute a single SQL query to update a single record in the countries table that has the value 'United States Minor Outlying Islands' in the column name in the following manner:
-- set it's Population column to 300
-- set it's GNP column to 13.91

UPDATE `countries`
SET `population` = '300',
    `GNP` = 13.91
WHERE `name` = 'United States Minor Outlying Islands';

-- Write SQL to delete the record in table regions that has the column id with the value 1.

DELETE 
FROM `regions`
WHERE `id` = 1;

-- Write SQL to delete all records from the table regions that have the string 'america' anywhere in their slug column.
-- (If you don't have any such records, return to the exercises from the insert chapter to create them. Also, refer to the LIKE chapter for information on how to match a column that contains a string anywhere in its value.)

DELETE
FROM `regions`
WHERE `slug` LIKE '%america%';