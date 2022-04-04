const axios = require('axios');

function getTodo() {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
}

getTodo().then(response => {
    return response.data;
});

module.exports = getTodo;