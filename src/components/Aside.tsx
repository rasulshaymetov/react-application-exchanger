import { useState, useContext, useEffect } from "react";
import AppContext from "../context";
import { useSelector } from "react-redux";

const Aside = () => {
  const [clickedNav, setClickedNav] = useState<any>(1);
  const {
    CARDS,
    refs,
    isInputValue,
    setIsInputValue,
    isFinishedValue,
    isLastInputValue,
    isFirstInputValue,
  }: any = useContext(AppContext);
  const { searchValue } = useSelector((state: any) => state.filter);
  function clickNav(e: any) {
    setClickedNav(e);
    refs[e].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  let searchCards = [
    { heading: `Поиск: ${isLastInputValue ? "Получаю" : "Отдаю"}` },
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
          
          {/* {searchValue.length > 0  
            ? searchNavigation
            : navigation} */}
            {navigation}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
