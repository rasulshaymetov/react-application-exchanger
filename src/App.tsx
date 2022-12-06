import "./App.scss";
import "./index.css";
import Main from "./components/pages/Main";
import {Routes, Route} from 'react-router-dom'
import Exchaners from "./components/pages/Exchaners";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/exchangers" element ={<Exchaners/>}/>
      </Routes>
    </div>
  );
}

export default App;
