const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};

// Only change code below this line

const { max, min } = range;

const middle = (range) => (max + min) / 2.0;

 // Only change code above this line

 console.log(middle(range));
 module.exports = middle;