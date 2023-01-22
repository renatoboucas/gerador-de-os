import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
});

const db = new AWS.DynamoDB.DocumentClient();

export const fetchData = (tableName) => {
  var params = {
    TableName: tableName,
    Items: {
      id: String,
      nome: String,
      numero: Number,
      email: String,
      nomeaparelho: String,
      imei: Number,
      modelo: String,
      cor: String,
      data: Date,
      defeito: String,
      condicoes: String,
    },
  };

  db.scan(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

export const putData = (
  tableName,
  nome,
  numero,
  email,
  nomeaparelho,
  imei,
  modelo,
  cor,
  data,
  defeito,
  condicoes
) => {
  var params = {
    TableName: tableName,
    Item: {
      id: uuidv4(),
      nome,
      numero,
      email,
      nomeaparelho,
      imei,
      modelo,
      cor,
      data,
      defeito,
      condicoes,
    },
  };

  db.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

let modify = function () {

    
  var params = {
      TableName: "gerador-de-os-db",
      Key: { "id": "example-1@gmail.com" },
      UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
      ExpressionAttributeValues: {
          ":byUser": "updateUser",
          ":boolValue": true
      },
      ReturnValues: "UPDATED_NEW"

  };
  db.update(params, function (err, data) {

      if (err) {
          console.log("users::update::error - " + JSON.stringify(err, null, 2));
      } else {
          console.log("users::update::success "+JSON.stringify(data) );
      }
  });
}

let remove = function () {

  var params = {
      TableName: "gerador-de-os-db",
      Key: {
          "id": "4329a76d-e6ed-49bd-9f2f-b1b25ac7d7ff"
      }
  };
  db.delete(params, function (err, data) {

      if (err) {
          console.log("users::delete::error - " + JSON.stringify(err, null, 2));
      } else {
          console.log("users::delete::success");
      }
  });
}