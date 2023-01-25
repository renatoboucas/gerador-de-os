import React from "react";
import Header from "../Header";
import '../style.css'

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
              <input type="checkbox" value="status" name={props.status} checked/>
              <label for="em_andamento">{props.status}</label>

            </div>
            <div class="conteudo">
              <h1>{props.deviceStatus}</h1>
            </div>
            <textarea nameName="" id="" cols="35" rows="12">{props.description}</textarea>
            <div class="button">
              <a href=""><button>Editar</button></a>
              <a href="./index.html"><button>Voltar</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};