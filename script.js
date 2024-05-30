// Ch1 Variables & datatypes
// VARIABLES
// console.log("Hello world");
// name = "HEHEHEHHEE"
// var print = "hello world"// In var value can be redeclared or update we dont usually use this
// let fullName = "Main nhi btaon ga"
// let age = 24            // In let value cannot redeclared but update
// let mr = "bean"
// console.log(fullName);
// const pi = 3.14;          //In const value cannot redeclared or update
// console.log(pi);
// Datatypes
// primitive(7) and non-primititsve
// Number,String,Boolean,undefined,null,BigInt,Symbol
// non-primitive ->objects 1-Arrays 2-functions
// -> objects 
// const student = {
//     name : "Hasnaat",
//     age : 20,
//     rollNo : 601,
//     isPass : true,
// };
// // Q1
// const product = {
//     title : "Ball Pen",
//     rating : 4,
//     offer : 5,
//     price : 250,
// };
// console.log(product)
// operator in js + - * /
// let a = 54;
// let b = 4;
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// // console.log(a**b) 2^b

// Unary operator
// a++;
// a--;
// --a;
// ++a;
// console.log("a=",a+"b=",b);

// Assignment Operators
// a =+ 1;
//comparison operatoryoun
// ! = > <

// logical operators
// AND OR NOT

// Conditional Statements
let age = 18;
if (age => 18){
    console.log("You are young ");
}
let mode = "dark";
let color;
if (mode==="dark"){
    color = "black";
}
else{
    color="White";
}
console.log(color);

// odd even 
let num = 24;
if (num%2 === 0){
    console.log(num,"is odd")
}else{
    console.log(num,"is even")
}