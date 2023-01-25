import React from "react";
import { Box1 } from "../box/Box1";
import Header from "../Header";
import '../style.css'

export const LoginTecnico = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>Conserta Cel</h1>
        <Box1 titulo="Login Tecnico" />
      </div>
    </div>
  );
};