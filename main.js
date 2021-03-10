const mod = require('./node_modules/math/index');

console.log("Let the function 'min' find the smallest number in the array of 1, 45, 87, 98 \n" + "Result: " + mod.min([1, 45, 87, 98]));
console.log("Now let's try to input letters: n, f, k, l\n" + "Result: " + mod.min(['n', 'f', 'k', 'l']));
console.log("Let the function 'summ' find the sum of number in the array of 10, -2, -8, 23 \n" + "Result: " + mod.summ([10, -2, -8, 23]));
console.log("Now let's try to input numbers and letters: 1, 45, b, h\n" + "Result: " + mod.summ([1, 45, 'b', 'h']));
console.log("Let the function 'abs' find the absolute value of a number -9\n" + "Result: " + mod.abss(-9));
console.log("Now let's try to input a letter: h\n" + "Result: " + mod.abss('h'));





