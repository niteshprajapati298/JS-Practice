var arr = [1,2,3,4,5]
/**map ka structure bilkul for each ki tarah hai extra cheej ye hai ki map return mangta hi hai return jo karega wo ek imaginary array mein store hota jayega end mei jab map kahatam hoga to us imagainary 
 *  arrayko apko wapas kardega to ap use naye variable mein save kr sakte ho
 */

var arr2 = ["hello","a","apple","guava","harsh","nishi"]
 // ek array se ek naya array banao jismein agar word ki lenth 5 akshar ho to p tag mein dalo nahi to word ko span tag mein daalo

const div = document.getElementsByClassName('div')
const ans = arr2.map((word)=>{
    if(word.length ===5 ){
       return `<p>{length}</p>`
    }
    else {
      return  `<span>{word}</span>`
    }
 
})
// console.log(ans);

// ek array of object hai aur us aray mein hum logo ke pass kaafi data hai usse ek array banao jismein sirf name ho 

var arr3 = [
    {name:"nitesh",age:24},
    {name:"rakesh",age:27},
    {name:"vikesh",age:26},
]
 

const name = arr3.map((item)=>{
    return item.name;  
})
// console.log(name);

// filter ka bhi exact structure map ki tarah hai 
//iska matilab filter hi return karega
//ab return jo hoga wo har haalat mein  ek boolean hona chaiye
//map jo return karta tha wo hi direct save hota tha imaginary array mein
//par filter kyuki boolean retur kar raha hai to boolean save nahi hota balki bollean ki jagah jo us wakht value chal rahi hoti hai wo save hoti hai

var array = [1,2,3,4,5,6];
var divisibleBy2 = array.filter((val)=>{
    if(val%2===0) return true;
})
// array mein jitne bhi naam aise hai jinke naam mein a aa raha ho aiase namo ko hata doo
const students = ["akash","nitesh","prakash","vikram","nish","sonu","ajay"]

const studentsWithNo_a = students.filter((student)=>{
    if(student.includes('a')) return false
    else return true;
})
console.log(studentsWithNo_a);
const newStudents = students.filter((student)=>{
   if(student.split('a').length<=2) return true
})
console.log(newStudents);