// Conditional statements - It allows us to execute the different block of code {...} based on different condition

// if statement - This will handle only the positive scenario
// if else statement - Which will handle both positive and negative scenario
// if else if statement - This will validate more than 1 condition
// switch statement - Will also validate the multiple condition
// Ternary Operator ((condition)? true: false) - If else statement


// 1. if statement
// Syntax:

/*
if(condition){
 // code - click on the country selection drop down
}

*/

if(50>500){
    console.log("First number is greater than 2nd number")
}

let isDropDownAvl = "notdisplayed"

if(isDropDownAvl == "displayed"){
    console.log("Click on the drop down")
}

// 2. if else statement

// Syntax:

/*
if(condition){
   // code
}
else{
    // Code
}

*/

let loginText = "Logged In Failed"

if(loginText === "Logged In Successfully")
{
    console.log("Login test passed")
}
else{
    console.log("Login test failed")
}


// 3. if else if statement

// Syntax:

/*

if(condition){
   // If the condition is true - if block will be executed
}

else if(condition1)
{
   // If the condition1 is true - this if block will be executed
}
else if(condition2){
  // If the condition2 is true - this if block will be executed
}
else{
 //Execute this block of code
}


*/

// Trying to solve a problem of cross browser testing

let browser = "edge"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser")
}
else if (browser == "firefox"){ // "edge" == "firefox"
   console.log("Launch the firefox browser");  
}
else if (browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser");
}
else {
    console.log("Invalid browser");
}

// 4. switch statement

// Syntax:

/*

switch(expression){
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break
   default:
    //code to be executed
}


*/

let browserName = "safari"

switch(browserName){ // "chrome"
    case "chrome": // if(browerName == "chrome")
       console.log("launch the chrome browser")
       break
    case "firefox":
        console.log("launch the firefox browser")
        break
    case "safari":
        console.log("Launch the safari browser");
        break
    default:
        console.log("Invalid browser");
}


// When to use if else if statement
// 1. Ranges (>90)
// 2. Logical Operators (&& ||)
// 3. Mutiple datatype for comparison - name = "rahul", salary > 100000

// When to use switch statement
// 1. Simple comparision - 1 datatype



// Use statement write a program to evaluate the grades of a student
// marks = 95
// markes > 90 - A 
// > 80 - B, >70 - C, >60 -D, >=35 - E, <35 - Failed