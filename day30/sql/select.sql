-- Using the database world write and execute a SQL query that would select all records int the table country_language that have 'English' in their language column and left join the appropriate records in the countries table using the country_id column.

SELECT `languages` . `name`, `countries` . `id`, `countries` . `name`
FROM `country_language`
LEFT JOIN `languages`
ON `country_language` . `language_id` = `languages` . `id`
LEFT JOIN `countries`
ON `country_language` . `country_id` = `countries` . `id`
WHERE `languages` . `name` LIKE '%english%'