import React from "react";
import filter from "../assets/filter.svg";
const ExchangersInput = () => {
  return (
    <div style={{ marginLeft: "40rem" }} className="exchanger-input">
      <div className="exchanger-input__wrapper">
        <div className="exchanger-input__container">
          <input
            className="exchanger-input__search"
            type="text"
            placeholder="Введите название обменника…"
          />
          <button className="exchanger-input__filter">
            <img src={filter} alt="filter" />
          </button>
          <button className="exchanger-input__find">Искать</button>
        </div>
      </div>
    </div>
  );
};

export default ExchangersInput;
