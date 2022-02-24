// copy by value 
// let num1 = 10;
// // let num2 = num1;
// let num2 = 20;
// num1 = num2;
// console.log(num2);
// console.log(num1);

//copy by reference
// copy the reference of one array into another is also changing the original array
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// array1 = array2;
// // array1.push(10);
// array1.pop();
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);


//Creation / Declaration of a function
// function getName(name) {
//     console.log("my name is " + name);
// }
// // calling of a function or invoking
// getName("Lavish"); // caller function

// function getsum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// console.log(getsum(10, 20));

// function calculate(a, b) {
//     let calcresult = {
//         sum: a + b,
//         sub: a - b,
//         mul: a * b,
//         div: a / b,
//     };
//     return calcresult;
// }
// let result = calculate(10, 20);
// console.log(result.sum);
// console.log(result.sub);
// console.log(result.mul);
// console.log(result.div);

// let result1 = calculate(100, 200);
// console.log(result1.sum);

// 1. create an object and use the object to pass parameter 
// display the data of an object

// created an object
// let mobile = {
//     brand: "Apple",
//     model: "Iphone",
//     color: "black",
//     price: "50000",
//     isInsured: true,
// };

// function displayMobile(obj) {
//     console.log(`
//     Brand: ${obj.brand}
//     model: ${obj.model}
//     color: ${obj.color}
//     price: ${obj.price}
//     Is insured: ${obj.isInsured}
//     `);
// }
// // calling the function
// displayMobile(mobile);

// Array as a parameter to a function
// let fruits = [
//     "Apple",
//     "orange",
//     "Banana",
//     "Mango",
//     "Pineapple",
//     "Grapes",
//     "Starberry",
//     "Watermelon",
// ];
// function displayFruits(fruits) {
//     for(let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//     }
// }
// displayFruits(fruits);

// Arrow function -> ES6
// =>

// let student = {
//     name: "Mohan",
//     age: 20,
//     address: "Karnataka",
//     courses: {
//     course1:  "MERN Stack",
//     duration: "3 months",
//     },
// };
//  let getDetails = (student) => {
//      console.log(student);
//  };
//  getDetails(student);

//Anonymous function 
// IIFE


// Function expression
// anonymous function

// let getsum = function (num1, num2) {
//     let sum = num1 + num2;
//     return sum;

// };
// console.log(getsum(10, 20));
//IIFE
//1. IIFE is a function which is immediately
//2.It is execute as soon as the browser catches it 
//3. It is used to avoid global variable

// ((num1, num2) =>{
//     let sum = num1 + num2;
//     console.log(sum);
// })(10, 20);

// function inside an object
// let employee = {
//     firstname: "John",
//     lastname: "Doe",
//     fullName: function () {
//         return `${this.firstname} ${this.lastname}`;
//     },
//     hobbies: ["music", "movies", "sports", "coding", "cooking"],
    
// };
// console.log(employee.fullName());
// console.log(employee.hobbies[0]);

// chicken preparation
// function glassbowl(rawChicken, masala) {
//     //Mix up logic 
//     let marinatedChicken = `Mixing{${rawChicken},${masala}}`;
//     return marinatedChicken;

// }
// function cookingBowl(marinatedChicken, water) {
//     let cookedChicken = `Cooking{${marinatedChicken}+${water}}`;
//     return cookedChicken;

// }
// function eatingPlate(cookedChicken, rice) {
//     let cookedChickenWithRice = `Eating{${cookedChicken}+${rice}}`;
//     return cookedChickenWithRice;

// }
// let rawChicken = "2kg chicken";
// let masala = "pepper+garlic+turmeric+cumin+salt";
// marinatedChicken = glassbowl(rawChicken, masala);
// console.log(marinatedChicken);
// let water = "1L water";
// let cookedChicken = cookingBowl(marinatedChicken, water);
// console.log(cookedChicken);
// let rice = "1kg rice";
// console.log(eatingPlate(cookedChicken, rice));

//create a function
// function getPerimeterRect(length, breadth) {
//     return 2 * (length + breadth);
// }
// function getAreaRect(length, breadth){
//     return length * breadth;
// }
// console.log(getPerimeterRect(10, 20));
// console.log(getAreaRect(10, 20));


// (function (arr) {
//     let even = [];
//     for(let i in arr){
//         if(arr[i]%2==0){
//             console.log(even.push(arr[i]));
//         }else{
//             console.log(arr[i]);// odd 
//         }
//     }
//     console.table(even);
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Anonymous function 
// let getEven = function (arr) {
//     let even = [];
//     for(let i in arr){
//         if(arr[i] %2 == 0){
//             return even.push(arr[i]);
//        }
//    } 
// };

// // getEven[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//     );

//Day-7

// for(var i = 1; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// let greet = () => {
//     var text1 = "Good morning";
//     let text2 = "Good Afternoon";
// };
// greet();
// console.log(text1);
// console.log(text2);

// const name = "Hello";
// name = "Hello world";
// console.log("Hello world");
// const => you cannot modify the value

// let greet = () => {
//     var a = 10;
//     let b = 20;
//     const c = 30;

// }
// greet();
// console.log(a);
// console.log(b);
// console.log(c);

// function myFun() {
//     var name = "Hello";
//     return name;
// }
// console.log(myFun())

// var num = 1;
// if(num === 1) {
//     var num = 2;
//     console.log(num);//2
// }
// console.log(num);

// const => read only variable
// immutable once the value is updated
// const num = 1;
// // num = 2;
// if(num === 1) {
//     const num = 20;
// //     num = 21;// Modification not allowed
//     console.log(num);
// }
// console.log(num);

//const-> you cant reassign the value
// let -> u can redeclare the variable
// var -> u can redeclare the variable as well as update the value
// // {
//     let & const has nothing to do outside of the curley braces
// }

// let course = "Mern";
// if(course === "Mern") {
//     var dept1 = "React Developer";
//     let dept2 = "Full Stack Developer";
// }
// console.log(course);
// console.log(dept1);
// console.log(dept2);

// function myfun(){
//     var num1 = 1;
//     let num2 = 2;
//     const num3 = 3;
//     {
//         var num1 = 100;
//         let num2 = 200;
//         const num3 = 300;
//         console.log("inside Block:",num1);
//         console.log("inside Block:",num2);
//         console.log("inside Block:",num3);
//     }
//     console.log("outside Block:",num1);
//     console.log("outside Block:",num2);
//     console.log("outside Block:",num3);

// }   
// myfun();

//Array and object destructuring
// let array = [10, 20, 30, 40, 50];
// let num1, num2, num3;
// [num1, num2, num3] = array;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// let employee = {
//     name: "Mohan",
//     age: 30,
//     designation: "Full Stack Developer",
//     address: {
//         city: "Banglore",
//         state: "Karnataka",
//         country: "India",
//     },
// };

// let {city, state, country} = employee.address;
// console.log(`
// // Name:${name}
// // Age:${age}
// // Designation:${designation}
// City:${city}
// State:${state}
// Country:${country}
// `);

// let array = ["Shiva", "Prasad", "Male", 23, "Bhongir"];
// let firstname, lastname, gender, age, place;
// [firstname, lastname, gender, age, place] = array;

// console.log(firstname, lastname, gender, age, place);

// console.log(firstname);
// console.log(lastname);
// console.log(gender);
// console.log(age);
// console.log(place);

// let obj = {
//     firstname: "Shiva",
//     lastname: "Prasad",
//     gender: "Male",
//     age: 23,
//     loc: "Hyderabad",
//     // address: {
//     //     village: "Kaprayapally",
//     //     mandal: "Pochampally",
//     //     dist: "Bhongir",
//     // },
// };
// let {firstname, lastname, gender, age, loc} = obj;
// console.log(firstname, lastname, gender, age, loc);


// // let {firstname, lastname, gender} = person;
// // console.log(`
// // Firstname:${firstname}
// // Lastname:${lastname}
// // Gender:${gender}
// // `);
// let {village, mandal, dist } = person.address;
// console.log(`
// Village:${village}
// Mandal:${mandal}
// Dist:${dist}
// `);

// Spread Operator
// let number = [45, 32, 55, 75];
// let min = Math.max(...number);
// console.log(min);

// let array1 = [10, 20, 30, 40, 50];
// let array2 = [50, 60, 45, 90, ...array1];
// console.log(array2);
// console.log(array1);
// Using spread operator , you can prevent the original to get updated
// 1. copy an array
// 2. copy an object
// 3. merge two objects

// let array1 = ["Apple", "banana", "orange"];
// let array2 = [...array1];
// array2.push("papaya");
// console.log(array2);
// console.log(array1);



//Rest Parameter
// write a program to get the sum of array element using rest operator 
// function getSum(...numbers) {
//     let sum = 0;
//     for(let i=0; i<numbers.length; i++){
//         sum+= numbers[i];
//     }
//     return sum;
// }
// console.log(getSum(1,2,3,4,5));
// console.log(getSum(1,2,3,4,5,6,7,8,9,10));

// function showColors(color1,color2,...colors) {
//     console.log(`${colors}`);
//     console.log(colors[1]);
//     console.log(colors[3]);
//     console.log(colors.length);
//     console.log(colors.indexOf("Black"));
//     console.log(colors.indexOf("pink"));
// }

// showColors("red", "blue", "green", "yellow", "Black");

// Take a list of an array element and sort it using the concept of rest parameter
// function array(...numbers) {
//     console.log(numbers.sort());

// }
// array(6,8,2,5,9);

// function getSorted(...args) {
//     let sorted = args.sort((a,b) => a-b);
//     return sorted;

// }
// console.log(getSorted(6,8,2,5,9));












