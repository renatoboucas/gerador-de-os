import React, { useState } from "react";
import { putData } from "../../AwsFunctions";

export const NewRegister = () => {
  const [formData, setFormData] = useState({
    nomecompleto: "",
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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (tableName, data) => {
    putData(
      "gerador-de-os-db",
      formData.nomecompleto,
      formData.numero,
      formData.email,
      formData.nomeaparelho,
      formData.imei,
      formData.modelo,
      formData.cor,
      formData.data,
      formData.defeito,
      formData.condicoes
    );
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastro Cliente</h1>
          <label htmlFor="nomecompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomecompleto"
            name="nomecompleto"
            placeholder="Nome Completo"
            value={formData.nomecompleto}
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
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            placeholder="Data"
            value={formData.data}
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
            onClick={() => handleSubmit()}
            value="Cadastrar"
          />
        </form>
      </div>
    </div>
  );
};