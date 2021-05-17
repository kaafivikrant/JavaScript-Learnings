var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAZGJVKBIKGWKQYJBD", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "Testing",
        Key: {
            "users": "Sneha"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("Testing::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("Testing::delete::success");
        }
    });
}

remove();