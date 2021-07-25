var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAZGJVKBIKLE6HJKFF", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "users": "gjhg", 
        "work": "backend"
    };
    var params = {
        TableName: "Testing",
        Item: input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("Testing::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("Testing::save::success" );                      
        }
    });
}

save();