// let employees = [
//     {
//         id:101,
//         name:"Lavish",
//         Designation:"FSD",
//         yearsOfExp:15
//     },

//     {
//         id:102,
//         name:"Shiva",
//         Designation:"FSD",
//         yearsOfExp:12

//     },


//     {
//         id:103,
//         name:"Jagan",
//         Designation:"FSD",
//         yearsOfExp:11

//     }, 
//     {
//         id:104,
//         name:"Mohan",
//         Designation:"FSD",
//         yearsOfExp:8

//     },

//     {
//         id:105,
//         name:"Sai t",
//         Designation:"FSD",
//         yearsOfExp:8

//     }, 

//     {
//         id:101,
//         name:"Suman",
//         Designation:"FSD",
//         yearsOfExp:16

//     },
// ];
//output:101, 102, 103, 104, 105, 106
//for each
//create an empty array to push all the ids into an array
// let employeeid = [];
// employees.forEach(function(employee) {
//     employeeid.push(employee.id);
// })
// console.log(employeeid);

// let employeeid = employees.map(function(data){
//     return data.id;
// });
// console.log(employeeid)

// let employeeid = employees.map((x) => {
//     // return x.id;
//     // return x.name;
// });
// console.log(employeeid);

// let TotalExp = employees.reduce((acc, curr) =>{
//     return acc+curr.yearsOfExp;
// },0);
// console.log(TotalExp);

//Highest years of experience
// let HighestExp = employees.reduce((old,employee) =>{
//     return (old.yearsOfExp>employee.yearsOfExp)?old:employee;//ternary Operator
// });
// console.log(HighestExp);

// let data = employees.filter(function(employee){
//     return employee.yearsOfExp>10;
// });
// console.log(data);


// Practice exrcise:

// let data = [
//     {
//       name: "Joey",
//       age: 3,
//       type: "dog",
//     },
  
//     {
//       name: "Lizzy",
//       age: 6,
//       type: "dog",
//     },
  
//     {
//       name: "Red",
//       age: 2,
//       type: "dog",
//     },
  
//     {
//       name: "Sheru",
//       age: 4,
//       type: "dog",
//     },
  
//     {
//       name: "Butters",
//       age: 6,
//       type: "dog",
//     },
  
//     {
//       name: "john",
//       age: 45,
//       type: "human",
//     },
//   ];
  
  // Sum of all dogs ages in human years
  
  // MRF approch
  // 1.Identify the type of the dog
  // 1.return the data where dog type="dog"
  // 2.Multiply dog age by 7 that===human age
  // new age of the dog
  // multiply the dog age *7(MAP)
  // 3.sum of the all the dog ages
  // reduce function

 




