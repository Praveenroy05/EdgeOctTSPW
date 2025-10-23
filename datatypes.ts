// Datatypes - Which defines what kind of data a variable is storing

// 2 types of datatypes

// 1. Primitive datatypes - only one value at a time
        // 1. number
        // 2. string
        // 3. boolean
        // 4. null
        // 5. undefined

        // Specifically available in TS
        // 6. any
        // 7. union (|)
        // 8. void - Function


// 1. number - Combination of integer(90, -34) and floating(45.34, 3243255.43543) point numbers
  // Syntax:-
  // keyword(let/const) variableName :datatype(optional) = value - TS
  // keyword(let/const) variableName = value - JS


  let num : number = 90 // TS
  let num1 = 45.34 // JS/TS

  // typeof operator - to check the datatype of a variable

    console.log(typeof num1)

  // What is difference between Type Annotation and Type Inference?

  // Whenever we explicitly specify the datatype of a variable, it is called 
  // Type Annotation

  // Whenever we don't specify the datatype of a variable, JS/TS automatically
  // assigns the datatype based on the value assigned to the variable, 
  // it is called Type Inference


// 2. string - Combination of characters - hello, string 

/*
1. singleQuote ('') - String Literal
2. doubleQuote ("") - String Literal
3. backtick (` `) - Template Literal

*/


let str1 :string = 'hello'
let str2 :string = "string"

// Backtick(``) way of declaring string - Template Literal

// 1. When we declare a string in multiple lines
// 2. When you want to call/insert a variable inside a string - parameterized string

let multiline = ` This 
is a 
multiline 
string  `


let age = 20
// ${age}

let message = `you are of age : ${age}`
console.log(message)

// 3. boolean - true/false

let isAdmin : boolean = true
let isLoggedIn = false

// 4. null - when a variable is explicitly assigned with no value. Represent an 
// intentional absence of any object value

let n : null = null

let responseData = null


// responseData  = get("/api/user")
// if(responseData == null){
    //throw new Error("No data found")
//}

// let obj = null
// if(obj === null){
//     obj = new class()
// }

// 5. undefined - when a variable is declared but not initialized, it holds 
// undefined value

let val : undefined 
console.log(val)


// 6. any - It is a flexible data type which can hold any type of value
let value1 :any = 10
value1 = "string"
value1 = true
value1 = null
value1 = undefined

// 7.  (dataype1|dataype2|.....) - It is a flexible data type which can hold more than one 
// datatype value at a time

let unionType : (number | string) = 100
unionType = "TS"
// unionType = true

// 8. void - Function - when a function does not return any value, 
// it is called void function
function greet() : void {
    console.log("Hello User")
}



// 2. Non-primitive datatypes - can store multiple values at a time
        // 1. Array
        // 2. Object
        // 3. Function
        // 4. tuple