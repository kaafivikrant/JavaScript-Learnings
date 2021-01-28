

// function my() {
//     var x = document.getElementById("tt").value;
//     document.getElementById("demo").innerHTML = x;
// }

try {
    var GenderApi = require('gender-api.com-client');

    var genderApiClient = new GenderApi.Client('GoWXtENFNyaNcVyDxV');

    genderApiClient.getByFirstName('Vikrant', function (response) {
        console.log(response.gender); //female
        //console.log(response.accuracy); //98
    });

}
catch(e) {
    console.log('Error:', e);
}