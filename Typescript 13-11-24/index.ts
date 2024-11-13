// String
let message : string = "Hello World";
console.log(message);

// number
let age: number = 30;
console.log(age);

// Boolean
let isCompleted: boolean = true
console.log(isCompleted);

// null
let unIni : string;
// let value = null;

function check(){
    console.log(unIni);
    // console.log(value);
}

check();

unIni="Hai";
unIni:undefined;
console.log(unIni);

let demo : null =null;
console.log("demo for null : ",demo);

let demo1 : undefined =undefined;
console.log("demo for undefined : ",demo1);

let demo2:string;
demo2 ="Hai";

console.log("demo2 : ",demo2);

function greet(name:string){
    console.log("name"+name);
}

// greet(undefined);
greet("binod");

// union
let val :string | null | undefined;

if(val == null){
    console.log("null")
}else if(val == undefined){
    console.log("undefined")
}

// value=null;
// console.log(value===null);
// console.log(value===undefined);

// void
let val2:void;
function demo3():void{} //if function does not return anything it implicitly returns undefined;
console.log(demo3());

// any
let val3:any;
val3="hello";
console.log("val3",val3);
val3:true;

console.log("val3",val3);

//array
let arr:number[]=[1,2,3];
console.log("array",arr)

//Generic array types
let arr1: Array<string>=["abc","def"];
console.log("Generic array",arr1);

//Array of Objects using type
type Student={
    name: string;
    age: number;
}

let stud : Student[]=[
    {name:"Max",age:23}
];

console.log("Array of objects", stud);

//multi array
let matrix: number[][]=[
    [1,2,3],
    [4,5,6]
]

console.log(matrix);

let demo4 : any[]=[
    "Max",
    32,
    false,
    undefined,
    null
]

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
    }
    else{
      return 'else block'
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
  pending
}

console.log("Status",status.success);

export{}