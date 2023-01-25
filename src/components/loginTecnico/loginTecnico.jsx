import React from "react";
import { Box1 } from "../box/Box1";
import Header from "../Header";
import '../style.css'
import { Link } from "react-router-dom";

export const LoginTecnico = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Conserta Cel</h1>
        <Box1 titulo="Login Tecnico"
        placeholder="Digite o login"
        digite="Digite o Login" />
        <Link to={"/"}><input type="button"id="tecnico"value="Sou Cliente" /></Link>
      </div>
    </div>
  );
};