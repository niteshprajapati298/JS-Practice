// slice and splice 
 // slice - array ke kisi part ki copy bana ke  dega 1,2,3,4,5,6,7
 var arr = [1,2,3,4,5,6,7];
console.log( arr.slice(1,3));
 
 // splice - arr ke kisi hisse ko hata dega 
arr.splice(1,3);
console.log(arr);



//mutable and immutable :- mutable is the term which we can change the originial 
//immutable is the term where nothing is getting changed original remains the same 

var obj = {
    name:"nitesh",
    age:18,
    class :"BCA"
};

// Object.freeze(obj) // freezes the object
 // delete obj.name

var arr2 = [1,2,3,4,5,6,1,2,3,4,1,3,2,4];
 var arr3 = [...new Set(arr)];


