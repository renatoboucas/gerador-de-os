import React from "react";

export const UpdateRegister = () => {
  return (
    <div>
      <div>
        <form>
          <label for="nomecompleto"></label>
          <input
            type="text"
            id="nomecompleto"
            name="nomecompleto"
            placeholder="Nome Completo"
          ></input>
          <input
            type="checkbox"
            id="concluido"
            name="concluido"
            value="Concluído"
          ></input>
          <label for="concluido"> Concluído</label>
          <input
            type="checkbox"
            id="emandamento"
            name="emandamento"
            value="Em Andamento"
          ></input>
          <label for="emandamento"> Em Andamento</label>

          <h1>Aparelho</h1>
          <label for="nomeaparelho">Nome do Aparelho:</label>
          <input
            type="text"
            id="nomeaparelho"
            name="nomeaparelho"
            placeholder="Nome do Aparelho"
          ></input>
          <label for="imei">IMEI:</label>
          <input type="number" id="imei" name="imei" placeholder="IMEI"></input>
          <label for="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            placeholder="Modelo"
          ></input>
          <label for="cor">Cor:</label>
          <input type="text" id="cor" name="cor" placeholder="Cor"></input>
          <label for="data">Data:</label>
          <input type="date" id="data" name="data" placeholder="Data"></input>

          <p>Defeito</p>
          <input type="text" />
          <p>Condiçoes</p>
          <input type="text" />
          <input type="submit" value="Atualizar"></input>
          <input type="submit" value="Excluir"></input>
        </form>
      </div>
    </div>
  );
};
