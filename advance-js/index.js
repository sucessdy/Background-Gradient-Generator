// deeep copy vs shallow copy  
console.log("---------Shallow copy----------");
// when both object pointed to the same memory location and it's shallow copy
const myFruits = ["Mango " , "apple", "grapes"]
const Fruits = []

// Fruits.push("Dates")
// Fruits.push("Grapes")
// Fruits.push("Dragon fruits")

Object.assign(Fruits, myFruits)
const user1 = {
    FirstName: "MUkta",
    lastName: "Kumari"
}
// const user2 =  user1
// console.log(user2)

const user2 = {...user1}

