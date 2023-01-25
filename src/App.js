import {fetchData} from './AwsFunctions';
import { UpdateRegister } from './components/osregister/UpdateRegister';
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
      {/* <UpdateRegister/> */}
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}> ENV </button>
    </div>
  );
}

export default App;
