import { useContext, useEffect, useState } from "react";
import logo from "../assets/card-logo.svg";
import AppContext from "../context";

const Card = () => {
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
  var nestedObject = [
    {
      itemId: 1,
      itemDetails: {
        name: "C",
        caregory: "Programming Language",
        price: 500,
      },
      itemCategory: "Basic",
    },
    {
      itemId: 2,
      itemDetails: {
        name: "C++",
        caregory: "Programming Language",
        price: 700,
      },
      itemCategory: "Beginner",
    },
    {
      itemId: 1,
      itemDetails: {
        name: "Java Script",
        caregory: "Web Development",
        price: 1500,
      },
      itemCategory: "Advanced",
    },
  ];
  // {
  //   for (let i = 1; i < CARDS.length; i++) {
  //     for (let j = 0; j < CARDS[i].items.length; j++) {
  //       cardTitles.push(CARDS[i].items[j].title);
  //     }
  //   }
  // }
  // var filteredItems = cardTitles.filter((item: string) => {
  // return item
  // .toLowerCase()
  // .trim()
  // .includes(isFirstInputValue.toLowerCase().trim());
  // });
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
  //
  // CARDS.map(item:any => {
  // return item.items.flat().filter(item=>e.ttitle.toLocaleLowerCase().includes('Тинькофф'.toLocaleLowerCase())
  // })
  const filterRenderItems = isFilteredItems?.map(function (
    card: any,
    index: any
  ) {
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
  });
  return (
    <div className="cards">
      <div className="cards__wrapper">
        {isFirstInputValue.length > 0 && isFinishedValue === false ? filterRenderItems : renderItems}
      </div>
    </div>
  );
};

export default Card;
