"use strict";
var _a;
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
var stud = [{ name: "Max", age: 23 }];
console.log("Array of objects", stud);
//multi array
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(matrix);
var demo4 = ["Max", 32, false, undefined, null];
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
        return "else block";
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
// enum
var status;
(function (status) {
    status[status["success"] = 0] = "success";
    status[status["failure"] = 1] = "failure";
    status[status["pending"] = 2] = "pending";
})(status || (status = {}));
console.log("Status", status.success);
//Tuple
var person;
person = ["Max", 32];
console.log("Tuple", person);
var response = ["suceess", 43];
console.log("Response", response);
function getUserInfo() {
    return ["MAX", 34];
}
getUserInfo();
//uning union
var test = [1, "ths"];
function handleResponse(response) {
    var statuscode = response[0], responsecode = response[1];
    console.log(statuscode, responsecode);
}
handleResponse([200, "success"]);
var record = [1, { name: "acd", age: 34 }];
console.log(record);
var meeting = [new Date("11-12-2024"), new Date("13-03-2024")];
console.log("My meeting is at: ".concat(meeting));
var someValue = "Type is string";
var strLength = someValue.length;
console.log("String length", strLength);
var user = {
    name: "Peter",
};
console.log("email", user.email);
//optional chaining allows us to safely access method properties console.log(user?.address?.city)
var myName = {
    name: "Pink",
    address: {
        city: "DWD",
    },
};
console.log((_a = myName === null || myName === void 0 ? void 0 : myName.address) === null || _a === void 0 ? void 0 : _a.city);
var numbers = undefined;
// Safe array access
var firstNumber = numbers === null || numbers === void 0 ? void 0 : numbers[0];
console.log(firstNumber); // Output: undefined (instead of throwing an error)
function checkStatusCode(statusOf) {
    if (statusOf === "loading") {
        console.log("loading");
    }
    else if (statusOf === "pending") {
        console.log("pending");
    }
    else {
        console.log("error");
    }
}
var dem;
dem = "loading";
checkStatusCode(dem);
var Direction;
(function (Direction) {
    Direction["North"] = "north";
    Direction["South"] = "south";
    Direction["East"] = "east";
    Direction["West"] = "west";
})(Direction || (Direction = {}));
var travelDirection;
travelDirection = Direction.North; // ✅ Valid
travelDirection = Direction.South; // ✅ Valid
var employeePerson = {
    name: "Max",
    age: 32,
    employeeId: 2345,
    company: "Airtel",
};
console.log("Intersection Demo", employeePerson);
function readonlyDemo(id, creator, name, desscription) {
    return { id: id, creator: creator, name: name, desscription: desscription };
}
var product = readonlyDemo(1, "02-02-2024", "laptop", "windows 11");
product.name = "Gas";
// product.id=23;
//Nullable
var newAge = null;
newAge = 56;
// newAge =true;
//Type narrowing
function printValue(value) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase()); // TypeScript knows value is a string here
    }
    else {
        console.log("Number:", value.toFixed(2)); // TypeScript knows value is a number here
    }
}
printValue("hello");
// instance of
var Dog = /** @class */ (function () {
    function Dog(breed) {
        this.breed = breed;
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(eye) {
        this.eye = eye;
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // TypeScript knows animal is a Dog here
    }
    else {
        animal.meow(); // TypeScript knows animal is a Cat here
    }
}
var dogName = new Dog("Dalmasion");
var catEye = new Cat("blue");
console.log("Instance of eg");
makeSound(dogName);
makeSound(catEye);
function move(animal) {
    if ("swim" in animal) {
        animal.swim(); // TypeScript knows animal is a Fish here
    }
    else {
        animal.fly(); // TypeScript knows animal is a Bird here
    }
}
//equality checks
function greeting(name) {
    if (name === null) {
        console.log("Hello, stranger!");
    }
    else {
        console.log("Hello, ".concat(name, "!")); // TypeScript knows name is a string here
    }
}
function isSquare(shape) {
    return shape.kind === "square";
}
function area(shape) {
    if (isSquare(shape)) {
        console.log("Area of square:", shape.sideLength * shape.sideLength);
    }
    else {
        console.log("Area of circle:", Math.PI * shape.radius * shape.radius);
    }
}
var book = {
    name: "TypeScript Handbook",
    price: 29.99,
};
//generics
function identityOne(arg) {
    return arg;
}
console.log(identityOne("Hai"));
console.log(identityOne(67));
console.log(identityOne([1, 2, 3]));
