import { useContext, useState } from "react";
import AppContext from "../context";
import { useSelector } from "react-redux";
import React from "react";

const Card = () => {
  const {
    CARDS,
    refs,
    selectValue,
    isFilteredItems,
    isSecondInputValue,
    isLastInputValue,
    isFirstInputValue,
    isFinishedValue,
    isLastFilteredItems,
    setIsPopup,
    isPopup,
    setIsFilterValue,
    isFilteredValues,
    isRenderValues,
    setIsRenderValues,
    isFilterValue
  }: any = useContext(AppContext);

  // * Вызываю значение из Redux для наблюдения значения в поисковике
  const { searchValue } = useSelector((state: any) => state.filter);

  // * Скролл по категориям карточек
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  // * Рендер оригинальных карточек
  const renderItems = CARDS?.map(function (card: any, index: number) {
    return (
      <div className="cards__block">
        <h1 key={card.mainId} id={card.mainId} ref={refs[card.mainId]}>
          {card.heading}
        </h1>

        <div key={index} className="cards__component">
          {card.items?.map(function (item: any, index: number) {
            return (
              <div key={index} className="cards__card">
                <div className="cards__card_wrapper">
                  <div className="cards__top">
                    <div className="cards__logo">
                      {/* <div className="cards__image"> */}
                      <img
                        className="cards__image"
                        src={item.imageUrl}
                        alt=""
                      />
                      {/* </div> */}
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

  function openPopup() {
    setIsPopup(!isPopup);
  }

  function filterValues(currentValue: string) {
    setIsFilterValue(currentValue);
    setIsRenderValues(true)
  }
  const popupValues = ["USD", "RUB", "EUR"];
  const values = popupValues.map(function (item: string, index: number) {
    return (
      <div
        key={index}
        title={item}
        onClick={() => filterValues(item)}
        className="cards__select_value"
      >
        Только {item}
      </div>
    );
  });
  return (
    <div className={`cards ${isPopup ? "bg-popup-block" : null}`}>
      {/* <div className="cards__a"> */}
      <div className="cards__wrapper">
        <div className={`cards__popup ${isPopup ? "bg-white" : ""}`}>
          <p onClick={() => openPopup()} className="cards__select">
            Все валюты
          </p>
          <div className={`cards__values ${!isPopup ? "d-none" : null}`}>
            {values}
          </div>
          {/* </div> */}
        </div>

        {/* // * Если поисковик не пустой, то отобразить поиск */}
        {searchValue.length > 0 ? <h1>Поиск</h1> : null}

        {/* // * Рендер карточек для первого поисковика   */}
        {isSecondInputValue === false &&  isRenderValues === false ? (
          <div
            className={`${
              searchValue.length > 0 && isFinishedValue === false
                ? "cards__component"
                : null
            }`}
          >
            {isFirstInputValue.length > 0 && isFinishedValue === false 
              ? isFilteredItems?.map(function (card: any, index: number) {
                  return (
                    <div key={card.mainId} className="cards__card">
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
              {isRenderValues === true ? 'Time' : ''}
          </div>
        ) : null}

        {/* // * Рендер карточек для второго поисковика */}
        {isSecondInputValue === true ? (
          <div
            className={`${searchValue.length > 0 ? "cards__component" : null}`}
          >
            {isLastInputValue.length > 0
              ? isLastFilteredItems.map(function (card: any, index: number) {
                  return (
                    <div key={index} className="cards__card">
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
            {isRenderValues ? <div>Поиск по {isFilterValue}</div> : null}
       <div className="cards__component">
    
       { isRenderValues ? isFilteredValues.map(function(item:any){
            return(
              <div className="cards__card">
                <div className="cards__card_wrapper">
                  <div className="cards__top">
                    <div className="cards__logo">
                     <img className="cards__image" src={item.imageUrl} alt="" />
                    </div>
                    
                    <p className="cards__title">{item.title}</p>
                    </div>
                    <div className="cards__currency">
                  {item.currency?.map((type:string, index:number)=>{
                    return(
                      <div className="cards__currency_value">{type}</div>
                    )
                  })}
                    </div>
                 
                </div>
              </div>
            )
        }) : null}
       </div>
      </div>
    </div>
  );
};

export default Card;
