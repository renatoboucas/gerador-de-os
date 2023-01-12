import React from "react";
import Header from "../Header.jsx";

export const Register = () => {
  return (
    <div>
      <Header/>
      <div>
        <form>
          <h1>Cadastro Cliente</h1>
          <label for="nomecompleto">Nome Completo:</label>
          <input type="text" id="nomecompleto" name="nomecompleto" placeholder="Nome Completo"></input>
          <label for="numero">Telefone:</label>
          <input type="number" id="numero" name="numero" placeholder="Telefone"></input>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Email"/>

          <h1>Cadastro Aparelho</h1>
          <label for="nomeaparelho">Nome do Aparelho:</label>
          <input type="text" id="nomeaparelho" name="nomeaparelho" placeholder="Nome do Aparelho"></input>
          <label for="imei">IMEI:</label>
          <input type="number" id="imei" name="imei" placeholder="IMEI"></input>
          <label for="modelo">Modelo:</label>
          <input type="text" id="modelo" name="modelo" placeholder="Modelo"></input>
          <label for="cor">Cor:</label>
          <input type="text" id="cor" name="cor" placeholder="Cor"></input>
          <label for="data">Data:</label>
          <input type="date" id="data" name="data" placeholder="Data"></input>

          <p>Defeito</p>
          <input type="text" />
          <p>Condiçoes</p>
          <input type="text" />
          <input type="submit" value="Cadastrar"></input>
        </form>
      </div>
    </div>
  );
};
