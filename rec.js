// function getData() {
//     console.log(name);//undefined
//     console.log(age);// reference error
//     var name = "Mohan";
//     let age = 25;
// }
// getData();

// //Temporal DeadZone


// for (i=0;i<10;i+=2){
//     console.log(i);
//     i++; 
// }   // 0 3 6 9


// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius*2;
//     },
//     perimeter:() => 2*Math.PI*this.radius,

// }
// console.log(shape.diameter());// 20
// console.log(shape.perimeter());// NaN


// let c ={greet:"Hello"};
// let d;
// d=c;
// c.greet="Hi";
// console.log(d.greet);
//c and d are hoding the same object  or reference 
// when you change one of them , then other also changes


// let a=3;
// let b=new Number(3);
// let c=3;
// console.log(a==b);
// console.log(a===b);
// console.log(b===c);


// function sum(num1, num2) {
//     return num1+num2;
// }
// console.log(sum(2, "3"));
// coresion => 


// let num = 0;
// console.log(num++);//0
// console.log(++num);//2
// console.log(num--);//2
// console.log(--num);//0
// console.log(num);//0

// function getAge(...args){
//     console.log(typeof args);//object (typeof array is an object)
// }
// getAge(45, 43);

//rest => ...args => rest parameters
//collect a list of element as a object

// var num = 81;
// let num = 100;
// console.log(num);

// const obj={a:"one",b:"two",a:"three"};
// console.log(obj);
// Incase, if we have 2 keys with the same , key will
// a:three, b:two

// for(var i=1;i<10;i++) {
//     if(i==3);
//     continue;
//     console.log(i);// 1 2 4 5 6 7 8 9
// }
//continue=> it is to skip the current iteration 
//if condition is true

// const numbers = [10, 20, 30];
// numbers[10] = 100;
// console.log(numbers);

// const person ={
//     name:"Lavish",
//     profession:"senior FSD"
// }
// for(const item in person) {
//     console.log(item);
//     console.log(person[item]);
// }

// const numbers = [1,2,3,4,5];
// const [x,y] = numbers;
// console.log(x);
// console.log(y);// Array destructuring

// const user = {name:"Mohan", age:35, city:"Mumbai"};
// const {name,age,city} = user;
// console.log(`
// Name:${name}
// Age:${age}
// City:${(city)}
// `);

// class person {
//     constructor(name){
//         this.name = name;
//     }
// }
// let obj = new person("Myuri");
// console.log(typeof obj);
//function => object

// let newList = [1,2,3].push(4);
// console.log(newList);
// console.log(newList.push(5));
// type error -> Number and array function

// function getItems(fruitsitem,...FruitsArray){
//     return[...FruitsArray,fruitsitem];
// }
// console.log(getItems(["banana","apple"],"orange","Mango"));

// let a = 10;
// a++;
// a--;
// a++;
// --a;
// console.log(a);


// let count = 0;
// const nums = [0,1,2,3];
// nums.forEach(num=>{
//     if(num)
//     count+=1;
// });
// console.log(count);//3

// if(1982){
//     console.log("hello");
// }  
// else{
//     console.log("Bye");
// }

