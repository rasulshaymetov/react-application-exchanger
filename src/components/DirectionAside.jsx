import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import arrow from "../assets/sort.svg";
const DirectionAside = () => {
  const { selectedCards } = useSelector((state) => state.select);
  const array = [{
    give: 'Тинькофф (USD)',
    get: 'Bitcoin (BTC)'
  },
  {
    give: '  Альфа Банк (USD)',
    get: 'Райффайзен банк (RUB) '
  },
  {
    give: 'Dogecoin (DOGE)',
    get: 'Открытие (RUB)'
  }
  ]
  const [isMutatedArray, setIsMutatedArray] = useState([{}])
  const arr = []
  useEffect(() => {
    for (let i = 0; i < selectedCards.length; i++) {
      arr.push(selectedCards[i] + " " + selectedCards[i + 1])
      console.log(selectedCards[i + 1])
    }
  }, [])


  const [isClickedNav, setIsClickedNav] = useState(0);
  const [isHide, setIsHide] = useState(false);
  return (
    <div className="aside">
      <div className="aside__container">
        <div
          style={isHide ? { maxHeight: "120rem" } : { maxHeight: "376rem" }}
          className={`aside__wrapper `}
        >
          <div className="aside__block">
            {array.map(function (item, index) {
              return (
                <ul>
                  <div
                    className={`${isClickedNav === index ? "active-list" : null
                      }`}
                    onClick={() => setIsClickedNav(index)}
                  >
                    <li>{item.give} <span> → </span> <br /> {item.get}</li>
                  </div>
                </ul>
              );
            })}
            <li className="clear">Очистить историю поиска</li>
          </div>
        </div>
        <button
          onClick={() => setIsHide((prev) => !prev)}
          className={`hide-button ${isHide ? "" : ""}`}
        >
          <img src={arrow} alt="Hide button" />
        </button>
      </div>
    </div>
  );
};

export default DirectionAside;
