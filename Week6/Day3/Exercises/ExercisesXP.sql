*EXERCISE 1*

SELECT * FROM language;
SELECT * FROM film

SELECT title, description, name 
FROM language 
RIGHT JOIN film
ON language.language_id = film.language_id;

SELECT title, description, name 
FROM language 
LEFT JOIN film
ON language.language_id = film.language_id;

CREATE TABLE new_film (
id SERIAL PRIMARY KEY,
name VARCHAR(25)
)

INSERT INTO new_film (name)
VALUES ('New Film One'),
('New Film Two'),
('New Film Three'),
('New Film Four'),
('New Film Five');

CREATE TABLE customer_review (
review_id SERIAL PRIMARY KEY,
film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE ON UPDATE SET NULL, 
language_id INTEGER REFERENCES language (language_id),
title VARCHAR(25),
score SMALLINT,
review_text VARCHAR,
last_update DATE
)

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES (1,(SELECT language_id FROM language WHERE name ILIKE '%french%'), 'Très bon film', 8, 'Film très intéressant', '2022-07-26'),
(2,(SELECT language_id FROM language WHERE name ILIKE '%french%'), 'Bon film', 6, 'Film intéressant', '2022-07-26');

DELETE FROM new_film WHERE id = 2;

SELECT * FROM customer_review;

*EXERCISE 2*

SELECT * FROM film;

UPDATE film 
SET language_id = 3
WHERE film_id = 133;

UPDATE film 
SET language_id = 3
WHERE film_id = 384;

SELECT * FROM customer;
store_id and address_id.

DROP TABLE customer_review;

SELECT * FROM rental WHERE return_date = NULL;

*4*

















