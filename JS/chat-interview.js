
// console.log(x)
// var x 


let a = 23
a += 5;
a -= 3;

// Correct! The value of y after the code executes is indeed 12. Here's the breakdown:

// y is initially assigned the value 10.
// y += 5 increases y by 5, making it 15.
// y -= 3 decreases y by 3, resulting in 12.

console.log(typeof null);

// Output:
// object
// Explanation:

// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It is one of JavaScript's primitive types.
// However, due to a historical bug in the initial implementation of JavaScript, typeof null incorrectly returns "object" instead of "null". This behavior was never corrected to avoid breaking existing code, and it has persisted to this day.
// As a result, even though null is not actually an object, typeof null returns "object".


console.log([] instanceof Array);
