const readline = require("readline-sync");
const validator = require("email-validator");
const nodemailer = require("nodemailer");
const generator = require("generate-password");
//const isNumber = require("is-number");
const smtpTransport = require('nodemailer-smtp-transport');
//const mailer = require("./mailer");


console.log("Enter the details:- ");

const name = readline.question("What is your name:-  ");

const website = readline.question("For which website you want to create password for:- ");


let size;
do{
    size = readline.question("What is the size:- ");
}while(size=='');


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

let email;
const emailask = readline.question("Do you want to send your password to email ?");
if(emailask == "yes"){
    do{
        email = readline.question("What is your email:- ");
    }while(!validator.validate(email));
}

var finalpassword = generator.generate({
    length: size,
    symbols: symbolbool,
    numbers: numberbool
});

//console.log(password);

let id = ''; // Enter Email
let password = ""; //Enter password

// var transporter = nodemailer.createTransport({
//     hostname:'smtp.gmail.com',
//     port:465,
//     secure:false,
//     ignoreTLS: true,
//     auth:{
//         user: id,
//         pass: password
//     }
// });

// var mailOptions={
//     from: id,
//     to: email,
//     subject: `Hey ${name} I have a password for you`,
//     text: `Your password for ${website} is ${finalpassword}`
// }

// transporter.sendMail(mailOptions,function(err, info){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Email sent !!"),info.response;
//     }
// })

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: id,
    pass: password
  }
}));

var mailOptions = {
  from: id,
  to: email,
  subject: `Hey ${name} I have a password for you`,
  text: `Your password for ${website} is ${finalpassword}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});





