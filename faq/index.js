// console.log(018 - 015)
// console.log(typeof typeof 1)
// answer  : the first typeof the string will return the number and Only after that the next sub expression is evaluated to which is now typeof 1 "number" which returns the strings 
console.log()

let vals = [1,6,4,9, 1]
console.log(vals)
vals.sort()
console.log(vals)

let letter = "JS engine convert the number x to octal number. Why it happens? How can I prevent it?"
console.log(letter)
let alpha  = letter.split(/\W/).filter(word => word.length)


alpha.sort((a, b) => a.length - b.length)
console.log(letter)
//Code! 2.5
// ref: me-psychadelic
// let x, y;
// let r, g, b;

// function setup() {
//   createCanvas(600, 400);
//   background(255);
  
// }

// function draw() {

//   r = map(mouseY, 0, 400, 0, 400);
//   b = map(mouseX, 0, 300, 150, 0);
//  //background(0, b, r, 30);
  
//   noStroke();
//   fill(random(255), 0, random(255), random(100));
//   circle(mouseX, r, b);
// }

// function mousePressed(){
//   background(255);
// }
const num = [66, 1, 9]
num.sort()
console.log(num[1])

let array = [1,2,4]
array[7] = 6
console.log(array[5])

const a = new Array(5)
console.log(a)

a.map(_=> 69)
