// "use strict"
// document.getElementsByClassName("myBtn").addEventListener("click" , function( )  {
// console.log("I clicked the button")
// })


// let btnn = document.getElementById("myBtn")
// let rect = document.querySelector(".rectangle")
// const handleMouseEvent = 
// console.log(018 - 015)

// for(var i = 0 ; i< 4; i++) { 
//     setTimeout(( ) => {
//         console.log(i)
//     },100);
// }

// function fun1() {
//     const age = 29 
//     function fun2 () {
//         console.log(age)
 
//     }
//     return fun2
// }

// const fun = fun1()
// fun()

const fun2 = () => {
   console.log("fun2 is starting")
} 

const fun1 = () => {
    console.log("fun2 is starting")
    fun2()
    console.log("fun2 end")
 } 

 fun1()
 console.log(typeof abcd)
 var abcd
//  const [ , , , ,a ] = [1,2,3,4,6,67,]
//  const {4:b} = [1,2,3,4,6,67,]
//  console.log(b)


let arr = [1,2,34,4,5,67,8,89,9,0]
let {a,b} = {2: a, 5: b}
console.log(a, b)
// spread operator
let arr1  =  [3,4,5,6,7]
let obj = { ...arr1}
console.log()

