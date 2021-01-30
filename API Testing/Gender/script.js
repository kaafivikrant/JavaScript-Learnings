

// function my() {
//     var x = document.getElementById("tt").value;
//     document.getElementById("demo").innerHTML = x;
// }

const fetch = require("node-fetch");
var readline = require('readline-sync');

const name = readline.question("What is your name? ");


let url = `https://api.genderize.io/?name=${name}`;

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log(`Are you a? `+out.gender);
  const haha = readline.question("Say ? ");
  if(haha == "yes"){
    console.log("I know that.. :-p");
  }
})
.catch(err => { throw err });
