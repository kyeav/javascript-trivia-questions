// what is the difference between var and let?

// 1. scope
// let has block scope
// var has function scope


// const fn = () => {
//     if (true) {
//         var x = 1
//         let y = 2
//     }

//     console.log(x)
//     console.log(y)
// }

// fn()

// 2. hoisting
// var gets hoisted
// let doesnt get hoisted

// const fu = () => {
//     if (true) {
//         console.log(a)
//         var a = 1
//         console.log(b)
//         let b = 2
//     }
// }

// fu()

// 3. ES6
// let was introduced in ES2015/ES6
// var is there in JS from the beginning

// what is the difference between == and === ?

// 1. comparision
// == and === are both comparision operators
//  == compares values
// === compares values and types

// console.log(1 == '1')
// console.log(1 === '1')

// what is the difference between let and const?

// 1. assignment
// let can be reassigned
// const cannot be reassigned

// let x = 1
// x = 2
// console.log(x)

// const y = 1
// y = 2
// console.log(y)

// const z
// z = 2
// console.log(z)

// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr)

// const obj = { a: 1, b: 2 }
// obj.c = 3
// console.log(obj)

// what is the difference between undefined and null?

// 1. assignment
// an initialised variable without a value automatically gets an undefined value
// if you want to clean up a value it is better practice to use null - since developers know it was set intentionally

// let x
// console.log(x)

// 2. TypeOf

// console.log(typeof undefined)
// console.log(typeof null)

// how can you improve a web page's performance?

// 1. optimise images
// 2. lazy load images
// 3. lazy load components
// 4. minify HTML, CSS, JS
// 5. improve API response time
// 6. utilise concurrent HTTP requests with Promise.all

// what is 'this'?

// 'this' keyword is used to refer to the object that owns it

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fn: function() {
//         // return this
//         return this
//     }
// }

// console.log(person.fn())

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         // return this
//         return `${this.firstName} ${this.lastName}`
//         // return `${person.firstName} ${person.lastName}`
//        //  return this.firstName + " " + this.lastName
//     }
// }

// console.log(person.fullName())

// 2. alone

// global object(window)
// console.log(this)

// 3. in a function
// in a function, 'this' refers to the global object
// in a function in strict mode, 'this' is undefined

// function fn() {
//     console.log(this)
// }

// "use strict"
// function fn() {
//     console.log(this)
// }

// fn()

//  difference between arrow and regular functions

// 1. 'this' binding
// arrow functions dont have their own 'this'

// regular function
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fn: function() {
//         return this // 'person' object 
//     }
// }

// console.log(person.fn())

// arrow function
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: () => {
//         return this.firstName + this.lastName
//         // return person.firstName + person.lastName
//     }
// }

// console.log(person.fullName())

// 2. 'arguments' keyword
// arrow functions dont have the arguments object
// function fn() {
//     console.log(arguments)
//     console.log(arguments[0], arguments[1])
// }

// fn('frontend', 'simplified')

// const fn = () => {
//     console.log(arguments)
//     console.log(arguments[0], arguments[1])
// }

// fn('frontend', 'simplified')

// difference between function declaration and function expression

// 1. syntax
// function declaration: starts with 'function' then the function name (funcD)
// function expression: anonymous function stored in a variable (funcE)

// function funcD() {
//     console.log("function declaration")
// }

// let funcE = function () {
//     console.log("function expression")
// }

// funcD()
// funcE()

// 2. hoisting
// function declarations are hoisted, can be called before it is declared
// function expressions behave like a variable, so it has variable scope

// console.log(funcD()) // function declaration
// console.log(funcE()) // error

// function funcD() {
//     console.log("function declaration")
// }

// let funcE = function () {
//     console.log("function expression")
// }

// setTimeout()
// setTimeout(() => {
//     console.log("a")
// }, 0)

// console.log("b")
// console.log("c")

// event loop
console.log('front')

setTimeout(() => {
    console.log('end')
}, 0)

console.log('simplified')