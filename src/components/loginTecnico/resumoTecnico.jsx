import React from "react";
import { Box2 } from "../box/Box2";



export const ResumoTecnico = () => {
  return (
    <div>
      <div className="justify-app">
        <Box2 name="Renato Bouças"
          device="iPhone 13 pro max 256gb"
          deviceStatus="Defeito/Condições"
          status="Em andamento"
          description="Aparelho com display queimado e bateria inchada, o som não pega" />
        <Box2 name="Renato Bouças"
          device="iPhone 13 pro max 256gb"
          deviceStatus="Laudo Técnico"
          status="Concluido"
          description="Foi trocado a bateria e o display do aparelho, ainda apresenta falha no audio." />
      </div>
    </div>
  );
}

