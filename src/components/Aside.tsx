import { useState, useContext, useEffect } from "react";
import AppContext from "../context";

const Aside = () => {
  const [clickedNav, setClickedNav] = useState<any>(1);
  const { CARDS, refs, isInputValue, setIsInputValue }: any = useContext(AppContext);

  function clickNav(e: any) {
    setClickedNav(e);
    refs[e].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  let aside: any = document.querySelectorAll(".aside");
  aside.onscroll = function () {
    console.log("scrollling");
  };

  return (
    <div className="aside">
      <div className="aside__wrapper">
        <ul>
          {CARDS.map(function (obj: any) {
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
