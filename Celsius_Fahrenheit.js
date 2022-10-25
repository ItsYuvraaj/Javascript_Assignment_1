// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

let celsius = 60;
let fahrenheit = 45;

//To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8(or 9/5) and add 32.
const constant = 1.8;
const constValue = 32;

let celToFah = (celsius * constant) + constValue;
console.log(`${celsius}°C to Fahrenheit is "${celToFah}°F"`);

//To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556(or 5/9).
const value = 5/9;

let FahToCel = (fahrenheit - constValue) * value;
console.log(`${fahrenheit}°F to Celsius is "${FahToCel}°C"`);
