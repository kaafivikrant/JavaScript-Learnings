import fs from "fs";

var dir = './Basics/TestingByMkdir';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}