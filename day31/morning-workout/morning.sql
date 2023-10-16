-- Boss: Select 10 best movies.
-- Explanation: Select records from the table movies ordered by rating column in descending order and limit the results to first 10.

SELECT *
FROM `movies` 
ORDER BY `rating` DESC
LIMIT 10;

-- Boss: Select 10 best movies that have at least 5000 votes.
-- Explanation: Select records from the table movies ordered by rating column in descending order where the value of votes_nr column is bigger or equal to 5000 and limit the results to first 10.

SELECT *
FROM `movies`
WHERE `votes_nr` > 5000
ORDER BY `rating` DESC
LIMIT 10;

-- Boss: Select 10 best movies that have at least 5000 votes and are actually feature films.
-- Explanation: Look at table movie_types and note the value of the id column on a row where the value of the name column is 'feature'. Then select records from the table movies ordered by rating column in descending order where the value of votes_nr column is bigger or equal to 5000 and the value of the (foreign key) movie_type_id is the number you noted and limit the results to first 10.

SELECT *
FROM `movies`
WHERE `votes_nr` > 5000 AND `movie_type_id` = 1
ORDER BY `rating` DESC
LIMIT 10;

-- or

SELECT *
FROM `movies`
LEFT JOIN `movie_types`
    ON `movies` . `movie_type_id` = `movie_types` . `id`
WHERE `votes_nr` > 5000 
    AND `movie_types` . `slug` = 'feature'
ORDER BY `rating` DESC
LIMIT 10;

-- Boss: What is the ID of the movie "Shawshank redemption"?
-- Explanation: Select one record from the table movies where the value of the name column is "Shawshank redemption". Best do it using LIKE and maybe some wildcards. When done, note the value of that record's id column.

SELECT *
FROM `movies`
WHERE `name` LIKE '%shawshank%'

-- or

SELECT `id`
FROM `movies`
WHERE `name` LIKE '%shawshank%'

-- ID 111161

-- Boss: Add a new movie.
-- Explanation: Go to IMDB.com and find any movie that is coming out this year. Then write an insert query to insert it into the table movies. Insert as many column values as you want / need, only name is mandatory.

INSERT
INTO `movies`
(`name`, `year`, `rating`)
VALUES
('Taylor Swift, The Eras Tour', '2023', '10.0')

-- Boss: What is the ID of the movie you inserted?
-- Explanation: Select one record from the table movies using the value in the column name and LIKE. Use the name of the movie that you inserted in the previous task. When done, note the value of that record's id column.

SELECT *
FROM `movies`
WHERE `name` LIKE '%the eras tour%'

-- id 5863127

-- Boss: Update the movie's type, status and certification.
-- Explanation: Go to the IMDB page of the movie you just inserted and note its type ("feature film", "series", ...), its status (probably "completed") and its certification ("PG-13", "R", ...). Look up the values of id columns for the appropriate records in tables movie_types, movie_statuses and certifications and note them. Write an update query, setting the values of columns movie_type_id, movie_status_id and certification_id to the proper values that you noted. In the WHERE part of the update query use the ID that you noted in the previous task.

UPDATE `movies`
SET `movie_type_id` = 1,
`movie_status_id` = 14,
`certification_id` = 26
WHERE `id` = 5863127
LIMIT 1;

-- Boss: Give me information about the movie you inserted, including its type, status and certification.
-- Explanation: Select the one record from the movies table once more, this time also left joining the appropriate records from movie_types, movie_statuses and certifications tables. There will be 3 LEFT JOINs in the single query.

SELECT `movies` . *, `movie_types` . *, `movie_statuses` . *, `certifications` . *
FROM `movies`
LEFT JOIN `movie_types` ON `movies` . `movie_type_id` = `movie_types` . `id`
LEFT JOIN `movie_statuses` ON `movies` . `movie_status_id`= `movie_statuses` . `id`
LEFT JOIN `certifications` ON `movies` . `certification_id` = `certifications` . `id`
WHERE `movies` . `id` = 5863127;

-- or

SELECT `movies` . *,
`movie_types` . `name` AS 'movie_type_name',
`movie_statuses` . `name` AS 'movie_status_name',
`certifications` . `slug` AS 'certification_slug'
FROM `movies`
LEFT JOIN `movie_types` ON `movies` . `movie_type_id` = `movie_types` . `id`
LEFT JOIN `movie_statuses` ON `movies` . `movie_status_id`= `movie_statuses` . `id`
LEFT JOIN `certifications` ON `movies` . `certification_id` = `certifications` . `id`
WHERE `movies` . `id` = 5863127;