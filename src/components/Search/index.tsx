import React, { useState } from 'react'
import arrowLeft from "../../assets/arrrow-l.svg";
import arrowRight from "../../assets/arrow-r.svg";
import styles from "./Search.module.scss"
const Search = () => {
  const [isSwitch, setIsSwitch] = useState(false)
  function resetSwitch() {
    setIsSwitch(false)
  }
  function handleSwitch() {
    setIsSwitch(!isSwitch)
    setTimeout(resetSwitch, 320)
  }
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
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
  )
}

export default Search