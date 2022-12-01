import { useState, useContext } from 'react'
import arrowLeft from "../../assets/arrrow-l.svg";
import arrowRight from "../../assets/arrow-r.svg";
import styles from "./Search.module.scss"
import AppContext from '../../context';

const Search = () => {
  const [isSwitch, setIsSwitch] = useState(false)
  function resetSwitch() {
    setIsSwitch(false)
   
  }
  const {isFirstInputValue, setIsFirstInputValue, isSecondInputValue, setIsSecondInputValue}:any= useContext(AppContext)
  function handleSwitch() {
    let firstValue = isFirstInputValue
    let secondValue = isSecondInputValue
    setIsSecondInputValue(firstValue)
    setIsFirstInputValue(secondValue)
    setIsSwitch(!isSwitch)
    setTimeout(resetSwitch, 320)
  }
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <input
          type="text"
          value={isFirstInputValue}
          onChange={(e) => setIsFirstInputValue(e.target.value)}
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
          value={isSecondInputValue}
          onChange={(e) => setIsSecondInputValue(e.target.value)}
          placeholder="Получаю"
          aria-label="Search"
          className="search-input"
        />
      </div>
    </div>
  )
}

export default Search