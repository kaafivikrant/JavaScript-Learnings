// //  How to avoid callback hell?
// //  
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 
// // 

// Promises

// pending
// resolve
// reject

// var is function scope
// let is block scoped
// const is unchangeable



// // callback function

// const FunA = () =>{
//     setTimeout(function(){
//         console.log("Welcome to A");
//     },3000);
// }

// const FunB = () =>{
//     console.log("Welcome to B");
// }

// FunA();
// FunB();

// Callback
// const FunA = (callfriend) =>{ 
//     console.log("Welcome to A");
//     callfriend();
// }

// const FunB = () =>{
//     console.log("Welcome to B");
// }

// FunA(FunB);

// var promise = new Promise(function(resolve, reject) { 
//     const x = "geeksforgeeks"; 
//     const y = "geeksforeeks"
//     if(x === y) { 
//       resolve(); 
//     } else { 
//       reject(); 
//     } 
//   }); 

//   promise. 
//       then(function () { 
//           console.log('Success, You are a GEEK'); 
//       }). 
//       catch(function () { 
//           console.log('Some error has occured'); 
//       }); 

//Closures

// const outerFunc = (a) =>{
//     let b=10;
//     const innerFunc = () =>{
//         let sum = a + b;
//         console.log(sum);
//     }
//     return innerFunc;
// }

// let inner  = outerFunc(5);

// inner();

//Callback hell

// a(function(resultA){
//     b(resultA, function(resultB){
//         c(resultB, function(resultC){
//             d(resultC, function(resultD){
//                 e(resultD, function(resultE){
//                     f(resultE, function(resultF){
//                         g(resultF, function(resultG){
//                             i(resultG, function(resultH){
//                                 j(resultH, function(resultI){
//                                     console.log(resultI);
//                                     console.log("hiii");
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

// a();


// // Hello is alerted repeatedly after every 3 seconds
// let timerId= setInterval(() => alert('Hello'), 3000);

// // Clear intervals after 6 sec with the timer id 
// setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);


// Async Await
// function scaryClown() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('😱');
//       }, 2000);
//     });
//   }
  
//   async function msg() {
//     const msg = await scaryClown();
//     console.log('Message:', msg);
//   }
  
// msg(); // Message: 😱 <-- after 2 seconds




//Exports

// const getName = () => {
//     return 'Jim';
//   };
  
//   const getLocation = () => {
//     return 'Munich';
//   };
  
//   const dateOfBirth = '12.01.1982';
  
//   exports.getName = getName;
//   exports.getLocation = getLocation;
//   exports.dob = dateOfBirth;



//   const user = require('./user');
//   console.log(
//     `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
//   );


//Simple Server

// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });





