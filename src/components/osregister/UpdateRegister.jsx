import { react, useState, useEffect } from 'react'
import { putData } from "../../AwsFunctions";
import AWS from 'aws-sdk';


export const UpdateRegister = () => {

  

  // Inicia o AWS SDK e configura as suas credenciais
  AWS.config.update({
    region: "us-east-1",
    endpoint: "http://dynamodb.us-east-1.amazonaws.com",
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  });

  //cria o state e os valores iniciais dos dados no banco
  const [formData, setFormData] = useState({
    nomecompleto: "",
    numero: "",
    email: "",
    nomeaparelho: "",
    imei: "",
    modelo: "",
    cor: "",
    defeito: "",
    condicoes: "",
  });

  // Pega os dados usando o AWS SDK e atualizada o state no formData
  const fetchData = async () => {
    
    const db = new AWS.DynamoDB.DocumentClient();
    // Define o nome da tabela e chave primária para os itens que queremos fetch
    const params = {
      TableName: 'gerador-de-os-db',
      Key: { 'id': 'df3a1289-93b5-4920-9bde-ec184153e406' },
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const { nome, numero, email, nomeaparelho, imei, modelo, cor, defeito, condicoes } = formData;

        // cria um objeto que representa o item que voce quer atualizar
        const item = {
            nome,
            numero,
            email,
            nomeaparelho,
            imei,
            modelo,
            cor,
            defeito,
            condicoes
        };

        // atualiza o item no DynamoDB usando o AWS SDK
        await AWS.DynamoDB.update({
            TableName: "gerador-de-os-db",
            Key: {
                "id": { S: 'df3a1289-93b5-4920-9bde-ec184153e406' }
            },
            UpdateExpression: "set nome=:nome, numero=:num, email=:email, nomeaparelho=:nomeaparelho, imei=:imei, modelo=:modelo, cor=:cor, data=:data, defeito=:defeito, condicoes=:cond",
            ExpressionAttributeValues: {
              ":nome": { S: nome},
                ":num": { N: numero },
                ":email": { S: email },
                ":nomeaparelho": { S: nomeaparelho },
                ":imei": { S: imei },
                ":modelo": { S: modelo },
                ":cor": { S: cor },
                ":defeito": { S: defeito },
                ":cond": { S: condicoes }
            },
            ReturnValues: "UPDATED_NEW"
        }).promise();

        // atualiza o estado para refletir nas alteracoes
        setFormData({
            nome: "",
            numero: "",
            email: "",
            nomeaparelho: "",
            imei: "",
            modelo: "",
            cor: "",
            data: "",
            defeito: "",
            condicoes: ""
        });

        // mostra uma mensagem ao usuário indicanto que o item foi atualizado com sucesso
        alert("Item updated successfully!");
    } catch (err) {
        console.log(err);
        alert("There was an error updating the item. Please try again.");
    }
};


const handleDelete = async (tableName, key) => {
  const db = new AWS.DynamoDB.DocumentClient();
   // Build the parameters for the delete operation
  const params = {
    TableName: 'gerador-de-os-db',
    Key: 'df3a1289-93b5-4920-9bde-ec184153e406'
  };

  try {
    // Execute the delete operation
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
            name="Concluído"
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
