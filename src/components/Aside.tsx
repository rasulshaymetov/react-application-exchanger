import React, { useState, useContext, useEffect} from "react";
import AppContext from "../context";
import { INavlist } from "../models/models";

const Aside = () => {
  const [clickedNav, setClickedNav] = useState<any>(1);
  const {end, navlist, CARDS,refs}:any = useContext(AppContext)
  
  function clickNav(e: any) {
    setClickedNav(e.id);
    refs[e].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  useEffect(() => {
    console.log(clickedNav)
  }, [clickedNav])
  
  return (
    <div className="aside">
      <div className="aside__wrapper">
        <ul>
          {CARDS.map(function (obj:any) {
            return (
              <div
                onClick={() => clickNav(obj.mainId)}
                className={`aside__list-elem ${
                  clickedNav == obj.mainId ? "active-list" : null
                }`}
                key={obj.mainId}
                id={obj.mainId}
              >
                {obj.heading}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
