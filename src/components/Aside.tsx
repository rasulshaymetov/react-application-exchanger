import React, { useState} from "react";
import { INavlist } from "../models/models";

const Aside = () => {
  const [clickedNav, setClickedNav] = useState<string>("0");
  const navlist: Array<INavlist> = [
    {
      name: "История поиска",
      id: "0",
    },
    {
      name: "Популярное",
      id: "1",
    },
    {
      name: "Криптовалюты",
      id: "2",
    },
    {
      name: "Платежные системы",
      id: "3",
    },
    {
      name: "Коды",
      id: "4",
    },
    {
      name: "Банки",
      id: "5",
    },
    {
      name: "Переводы",
      id: "6",
    },
    {
      name: "Наличные",
      id: "7",
    },
  ];
  function clickNav(e: any) {
    setClickedNav(e.id);
  }
  function checkState() {
    console.log(clickedNav);
  }
  return (
    <div className="aside">
      <div className="aside__wrapper">
        <ul>
          {navlist.map(function (obj) {
            return (
              <div
                onClick={(e) => clickNav(e.currentTarget)}
                className={`aside__list-elem ${
                  clickedNav === obj.id ? "active-list" : null
                }`}
                key={obj.id}
                id={obj.id}
              >
                {obj.name}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Aside;