/*
convert Kelvin to Celsius, then to Fahrenheit
https://s3.amazonaws.com/codecademy-content/projects/introduction-to-javascript/learn-javascript-introduction/kelvin-weather/Kelvin+Thermometers.svg
Celsius is 273 degrees less than Kelvin
*/

//today's temperature in kelvin
const kelvin = 293;

//convert Kelvin to Celsius
const celsius = kelvin - 293;

//calculate Fahrenheit from celsius and kelvin and round down it
let fahrenheit = Math.floor(celsius * (9/5) + 32);

//calculate newton from celsius and round down it
let newton = Math.floor(celsius * (33/100));

//log the results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celius.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${newton} degrees Newton.`);