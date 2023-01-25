import React from "react";
import { Box1 } from "../box/Box1";
import Header from "../Header";
import '../style.css'
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <h1>Conserta Cel</h1>
      <div className="form">
        <Box1 titulo="O.S para consulta" 
        placeholder="digite o numero da O.S"
        digite="Digite o numero da O.S"/>
      </div>
      <Link to={"/register"}><button className="cadastrar">Cadastrar nova O.S</button></Link><br/>
      <Link to={"/logintecnico"}><input type="button"id="tecnico"value="Sou tecnico" /></Link>
    </div>
  );
};