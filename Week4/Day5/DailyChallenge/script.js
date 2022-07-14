const isAnagram = (str1, str2) => {

str1.toLowerCase();
str2.toLowerCase();

// Remove white space.
let str1one = str1.replace(/ /g, "");
let str2one = str2.replace(/ /g, "");

console.log(str1one);
console.log(str2one);

// Convert to an array where each character is an element of the array. 
let str1new = str1one.split("");
let str2new = str2.split("");

console.log(str1new);
console.log(str2new);

str1new.sort();
str2new.sort();

// Compare

for (let i = 0; i < str1new.length; i++) {
	if (str1new[i] != str2new[i]) {
		return false;
	} else {
		return true;
	}
}

};


