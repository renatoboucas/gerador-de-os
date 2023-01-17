import { Outlet } from "react-router-dom"
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
