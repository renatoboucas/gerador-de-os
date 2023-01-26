import React from "react";
import '../style.css'

export const Box1 = (props) => {
  return (
    <div>
      <div className="box">
        <h2>{props.titulo}</h2>
        <form>
          <label className="label-digite" htmlFor="os">{props.digite}</label>
          <input type="text" id="os" placeholder={props.placeholder} />
          <input type="submit" value="Consultar" />
        </form>
      </div>
    </div>
  );
};
