import React, { useState, useEffect } from "react";
import star from "../assets/star.svg";
import sort from "../assets/sort.svg";
const EXCHANGERS = [
  {
    id: "1",
    state: 'on',
    // state: "./image/on.svg",
    name: "Шахта",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "2",
    state: 'on',
    // state: "./image/on.svg",
    name: "Курсов",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "3",
    state: 'off',
    // state: "./image/off.svg",
    name: "ExChange Team",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "4",
    state: 'off',
    // state: "./image/off.svg",
    name: "AltCoins",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "5",
    state: 'off',
    // state: "./image/off.svg",
    name: "EnergyBit",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "6",
    state: 'on',
    // state: "./image/on.svg",
    name: "LowCoin",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
  {
    id: "7",
    state: 'on',
    // state: "./image/on.svg",
    name: "Change Project",
    courses: "648",
    reserv: "106 567 654",
    rate: "5,0",
    age: "2 года 6 месяцев",
    reviews: "0/10543",
  },
];
const ExchangersTable = () => {
  const [isHide, setIsHide] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const [isCurrentElement, setIsCurrentElement] = useState('0')
  function hideTable() {
    setIsHide((prev) => !prev);
  }

  useEffect(() => {
    console.log(isCurrentElement)
  }, [isCurrentElement])
  

  function test(id:any) {
    console.log(id.target.id)
    console.log(id.target.name)
    setIsCurrentElement(id.target.id)
    setIsOverlay(true);
  }
  function untest() {
    setIsOverlay(false);
    console.log("Я убрал мышку с кнопки");
  }
  return (
    <div className="table table__value-selected ml-40">
      <div
        style={
          isHide
            ? { maxHeight: "150rem", overflowY: "auto", height: "100%" }
            : { maxHeight: "1243rem", overflowY: "auto" }
        }
        className={`table__wrapper`}
      >
        <div className="table__container">
          <div className="table__heading">
            <ul className="table__header grid-7 mb-15">
              <li>Обменник</li>
              <li>Курсов</li>
              <li>Резерв</li>
              <li>Рейтинг</li>
              <li>Возраст</li>
              <li>Отзывы</li>
            </ul>
          </div>
          <div className="table__content">
            {EXCHANGERS.map(function (item: any, index: number) {
              return (
                <ul className="grid-7" key={index}>
                  <div className="p-25">
                    <li>{item.name}</li>
                  </div>

                  <div className="p-25">
                    <li>{item.courses}</li>
                  </div>

                  <div className="p-25">
                    <li>$ {item.reserv}</li>
                  </div>
                  <div className="p-25" style={{ display: "flex" }}>
                    <li>
                      {item.rate} <img src={star} alt="star" />
                    </li>
                  </div>
                  <div className="p-25">
                    <li>{item.age}</li>
                  </div>
                  <div className="p-0 flex">
                    <li
                    className="p-25"
                      // style={
                      //   isOverlay  &&   isCurrentElement === item.id
                      //   ? { visibility: "visible" }
                      //   : { visibility: "hidden", display: "none"} 
                      // }
                    >
                      {item.reviews}
                    </li>
                    {/* <div
                      style={
                        isOverlay  &&   isCurrentElement === item.id
                        ? {visibility: "visible"}
                        : {visibility: "hidden"}
                      }
                      className="state-popup"
                    >
                    <p>Этот обменник неактивен</p>
                    </div> */}
                    <button
                      id={item.id}
                      onMouseEnter={(id) => test(id)}
                      onMouseOut={untest}
                      className="absolute-list p-none"
                    >
                      <img src={`${item.state === "on" ? './image/on.svg' : './image/off.svg' }`} alt="Error " />
                    </button>
                  </div>
                  {/* <div className="p-25 relative-list">
             
                  </div> */}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={hideTable} className={`table__hide `}>
        <img src={sort} alt="sort" />
      </button>
    </div>
  );
};

export default ExchangersTable;
