var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAZGJVKBIKLE6HJKFF", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "Testing",
        Key: {
            "users": "Vikrant Sharma"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("Testing::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("Testing::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();