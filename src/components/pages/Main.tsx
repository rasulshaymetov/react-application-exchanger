import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Search from "../../components/Search";
import Card from "../../components/Card";
import AppContext from "../../context";
import Footer from "../../components/Footer";
import { useRef, createRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
let CARDS: any = [
  {
    heading: "История поиска",
    mainId: 1,
    items: [],
  },
  {
    heading: "Популярное",
    mainId: 2,
    items: [
      {
        id: "10",
        title: "Тинькофф",
        rating: "4",
        currency: ["RUB", "USD", "EUR"],
      },
      {
        id: "11",
        title: "Альфа Банк",
        rating: "4",
        currency: ["RUB", "USD"],
      },
    ],
  },
  {
    heading: "Криповалюты",
    mainId: 3,
    items: [
      {
        id: "5",
        title: "Bitcoin",
        rating: "4",
        currency: ["BTC", "WBTC", "BTCBEP20"],
      },
      {
        id: "6",
        title: "Ethereum",
        rating: "4",
        currency: ["ETH", "ETHBEP20"],
      },
      {
        id: "7",
        title: "Binance USD",
        rating: "4",
        currency: ["RUB"],
      },
    ],
  },
  {
    heading: "Платёжные системы",
    mainId: 4,
    items: [
      {
        id: "7",
        title: "Киви",
        rating: "4",
        currency: ["RUB", "KZT"],
      },
      {
        id: "8",
        title: "ЮMoney",
        rating: "4",
        currency: ["RUB"],
      },
      {
        id: "9",
        title: "Счет телефона",
        rating: "4",
        currency: ["RUB"],
      },
    ],
  },
  {
    heading: "Коды",
    mainId: 5,
    items: [],
  },
  {
    heading: "Банки",
    mainId: 6,
    items: [
      {
        id: "10",
        title: "Тинькофф",
        rating: "4",
        currency: ["RUB", "USD", "EUR"],
      },
      {
        id: "11",
        title: "Альфа Банк",
        rating: "4",
        currency: ["RUB", "USD"],
      },
      {
        id: "12",
        title: "Русский Стандарт",
        rating: "4",
        currency: ["RUB"],
      },
      { id: "13", title: "Открытие", rating: "4", currency: ["RUB", "USD"] },
    ],
  },
  {
    heading: "Переводы",
    mainId: 7,
    items: [
      {
        id: "14",
        title: "Контакт",
        rating: "4",
        currency: ["RUB", "USD"],
      },

      {
        id: "15",
        title: "Вестерн Юнион",
        rating: "4",
        currency: ["RUB", "USD"],
      },
    ],
  },
  {
    heading: "Наличные",
    mainId: 8,
    items: [
      {
        id: "16",
        title: "Наличные Рубль",
        rating: "4",
        currency: ["CASHRUB"],
      },
      {
        id: "17",
        title: "Наличные Доллар",
        rating: "4",
        currency: ["CASHUSD"],
      },
      {
        id: "18",
        title: "Наличные Евро",
        rating: "4",
        currency: ["CASHEUR"],
      },
    ],
  },
];

const Main = () => {
  const { searchValue } = useSelector((state: any) => state.filter);
  const [isCount, setIsCount] = useState(0);
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isFilteredItems, setIsFilteredItems] = useState("");
  const [isLastFilteredItems, setIsLastFilteredItems] = useState("");
  const [isFirstInputValue, setIsFirstInputValue] = useState("");
  const [isSecondInputValue, setIsSecondInputValue] = useState(false);
  const [isDisabledSelect, setIsDisabledSelect] = useState(false);
  const [isFinishedValue, setIsFinishedValue] = useState(false);
  const [isLastInputValue, setIsLastInputValue] = useState("");
  const [isInputsFinished, setIsInputsFinished] = useState(false);

  const dispatch = useDispatch();

  // * Функция по выбору карточек
  function selectValue(e: any, type: any) { 
    if (isDisabledSelect === false && isSecondInputValue === false) {
      let currentValue = "";
      updateSearchValue(currentValue);
      setIsCount(isCount + 1);
      currentValue = `${e.title} (${type})`;
      if (isFirstCard === true) {
        let deletedArray: any;
        setIsFirstInputValue(currentValue);
        setIsFirstCard(false);
        setIsFinishedValue(true);
        setIsSecondInputValue(true);
        deletedArray = CARDS.pop();
        deletedArray = CARDS.pop();
        updateSearchValue("");
      } else {
      }
      if (isFirstInputValue !== currentValue) {
        CARDS[0].items.push(e);
        setIsSecondInputValue(true);
        setIsDisabledSelect(true);
      }
    } else {
      let currentValue = "";
      updateSearchValue(currentValue);
      setIsCount(isCount + 1);
      currentValue = `${e.title} (${type})`;
      setIsLastInputValue(currentValue);
      setIsInputsFinished(true);
    }
  }
  // * Отправление значения в Redux
  const updateSearchValue = useCallback(
    debounce((str: any) => {
      dispatch(setSearchValue(str));
    }, 50),
    []
  );

  // * Функция по созданию ключей для навигации в Aside
  let cardIds = [];
  for (let i = 0; i < CARDS.length; i++) {
    cardIds.push(CARDS[i].mainId);
  }
  const refs = cardIds.reduce((acc: any, value: number) => {
    acc[value] = createRef();
    return acc;
  }, {});
  const end = useRef<any>(null);

  // * Отправление значения первого поисковика в Redux
  function onChangeFirstInput(e: any) {
    setIsFirstInputValue(e.target.value);
    updateSearchValue(e.target.value);
  }
    // * Отправление значения второго поисковика в Redux
  function onChangeSecondInput(e: any) {
    setIsLastInputValue(e.target.value);
    updateSearchValue(e.target.value);
  }

   
  // * Фильтрация карточек в поисковике
  useEffect(() => {

    var filteredArray = CARDS;
    let filterRenderItems: any = filteredArray
      .map((e: any) => e.items)
      .flat()
      .filter((e: any) =>
        e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    if (isSecondInputValue === true) {
      var filteredLastArray = CARDS;
      let firstClick = false;

      if (firstClick === false) {
        firstClick = true;
      }

      let filterRenderLastItems: any = filteredLastArray
        .map((e: any) => e.items)
        .flat()
        .filter((e: any) =>
          e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
      setIsLastFilteredItems(filterRenderLastItems);
    }

    setIsFilteredItems(filterRenderItems);
  }, [
    isCount,
    isFirstInputValue,
    searchValue,
    isFinishedValue,
    isLastInputValue,
  ]);

  // * Если выбраны две валюты, навигация в следующую страницу
  const navigate = useNavigate();
  useEffect(() => {
    if (isInputsFinished === true) {
      navigate("/exchangers");
    }
  }, [isInputsFinished]);
   
  // ? Нужно удалить дубликаты при фильтрации карточек
  function test(){
    
  }
  return (
    <>
      <AppContext.Provider
        value={{
          CARDS,
          end,
          refs,
          isFirstCard,
          selectValue,
          onChangeFirstInput,
          onChangeSecondInput,
          isFirstInputValue,
          setIsFirstInputValue,
          isSecondInputValue,
          isLastInputValue,
          setIsLastInputValue,
          setIsSecondInputValue,
          isFilteredItems,
          isFinishedValue,
          isLastFilteredItems,
        }}
      >
        <Header />
        <div className="main__wrapper">
          <div className="main__container">
            <Aside />

            <div className="main__content">
              <Search />
              <Card />
            </div>
          </div>
        </div>
      </AppContext.Provider>
      <Footer />
    </>
  );
};

export default Main;
