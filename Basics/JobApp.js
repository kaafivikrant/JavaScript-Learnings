const readline = require("readline-sync");

const HRName = readline.question("Name:-  ");
const JobTitle = readline.question("Job Title:-  ");
const Company = readline.question("Company:-  ");


let Content = `Hi ${HRName},
I want to introduce myself as a potential candidate for ${JobTitle} at ${Company}. I have attached my resume to this email and I ask you to review it at your earliest convenience.

I am currently doing an internship at PlexusMD as a software development intern and working on Node.js and React with MySQL heavily.
I have done an internship at Skoda Auto India as a SDE-Intern and worked with C++.
I have little experience in computer architecture and system design.
My current CGPA is 8.2.

https://github.com/kaafivikrant 
https://linkedin.com/in/kaafivikrant 

If yes, then please let me know.
You can contact me at +918950523279`;

console.log(Content);

