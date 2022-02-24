//Day 2
// console.log("Hello");
// document.write("hi Guvi!");

// Http=>https=>Hyper Text transfer protocol SecureData sent is an encrypted 
// dataSSL=>Secure socket layer or TLS(Transport Layer Security)
// Netscape100-500Status Details1XX informational2XX Successfully received3XX Redirected4XX Client error5XX Server 
// Error200=>OK201=>Ok Created300=>Moved permanently301=>Moved to the new url400=>Bad 
// Request401=>Unathorized403=>Forbidden404=>Not FoundURL is not recogized or resource location doesnt 
// exist500=>Internal Server ErrorHTTP2=>Advancement or major version to http 1.0Responding with more and more dataFaster ,reliable and 
// secureJavascript:=>ECMA=>Node.jsWhere does the js code run?javascript Browser 
// EngineMozila =>Spider MonkeySafari=> javascript coreIE and edge =>chakrachrome=>v8Brandon 
// Eich=>LivescriptNetscape and Sun 
// javaMicrosoft=>1996->Jscript=>ECMA=>1997 with version-1Pre-requisites to use html and js1.Code 
// Editor=>Visual Studio codeAtomBracketsDreamweaverBrowser=>1.chrome,mo

// let name = "Lavish"; // string literal
// console.log(name);
// let num = 100; // number literal
// console.log(num);
// let bool = true;// boolean literal
// console.log(bool);

// var firstname = "John",
// lastname = "Doe", 
// age = 50;
// console.log("Iam" +" " + firstname +" "+ lastname +" "+ "having age" +" " + age );
// //string Interpolation concept
// // Template Literal concept
// //Customised string
// //backticks symbol = `${variable}`
// console.log(`Iam ${firstname} ${lastname} having age  ${age}`);

// Rules for naming convention
// 1. variable name must start with a letter , _ or $
// ex: var name , var _name , var $_name
// 2. Name can have digit or underscore or dollar special characters
// var $num_1

// var .num1 or 1num 
// cannot contain spaces 
// var num sum;
//  A variable name are case sensitive
// var firstname = "Lavish";
// var Firstname = "Lavish"; 
// console.log(firstname + " " + Firstname);
// console.log(`${firstname} ${Firstname}`);
// => variable name cannot be a js keyword or reserved word 
// var var , var switch, var for

// var num = 100;
// variable name must be meaningful name and should not be too long 

// var firstname = "Lavish";
// firstname = "Sri Ram";
// console.log(firstname);

//variable Scoping
// 1. Global variable 
// 2. local variable
// var num = 10;
// {
//     var num = 20;
// }
// console.log(num);
// let num = 10;
// {
//     let num = 20;
// }
// console.log(num);

// ES-6 =>
// let and const => Modern (block scope)
// ({

// })
// var => Older way of using 
// Functional scope
// const => 
//read only variable name

// const a = 10;
// const a = 29;
// console.log(a);
// let a = 10;
// const a = 20;
// console.log(a);//Day - 2 End



// console.log("Welcome to guvi jjh batch ")
// console.log(2+2)
// var firstName = "Shiva";
// var secondname = "Prasad";
// console.log(firstName+" "+secondname);
// var num1 = 2.2;
// var num2 = 4.5;
// console.log(num1 + num2);

//Boolean DataType = conditional checking
// true or false 
// var isEligible = false;

//undefined
// var firstName;
// console.log(firstName);

//null
// no value at all
// var id = null;
// console.log(typeof id);

// let a;
// console.log(a);
// console.log(typeof a);

// let string = "Lavish";
// console.log(string);
// console.log(typeof string);

// let empid = 12345;
// console.log(empid);
// console.log(typeof empid);

// let isFullStackDeveloper = true;
// console.log(isFullStackDeveloper);
// console.log(typeof isFullStackDeveloper);

// let xyz = null;
// let abc = "";
// // console.log(xyz);
// // console.log(typeof xyz);
// if (xyz == abc) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// operator are the symbols / keywords that tell your js engine to perform some sort of actions
// operand with operator 

// var sum = 1 + 2;
// console.log(sum);

// 1 and 2 => operands
// =,+ => operator

// 1.ArithmeticOperator=> +, -, *, /, %
// 2.AssignmentOperator=> RHS values assigned to left hand operand
// 3.ComparisonOperator or RelationalOperator=> ==, ===,<,>,<=,>=,!=,!==
// 4.LogicalOperator=> &&, ||, !
// 5.UnaryOperator
// 6.StringOperator
// 7.BitWiseOperator=> &, |, <<, >>

// AssignmentOperator
// let num = 10;
// console.log(num);

// arithmeticOperators

// let num1 = 20;
// let num2 = 10;
// console.log(`Sum:${num1 + num2}`);
// console.log(`Sub:${num1 - num2}`);
// console.log(`Mul:${num1 * num2}`);
// console.log(`Div:${num1 / num2}`); //Quotient
// console.log(`Mod:${num1 % num2}`); //Remainder

// let num = 520;
// if (num % 2 === 0) {
//   console.log(`${num} is even`);
// } else {
//   console.log(`${num} is odd`);
// }
// Template Literal

// let a = 10;
// let b = 20;
// let sum = 0;
// sum = sum + (a + b);
// sum += a + b ;
// console.log(sum);

//BODMAS = Bracket open div mul add sub 

// let age = 18;
// if (age > 15) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// let time = 22;
// if (time >= 0 && time < 12) {
//   console.log("Good Morning");
// } else if (time >= 12 && time < 16) {
//   console.log("Good Afternoon");
// } else if (time >= 16 && time < 20) {
//   console.log("Good Evening");
// } else if (time >= 20 && time < 24) {
//   console.log("Good Night");
// }

// UnaryOperator
// ++,--

// let x = 10;
// x = x + 1; //11
// x += 1; //12
// x++; //13
// x--; //12
// x -= 1; //11
// console.log(x);

// Array

// var array = [10,20,30,40,50];
// array[5] = 60;
// console.table(array);

// new => 
// var cities = new Array();
// cities[0] = "Delhi";
// cities[1] = "Bangalore";
// cities[2] = "Mumbai";
// cities[3] = "Chennai";
// console.log(cities);

// Normal for loop
// for(var i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

//ForEach loop
// cities.forEach((city) => {
//     console.log(city);
// })

//for in loop
// Its enumeration based loop that iterate over the index
// for(var index in cities){
//     console.log(cities[index]);
// }

// for of loop
// It is iterate over the value
// for(var city of cities){
//     console.log(city);
// }
