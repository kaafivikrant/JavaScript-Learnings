const readline = require("readline-sync");
const validator = require("email-validator");
const nodemailer = require("nodemailer");
const generator = require("generate-password");
const isNumber = require("is-number");
const mailer = require("./mailer");


console.log("Enter the details:- ");


const name = readline.question("What is your name:-  ");


const website = readline.question("For which website you want to create password for:- ");


let size;
do{
    size = readline.question("What is the size:- ");
}while(!size=='');


const symbol = readline.question("Do you want symbols:- ");
let symbolbool= false;
if(symbolbool != ''){
    symbolbool = true;
}


const number = readline.question("Do you want numbers:- ");
let numberbool = false;
if(numberbool != ''){
    numberbool = true;
}


const emailask = readline.question("Do you want to send your password to email ?");
if(emailask == "yes"){
    let email;
    do{
        email = readline.question("What is your email:- ");
    }while(!validator.validate(email));
}


var password = generator.generate({
    length: size,
    symbols: symbolbool,
    numbers: numberbool
});



