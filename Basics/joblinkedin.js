const readline = require("readline-sync");

var name = readline.question("name:-  ");
var startup = readline.question("startup:-  ");
var domain = readline.question("domain:-  ");

var final = `Hey ${name},
I recently came across ${startup}, and found it a very fascinating product for ${domain}, with just ${people} the ${startup} is making such a huge impact.
I am currently working at Buyceps India on the backend with Python and Django to build multi-tenant architecture.
I am planning to make a switch to a high-impact working environment as ${startup}.
I have working experience with C++, Javascript, and Python.
I believe I will be a great fit for ${startup} and would love to chat with you for a few minutes. 
You can checkout my projects:
https://github.com/kaafivikrant
https://bit.ly/VikrantRe
https://www.linkedin.com/in/kaafivikrant/
Let me know which time works for you.

Thanks,
Vikrant Sharma
`

console.log(final);