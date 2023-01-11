import "./App.scss";
import "./index.css";
import Main from "./components/pages/Main";
import {Routes, Route} from 'react-router-dom'
import Direction from "./components/pages/Direction";
import Exchangers from "./components/pages/Exchangers";
import Exchanger from "./components/Exchanger";
function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path="/react-application-exchanger/" element={<Main/>} />
        <Route path="/react-application-exchanger/direction" element ={<Direction/>}/>
        <Route path="/react-application-exchanger/exchangers" element={<Exchangers/>}/>
        <Route path="/react-application-exchanger/exchangers/exchanger" element={<Exchanger/>} />
      </Routes>
    </div>
  );
}

export default App;
