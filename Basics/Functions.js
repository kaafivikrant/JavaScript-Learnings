'use strict';

//Passing the values to the function
// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// var cat = new Cat('Fluffy','White');

// console.log(cat);


//Using prototype to create an object to a var

// var cat = Object.create(Object.prototype,{
//     name:{
//         value: 'Fluffy',
//         enumerable: true,
//         writable: true,
//         configurable:true
//     },
//     color:{
//         value: 'White',
//         enumerable: true,
//         writable: true,
//         configurable:true
//     }
// })

// console.log(cat);

var array = ['1','2','3','4']

// Object.defineProperty(array,'last',{get: function(){
//     return this[this.length-1]
// }})

Object.defineProperty(Array.prototype,'last',{get: function(){
    return this[this.length-1]
}})


var last = array.last;

console.log(last);