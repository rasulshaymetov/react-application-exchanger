import { useState, useContext, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import arrowLeft from "../../assets/arrrow-l.svg";
import arrowRight from "../../assets/arrow-r.svg";
import { useLocation } from "react-router-dom";
import filter from "../../assets/filter.svg";
import styles from "./Search.module.scss";
import AppContext from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import clear from "../../assets/clear.svg";
const Search: React.FC = () => {
  const [isValue, setIsValue] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);
  function resetSwitch() {
    setIsSwitch(false);
  }
  const [isDisabled, setIsDisabled] = useState(false)
  const dispatch = useDispatch();
  const {
    isFirstInputValue,
    setIsFirstInputValue,
    isSecondInputValue,
    isLastInputValue,
    setIsLastInputValue,
    setIsSecondInputValue,
    onChangeFirstInput,
    onChangeSecondInput,
    isFirstCard,
    isPopup,
  }: any = useContext(AppContext);
  function handleSwitch() {
    let firstValue = isFirstInputValue;
    let secondValue = isSecondInputValue;
    setIsLastInputValue(firstValue);
    setIsFirstInputValue(secondValue);
    setIsSwitch(!isSwitch);
    setTimeout(resetSwitch, 320);
  }

  const updateSearchValue = useCallback(
    debounce((str: any) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );
  // * Клик на дополнительные кнопки
  const [isClickedSearch, setIsClickedSearch] = useState("1");
  // * В зависимости от страницы, рендер дополнительных элементов
  const [isMainPage, setIsMainPage] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/react-application-exchanger") {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [location]);
 const [isNumberValue, setIsNumberValue] = useState('')
 function onChangeNumberValue(e:any){
    setIsNumberValue(e.target.value)
 }
  return (
    <div
      style={isMainPage ? { maxHeight: "107px" } : { maxHeight: "184px" }}
      className={`${styles.search} ${isPopup ? "bg-popup-block" : null}`}
    >
      <div className={styles.wrapper}>
        <div className={styles.flex}>
          <input
            type="text"
            value={isFirstInputValue}
            onChange={onChangeFirstInput}
            placeholder="Отдаю"
            aria-label="Search"
            className={`search-input ${
              isFirstCard === true ? null : "disabled"
            }`}
            disabled={ isFirstCard  ? false : true}
          />
          <button
            type="button"
            disabled={isSwitch || isPopup ? true : false }
            onClick={handleSwitch}
            style={{ position: "absolute" }}
            className={`search-switch ${isSwitch ? "rotate" : null} ${isPopup ? "bg-popup-block" : null}`}
          >
            <div>
              <img src={arrowLeft} alt="" />
              <img src={arrowRight} alt="" />
            </div>
          </button>
          <input
            type="text"
            value={isLastInputValue}
            onChange={onChangeSecondInput}
            placeholder="Получаю"
            aria-label="Search"
            className={`search-input ${
              isFirstCard === false ? null : "disabled"
            }`}
            disabled={isFirstCard === false ? false : true}
          />
        </div>
        {/* Дополнительные кнопки */}
        <div className={!isMainPage ? styles.additional_actions : "d-none"}>
          <div
            style={isMainPage ? { display: "none" } : { display: "flex" }}
            className={styles.checkbox}
          >
            <button
              onClick={() => setIsClickedSearch("1")}
              className={`${
                isClickedSearch === "1" ? "selected-action" : null
              }`}
            >
              Отдаю
            </button>
            <button
              onClick={() => setIsClickedSearch("2")}
              className={` ${
                isClickedSearch === "2" ? "selected-action" : null
              }`}
            >
              Получаю
            </button>
            <div
              className={`${
                isMainPage ? "additional_input-wrapper" : "d-none"
              }`}
            ></div>
          </div>
          <div className={styles.additional_input}>
            <input 
            value={isNumberValue}
            onChange={onChangeNumberValue}
            type="number" className={styles.additional_input} />
            <button onClick={() => setIsNumberValue('')}>
              <img src={clear} alt="Clear" />
            </button>
            <span>RUB</span>
          </div>
          <button className={styles.selectCity}>Выбрать город</button>
          <button className={styles.filter}>
            <img src={filter} alt="Filter" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
