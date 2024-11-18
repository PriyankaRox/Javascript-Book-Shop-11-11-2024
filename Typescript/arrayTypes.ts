let myArray: Array<string>=["Welcome","to","typescript","class" ];

//Push
myArray.push("folks!!!")
console.log("Push ->",(myArray));

//Pop
myArray.pop();
console.log("Pop ->",myArray);

//unShift
myArray.unshift("Hello!");
console.log("UnShift ->",myArray);

//shift
let numArray: Array<number> = [10, 20, 30, 40, 50];
let shiftedValue = numArray.shift();
console.log("Shifted Value ->", shiftedValue); 
console.log("Updated Array ->", numArray);     

//Join
let joinResult = myArray.join(" ");
console.log("Join ->",joinResult);

//find
let demo: string[] = ["Hello Folks"];
let searchArr = "Hello Folks";
const res = demo.find((item)=> item === searchArr );
console.log("find ->",res);

//findIndex
const myArrIndex = myArray.findIndex((item)=>item.includes("to"));
console.log("findIndex ->",myArrIndex);

//map
let res2=myArray.map(index=>index.toUpperCase());
console.log("Map ->", res2);

//filter
let res3 = myArray.filter(index=>index.length>7);
console.log("filter", res3);

//reduce
let words: string[] = ["My", "name", "is", "Max"];

let sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
}, "");

console.log("reduce",sentence); 

//slice
let words1: string[] = ["My", "name", "is", "Jack"];
let slicedWords = words1.slice(1, 3);
console.log("slice ->",slicedWords); 

//splice
let words2: string[] = ["My", "name", "is", "Jack"];
words2.splice(2, 0, "cool");
console.log("Splice",words2);

//split
let text: string = "one,two,three,four,five";
let limitedSplit: string[] = text.split(",", 3);
console.log("Split",limitedSplit); 


//forEach
let words3: string[] = ["My", "name", "is", "Jack"];
words.forEach((word) => {
  console.log(word);
});
console.log("forEach ->", words3);