//  const fs = require("fs");
// // const { stringify } = require("querystring");

// // // //creating a new file
// // // fs.writeFileSync('text.txt',"Hey Vikrant");
// // // fs.writeFileSync('text.txt',"Hey Hey Vikrant"); //delete previous data and put new one 

// // // fs.appendFileSync("text.txt", " Hey"); 


// // // const buf_data = fs.readFileSync('text.txt',{encoding: 'utf-8', flag: 'r'});
// // //console.log(buf_data.toString());
// // //console.log(buf_data);

// // //<Buffer 48 65 79 20 48 65 79 20 56 69 6b 72 61 6e 74 48 65 79 20 48 65 79 20 48 65 79 20 48 65 79> 

// // fs.readFile("read.txt","UTF-8",(err,data)=>{
// //     console.log(data);
// // });
// // console.log("Heyyy");

// // const os = require("os");
// // console.log(`${os.freemem()/1024/1024/1024}`);

// // const path = require("path");

// // console.log(path.dirname());

// // const opt = require("./operator");
// // //const {add, sub} = require("./operator");

// // console.log(opt.add(5,545));
// // console.log(opt.sub(5,545));

 
// const chalk = require("chalk");
// const email = require("validator");


// // console.log(chalk.blue("Hello World"));
// // console.log(chalk.blue.inverse("Hello World"));
// const checkemail = email.isEmail("abc@gmaol.com");

// console.log(checkemail ? chalk.green.inverse("Success") : chalk.red.inverse("Failed"));


//Server Creation
// const http = require("http");

// const server = http.createServer((req, res)=>{
//     //console.log(req.url);
//     if(req.url == "/"){
//         res.end("Other side//.. yres");
//     }else if(req.url == "/about"){
//         res.end("<h1>About Section </h1>");
//     }else{
//         res.writeHead(404, {"Content-type": "text/html"});
//         res.end("<h1> 404 Error </h1>")
//     }
    
// });

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("Listening to port 8000");
// });

//Informational Responses 100-199
//Successful Responses 200-299
//Redirects 300-399
//Client errors 400-499
//Server Errors 500-599

//const fs=require("fs");

//  const bioData = {
//      name: "Vikrant",
//      age: 22,
//      gender: "M",
//      Location: "Delhi"
//  }

//console.log(bioData.gender);

//const jsonData = JSON.stringify(bioData);

// fs.writeFile('Data.json',jsonData,(err)=>{
//     console.log("Done");
// });


// console.log(
//     jsonData.age
// );

//const bojData = JSON.parse(jsonData);

// fs.readFile("./Data.json","utf-8",(err,data)=>{
//    console.log(data); 
// });

// console.log(
//   bioData  
// );

// Stream with reload
// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on('request', (req, res)=>{
//     var fs = require("fs");
//     fs.readFile('./input.txt',(err,data) => {
//         if(err) return console.log(err);
//         res.end(data.toString());
//     });
// })

// server.listen(8000,"127.0.0.1");


// Streaming without reload

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{

    // const rstream = fs.createReadStream("./input.txt");

    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // })

    const rstream = fs.createReadStream("./input.txt");
    rstream.pipe(res);

})

server.listen(8000,"127.0.0.1");










