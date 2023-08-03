// I used 'const' vs 'var' because the value of kelvin will remain constant.
const kelvin = 293;

// Celisius temp is determined by subtracting 273 from the value of kelvin. 
const celsius = kelvin - 273;

// I am using var in this instance because we will be rounding down to get fahrenheit, meaning the number will need to change.
var fahrenheit = celsius * (9/5) + 32;

// This should take the temp in F and roudn the decimal number down.
Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// Open the related index.html doc and use the dev tools to see the codes results. 
// Simply change the value of 'kelvin' to get a new temp. 

// For example, 0 K is -459.40000000000003 degrees Fahrenheit. 