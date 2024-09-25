
// Q1. Check whether an input is an array
function is_array(inp) {
    return Array.isArray(inp);
}
console.log(is_array("w3resource")); // false
console.log(is_array([1, 2, 3, 4])); // true

// Check whether an input is an instance of Array
function is_instanceOf_Array(inp) {
    return inp instanceof Array;
}
console.log(is_instanceOf_Array("w3resource")); // false
console.log(is_instanceOf_Array([1, 2, 3, 4])); // true

// Q2. Clone an array
function array_Clone(arr) {
    return [...arr];
}
console.log(array_Clone([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(array_Clone([1, 2, [3, 4]])); // [1, 2, [3, 4]]

// Q3. Get the first element(s) of an array
function getter(inp, n = 1) {
    return inp.slice(0, n);
}
console.log(getter([1, 2, 3, 4])); // [1]

// Q4. Join array elements into a string
function joiner(inp) {
    return inp.join(","); // You can change the delimiter if needed
}
console.log(joiner(["Red", "Green", "White", "Black"])); // Red,Green,White,Black

