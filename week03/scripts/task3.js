/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
const num1 = document.querySelector("#addend1");
const num2 = document.querySelector("#addend2");
const buttonn = document.querySelector("#addNumbers");
const disAns = document.querySelector("#sum");

function add(number1, number2)
{
    return parseFloat(number1) + parseFloat(number2);
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers()
{   
    ans = add(num1.value, num2.value);
    disAns.value = ans;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
buttonn.addEventListener("click", addNumbers)
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const num11 = document.querySelector("#minuend");
const num22 = document.querySelector("#subtrahend");
const subButton = document.querySelector("#subtractNumbers");
const difdifrance = document.querySelector("#difference");

const subtract = function(x, y)
{
    return x - y;
};

const subtractNumbers = function(num1, num2)
{
    num1 = num11.value;
    num2 = num22.value;
    ans = subtract(parseFloat(num1), parseFloat(num2))
    difdifrance.value = ans;
};

addEventListener("click", subtractNumbers)

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const factorOne = document.querySelector("#factor1");
const factorTwo = document.querySelector("#factor2");
const multButton = document.querySelector("#multiplyNumbers");
const product = document.querySelector("#product");

const multNums = (num1, num2) =>
{
    return num1 * num2;
}

const multiplyNumbers = () =>
{
    const num1 = parseFloat(factorOne.value);
    const num2 = parseFloat(factorTwo.value);
    const productt = multNums(num1, num2);
    product.value = productt;
}

addEventListener("click", multiplyNumbers)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const dividend= document.querySelector("#dividend")
const divisor= document.querySelector("#divisor")
const divideNumbers = document.querySelector("#divideNumbers")
const quotient = document.querySelector("#quotient")

function devide(num1, num2)
{
    return num1 / num2;
}

function divideNums()
{
    const num1 = parseFloat(dividend.value);
    const num2 = parseFloat(divisor.value);
    const quot = devide(num1, num2);
    quotient.value = quot;
}

addEventListener("click", divideNums);
// Step 9: Test all of the mathematical functionality of the task3.html page.
    // Done

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date(); 
// Step 2: Declare a variable to hold the current year
const currentYear = currentDate.getFullYear();
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = nums;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddArray = [];
oddArray = nums.filter(function(eachNumberFromNumsAtATime)
{
    return eachNumberFromNumsAtATime % 2 == 1;
})

document.querySelector("#odds").innerHTML = oddArray;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenArray = nums.filter(function(elementOfArrayBeingProcessed)
{
    return elementOfArrayBeingProcessed % 2 === 0;
})

document.querySelector("#evens").innerHTML = evenArray
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let arraySum = nums.reduce(function(accum, currentItem)
{
    accum = accum + currentItem;
    return accum;
})

document.querySelector("#sumOfArray").innerHTML = arraySum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function multiply2(incomingNUm)
{
    return incomingNUm * 2;
}

let timesArray2 = nums.map(multiply2);

document.querySelector("#multiplied").innerHTML = timesArray2
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let miti2 = function(currentArrayItem)
{
    return currentArrayItem * 2;
}

let times2 = nums.map(miti2);

let makeRunTot = function(accum, currentItem)
{
    accum = accum + currentItem;
    return accum;
}
let runTottt = times2.reduce(makeRunTot)

document.querySelector("#sumOfMultiplied").innerHTML = runTottt;