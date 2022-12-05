import { useContext, useEffect, useState } from "react";
import logo from "../assets/card-logo.svg";
import AppContext from "../context";

const Card = () => {
  const [a, setA] = useState([]);
  const {
    fakeAPI,
    CARDS,
    refs,
    selectValue,
    isFilteredItems,
    isSecondInputValue,
    searchValue,
    isLastInputValue,
    isFirstInputValue,
    isFinishedValue,
    isLastFilteredItems,
  }: any = useContext(AppContext);
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }



  const renderItems = CARDS?.map(function (card: any, index: any) {
    return (
      <div className="cards__block">
        <h1 key={card.mainId} id={card.mainId} ref={refs[card.mainId]}>
          {card.heading}
        </h1>

        <div key={index} className="cards__component">
          {card.items?.map(function (item: any) {
            return (
              <div className="cards__card">
                <div className="cards__card_wrapper">
                  <div className="cards__top">
                    <div className="cards__logo">
                      <div className="card__image"></div>
                    </div>
                    <p key={item.id} className="cards__title">
                      {item.title}
                    </p>
                  </div>

                  <div className="cards__currency">
                    {item.currency?.map((type: string, index: number) => {
                      return (
                        <div
                          className="cards__currency_value"
                          onClick={() => selectValue(item, type)}
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
  });
  return (
    <div className="cards">
      <div className="cards__wrapper">
        {isFirstInputValue.length > 0 && isFinishedValue === false ? (
          <h1>Поиск</h1>
        ) : null}
        {isLastInputValue.length > 0 && isFinishedValue === true ? (
          <h1>Поиск</h1>
        ) : null}
        {isSecondInputValue === false ? (
          <div
            className={`${
              isFirstInputValue.length > 0 && isFinishedValue === false
                ? "cards__component"
                : null
            }`}
          >
            {isFirstInputValue.length > 0 && isFinishedValue === false
              ? isFilteredItems?.map(function (card: any, index: any) {
                  return (
                    <div className="cards__card">
                      <div className="cards__card_wrapper">
                        <div className="cards__top">
                          <div className="cards__logo">
                            <div className="cards__image"></div>
                          </div>
                          <p key={card.id} className="cards__title">
                            {card.title}
                          </p>
                        </div>

                        <div className="cards__currency">
                          {card.currency?.map((type: string, index: number) => {
                            return (
                              <div
                                className="cards__currency_value"
                                onClick={() => selectValue(card, type)}
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
                })
              : renderItems}
          </div>
        ) : null}
        {isSecondInputValue === true ? (
          <div
            className={`${
              isLastInputValue.length > 0 ? "cards__component" : null
            }`}
          >
            {isLastInputValue.length > 0 ? isLastFilteredItems.map(function (card: any, index: any) {
              return (
                <div className="cards__card">
                  <div className="cards__card_wrapper">
                    <div className="cards__top">
                      <div className="cards__logo">
                        <div className="cards__image"></div>
                      </div>
                      <p key={card.id} className="cards__title">{card.title}</p>
                    </div>
                    <div className="cards__currency">
                      {card.currency?.map((type:string, index:number)=>{
                        return (
                          <div
                            className="cards__currency_value"
                            onClick={() => selectValue(card, type)}
                            key={index}
                          >
                            {type}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              );
            }) : renderItems}
          </div>
        ) : null}
        {/* {isFinishedValue === true
          ? isLastFilteredItems.map(function (card: any, index: any) {
              return (
                <div className="cards__card">
                  <div className="cards__card_wrapper">
                    <div className="cards__top">
                      <div className="cards__logo">
                        <div className="cards__image"></div>
                      </div>
                      <p key={card.id} className="cards__title">{card.title}</p>
                    </div>
                    <div className="cards__currency">
                      {card.currency?.map((type:string, index:number)=>{
                        return (
                          <div
                            className="cards__currency_value"
                            onClick={() => selectValue(card, type)}
                            key={index}
                          >
                            {type}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          : null} */}
      </div>
    </div>
  );
};

export default Card;
