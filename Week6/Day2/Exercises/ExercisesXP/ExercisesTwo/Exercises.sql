SELECT * FROM customer;

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

SELECT address, phone FROM address WHERE district = 'Texas';

SELECT title, description FROM film WHERE film_id = 15 OR film_id = 150;

SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE '%spider%';

SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'sp%';

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 20;

SELECT amount, payment_date, customer_id
FROM payment
INNER JOIN customer
ON customer_id = customer_id;

***12***

SELECT city, country
FROM city
INNER JOIN country
ON country_id = country_id;










