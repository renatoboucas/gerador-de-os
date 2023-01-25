import {fetchData} from './AwsFunctions';
import { UpdateRegister } from './components/osregister/UpdateRegister';
import { NewRegister } from './components/osregister/NewRegister';



function App() {


  return (
    <div className="App">
      <NewRegister/>
      {/* <UpdateRegister/> */}
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}> ENV </button>
    </div>
  );
}

export default App;
