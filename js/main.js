// Basics of Javascript

/*
    Multiline Comment in Javascript
    -- Variable Declaration in Javascript --
    Primitive Types: strings, integers, booleans, floats, arrays, objects(aka dictionaries)
    Functions in Javascript
    Loops in Javascript

*/

// String Variable
var first_name = 'Bill'
//don't necessarily have to use keyword to declare a variable, but javascript convetion
//says that you should
//var keyword is being deprecated (phased out) in favor of "let"

// Display our value  to the JS Console (like printing in Python)
console.log(first_name)

// Integer Variable
var some_number = 31;
//Since Javascript is a C style language, by convention semicolon should be added (syntatic sugar)
//If you turn strict mode on (strict = True) then semicolon would have to be added

// Display Value
console.log(some_number);

// Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable
var some_array = [1,2,3,4];

console.log(some_array)

// Object Variable
var some_object = { "test": "Please test me!"};

console.log(some_object)


// JAVASCRIPT HOISTING EXAMPLE
// JS will save memory for a specific variable (hoist it) even if it is undefined
// console.log(some_random_variable)
var some_random_variable = "This is a random string";
console.log(some_random_variable)

//Python needs jinja template engine to communicate with browser, but JS does not
//JS is non-static because everything is interpreted
//TypeScript is a superset of JS 

//should no longer us var

// A better way of declaring a variable is to use 'let and/or 'const'
// we want an undefined variable to give an error and this way does that
// Example console log
// console.log(full_name)
let full_name = first_name + ' Carter';
console.log(full_name)

const super_hero = "Ironman";
console.log(super_hero); // Expected Output: 'Ironman'
// super_hero = "Black Panther"; // Expected Output: 'Type Error'

/*
    Basic Math Operations in JS
*/
// Addition
let sum = 5 + 5; // sum += 5 if sum was already defined
console.log(sum)

// Subtraction
let diff = 5 - 5; // diff -= 5
console.log(diff)

// Multiplication
let product = 5 * 5; // product *= 5

// Division
let divide = 5 / 5; // divide /= 5
console.log(divide)

// Exponential
let square = 5 ** 2; // square **= 2
console.log(square)

// More math operations
// finding the floor of a decimal
let find_floor = Math.floor(25.8);
console.log(find_floor)

// Find the ceiling of a decimal
let find_ceil = Math.ceil(25.8)
console.log(find_ceil)

// mind bender
let crazy_stuff = some_float + '4';
console.log(crazy_stuff)

// Mind Bender 2
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)


// Using the let keword - then trying to change the value
let nba_goat = 'Michael Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' // redeclaration of the above variable
console.log(nba_goat)

/*
    BAD REDECLARATION:
    let nba_goat = 'LeBron';
    console.log(nba_goat)
*/

/*
    === JAVASCRIPT FUNCTIONS ===
*/
// Regular named functions
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

// calling a function
console.log(addNums())

// Variable Named Function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

// call our function
console.log(addNums2(4,5))

//ES6+ Arrow Function in Javascript, now the convention
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
}

console.log(multiplyNums())

// ES6+ Arrow function WITH parameters (SINGLE PARAM)
/*
    Using a single paramter in an arrow function WITHOUT parens
    can only be done with ONE paramter NOT if 2 or more are introduced.
*/

let cubed = (num) => {
    return num ** 3
}

let cubed2 = num => {
    return num ** 3
}

console.log(cubed(4))
console.log(cubed2(4))

// JavaScript Closure
// Self-Invoking Function
/*
    Our Console.log in the below example DOES NOT have to be provided
    Use this for an easier display of the output
*/
// similar to a lambda function

console.log((function(name){
    let hello = "Hello World" + name;
    return hello
})('Joel'))

// JavaScript Control Flow
// If Statement
function determineAge(age){
    if ( age < 18 ){
        return 'Minor'
    } else if ( age  > 18 && age <= 65 ){
        return 'Working Adult'
    } else {
        return 'Retired Person'
    }
}

console.log(determineAge(31))

// JavaScript Ternary Operator '?'
function determine_Age(age){
    return ( age < 18 ) ? 'Minor' : (age >= 18 && age <= 65) ?
    'Adult Not Retired Yet' : 'Elderly Person Retired'
}

console.log(determine_Age(31))

// Loops in JavaScript - For Loop
// For Loop Syntax -- for keyword(counter; condition; incrementation/decrementation)
function countByOne(){
    // For Loop
    for(let i = 0; i < 20; i++){ //increment by 2: i+2 instead of i++
        console.log(i)
    }
    return "Counting has stopped."
}

console.log(countByOne())

function decreaseByOne(){
    //for loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return "decreasing has stopped"
}

console.log(decreaseByOne())

// while loop
function count_With_While(){
    let i = 0; // counter
    let text = '';

    // while loop
    while(i < 10){
        text += `This number is...${i} \n`
        i++
    }
    return text
}

console.log(count_With_While() )

function count_with_do_while(){
    let i = 0 // Counter
    let text = '';

    // Do
    do {
        text += `This number is now...${i} \n`
        i++
    }
    while(i > 10)
    return text
}

console.log(count_with_do_while())


/*
    Lopping with Array and Array Methods, Array String Methods
*/

// Creation of Array: group_of_names
let group_of_names = ['Terry','Ben','Ash','Brock','Misty']

// Index for the first position == "Terry"
console.log(group_of_names[0]) // Terry

// Deconstruction of an array
let a, b, c, d, e, f; 
[a, b, c, d, e, f] = group_of_names
console.log(a)

// method 1 for looping through an array
function show_all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'Done With List of Names'
}

console.log(show_all_names())

// method #2 for looping through an array
console.log( group_of_names.forEach(
    element => console.log(element)
))

// JS Array Method: Array.toString()
console.log(group_of_names.toString())

/* JAVASCRIPT ARRAY METHODS: .map(), .filter(), .reduce() */

// .map()
let b_mames = group_of_names.map( x => {
    if (x[0] == 'B'){
        return x
    } else {
        return false
    }
})

console.log(b_mames) // ['Ben', 'Brock']

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
} )

console.log(nums_reduced)

// .filter()
let long_names = group_of_names.filter( element => element.length > 4) 

console.log(long_names)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(group_of_names.join(", "))

console.log(group_of_names.slice(0, 3)) // Terry, Ben, Ash

// .splice()
let captured_value = group_of_names.splice(0, 1, 'Freddie')
console.log(`This was removed based on our splice: ${captured_value}`)
console.log(group_of_names)

function replace_new_names(){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i, 1, 'Goku')
        }
    } 
    return group_of_names
}

console.log(replace_new_names())

// using .search and .slice on array values that are strings 
console.log(group_of_names[0].search('G')) 

// String.slice()
console.log(group_of_names[1].slice(0,group_of_names[1].length))

