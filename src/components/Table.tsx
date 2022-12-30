import React, { useState, useContext } from "react";
import star from "../assets/star.svg";
import error from "../assets/error.svg";
import hover_error from "../assets/hover__error.svg";
import spec00 from "../assets/spec00.svg";
import { ITable } from "../models/models";
import sort from "../assets/sort.svg";
import AppContext from "../context";
const EXCHANGERS = [
  {
    id: "1",
    name: "AlfaBit",
    special: [
      {
        image: [
          `/image/spec00.svg`,
          `/image/spec01.svg`,
          `/image/spec02.svg`,
        ],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "2",
    name: "BigChanger",
    special: [
      {
        image: [],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "3",
    name: "ExChange Team",
    special: [
      {
        image: [`./image/spec00.svg`, `./image/spec01.svg`],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "4",
    name: "AltCoins",
    special: [
      {
        image: [`./image/spec00.svg`, `./image/spec01.svg`],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "5",
    name: "EnergyBit",
    special: [
      {
        image: [`./image/spec00.svg`],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "6",
    name: "LowCoin",
    special: [
      {
        image: [],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
  {
    id: "7",
    name: "Change Project",
    special: [
      {
        image: [],
      },
    ],
    profit_give: "20,000",
    profit_get: "0,5",
    min_sum: "0,053",
    max_sum: "0,234",
    reviews: "0/248",
    rate: "5",
    reserv: "1.4",
    profit: "16.7",
  },
];

const Table = () => {
  const [isHideTable, setIsHideTable] = useState(false);
  const {setIsError}: any = useContext(AppContext)
  function sendError(error: any) {
    setIsError(true)
  }
  return (
    <div className="table table__value-selected">
      <div className="table__wrapper">
        <div className="table__container">
          <div className="table__heading">
            <ul className="table__header">
              <li>Обменник</li>
              <li>Особенности</li>
              <li>
                Отдадите <img src={sort} alt="" /> <br />
                Получите
              </li>
              <li>Мин/Макс сумма</li>
              <li>
                Отзывы <img src={sort} alt="" /> <br />
                Рейтинг
              </li>
              <li>
                Резерв <img src={sort} alt="" /> <br />
                Доходность
              </li>
            </ul>
          </div>
          <div className="table__content">
            {EXCHANGERS.map(function (item: any, index: number) {
              return (
                <ul key={index}>
                  <div>
                    <li>{item.name}</li>
                  </div>

                  <div style={{ display: "flex", gap: "5rem" }}>
                    {item.special?.map(function (arg: any, index: number) {
                      return (
                        <li
                          style={{
                            display: "flex",
                            gap: "5rem",
                            flexWrap: "wrap",
                          }}
                          key={index}
                        >
                          {arg.image?.map(function (a: any) {
                            return <img key={a} src={a} alt="." />;
                          })}
                        </li>
                      );
                    })}
                  </div>
                  <div>
                    <li>{item.profit_give}</li>
                    <li>{item.profit_get}</li>
                  </div>
                  <div style={{ display: "flex" }}>
                    <li>{item.min_sum}</li> <span>&nbsp;/&nbsp;</span>
                    <li>{item.max_sum}</li>
                  </div>
                  <div>
                    <li>{item.reviews} отзывов</li>
                    <li>
                      {item.rate} <img src={star} alt="" />
                    </li>
                  </div>
                  <div className="relative-list">
                    <li>{item.reserv} мнл.</li>
                    <button className="absolute-list">
                      <img
                        onClick={sendError}
                        className="table__error"
                        src=""
                        alt="Error "
                      />
                    </button>
                    <li>+ {item.profit} %</li>
                  </div>
                  {/* <li>
                    <div>
                      <button>
                        <img className="table__error" src="" alt="Error " />
                      </button>
                    </div>
                  </li> */}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsHideTable((prev) => !prev)}
        className={`table__hide ${isHideTable ? "rotate-180" : ""}`}
      >
        <img src={sort} alt="" />
      </button>
    </div>
  );
};

export default Table;
