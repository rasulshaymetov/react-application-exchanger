import React, { useState, useContext, useEffect } from "react";
import star from "../assets/star.svg";
import error from "../assets/error.svg";
import hover_error from "../assets/hover__error.svg";
import spec00 from "../assets/spec00.svg";
import { ITable } from "../models/models";
import sort from "../assets/sort.svg";
import AppContext from "../context";
import { setisError } from "../redux/slices/errorSlice";
import { useSelector, useDispatch } from "react-redux";

const EXCHANGERS = [
  {
    id: "1",
    name: "AlfaBit",
    special: [
      {
        image: [`./image/spec00.svg`, `./image/spec01.svg`, `./image/spec02.svg`],
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
  const { isPopupError } = useSelector((state: any) => state.error);
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(false)
  function sendError() {
    dispatch(setisError(true));
  }
  function hideTable(){
    setIsHide(prev => !prev)
  }
  function setIsHideTable() {
    dispatch(setisError(false));
  }
  useEffect(() => {
    console.log(isPopupError);
  }, [isPopupError]);

  return (
    <div className="table table__value-selected">
      <div style={isHide ? {maxHeight:'220rem', overflowY:'auto', height:'100%'} : {maxHeight:'734rem'}} className={`table__wrapper `}>
        <div className="table__container">
          <div className="table__heading">
            <ul className="table__header">
              <li>????????????????</li>
              <li>??????????????????????</li>
              <li>
                ???????????????? <img src={sort} alt="" /> <br />
                ????????????????
              </li>
              <li>??????/???????? ??????????</li>
              <li>
                ???????????? <img src={sort} alt="" /> <br />
                ??????????????
              </li>
              <li>
                ???????????? <img src={sort} alt="" /> <br />
                ????????????????????
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
                    <li>{item.reviews} ??????????????</li>
                    <li>
                      {item.rate} <img src={star} alt="" />
                    </li>
                  </div>
                  <div className="relative-list">
                    <li>{item.reserv} ??????.</li>
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
        onClick={hideTable}
        className={`table__hide ${isPopupError ? "rotate-180" : ""}`}
      >
        <img src={sort} alt="sort" />
      </button>
    </div>
  );
};

export default Table;
