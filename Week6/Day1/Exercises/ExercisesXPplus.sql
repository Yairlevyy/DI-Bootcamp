-- CREATE TABLE students(
-- student_id SERIAL PRIMARY KEY, 
-- first_name VARCHAR (20) NOT NULL,
-- last_name VARCHAR (25) NOT NULL,
-- birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES 
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Yair','Levy','22/05/2003');

-- SELECT * FROM students;

-- SELECT * FROM students WHERE first_name ='Marc' AND last_name='Benichou';

-- SELECT * FROM students WHERE first_name ='Marc' OR last_name='Benichou';

-- SELECT * FROM students WHERE first_name ILIKE '%a%';

-- SELECT * FROM students WHERE first_name ILIKE 'a%';

-- SELECT * FROM students WHERE first_name ILIKE '%a';

-- ***

-- SELECT * FROM students WHERE student_id = 1 OR student_id = 3;

-- SELECT * FROM students WHERE birth_date >= '2000-01-11';
