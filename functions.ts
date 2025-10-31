// Function - {...}

function loginIntoApplication(){
    // fill the username 
    // fill the password 
    // click on login button 
}


// Duplication  - 100TCs - 300 line of code just to login into the application
// maintenance - 100TCs - 100 

// After implementing Function
// Call the loginIntoApplication() for all the 100TCs - 195 lines of code
// Maintenance becomes very easy - 100TCs - saving 99 steps in terms maintenance
// Resuability - 


// test - 1 - 3s
// test -2 - 3s


// Difference between Arguments and Parameters:

// Parameter - It is a variable defined in the function definition inside the paranthesis of a function - add(a,b) - a,b = parameter
// Argument - It is the value passed to the function when it is called.
// add(10,20) - 10, 20 - arguments


// Difference between Function declaration and Function Expression

// Function Expression - let i = Function()

// 1. Named Function - Function Declaration - A function which will also have a name
// 2. Anonymous function(unnamed function) - Function Expression
// 3. Arrow function =>
// 4. Constructor Function  - Class

// 5. Default parameter
// 6. Optional Parameter (?) - TS
// 7. Rest parameter


// callback function - When a function accept a function as a parameter


// 1. Named Function - Function Declaration - A function declared along with the name is known as Named function or Function Declaration

// Syntax:
// public int add(){....}
/*
function functionName(parameter : datatype(optional), parameter1: datatype) :return Datatype(optional){
 // code
 return 
}


functionName(argument, argument1)

*/

// 1. Parameterised and non returning function

function add(a:number,b:number){
   console.log(a+b);
}

add(10,20)

// 2. Parameterised and returning function

function addition(a:number,b:number,c:number) {
    return a+b+c
    console.log(a+b+c);
}

const result = addition(50,100,150)
console.log(result);
