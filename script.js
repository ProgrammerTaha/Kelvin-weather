/*
convert Kelvin to Celsius, then to Fahrenheit
https://s3.amazonaws.com/codecademy-content/projects/introduction-to-javascript/learn-javascript-introduction/kelvin-weather/Kelvin+Thermometers.svg
Celsius is 273 degrees less than Kelvin
*/

//today's temperature in kelvin
const kelvin = 0;

//convert Kelvin to Celsius
const celsius = kelvin - 293;

//calculate Fahrenheit from celsius and kelvin
let fahrenheit = celsius * (9/5) + 32;

//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//log the results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celius.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
