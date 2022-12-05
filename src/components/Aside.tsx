import { useState, useContext, useEffect } from "react";
import AppContext from "../context";

const Aside = () => {
  const [clickedNav, setClickedNav] = useState<any>(1);
  const {
    CARDS,
    refs,
    isInputValue,
    setIsInputValue,
    isFinishedValue,
    isFirstInputValue,
  }: any = useContext(AppContext);

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
  let searchCards = [
    { heading: `Поиск: ${isFirstInputValue ? "Отдаю" : "Получаю"}` },
  ];
  let navigation = CARDS.map(function (obj: any) {
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
  });
  let searchNavigation = searchCards.map(function (obj: any) {
    return <div className="aside__list-elem active-list">{obj.heading}</div>;
  });

  return (
    <div className="aside">
      <div className="aside__wrapper">
        <ul>
          {isFirstInputValue.length > 0 && isFinishedValue === false
            ? searchNavigation
            : navigation}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
