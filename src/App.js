<<<<<<< HEAD
import {fetchData} from './AwsFunctions';
import { UpdateRegister } from './components/osregister/UpdateRegister';
import { NewRegister } from './components/osregister/NewRegister';
=======
import { Box2 } from "./components/box/Box2";
import { Home } from "./components/home/home";
import { LoginTecnico } from "./components/loginTecnico/loginTecnico";
import { Register } from "./components/osregister/Register";
import { UpdateRegister } from "./components/osregister/UpdateRegister";
import '../src/components/style.css'
import Header from "./components/Header";


>>>>>>> 95e4b73c32b6afd52c255570c925f9591befcd35

function App() {

  const fetchDataFormDynamoDb = () => {
    fetchData('gerador-de-os-db')
  }


  const handleEnv = () => {
    console.log(process.env.REACT_APP_SECRET_ACCESS_KEY)
  } 

  return (
    <div className="App">
<<<<<<< HEAD
      <NewRegister/>
      {/* <UpdateRegister/> */}
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}> ENV </button>
=======
      <Header/>
      <div className="justify-app">
        <Box2 name="Renato Bouças"
        device="iPhone 13 pro max 256gb" 
        deviceStatus="Defeito/Condições"
        status="Em andamento"
        description="Aparelho com display queimado e bateria inchada, o som não pega"/>
        <Box2 name="Renato Bouças"
        device="iPhone 13 pro max 256gb" 
        deviceStatus="Laudo Técnico"
        status="Concluido"
        description="Foi trocado a bateria e o display do aparelho, ainda apresenta falha no audio."/>
      </div>
>>>>>>> 95e4b73c32b6afd52c255570c925f9591befcd35
    </div>
  );
}

export default App;
