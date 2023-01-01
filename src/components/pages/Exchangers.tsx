import React from "react";
import DirectionAside from "../DirectionAside";
import ExchangersInput from "../ExchangersInput";
import Header from "../Header";
import Table from "../Table";

const Exchangers = () => {
  return (
    <>
      <Header />
      <div className="main__wrapper">
        <div className="main__container">
          <div  className="aside">
            <div className="aside__container">
              <div
                style={{ paddingBottom: "40rem", paddingTop: "25rem" }}
                className="aside__wrapper"
              >
                <div className="aside__block">
                  <ul>
                    <div>
                      <li>Все обменники</li>
                    </div>
                    <div>
                      <li>Статистика</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="div">
          <ExchangersInput/>
          <Table/>
          </div>
  
        </div>
      </div>
    </>
  );
};

export default Exchangers;
