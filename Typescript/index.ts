// String
let message: string = "Hello World";
console.log(message);

// number
let age: number = 30;
console.log(age);

// Boolean
let isCompleted: boolean = true;
console.log(isCompleted);

// null
let unIni: string;
// let value = null;

function check() {
  console.log(unIni);
  // console.log(value);
}

check();

unIni = "Hai";
unIni: undefined;
console.log(unIni);

let demo: null = null;
console.log("demo for null : ", demo);

let demo1: undefined = undefined;
console.log("demo for undefined : ", demo1);

let demo2: string;
demo2 = "Hai";

console.log("demo2 : ", demo2);

function greet(name: string) {
  console.log("name" + name);
}

// greet(undefined);
greet("binod");

// union
let val: string | null | undefined;

if (val == null) {
  console.log("null");
} else if (val == undefined) {
  console.log("undefined");
}

// value=null;
// console.log(value===null);
// console.log(value===undefined);

// void
let val2: void;
function demo3(): void {} //if function does not return anything it implicitly returns undefined;
console.log(demo3());

// any
let val3: any;
val3 = "hello";
console.log("val3", val3);
val3: true;

console.log("val3", val3);

//array
let arr: number[] = [1, 2, 3];
console.log("array", arr);

//Generic array types
let arr1: Array<string> = ["abc", "def"];
console.log("Generic array", arr1);

//Array of Objects using type
type Student = {
  name: string;
  age: number;
};

let stud: Student[] = [{ name: "Max", age: 23 }];

console.log("Array of objects", stud);

//multi array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix);

let demo4: any[] = ["Max", 32, false, undefined, null];

console.log(demo4);

function processInput(input: string | number | boolean | number[]) {
  if (typeof input === "string") {
    return `String length: ${input.length}`;
  } else if (typeof input === "number") {
    return `Rounded number: ${Math.round(input)}`;
  } else if (typeof input === "boolean") {
    return input ? "Boolean is true" : "Boolean is false";
  } else if (Array.isArray(input)) {
    const sum = input.reduce((acc, num) => acc + num, 0);
    return `Sum of array: ${sum}`;
  } else {
    return "else block";
  }
}

console.log(processInput("Hello TypeScript"));
console.log(processInput(42.89));
console.log(processInput(true));
console.log(processInput([1, 2, 3, 4]));

function processInputs(input: string | number | boolean | number[]) {
  if (typeof input === "string") {
    console.log(`String length: ${input.length}`);
  } else if (typeof input === "number") {
    console.log(`Rounded number: ${Math.round(input)}`);
  } else if (typeof input === "boolean") {
    console.log(input ? "Boolean is true" : "Boolean is false");
  } else if (Array.isArray(input)) {
    const sum = input.reduce((acc, num) => acc + num, 0);
    console.log(`Sum of array: ${sum}`);
  }
}
console.log("RESULT");
console.log(processInputs("Hello TypeScript"));
console.log(processInputs(42.89));
console.log(processInputs(true));
console.log(processInputs([1, 2, 3, 4]));

// enum
enum status {
  success,
  failure,
  pending,
}

console.log("Status", status.success);

//Tuple
let person: [string, number];
person = ["Max", 32];
console.log("Tuple", person);

let response: [string, number, boolean?] = ["suceess", 43];
console.log("Response", response);

function getUserInfo(): [string, number] {
  return ["MAX", 34];
}

getUserInfo();

//uning union
let test: (number | string)[] = [1, "ths"];

//type
type apiResponse = [statuscode: number, responsecode: string];

function handleResponse(response: apiResponse) {
  const [statuscode, responsecode] = response;
  console.log(statuscode, responsecode);
}

handleResponse([200, "success"]);

//Database records
type DatabaseRecords = [id: number, data: object];

const record: DatabaseRecords = [1, { name: "acd", age: 34 }];
console.log(record);

type event = [start: Date, end: Date];
const meeting: event = [new Date("11-12-2024"), new Date("13-03-2024")];
console.log(`My meeting is at: ${meeting}`);

let someValue: any = "Type is string";
let strLength: number = (someValue as string).length;
console.log("String length", strLength);

//not null assertion operator
type user8 = {
  name: string;
  email?: string;
};
let user: user8 = {
  name: "Peter",
};

console.log("email", user.email!);

//optional chaining allows us to safely access method properties console.log(user?.address?.city)
const myName = {
  name: "Pink",
  address: {
    city: "DWD",
  },
};

console.log(myName?.address?.city);

const numbers: number[] | undefined = undefined;

// Safe array access
const firstNumber = numbers?.[0];
console.log(firstNumber); // Output: undefined (instead of throwing an error)

//literals
type statusCode = "loading" | "pending" | "error";

function checkStatusCode(statusOf: statusCode) {
  if (statusOf === "loading") {
    console.log("loading");
  } else if (statusOf === "pending") {
    console.log("pending");
  } else {
    console.log("error");
  }
}
let dem: statusCode;
dem = "loading";
checkStatusCode(dem);

enum Direction {
  North = "north",
  South = "south",
  East = "east",
  West = "west",
}

let travelDirection: Direction;
travelDirection = Direction.North; // ✅ Valid
travelDirection = Direction.South; // ✅ Valid
// travelDirection = "up";  // ❌ Error: Type '"up"' is not assignable to type 'Direction'

/////intersection
type Person1 = {
  name: string;
  age: number;
};

type employee1 = {
  employeeId: number;
  company: string;
};

type intersectionDemo = Person1 & employee1;

const employeePerson: intersectionDemo = {
  name: "Max",
  age: 32,
  employeeId: 2345,
  company: "Airtel",
};

console.log("Intersection Demo", employeePerson);

//Read only
type Product = {
  readonly id: number;
  readonly creator: string;
  name: string;
  desscription: string;
};

function readonlyDemo(
  id: number,
  creator: string,
  name: string,
  desscription: string
): Product {
  return { id, creator, name, desscription };
}

const product = readonlyDemo(1, "02-02-2024", "laptop", "windows 11");
product.name = "Gas";
// product.id=23;

//Nullable
let newAge: number | null = null;
newAge = 56;
// newAge =true;

//Type narrowing
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase()); // TypeScript knows value is a string here
  } else {
    console.log("Number:", value.toFixed(2)); // TypeScript knows value is a number here
  }
}
printValue("hello");

// instance of
class Dog {
  constructor(public breed: string) {}
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  constructor(public eye: string) {}
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript knows animal is a Dog here
  } else {
    animal.meow(); // TypeScript knows animal is a Cat here
  }
}
const dogName = new Dog("Dalmasion");
const catEye = new Cat("blue");
console.log("Instance of eg");
makeSound(dogName);
makeSound(catEye);

//in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows animal is a Fish here
  } else {
    animal.fly(); // TypeScript knows animal is a Bird here
  }
}

//equality checks
function greeting(name: string | null) {
  if (name === null) {
    console.log("Hello, stranger!");
  } else {
    console.log(`Hello, ${name}!`); // TypeScript knows name is a string here
  }
}

//custom type predicates
type Square = { kind: "square"; sideLength: number };
type Circle = { kind: "circle"; radius: number };

function isSquare(shape: Square | Circle): shape is Square {
  return shape.kind === "square";
}

function area(shape: Square | Circle) {
  if (isSquare(shape)) {
    console.log("Area of square:", shape.sideLength * shape.sideLength);
  } else {
    console.log("Area of circle:", Math.PI * shape.radius * shape.radius);
  }
}

//interface
interface ProductInfo {
  name: string;
  price: number;
  description?: string; // Optional property
}

const book: ProductInfo = {
  name: "TypeScript Handbook",
  price: 29.99,
};

//generics
function identityOne<T>(arg: T): T {
  return arg;
}

console.log(identityOne<string>("Hai"));
console.log(identityOne<number>(67));
console.log(identityOne<number[]>([1, 2, 3]));

export {};
