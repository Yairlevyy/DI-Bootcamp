CREATE TABLE items(
item_id SERIAL PRIMARY KEY,
item_name VARCHAR(25),
item_color VARCHAR(25),
item_price INTEGER
)

INSERT INTO items(item_name, item_color, item_price) 
VALUES ('Rolex','Blue Dial', 5000),
('Rolex','Yellow Dial', 5000),
('Rolex','Red Dial', 5000),
('Rolex','Green Dial', 5000),
('Rolex','Black Dial', 5000),
('Omega','Yellow Dial', 4000),
('Omega','Red Dial', 4000),
('Omega','Green Dial', 4000),
('Omega','Black Dial', 4000),
('Swatch','Yellow Dial', 400),
('Swatch','Red Dial', 400),
('Swatch','Green Dial', 400),
('Swatch','Black Dial', 400);

CREATE TABLE product_orders (
item_id_ref INTEGER REFERENCES items (item_id),
quantity INTEGER
)

INSERT INTO product_orders (item_id_ref, quantity)
VALUES (1, 2),
(4, 1),
(10, 1),
(12, 2),
(13, 2);

SELECT SUM(item_price) 
FROM items
INNER JOIN product_orders
ON item_id = item_id_ref;

