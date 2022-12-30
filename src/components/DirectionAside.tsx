import React, { useState } from "react";
import { useSelector } from "react-redux";
import arrow from "../assets/sort.svg";
const DirectionAside = () => {
  const { selectedCards } = useSelector((state: any) => state.array);
  const [isClickedNav, setIsClickedNav] = useState("1");
  const [isHide, setIsHide] = useState(false)
  return (
    <div className="aside">
      <div className="aside__container">
      <div className={`aside__wrapper ${isHide ? 'aside-hidden' : null}`}>
        <div className="aside__block">
          <ul>
            <div
              className={`${isClickedNav === "1" ? "active-list" : null}`}
              onClick={() => setIsClickedNav("1")}
            >
              <li>
                Тинькофф (USD) → <br /> Bitcoin (BTC){" "}
              </li>
            </div>
            <div
              className={`${isClickedNav === "2" ? "active-list" : null}`}
              onClick={() => setIsClickedNav("2")}
            >
              <li>
                Тинькофф (USD) → <br /> Bitcoin (BTC){" "}
              </li>
            </div>
            <div
              className={`${isClickedNav === "3" ? "active-list" : null}`}
              onClick={() => setIsClickedNav("3")}
            >
              <li>
                Тинькофф (USD) →<br /> Bitcoin (BTC){" "}
              </li>
            </div>
            <div
              className={`${isClickedNav === "4" ? "active-list" : null}`}
              onClick={() => setIsClickedNav("4")}
            >
              <li>
                Тинькофф (USD) → <br /> Bitcoin (BTC){" "}
              </li>
            </div>
            <li className="clear">Очистить историю поиска</li>
          </ul>
        </div>
     
      </div>
      <button onClick={() => setIsHide(prev => !prev) } className={`hide-button ${isHide ? '' : ''}`}>
        <img src={arrow} alt="Hide button"/>
      </button>
      </div>
    </div>
  );
};

export default DirectionAside;
