#!/usr/bin/env node
// File Storage 100mb (104857600 bytes) from terminal

var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');

var form = new FormData();
form.append('file', fs.createReadStream('/CLI-Apps/newfile.txt'));

var date = new Date();
var dateString = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + (date.getDate()+1) + 'T' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();

form.append('expires', dateString)
form.append('maxDownloads',1);
form.append('autoDelete', true);

axios({
    method: 'post',
    url: 'https://file.io/',
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
})
.then(function (response) {
   console.log("Congratulations!!"); 
   console.log(response.data.link);
})
.catch(function (error) {
    console.log(error);
});
