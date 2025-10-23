// Operators - Operators is a symbol that represents various operations.

// 1. Arithemtic Operators
// 2. Comparison operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators - Statements

// 1. Arithemetic Operators - Used to perform mathematical calculations
            // 1. Addition (+)
            // 2. Subtraction (-)
            // 3. Multiplication (*)
            // 4. Division (/)
            // 5. Modulus (%)
            // 6. Exponentiation (**)
            // 7. Increment (++)
            // 8. Decrement (--)

let number1 = 10
let number2 = 3

// 1. Addition (+) 
console.log("Addition : ", number1 + number2) // 15

console.log("TS" + "JS")
// 2. Subtraction (-)
console.log("Subtraction : ", number1 - number2) // 5

// 3. Multiplication (*)
console.log("Multiplication : ", number1 * number2) // 50

// 4. Division (/)
console.log("Division : ", number1 / number2) // 2

// 5. Modulus (%) - Remainder after division
console.log("Modulus : ", number1 % number2) // 10/3 - 1

// 6. Exponentiation (**) - Power
console.log("Exponentiation : ", number1 ** number2) // 10^3 = 10*10*10 = 1000

// 7. Increment (++) - Increase the value by 1

let number3 = 5
 // pre-increment (++number3) - First the value will be incremented by 1 and 
 // then the action will be performed
 console.log("Pre-Increment : ", ++number3)

let number4 = 5

 // Post-increment (number3++) - First the action will be performed and then the value
 // will be incremented by 1
    //console.log("Post-Increment : ", number4++)
    let newValue = number4++
    console.log("Post-Increment Value : ", newValue) // 5
    console.log("Value after Post-Increment : ", number4) // 6


// 8. Decrement (--) - Decrease the value by 1

let number5 = 5
    // pre-decrement (--number5) - First the value will be decremented by 1 and
    // then the action will be performed
    console.log("Pre-Decrement : ", --number5) // 4

let number6 = 5
    // Post-decrement (number6--) - First the action will be performed and then the value
    // will be decremented by 1
    console.log("Post-Decrement Value : ", number6--) // 5
    console.log("Value after Post-Decrement : ", number6) // 4

// Note : Increment and Decrement operators can be used only with number datatype


console.log("*****************************************")

// 2. Comparison Operators - Used to compare two values and return boolean value
            // 1. Equal to (==)
            // 2. Not Equal to (!=)
            // 3. Strict Equal to (===)
            // 4. Strict Not Equal to (!==)
            // 5. Greater than (>)
            // 6. Greater than or Equal (>=)
            // 7. Less than (<)
            // 8. Less than or Equal (<=)

// 1. Equal to (==) - Check if two VALUES are same or not

let num3 = 10
let num4 = "10"
console.log(num3 == num4)


// Type conversion and Type coercion
//  Type conversion - It is a process of converting one datatype into other by explicitly
// mentioning the datatype - Number(num4)
// Type Coercion - Implicite conversion of one datatype from other

// 2. Not Equal to (!=) - Check if two VALUES are not same
console.log(num3 != num4)

// 3. Strict Equal to (===) - Compare the two VALUES are same or not along with the datatype of the 
// variables should also be same

// What is difference between =, == and ===


console.log(num3 === num4)

// 4. Strict not Equal (!==)

console.log(num3 !== num4)

// 5. Greater than (>)
console.log( 10 >9)

// 6. Greater than or equal (>=)
console.log( 10 >= 10)

// 7. Less than (<)
console.log( 10 < 9)

// 8. Less than or equal (<=)
console.log( 10 <= 10)


// Logical Operators - Used to combine multiple conditions to get the final. The result should depend on the multiple conditions outcomes. Also the result should always be in the form boolean (true or false)

   // 1. AND (&&) - Both the condition should be true to get the results as true
   // 2. OR (||) - Either of the conditions should be true to get the result as true
   // 3. NOT (!) - It will reverse the result of the condtion from true to false and vice versa.

   // 1. AND (&&)

   // true && true - true
   // true && false - false
   // false && true - false
   // false && false - false

console.log("AND (&&)", (10>5) && (23>12)) 
console.log("AND (&&)", (10>5) && (23 < 12)) 
console.log("AND (&&)", (10>50) && (23>12)) 
console.log("AND (&&)", (10>50) && (23>120)) 


// 2. OR (||)

   // true || true - true
   // true || false - true
   // false || true - true
   // false || false - false

console.log("OR ||", (10>5) || (23>12)) 
console.log("OR ||" ,(10>5) || (23 < 12)) 
console.log("OR ||" ,(10>50) || (23>12)) 
console.log("OR ||", (10>50) || (23>120)) 

// 3. NOT (!) - Reverse the result

console.log("NOT (!)", !(10>5))


// 4. Assignment Operator (=) - Assign the value to a variable

let i = 20

i = 10