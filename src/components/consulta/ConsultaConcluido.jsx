import React from 'react'

export const ConsultaConcluido = () => {
  return (
    <div>
           <div>
        
        <h1>Número da OS</h1>
        <input type="text" id="name" name="name" value="name" disable/>
        <input type="text" id="mode" name="modelo" value="modelo" disable />
        <input
            type="checkbox"
            id="concluido"
            name="concluido"
            value="Concluído"
            checked
          ></input>
          <label for="concluido"> Concluído</label>
          <input
            type="checkbox"
            id="emandamento"
            name="emandamento"
            value="Em Andamento">
                
            </input>
            <label for="emandamento"> Em Andamento</label>
          
          <p>Defeito/Condições</p>
         
          <input type="text" value=""/>
          
          <button>Voltar</button>
       
      </div>
    </div>
  )
}
