import * as AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
});

export const db = new AWS.DynamoDB.DocumentClient();

export const fetchData = (tableName) => {
  var params = {
    TableName: tableName,
    Items: {
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
      id: String,
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

export const handleUpdate = (formData, db) => {
  //Atualiza o item no DynamoDB usando o AWS SDK
  var params = {
    TableName: "gerador-de-os-db",
    Key: { id: "29e9e1cd-8ec6-4a9e-b803-7deee5b2d499" },
    UpdateExpression:
      "set nome = :n, numero = :num, email = :e, nomeaparelho = :nomeap, imei = :i, modelo = :m, cor = :c, defeito = :d, condicoes = :cond",
    ExpressionAttributeValues: {
      ":n": formData.nome,
      ":num": formData.numero,
      ":e": formData.email,
      ":nomeap": formData.nomeaparelho,
      ":i": formData.imei,
      ":m": formData.modelo,
      ":c": formData.cor,
      ":d": formData.defeito,
      ":cond": formData.condicoes,
    },
    ReturnValues: "UPDATED_NEW",
  };
  db.update(params, function (err, data) {
    if (err) {
      console.log("users::update::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::update::success " + JSON.stringify(data));
    }
  });
};

export const handleDelete = async (tableName, key) => {
  // Constroi os parametros para a operação de delete
  const params = {
    TableName: "gerador-de-os-db",
    Key: { id: "29e9e1cd-8ec6-4a9e-b803-7deee5b2d499" },
  };

  try {
    // Executa a operação de delete
    await db.delete(params).promise();
    console.log(`Successfully deleted item with key: ${JSON.stringify(key)}`);
  } catch (err) {
    console.error(
      `Error deleting item with key: ${JSON.stringify(key)}. Error: ${err}`
    );
  }
};
