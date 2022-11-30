import React from 'react'
import { useRef, useContext} from "react";
import logo from "../assets/card-logo.svg";
import AppContext from '../context';


const Card = () => {
  const  {CARDS, end}:any = useContext(AppContext)
  

console.log(end)
  return (
    <div className="cards">
    <div className="cards__wrapper">
      {CARDS?.map(function (card: any) {
        return (
          <div className="cards__block">
            <h1 id={card.mainId}  ref={end}>{card.heading}</h1>
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
                        {item.currency?.map(
                          (type: string, index: number) => {
                            return (
                              <div

                                className="cards__currency_value"
                                key={index}
                              >
                                {type}
                              </div>
                            );
                          }
                        )}
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
  )
}

export default Card