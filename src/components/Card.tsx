import { useContext, useEffect, useState } from "react";
import logo from "../assets/card-logo.svg";
import AppContext from "../context";

const Card = () => {
  const { CARDS, refs, selectValue, isFilteredItems, searchValue, isFirstInputValue, isFinishedValue }: any =
    useContext(AppContext);
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(id);
  }    
  
  // {
    // for (let i = 1; i < CARDS.length; i++) {
      // for (let j = 0; j < CARDS[i].items.length; j++) {
        // cardTitles.push(CARDS[i].items[j].title);
      // }
    // }
  // }
  // var filteredItems = cardTitles.filter((item: string) => {
    // return item
      // .toLowerCase()
      // .trim()
      // .includes(isFirstInputValue.toLowerCase().trim());
  // });
   function fakeAPI(){
    let a:any = []
    for(let i = 1; i < CARDS.length; i++) {
      for(let j = 0; j < CARDS[i].items.length; j++){
      
          
        
      }
    }
    console.log(a)
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
  })
  const filterRenderItems = []
  return (
    <div className="cards">
      <button onClick={fakeAPI}>Fake Search API</button>
      <div className="cards__wrapper">
        {isFirstInputValue.length > 0 && isFinishedValue === false ? null : renderItems}
      
      </div>
    </div>
  );
};

export default Card;
