<<<<<<< HEAD
import { UpdateRegister } from "./components/osregister/UpdateRegister";

=======
import {fetchData} from './AwsFunctions';
import { UpdateRegister } from './components/osregister/UpdateRegister';
import { NewRegister } from './components/osregister/NewRegister';
>>>>>>> alpha-1


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
=======

      <NewRegister/>
      {/* <UpdateRegister/> */}
      <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
      <button onClick={() => handleEnv()}> ENV </button>

>>>>>>> alpha-1
    </div>
  );
}

export default App;
