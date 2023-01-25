import React from "react";
import '../style.css'
import { Link } from "react-router-dom";

export const Box2 = (props) => {
  return (
    <div>
      <div className="container">
        <div className="resumo">
          <div className="box1">
            <h2>Numero da O.S</h2>
            <div className="conteudo">
              <h2>Name</h2>
              <p>{props.name} </p>
            </div>
            <div className="conteudo">
              <h2>Name</h2>
              <p>{props.device} </p>
            </div>
            <div>
              <input type="checkbox" value="status" name={props.status} checked />
              <label htmlfor="em_andamento">{props.status}</label>

            </div>
            <div className="conteudo">
              <h1>{props.deviceStatus}</h1>
            </div>
            <textarea className="" id="" cols="35" rows="12">{props.description}</textarea>
            <div className="button">
              
              <Link to="/UpdateRegister"><input type="button" className="btn" value="Editar" /></Link>
              <Link to={"/"}><input type="button" className="btn" value="Voltar" /></Link>
             <input type="button" value="Finalizar" className="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};