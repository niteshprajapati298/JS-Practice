//how you build logic
/*addition - 1+2;


*/

// array - foreach map filter
var a = [1,2,"3",4];
// a.forEach((val)=>{console.log(val+2);})//hight order functions 


//for each ka use karke ek array ke saare members ke aage hello print karao


// a.forEach((val)=>console.log(`${val} Hello`))

// ki array saare members print karo aur unhe chodh do jo ki 2 se bade ho 

// a.forEach((val)=>{
//  if(val<2) console.log(val);
// })
//sare elements jo ki array mai hai unka sum kro
var sum = 0;

// a.forEach((val)=>{
//     sum = sum+val;
// })
// console.log(sum);
// saare bande add karo aur agar unme se koi bhi string nikal jaye to fir use skipkaro
a.forEach(element => {
    if(typeof element==="number"){
     sum+=element
    }
});
console.log(sum);
//objects - access loop
// freeze, this call apply bind
