'use strict';

//Passing the values to the function
// function Cat(name, color){
//     this.name = name
//     this.color = color
// }

// var cat = new Cat('Fluffy','White');

// console.log(cat);


//Using prototype to create an object to a var
var cat = Object.create(Object.prototype,{
    name:{
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable:true
    },
    color:{
        value: 'White',
        enumerable: true,
        writable: true,
        configurable:true
    }
})

console.log(cat);