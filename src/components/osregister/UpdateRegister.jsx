import { React, useState, useEffect } from 'react'
import AWS from 'aws-sdk/global';
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { db } from '../../AwsFunctions'

export const UpdateRegister = () => {

  //cria o state e os valores iniciais dos dados no banco
  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    email: "",
    nomeaparelho: "",
    imei: "",
    modelo: "",
    cor: "",
    data: "",
    defeito: "",
    condicoes: "",
  });

  // Pega os dados usando o AWS SDK e atualizada o state no formData
  const fetchData = async () => {
    
    const db = new DynamoDB.DocumentClient();
    // Define o nome da tabela e chave primária para os itens que queremos fetch
    const params = {
      TableName: 'gerador-de-os-db',
      Key: { 'id': '29e9e1cd-8ec6-4a9e-b803-7deee5b2d499' },
    };

    try {
      const data = await db.get(params).promise();
      setFormData(data.Item);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {

    //Atualiza o item no DynamoDB usando o AWS SDK
    var params = {
      TableName: "gerador-de-os-db",
      Key: { "id": "29e9e1cd-8ec6-4a9e-b803-7deee5b2d499" },
      UpdateExpression: "set nome = :n, numero = :num, email = :e, nomeaparelho = :nomeap, imei = :i, modelo = :m, cor = :c, defeito = :d, condicoes = :cond",
  ExpressionAttributeValues: {
    ":n": formData.nome,
    ":num": formData.numero,
    ":e": formData.email,
    ":nomeap": formData.nomeaparelho,
    ":i": formData.imei,
    ":m": formData.modelo,
    ":c": formData.cor,
    ":d": formData.defeito,
    ":cond": formData.condicoes
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


const handleDelete = async (tableName, key) => {
  const db = new AWS.DynamoDB.DocumentClient();
   // Constroi os parametros para a operação de delete
  const params = {
    TableName: 'gerador-de-os-db',
    Key: { "id": '29e9e1cd-8ec6-4a9e-b803-7deee5b2d499' }

  };

  try {
    // Executa a operação de delete
    await db.delete(params).promise();
    console.log(`Successfully deleted item with key: ${JSON.stringify(key)}`);
  } catch (err) {
    console.error(`Error deleting item with key: ${JSON.stringify(key)}. Error: ${err}`);
  }
};

  return (
    <div>
      <div>
        <form onSubmit={() => handleSubmit()}>
          <label htmlFor="nome"></label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={handleChange}
          ></input>
          <input
            type="checkbox"
            id="concluido"
            name="concluido"
            value={formData.concluido}
            onChange={handleChange}
          ></input>
          <label htmlFor="concluido"> Concluído</label>
          <input
            type="checkbox"
            id="emandamento"
            name="Em andamento"
            value={formData.emandamento}
            onChange={handleChange}
          ></input>
          <label htmlFor="emandamento"> Em Andamento</label>

          <h1>Aparelho</h1>
          <label htmlFor="nomeaparelho">Nome do Aparelho:</label>
          <input
            type="text"
            id="nomeaparelho"
            name="nomeaparelho"
            placeholder="Nome do Aparelho"
            value={formData.nomeaparelho}
            onChange={handleChange}
          ></input>
          <label htmlFor="imei">IMEI:</label>
          <input type="number" id="imei" name="imei" placeholder="IMEI"
          value={formData.imei}
          onChange={handleChange}
          ></input>
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder="Modelo"
            value={formData.modelo}
            onChange={handleChange}
          ></input>
          <label htmlFor="cor">Cor:</label>
          <input type="text" id="cor" name="cor" placeholder="Cor" value={formData.cor}
            onChange={handleChange}></input>
        
          <p>Defeito</p>
          <input type="text" id="defeito" name="defeito" value={formData.defeito}
            onChange={handleChange} />
          <p>Condiçoes</p>
          <input type="text" id="condicoes" name="condicoes" value={formData.condicoes}
            onChange={handleChange}/>
          <input type="submit" value="Atualizar" onClick={() => handleSubmit()}></input>
          <input type="submit" value="Excluir" onClick={() => handleDelete()}></input>
        </form>
      </div>
    </div>
  );
};
