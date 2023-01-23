var AWS = require("aws-sdk");

let awsConfig = {
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "AKIAVNUDI47BOW7CSGOU",
  secretAccessKey: "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",
};

AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
  var params = {
    TableName: "gerador-de-os-db",
    Key: {
      id: "407722c6-b6e8-41ca-a62c-f4b9858ba82b",
    },
  };

  docClient.get(params, function (err, data) {
    if (err) {
      console.log(
        "users::fetchOneByKey::error - " + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        "users::fetchOneByKey::success - " + JSON.stringify(data, null, 2)
      );
    }
  });
};

fetchOneByKey();
