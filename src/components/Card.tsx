import { useContext, useEffect, useState } from "react";
import logo from "../assets/card-logo.svg";
import AppContext from "../context";
const Card = () => {
  const { CARDS, refs, selectValue }: any = useContext(AppContext);
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(id);
  }

  return (
    <div className="cards">
      <div className="cards__wrapper">
        {CARDS?.map(function (card: any) {
          return (
            <div className="cards__block">
              <h1 key={card.mainId} id={card.mainId} ref={refs[card.mainId]}>
                {card.heading}
              </h1>
              <div key={card.id} className="cards__component">
                {card.items?.map(function (item: any) {
                  return (
                    <div className="cards__card">
                      <div className="cards__card_wrapper">
                        <div className="cards__top">
                          <div className="cards__logo">
                            <img src={logo} alt="" />
                          </div>
                          <p className="cards__title">{item.title}</p>
                        </div>

                        <div className="cards__currency">
                          {item.currency?.map((type: string, index: number) => {
                            return (
                              <div
                                className="cards__currency_value"
                                onClick={() => selectValue(item,type)}
                                key={index}
                              >
                                {type}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="cards__line" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
