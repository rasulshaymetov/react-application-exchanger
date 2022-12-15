import React from "react";
import { IMore } from "../models/models";
const MORE: Array <IMore> = [
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },
  {
    firstname:'Тинькофф (USD)',
    lastname:'Bitcoin (BTC)'
  },

];
const More = () => {
  return (
    <div className="more container">
      <div className="more__wrapper">
        <h2 className="more__heading">
          Другие направления обмена {MORE[0].firstname}
        </h2>
        <div className="more__grid">
          <ul>
            {MORE.map(function (item: any) {
              return (
                <li>
                  {item.firstname + " → "} <br />
               
                   <span>{item.lastname}</span>;
                 
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default More;
