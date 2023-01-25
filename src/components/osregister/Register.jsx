import React from "react";
import Header from "../Header.jsx";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <Header />
      <div>
        <form>
          <h1>Cadastro Cliente</h1>
          <label Htmlfor="nomecompleto">Nome Completo:</label>
          <input type="text" id="nomecompleto" name="nomecompleto" placeholder="Nome Completo"></input>
          <label Htmlfor="numero">Telefone:</label>
          <input type="number" id="numero" name="numero" placeholder="Telefone"></input>
          <label Htmlfor="email">Email:</label>
          <input type="text" id="email" name="email" placeholder="Email" />

          <h1>Cadastro Aparelho</h1>
          <label Htmlfor="nomeaparelho">Nome do Aparelho:</label>
          <input type="text" id="nomeaparelho" name="nomeaparelho" placeholder="Nome do Aparelho"></input>
          <label Htmlfor="imei">IMEI:</label>
          <input type="number" id="imei" name="imei" placeholder="IMEI"></input>
          <label Htmlfor="modelo">Modelo:</label>
          <input type="text" id="modelo" name="modelo" placeholder="Modelo"></input>
          <label Htmlfor="cor">Cor:</label>
          <input type="text" id="cor" name="cor" placeholder="Cor"></input>
          <label Htmlfor="data">Data:</label>
          <input type="date" id="data" name="data" placeholder="Data"></input>

          <p>Defeito</p>
          <input type="text" />
          <p>Condiçoes</p>
          <input type="text" />
          <input type="submit" value="Cadastrar"></input>
          <Link to={'/'}><input type="button" id="tecnico"value="Voltar" /></Link>
        </form>
      </div>
    </div>
  );
};
