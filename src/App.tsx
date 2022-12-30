import "./App.scss";
import "./index.css";
import Main from "./components/pages/Main";
import {Routes, Route} from 'react-router-dom'
import Direction from "./components/pages/Direction";
function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path="/react-application-exchanger/" element={<Main/>} />
        <Route path="/react-application-exchanger/direction" element ={<Direction/>}/>
      </Routes>
    </div>
  );
}

export default App;
