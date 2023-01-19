
import {fetchData} from './AwsFunctions';
import { NewRegister } from './components/osregister/NewRegister';

function App() {

  const fetchDataFormDynamoDb = () => {
    fetchData('gerador-de-os-db')
  }



  const handleEnv = () => {
    console.log(process.env.REACT_APP_SECRET_ACCESS_KEY)
  } 

  return (
    <div className="App">
      <NewRegister/>
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}> ENV </button>
    </div>
  );
}

export default App;
