import { useContext } from "react";
import AppContext from "../context";
import { useSelector } from "react-redux";

const Card = () => {
  const {
    CARDS,
    refs,
    selectValue,
    isFilteredItems,
    isSecondInputValue,
    isLastInputValue,
    isFirstInputValue,
    isFinishedValue,
    isLastFilteredItems,
  }: any = useContext(AppContext);

  // * Вызываю значение из Redux для наблюдения значения в поисковике
  const { searchValue } = useSelector((state: any) => state.filter);

  // * Скролл по категориям карточек
  function test(id: any) {
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // * Рендер оригинальных карточек
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
                      <div className="card__image"></div>
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
  return (
    <div className="cards">
      <div className="cards__wrapper">

       {/* // * Если поисковик не пустой, то отобразить поиск */}
        {searchValue.length > 0 ? <h1>Поиск</h1> : null}
        
        {/* // * Рендер карточек для первого поисковика   */}
        {isSecondInputValue === false ? (
          <div
            className={`${
              searchValue.length > 0 && isFinishedValue === false
                ? "cards__component"
                : null
            }`}
          >
            {isFirstInputValue.length > 0 && isFinishedValue === false
              ? isFilteredItems?.map(function (card: any, index: any) {
                  return (
                    <div className="cards__card">
                      <div className="cards__card_wrapper">
                        <div className="cards__top">
                          <div className="cards__logo">
                            <div className="cards__image"></div>
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
                })
              : renderItems}
          </div>
        ) : null}

         {/* // * Рендер карточек для второго поисковика */}
        {isSecondInputValue === true ? (
          <div
            className={`${
              searchValue.length > 0 ? "cards__component" : null
            }`}
          >
            {isLastInputValue.length > 0
              ? isLastFilteredItems.map(function (card: any, index: any) {
                  return (
                    <div className="cards__card">
                      <div className="cards__card_wrapper">
                        <div className="cards__top">
                          <div className="cards__logo">
                            <div className="cards__image"></div>
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
                })
              : renderItems}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
