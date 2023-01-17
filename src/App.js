import * as AWS from 'aws-sdk'
import {fetchData} from './AwsFunctions';
import { NewRegister } from './components/osregister/NewRegister';


function App() {

  const fetchDataFormDynamoDb = () => {
    fetchData('gerador-de-os-db')
  }

  const handleEnv = () => {
    console.log(process.env)
  } 

  return (
    <div className="App">
      <NewRegister/>
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}>Click here</button>
    </div>
  );
}

export default App;
