import { useState, useContext } from "react";
import AppContext from "../context";
import { useSelector } from "react-redux";
import React from "react";

const Aside = () => {
  // * Проверяем, совпадает ли кликнутая кнопка навигации с состоянием
  const [clickedNav, setClickedNav] = useState<any>(1);

  const { CARDS, refs, isLastInputValue, isPopup }: any = useContext(AppContext);

  // * Вытаскивааем значение Search из Redux для наблюдения
  const { searchValue } = useSelector((state: any) => state.filter);
  
  // * Скролл
  function clickNav(e: any) {
    setClickedNav(e);
    refs[e].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
   
  // * При поиске, значение в навигационной панели будет следующим
  let searchCards = [
    { heading: `Поиск: ${isLastInputValue ? "Получаю" : "Отдаю"}` },
  ];

  //  * Рендер навигационной панели
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
  // * Новое значение, если в поисковике будет что-то введено
  let searchNavigation = searchCards.map(function (obj: any) {
    return <div className="aside__list-elem active-list">{obj.heading}</div>;
  });

  return (
      <div className='aside'>
      <div  className={`aside__wrapper ${isPopup ? 'bg-popup-block aside__popup'  : null}`}>
        {/* // * Условие, при котором рендерится оригинальная панель или измененная для поиска */}
        <ul>{searchValue.length > 0 ? searchNavigation : navigation}</ul>
      </div>
    </div>
  );
};

export default Aside;
