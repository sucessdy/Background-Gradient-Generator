let arr = ["mukta ", "mukta2 ", "mukta3"];

let obj = {
  name: "mukta",
  city: "Delhi",
  getIntro: function () {
    console.log(this.name + "form" + this.city);
  },
};

function fun() {}

//  when we check in the browser, we get access to the data

// So when ever u create an Js Object, So JavaScript engine automatically without let u know attacheds ur object with some hidden properties and function. These are the hidden properties   and function which u can access it with just Object.
// even a variable, object and function are  accessible with the function itself, and these when JS engine attached them to the object and is called prototype
// creates
// we  can get access it anywhere, it attaches to the object and these is how we get access it property or methods.
// in a simple words  Its just an Object which is attached to each and every methods and properties (array, object, function , many more ) when ever u create it's attached to the objec, and this object gets access to the properties of the prototype 

// {name: 'mukta', city: 'Delhi', getIntro: ƒ}city: "Delhi"getIntro: ƒ ()arguments: nullcaller: nulllength: 0name: "getIntro"prototype: {}[[FunctionLocation]]: main.js:6[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]name: "mukta"[[Prototype]]: Object
// arr.__proto__
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// Array.proto
// undefined
// Array.prototype
// [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// arr
// (3) ['mukta ', 'mukta2 ', 'mukta3']0: "mukta "1: "mukta2 "2: "mukta3"length: 3[[Prototype]]: Array(0)
// arr.__proto__.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// Object.proto
// undefined
// Object.prototype
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// arr.__proto__.__proto__.__proto__

let object2  = {
    name : "muktaa"
}
object2.__proto__ = obj; 

// inhertance 

Function.prototype.mybind = function(){
    console.log("my method called")
}