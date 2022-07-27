-- BASIC SELECT STATEMENT

SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees;

SELECT DISTINCT department_id FROM employees;

SELECT * FROM employees ORDER BY first_name DESC;

SELECT first_name, last_name, salary, salary*0.15 AS "PF" FROM employees;

SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;

SELECT SUM(salary) FROM employees;

SELECT MIN(salary), MAX(salary) FROM employees;

SELECT AVG(salary) FROM employees;

SELECT COUNT(employee_id) FROM employees;

SELECT UPPER(first_name) FROM employees;

SELECT SUBSTRING(first_name, 1, 3) AS ExtractString FROM employees;

SELECT CONCAT(first_name,' ', last_name) AS "Full Name" FROM employees;

SELECT CONCAT(first_name,' ', last_name, ' ', (SELECT length(first_name+last_name))) AS "Full Name" FROM employees;

SELECT COUNT(*) FROM employees WHERE first_name LIKE '%[0-9]%';
    
SELECT * FROM employees LIMIT 10;

-- RESTRICTING AND SORTING
              
SELECT first_name, last_name, salary FROM employees WHERE salary >= 10000 AND salary <= 15000;  

SELECT first_name, last_name, hire_date FROM employees WHERE date_part('year', hire_date)=1987;
              
SELECT * FROM employees WHERE first_name ILIKE '%e%' AND first_name ILIKE '%c%';
              
SELECT last_name, salary, job_id FROM employees               
WHERE salary != 4500 AND salary != 10000 AND salary != 15000 
AND employee_id != 17 AND employee_id != 9;  
              
SELECT last_name FROM employees WHERE LENGTH(last_name)=6;       

-- SELECT last_name FROM employees WHERE (SELECT SUBSTRING(last_name,3,1) FROM employees) ILIKE '%e%'; 

SELECT first_name, last_name, job_title 
FROM employees
INNER JOIN jobs
ON employees.job_id = jobs.job_id;

SELECT * FROM employees WHERE last_name ILIKE '%JONES%'
OR last_name ILIKE '%BLAKE%'
OR last_name ILIKE '%SCOTT%' 
OR last_name ILIKE '%KING%' 
OR last_name ILIKE '%FORD%';


              
              
              


