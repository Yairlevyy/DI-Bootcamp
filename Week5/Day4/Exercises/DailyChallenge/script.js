// 1st Challenge
// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// const promise1 = Promise.resolve("Yair");
// const promise2 = Promise.resolve("Yaakov");
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Levy");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// 2nd Challenge


let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", sunrise)

function sunrise(event) {
  
  event.preventDefault();

  let latOne = form.latOne.value;
  let longOne = form.longOne.value;
  let latTwo = form.latTwo.value;
  let longTwo = form.longTwo.value;
  
  cityOne();

  cityTwo();

}

async function cityOne() {  
  let cityOne = await fetch(`https://api.sunrise-sunset.org/json?lat=${latOne}&lng=${longOne}&date=today`)
  try {
      let oneResponse = await cityOne.json();
      let oneObj = await oneResponse["sunrise"]
      if (cityOne.status >= 400 && cityOne.status < 600) {
        throw new Error ("ERROR cannot find gif")
      } else {
      let sunriseOne = oneObj["sunrise"];
      displaySunsetOne(sunriseOne);
      }
  } catch (error) {
      console.log(error.message)
  }
}


async function cityTwo() {
  let cityTwo = await fetch(`https://api.sunrise-sunset.org/json?lat=${latTwo}&lng=${longTwo}&date=today`)
  try {
      let twoResponse = await cityTwo.json();
      let twoObj = await twoResponse;
      if (cityTwo.status >= 400 && cityTwo.status < 600) {
        throw new Error ("ERROR cannot find gif")
      } else {
      let sunriseTwo = twoObj["sunrise"];
      displaySunsetTwo(sunriseTwo);
      }
  } catch (error) {
      console.log(error.message)
  }
}


function displaySunsetOne(sunriseOne) {

  let div = document.getElementById("div");
  let p = document.createElement("p");
  let text = document.createTextNode(`Sunrise City One : ${sunriseOne}`);
  p.appendChild(text)
  div.appendChild(p);

}

function displaySunsetTwo(sunriseTwo) {

  let div = document.getElementById("div");
  let p = document.createElement("p");
  let text = document.createTextNode(`Sunrise City Two : ${sunriseOne}`);
  p.appendChild(text)
  div.appendChild(p);

}




