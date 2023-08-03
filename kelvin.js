// I used 'const' vs 'var' because the value of kelvin will remain constant.
const kelvin = 293;

// Celisius temp is determined by subtracting 273 from the value of kelvin. 
const celsius = kelvin - 273;

// I am using var in this instance because we will be rounding down to get fahrenheit, meaning the number will need to change.
var fahrenheit = celsius * (9/5) + 32;

// This should take the temp in F and roudn the decimal number down. Since it comes after our orginal 'fahrenheit' definition
// it should be what prints in the console. 
fahrenheit = Math.floor();

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


