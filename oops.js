//class & object 

// class person {
//     //body of the class
//     1. data members
//     2.constructor
//     3.Methods (static and instance )
//     4.gettters and setters


// }
//   // creation of  an object
//  let car1 = new person();

// ways to create an object => 
// 1.object Literal 
// let data = {
//     proper1:value,
//     proper2:value,
//     proper3:value,
// }
// 2.constructor Function
// new keyword
// let objred = new Classname();

// class Vehicle {}
// var obj = new Vehicle();
// obj.type = "car";
// obj.speed = 100;
// obj.color = "white";
// obj.model = "BMW";
// obj.year = "2020";
// obj.engine = "V8";
// obj.wheels = 4;
// console.log(obj);

// constructor=>
// A constructor is speciallized method which is invoked
// after the creation of object
// You can set the value of the object

// class Vehicle {
//     constructor(type,model) {
//         console.log("Iam a Vehicle Constructor");
//         // setting the values of the object through constructor
//         this.type = type;
//         this.model = model;
//     }
//     //lets create a method (instance )
//     static getCarDetails() {
//         console.log("Iam a Static Method");
//         return `This is ${this.type} ${this.model}`;
//     }
// }
// // let obj = new Vehicle("Car", "Honda");

// //How to call a method 
// //objref.methodname()
// // console.log(obj.getCarDetails());
// console.log(Vehicle.getCarDetails()); // static method

// static=>class=>
// static method can be accessed through class name

// Instance=>object
// instance method can be accessed through object name

// 10min 
// 1.Create a class Car
// Brand 
// 1.color
// 2.fuel
// 3.rpm
// 4.speed 
// 5.year 

// create 2 object of the car1 and car2 


// create a method with name specification and acees this values 
// through the object reference


// class Car {
//     constructor(brand, color, fuel, rpm, speed, year) {
      
//         this.brand = brand;
//         this.color = color;
//         this.fuel = fuel;
//         this.rpm = rpm;
//         this.speed = speed;
//         this.year = year;
//     }
//       Specification() {
//           return `This is ${this.brand} ${this.color} ${this.fuel} ${this.rpm} ${this.speed} ${this.year}`;

//         }
// }
 
// let car1 = new Car("Mahindra", "Red", "Gasoline", 1000, 100, 2020);
// let car2 = new Car("Tata", "white", "Diesel", 1000, 150, 2021);
// console.log(car1.Specification());
// console.log(car2.Specification());

// Method - Using method, we can write the business logic
//password
// Data validation


//Day - 8

// class Calc{
//     static getAverage(...data) {
//         //logic to get the average of all the numbers
//         let sum = 0;
//         for(let i = 0; i < data.length; i++){
//             sum += data[i];

//         }
//         return sum / data.length;
//     }
    
// }
// let average = Calc.getAverage(1,2,3,4,5);
// console.log(average);


// class Man{
//     constructor(name) {
//         console.log("I am a Man class constructor");
//         this.name = name;// setting the property
//     }

// }
// class Employee extends Man{
//     constructor(name,position) {
//         console.log("I am a Employee class constructor");
//         super(name);
//         this.position = position;
//     }

// }
// class Peon extends Employee{
//     constructor(name){
//         console.log("I am Peon class constructor");
//         super(name,"Peon");
//     }

// }

// //create an object of Man class 
// let manobj = new Man("saran");

// //create an object of a child class employee

// let employee1 = new Employee("Lavish", "Full Stack Developer");
// console.log( `
// ${employee1.name}
// ${employee1.position}    
//     `);

// let peonobj=new Peon("Sai Teja");
// console.log(`
//     ${peonobj.name}
//     `);


// class Person{
//     static CompanyName = "Amazon";// static Member variable
//     constructor(name, age, address) {
//         // set the values for 3 properties
//         this.name=name;
//         this.age=age;
//         this.address = address;
//     }
//     //instance method
//     getData(){
//         let personData=`
//         Name:${this.name}
//         Age:${this.age}
//         Address:${this.address}
//         `
//         console.log(personData);

//     }
//     //static method
//     static getCompanyName(){
//         console.log(Person.CompanyName);//Amazon
//     }

// }
// class Employee extends Person{
//     static companyNew = "google";
//     constructor(name,age,address,designation,salary){
//         super(name,age,address);
//         this.designation=designation;
//         this.salary=salary;
//     }

//     //instance method
//     getData(){
//         let employeeData=`
//         Name:${this.name}   
//         Age:${this.age}
//         Address:${this.address}
//         Designation:${this.designation}
//         Salary:${this.salary}
//         `
//         console.log(employeeData);
//     }
//     //static method
//     static getCompanyName(){
//         console.log(Employee.companyNew);//google

//     }

// }

// //create an Object of Employee

// let employee1 =new  Employee("jack",45,"Hyderbad","Manager",5000000);
// employee1.getData();//access of instance method
// Employee.getCompanyName();//access of static method

// let person1 = new Person("Joe",35,"Hyderbad");
// person1.getData();//access of instance method
// Person.getCompanyName();//access of static method


// class Car{
//     constructor(model, seat){
//         this.model = model;
//         this.seat = seat;
//     }
//     getModel(){
//         let carData = `
//         Model:${this.model}
//         Seat: ${this.seat}
//         `;
//         console.log(carData);
//     }
// }
// class BMW extends Car{
//     constructor(model, seat){
//         super(model, seat);
//     }
//     getModel(){
//         let bmwData = `
//         Model: ${this.model}
//         Seats:${this.seat}
//         `;
//         console.log(bmwData);

//     }

// }
// class Tesla extends Car{
//     constructor(model, seat){
//         super(model, seat);
//     }
//     getModel(){
//         let teslaData = `
//         Model: ${this.model}
//         Seats: ${this.seat}
//         `;
//         console.log(teslaData);
//     }

// }
// let bmw1 = new BMW("Model x1", 2);
// bmw1.getModel();

// let tesla = new Tesla("Elec", 5);
// tesla.getModel();

// let car = new Car("2020", 4);
// car.getModel();


// Day - 9
// class Rectangle {
//     constructor(length, breadth){
//         this.length = length;
//         this.breadth = breadth;
//     }

//     // //logic to get area of rectangle
//     getArea(){
//         return this.length*this.breadth;
//     }
// }
// class Square extends Rectangle {
//     constructor(length){
//         super(length, length);
//     }

//     //get perimeter
//     getPerimeter(){
//         return 2*this.length+this.breadth;
//     }
// }

// // create an object for rectangle 
// let recobj = new Rectangle(10, 20);
// console.log(recobj.getArea());

// //create an object for square
// let squareobj = new Square(10);
// console.log(squareobj.getArea());
// console.log(squareobj.getPerimeter());

//DRY -> Dont Repeat Yourself

//polymorphism 
// poly+Morphism
//Inherttance
// same method which can be used on different objects
//drive()

// class Car{
//     drive(){
//         console.log("This is a slow Running Method")
//     }
// }
// class MotorCycle extends Car{
//     drive(){
//        console.log("This is a Fast Running Method") 
//     }
// }

// //create an object for car
// let car1 = new Car();
// car1.drive();

// //create an object for motorcycle
// let motorbike = new MotorCycle();
// motorbike.drive();

// Encapsulation=>
// ATM+Netbanking=>
// Brother,Sister,Father,Wife
// Hiding the data from the user
// The Wrapping or binding the Data into a single unit 
// getter=>to get or read the values from the object
// setter=>to set or write the values 

// class Car{
//     setAttribute(model,year){
//         this.model=model;
//         this.year=year;
//     }

//    getAttribute(model,year){
//          return this.model+" "+this.year;
//     }
// }


// let car1=new Car();
// car1.setAttribute("Nexon",2018);
// console.log(car1.getAttribute());







