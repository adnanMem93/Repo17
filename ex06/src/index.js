const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
"use strict";
//Only change code below this line

const [a, b, ...rest] = list;

const array2 = rest;

//Only change code below this line
return array2;
}

console.log(removeFirstTwo(array1));
module.exports = removeFirstTwo;