var AWS = require("aws-sdk");
let awsConfig = {
    region: "us-east-1",
    endpoint: "http://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: "AKIAVNUDI47BOW7CSGOU",
    secretAccessKey: "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",
  };
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "gerador-de-os-db",
        Key: {
            "id": "4329a76d-e6ed-49bd-9f2f-b1b25ac7d7ff"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}

remove();