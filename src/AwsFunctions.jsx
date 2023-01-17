import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
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
