import React from "react";
import '../style.css'

export const Box1 = (props) => {
  return (
    <div>
      <div className="box">
        <h2>{props.titulo}</h2>
        <form>
          <label class="label-digite" for="os">Digite o numero da os:</label>
          <input type="text" id="os" placeholder="Numero da O.S" />
          <div className="inputs">
            <input type="radio" value="cliente" name="consulta" id="cliente" />
            <label for="" id="cliente">Cliente</label>
          </div>
          <div className="inputs">
            <input type="radio" value="tecnico" name="consulta" />
            <label for="" id="cliente">Técnico</label>
          </div>
          <a href="#"><button>Consultar</button></a>
        </form>
      </div>
    </div>
  );
};
