// lambda functions :- 
// js mei lambda function hi fat arrow fncs hai


// temporral dead zone
// var goes in global memory while memory execution phase 
// and let and const also go in global memory but in they are in temporal zone until the are intialized 

// currying 
// jab bhi humare pass ek aisa function hoga jismein ek se jaada parameters aa raha ho , to hum  use "simplify" kar dete hai
//us function jismein ek se jaada params hai
 //use kai saare functions ki series mein to do, 
 //aur har function return kar raha hai ek naya function jo ki purane fncs ke param ko use karega

// 
function calculate(a,b) {
    console.log(a+b);
}
calculate(12,13)

function parent(a) {
    return function(b) {
        return a+b;
    }
}

var ans = parent(2)
var ans2 = ans(3)
console.log(ans2);

// pure functions :-
//ap koi bhi value do arguments mein agarhar baar same value doge to same output ayega
// aisa koi functino jo ki global varialbel ki value ko change na kare 
// aisa koi bhi function 