import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import arrowLeft from "./assets/arrrow-l.svg";
import arrowRight from "./assets/arrow-r.svg";
function App() {
  const [isSwitch, setIsSwitch] = useState(false)
  function resetSwitch() {
    setIsSwitch(false)
  }
  function handleSwitch(){
    setIsSwitch(!isSwitch)
    setTimeout(resetSwitch, 320)
  }
  return (
    <div className="App">
      <Header />
      <div className="main__wrapper">
        <div className="main__container">
          <Aside />
          <div className="search">
            <div className="search__wrapper">
              <input
                type="text"
                placeholder="Отдаю"
                className="search-input"
                aria-label="Search"
              />
              <button type="button" disabled={(isSwitch ? true : false)} onClick={handleSwitch} className={`search-switch ${isSwitch ? 'rotate' : null}`}>
                <div>
                  <img src={arrowLeft} alt="" />
                  <img src={arrowRight} alt="" />
                </div>
              </button>
              <input
                type="text"
                placeholder="Получаю"
                aria-label="Search"
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
