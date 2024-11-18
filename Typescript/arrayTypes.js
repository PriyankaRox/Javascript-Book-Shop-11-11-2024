var myArray = ["Welcome", "to", "typescript", "class"];
//Push
myArray.push("folks!!!");
console.log("Push ->", (myArray));
//Pop
myArray.pop();
console.log("Pop ->", myArray);
//unShift
myArray.unshift("Hello!");
console.log("UnShift ->", myArray);
//shift
var numArray = [10, 20, 30, 40, 50];
var shiftedValue = numArray.shift();
console.log("Shifted Value ->", shiftedValue);
console.log("Updated Array ->", numArray);
//Join
var joinResult = myArray.join(" ");
console.log("Join ->", joinResult);
//find
var demo = ["Hello Folks"];
var searchArr = "Hello Folks";
var res = demo.find(function (item) { return item === searchArr; });
console.log("find ->", res);
//findIndex
var myArrIndex = myArray.findIndex(function (item) { return item.includes("to"); });
console.log("findIndex ->", myArrIndex);
//map
var res2 = myArray.map(function (index) { return index.toUpperCase(); });
console.log("Map ->", res2);
//filter
var res3 = myArray.filter(function (index) { return index.length > 7; });
console.log("filter", res3);
//reduce
var words = ["My", "name", "is", "Max"];
var sentence = words.reduce(function (accumulator, currentValue) {
    return accumulator + " " + currentValue;
}, "");
console.log("reduce", sentence);
//slice
var words1 = ["My", "name", "is", "Jack"];
var slicedWords = words1.slice(1, 3);
console.log("slice ->", slicedWords);
//splice
var words2 = ["My", "name", "is", "Jack"];
words2.splice(2, 0, "cool");
console.log("Splice", words2);
//split
var text = "one,two,three,four,five";
var limitedSplit = text.split(",", 3);
console.log("Split", limitedSplit);
//forEach
var words3 = ["My", "name", "is", "Jack"];
words.forEach(function (word) {
    console.log(word);
});
console.log("forEach ->", words3);
