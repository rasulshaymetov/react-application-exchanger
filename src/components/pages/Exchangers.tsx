import React, { useEffect, useState } from "react";
import DirectionAside from "../DirectionAside";
import ExchangersInput from "../ExchangersInput";
import Header from "../Header";
import Table from "../Table";
import { setIsLoader } from "../../redux/slices/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import ExchangersTable from "../ExchangersTable";

const Exchangers = () => {
  const aside = [
    {
      name: "Все обменники",
      id: "1",
    },
    {
      name: "Статистика",
      id: "2",
    },
  ];
  const [clickedNav, setClickedNav] = useState<any>(1);
  const { isLoader } = useSelector((state: any) => state.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoader === true) {
      setTimeout(() => {
        dispatch(setIsLoader(false));
      }, 1500);
    }
  }, [isLoader]);

  function clickNav(e: any) {
    setClickedNav(e);
  }
  return (
    <>
      <Header />
      {isLoader ? (
        <Loader />
      ) : (
        <div className="main__wrapper">
          <div className="main__container">
            <div className="aside">
              <div className="aside__container">
                <div
                  style={{ paddingBottom: "40rem", paddingTop: "25rem" }}
                  className="aside__wrapper"
                >
                  <div className="aside__block">
                    {aside.map(function (item) {
                      return (
                        <ul key={item.id}>
                          <div
                            onClick={() => clickNav(item.id)}
                            className={`aside__list-elem ${
                              clickedNav == item.id ? "active-list" : null
                            }`}
                            id={item.id}
                          >
                            <li>{item.name}</li>
                          </div>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="div">
              <ExchangersInput />
              <ExchangersTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Exchangers;
