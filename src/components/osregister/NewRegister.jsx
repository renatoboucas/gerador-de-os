import React, { useState, useEffect, useCallback } from "react";
import { db } from "../../AwsFunctions";

export const NewRegister = () => {
  // Cria o state e os valores iniciais para os dados no banco de dados
  const [formData, setFormData] = useState({
    nome: "",
    numero: "",
    email: "",
    nomeaparelho: "",
    imei: "",
    modelo: "",
    cor: "",
    data: getCurrentDate(),
    defeito: "",
    condicoes: "",
    id: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event, tableName) => {
    event.preventDefault();
    setSubmitted(true);
    const retrieveData = async () => {
      // Utiliza o método scan para buscar o ultimo item na tabela
      const result = await db.scan({ TableName: tableName }).promise();
      const maxId = result.Items.reduce((max, item) => {
        return parseInt(item.id) > max ? parseInt(item.id) : max;
      }, 0);
      const newId = (maxId + 1).toString();
      setFormData({ ...formData, id: newId });

      // Utiliza o metodo put para adicionar novos items na tabela
      const params = {
        TableName: tableName,
        Item: {
          ...formData,
          id: newId,
        },
      };
      try {
        await db.put(params).promise();
        console.log(`Successfully added item with id ${newId} to table`);
        setFormData({
          nome: "",
          numero: "",
          email: "",
          nomeaparelho: "",
          imei: "",
          modelo: "",
          cor: "",
          data: getCurrentDate(),
          defeito: "",
          condicoes: "",
          id: "",
        });
        setSubmitted(false);
      } catch (err) {
        console.log("Error adding item to table: ", err);
      }
    };
    retrieveData();
  };

  useEffect(() => {
    if (!submitted) {
      return;
    }
  }, [submitted, formData]);

  // Pega o dado atual de acordo com os dados do sistema
  function getCurrentDate() {
    var currentDate = new Date();
    return currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Lida com as alterações de entrada do formulario
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e, "gerador-de-os-db")}>
          <h1>Cadastro Cliente</h1>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={handleChange}
          ></input>
          <label htmlFor="numero">Telefone:</label>
          <input
            type="number"
            id="numero"
            name="numero"
            placeholder="Telefone"
            value={formData.numero}
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <h1>Cadastro Aparelho</h1>
          <label htmlFor="nomeaparelho">Nome do Aparelho:</label>
          <input
            type="text"
            id="nomeaparelho"
            name="nomeaparelho"
            placeholder="Nome do Aparelho"
            value={formData.nomeaparelho}
            onChange={handleChange}
          />
          <label htmlFor="imei">IMEI</label>
          <input
            type="text"
            id="imei"
            name="imei"
            placeholder="IMEI"
            value={formData.imei}
            onChange={handleChange}
          />
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder="Modelo"
            value={formData.modelo}
            onChange={handleChange}
          />
          <label htmlFor="cor">Cor</label>
          <input
            type="text"
            id="cor"
            name="cor"
            placeholder="Cor"
            value={formData.cor}
            onChange={handleChange}
          />

          <h1>Defeito</h1>
          <input
            type="text"
            id="defeito"
            name="defeito"
            placeholder="Descreva o defeito"
            value={formData.defeito}
            onChange={handleChange}
          />
          <h1>Condições</h1>
          <input
            type="text"
            id="condicoes"
            name="condicoes"
            placeholder="Descreva as condições"
            value={formData.condicoes}
            onChange={handleChange}
          />
          <input
            type="button"
            onClick={(e) => handleSubmit(e, "gerador-de-os-db")}
            value="Cadastrar"
          />
        </form>
      </div>
    </div>
  );
};
