import React from "react";
import './style.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/logintecnico"}>Login Tec</Link>
            </li>
            <li>
              <Link to={"/resumotecnico"}>Resumo tec</Link>
            </li>
            <li>
              <Link to={"/UpdateRegister"}>UpdateRegister</Link></li>
          </ul>
    </div>
  );
};

export default Header