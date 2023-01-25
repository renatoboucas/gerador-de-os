var AWS = require("aws-sdk");
let awsConfig = {
    region: "us-east-1",
    endpoint: "http://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: "AKIAVNUDI47BOW7CSGOU",
    secretAccessKey: "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",
  };
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "gerador-de-os-db",
        Key: { "id": "407722c6-b6e8-41ca-a62c-f4b9858ba82b" },
        UpdateExpression: "set nome = :n, numero = :num, email = :e, nomeaparelho = :nomeap, imei = :i, modelo = :m, cor = :c, defeito = :d, condicoes = :cond",
    ExpressionAttributeValues: {
      ":n": "Jessika Cabral",
      ":num": "4077018267",
      ":e": "jessikacabral@gmail.com",
      ":nomeap": "iPhone",
      ":i": "12456789876",
      ":m": "14 Pro Max",
      ":c": "Purple",
      ":d": "Bateria",
      ":cond": "Mint"
    },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success "+JSON.stringify(data) );
        }
    });
}

modify();