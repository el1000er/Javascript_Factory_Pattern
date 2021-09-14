//Primitives number,string,boolean, null, undefined
//More complex: arrays, objects
//Function types, parameters

//Primitives
let age: number =24;
age= 30;

let userName:string;

userName='Andrea';

let isInstructor:boolean;

isInstructor=true;

//More complex types

let hobbies: string [];

hobbies=['Sports','Coocking'];

// let person :any ; // any, is like using javascript

//Here we are saying that only objects
//of this type are storable
let person: {
    name:string;
    age:number;
};

//this object is ok
person  = {name:'Agis',age:32};

// //this one is not ok
// person={isEmployee:true}

//people is an array of type object with name and age
let people: {
    name:string;
    age:number;
}[];

//TYPE INFERENCE *********************
//By default Typescript tries to infer (good practice)
//or know which types are used without stating the types

let course = 'React - Good Guide';

//Here will infer the type course is string
//course =1234;

//Using UNION TYPE ********************
//IF I want allow more than one type 

let otherCourse:string |string[] | number  ='Other Course';
otherCourse= 12;

//Type ALIASES **********************
//This wouldn't be a javascript object, but a type definition
type PersonType = {
    name:string;
    age:number;
};

let newPerson:PersonType;

let peopleArray:PersonType;

//FUNCTIONS & TYPES ***************

function adding(a:number,b:number){
    //here we are infering the type of the return
    return a+ b;
}

//here we are setting the type for result
function addingTyped(a:number,b:number):number{
    //here we are infering the type of the return
    return a+ b;
}

//This Function as doesn't return anything
//has a special return type -> VOID  ************
function printOutput(value:any){
    console.log(value);
}

//GENERICS TYPE  *************
//It helps you write (functions in this case),
//which are type safe yet flexible, but once
//a certain type is used, for that function execution
//that type is locked and known

const demoArray1 = [1,2,3];
const value1 =6;

function insertAtBeginningNoTypeSafety (array:any,value:any){
    const newArray = [value, ...array];
    return newArray;
}

const updatedArray1=insertAtBeginningNoTypeSafety(demoArray1,value1);
//[5,1,2,3]


