import { Box2 } from "./components/box/Box2";
import { Home } from "./components/home/home";
import { LoginTecnico } from "./components/loginTecnico/loginTecnico";
import { Register } from "./components/osregister/Register";
import { UpdateRegister } from "./components/osregister/UpdateRegister";
import '../src/components/style.css'
import Header from "./components/Header";



function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
