
// Array of mixed elements
var a = [1, 2, "3", 4];

// Function to append "Hello" to each array element
function appendHelloToEachElement(array) {
    array.forEach(val => console.log(`${val} Hello`));
}

// Function to print elements less than 2
function printElementsLessThanTwo(array) {
    array.forEach(val => {
        if (val < 2) console.log(val);
    });
}

// Function to sum only numeric elements, skipping strings
function sumNumericElements(array) {
    var sum = 0;
    array.forEach(element => {
        if (typeof element === "number") {
            sum += element;
        }
    });
    console.log("Sum of numeric elements:", sum);
}

// Executing the functions
console.log("Appended 'Hello' to each element:");
appendHelloToEachElement(a);

console.log("\nElements less than 2:");
printElementsLessThanTwo(a);

console.log("\nSumming numeric elements:");
sumNumericElements(a);

console.log("\nDemonstrating call, apply, bind:");
demonstrateCallApplyBind();
