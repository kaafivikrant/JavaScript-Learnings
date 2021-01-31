const fetch = require("node-fetch");

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      var count=0;
      for(var key in data){
        count++;
        if(count <= 10){
            console.log(data[key].text+`\n`);
        }else{
            break;
        }
      }
  });