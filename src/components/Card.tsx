import { useContext, useEffect, useState } from "react";
import logo from "../assets/card-logo.svg";
import AppContext from "../context";

const Card = () => {
  const [a, setA] = useState([]);
  const {
    CARDS,
    refs,
    selectValue,
    isFilteredItems,
    searchValue,
    isFirstInputValue,
    isFinishedValue,
  }: any = useContext(AppContext);
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(id);
  }

  function fakeAPI() {
    console.log(isFilteredItems);
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
                      <img src={logo} alt="" />
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

  setTimeout(() => {
  }, 2500);
  let filterRenderItems: any = [];
  return (
    <div className="cards">
      <div className="cards__wrapper">
        {isFirstInputValue.length > 0  && isFinishedValue === false ?  <h1>Поиск</h1> : null}
        <div className={`${isFirstInputValue.length >  0 && isFinishedValue === false  ? 'cards__component' : null}`}>
          
        {isFirstInputValue.length > 0 && isFinishedValue === false
          ? isFilteredItems?.map(function (card: any, index: any) {
            return (

              <div className="cards__card">
                <div className="cards__card_wrapper">
                  <div className="cards__top">
                    <div className="cards__logo">
                      <img src={logo} alt="" />
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
      </div>
    </div>
  );
};

export default Card;
