let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

const getCarHonda = (carInventory) => {
	const found = carInventory.find(elem => elem["car_make"] === "Honda");
	const sentence = `This is a ${found["car_make"]} ${found["car_model"]} from ${found["car_year"]}.`
	console.log(sentence)
}

getCarHonda(inventory);



const sortCarInventoryByYear = (carInventory) => carInventory.sort(function (x, y) {
	return x.car_year - y.car_year;
});

sortCarInventoryByYear(inventory);

console.table(inventory);