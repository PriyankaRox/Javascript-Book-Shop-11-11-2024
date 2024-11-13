"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// String
var message = "Hello World";
console.log(message);
// number
var age = 30;
console.log(age);
// Boolean
var isCompleted = true;
console.log(isCompleted);
// null
var unIni;
// let value = null;
function check() {
    console.log(unIni);
    // console.log(value);
}
check();
unIni = "Hai";
unIni: undefined;
console.log(unIni);
var demo = null;
console.log("demo for null : ", demo);
var demo1 = undefined;
console.log("demo for undefined : ", demo1);
var demo2;
demo2 = "Hai";
console.log("demo2 : ", demo2);
function greet(name) {
    console.log("name" + name);
}
// greet(undefined);
greet("binod");
// union
var val;
if (val == null) {
    console.log("null");
}
else if (val == undefined) {
    console.log("undefined");
}
// value=null;
// console.log(value===null);
// console.log(value===undefined);
// void
var val2;
function demo3() { } //if function does not return anything it implicitly returns undefined;
console.log(demo3());
// any
var val3;
val3 = "hello";
console.log("val3", val3);
val3: true;
console.log("val3", val3);
//array
var arr = [1, 2, 3];
console.log("array", arr);
//Generic array types
var arr1 = ["abc", "def"];
console.log("Generic array", arr1);
var stud = [
    { name: "Max", age: 23 }
];
console.log("Array of objects", stud);
//multi array
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(matrix);
var demo4 = [
    "Max",
    32,
    false,
    undefined,
    null
];
console.log(demo4);
function processInput(input) {
    if (typeof input === "string") {
        return "String length: ".concat(input.length);
    }
    else if (typeof input === "number") {
        return "Rounded number: ".concat(Math.round(input));
    }
    else if (typeof input === "boolean") {
        return input ? "Boolean is true" : "Boolean is false";
    }
    else if (Array.isArray(input)) {
        var sum = input.reduce(function (acc, num) { return acc + num; }, 0);
        return "Sum of array: ".concat(sum);
    }
    else {
        return 'else block';
    }
}
console.log(processInput("Hello TypeScript"));
console.log(processInput(42.89));
console.log(processInput(true));
console.log(processInput([1, 2, 3, 4]));
function processInputs(input) {
    if (typeof input === "string") {
        console.log("String length: ".concat(input.length));
    }
    else if (typeof input === "number") {
        console.log("Rounded number: ".concat(Math.round(input)));
    }
    else if (typeof input === "boolean") {
        console.log(input ? "Boolean is true" : "Boolean is false");
    }
    else if (Array.isArray(input)) {
        var sum = input.reduce(function (acc, num) { return acc + num; }, 0);
        console.log("Sum of array: ".concat(sum));
    }
}
console.log("RESULT");
console.log(processInputs("Hello TypeScript"));
console.log(processInputs(42.89));
console.log(processInputs(true));
console.log(processInputs([1, 2, 3, 4]));
