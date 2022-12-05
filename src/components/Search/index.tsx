import { useState, useContext, useCallback } from "react";
import debounce from "lodash.debounce";
import arrowLeft from "../../assets/arrrow-l.svg";
import arrowRight from "../../assets/arrow-r.svg";
import styles from "./Search.module.scss";
import AppContext from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
const Search:React.FC = () => {
  const [isValue, setIsValue] = useState('')
  const [isSwitch, setIsSwitch] = useState(false);
  function resetSwitch() {
    setIsSwitch(false);
  }
  const dispatch = useDispatch()
  const {
    isFirstInputValue,
    setIsFirstInputValue,
    isSecondInputValue,
    setIsSecondInputValue,
    onChangeFirstInput,
    isFirstCard
  }: any = useContext(AppContext);
  function handleSwitch() {
    let firstValue = isFirstInputValue;
    let secondValue = isSecondInputValue;
    setIsSecondInputValue(firstValue);
    setIsFirstInputValue(secondValue);
    setIsSwitch(!isSwitch);
    setTimeout(resetSwitch, 320);
  }

  const updateSearchValue = useCallback(
    debounce((str:any) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );
  
  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <input
          type="text"
          value={isFirstInputValue}
          onChange={onChangeFirstInput}
          placeholder="Отдаю"
       
          className="search-input"
          aria-label="Search"
        />
        <button
          type="button"
          disabled={isSwitch ? true : false}
          onClick={handleSwitch}
          className={`search-switch ${isSwitch ? "rotate" : null}`}
        >
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
          className={`search-input ${isFirstCard === false ? null : "disabled"}`}
          disabled={isFirstCard === false ? false : true}
          
        />
      </div>
    </div>
  );
};

export default Search;
