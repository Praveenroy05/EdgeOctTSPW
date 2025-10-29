// Loops - Which will execute the same block of code {...} multiple time

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("**********************");

for(let i=1; i<=5; i++){
    console.log(i);
}
console.log("**********************");

// 1. for loop
     // a. for loop - Traditional for loop - If we know how many times we have to run the iteration
     // b. for ... of loop - Loop over the iterable objects - Array - [1,2,3,4]
     // c. for ...in loop - Looping over the properties of an Object. {key: value}
// 2. while loop - If we do not know how many times we have to execute the ieration
// 3. do while loop - If we want to execute a loop atleast one time bedfor checking the condition


// 1. for loop

// Syntax:

/*
for(initialisation; condition; increment/decrement)
{
  // code
}

initialisation - Initialise the value of the variable to start the execution. let i =0
condition - Condition to check whether the loop should continue or not. i<=5
increment/Decrement - Increment or decrement the value of the variable after each iteration. i++/i--

*/
for(let i=1; i<=5; i++){ // 6<=5 // 4++ = i=5+1 // 6
    console.log(i) // 1 2 3 4 5
}

// Print all the even number between 1 to 100


