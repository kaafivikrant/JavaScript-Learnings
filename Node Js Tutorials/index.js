 const fs = require("fs");
// const { stringify } = require("querystring");

// // //creating a new file
// // fs.writeFileSync('text.txt',"Hey Vikrant");
// // fs.writeFileSync('text.txt',"Hey Hey Vikrant"); //delete previous data and put new one 

// // fs.appendFileSync("text.txt", " Hey"); 


// // const buf_data = fs.readFileSync('text.txt',{encoding: 'utf-8', flag: 'r'});
// //console.log(buf_data.toString());
// //console.log(buf_data);

// //<Buffer 48 65 79 20 48 65 79 20 56 69 6b 72 61 6e 74 48 65 79 20 48 65 79 20 48 65 79 20 48 65 79> 

// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// });
// console.log("Heyyy");

// const os = require("os");
// console.log(`${os.freemem()/1024/1024/1024}`);

// const path = require("path");

// console.log(path.dirname());

// const opt = require("./operator");
// //const {add, sub} = require("./operator");

// console.log(opt.add(5,545));
// console.log(opt.sub(5,545));

 
const chalk = require("chalk");
const email = require("validator");


// console.log(chalk.blue("Hello World"));
// console.log(chalk.blue.inverse("Hello World"));
const checkemail = email.isEmail("abc@gmaol.com");

console.log(checkemail ? chalk.green.inverse("Success") : chalk.red.inverse("Failed"));