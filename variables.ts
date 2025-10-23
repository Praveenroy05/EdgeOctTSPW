// Variable - Storage - Which stores either a single value or multiple values

// dataType variableName = value - int i =10 - JAVA

// var - In modern JS/TS we will not be using var
// let - Whenever you know that the value of the variable can change
// const - Which is use to declare a constant variable.

// Syntax - JS
// keyword(let/const) variableName = value

// keyword(let/const) variableName : dataType(optional) = value - TS


// Global scoped variable - outside of the curly braces 
// Local scoped variable - {...} - block - {...} - inside the curly braces

let a =20 // global scoped variable

if(true){
    let b = 10 // local scoped variable
    console.log(b)
}
//console.log(b)


// var
// 1. Scope - functional scope
// 2. whenever you declare a variable using var keyword, can be re-declared and 
// can also be reinitialized
// 3. It is not mandatory to initialize a variable at the time of declaration

var global
global = 1000

function varTest(){
    var x = 1;
    console.log(x);
}

// console.log(x);

var d = 100
var d = 200
var d = 10000


console.log(d)

d = 450

// let 
// 1. Scope - block scope - {...}
// 2. cannot be re-declared but can be reinitialized
// 3. It is not mandatory to initialize a variable at the time of declaration


// var flag = true


// if(true){
//     var flag = false
//     console.log(flag)
// }
// console.log(flag)


let e = 10
//let e = 20
e = 90

let f // declaration of a varaible
console.log(f)

f= 90 // initialization of a variable

// const - constant variable
// 1. Scope - block scope - {...}
// 2. cannot be re-declared and cannot be reinitialized
// 3. It is mandatory to initialize a variable at the time of declaration


if(true){
    const abcd = 10
    console.log(abcd)
}
// console.log(abcd)

const h =10
//h = 20

// var
// 1. Scope - functional scope
// 2. whenever you declare a variable using var keyword, can be re-declared and 
// can also be reinitialized
// 3. It is not mandatory to initialize a variable at the time of declaration

// let 
// 1. Scope - block scope - {...}
// 2. cannot be re-declared but can be reinitialized
// 3. It is not mandatory to initialize a variable at the time of declaration

// const - constant variable
// 1. Scope - block scope - {...}
// 2. cannot be re-declared and cannot be reinitialized
// 3. It is mandatory to initialize a variable at the time of declaration