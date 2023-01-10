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
import { setSelectedCards } from "../../redux/slices/arrSlice";
import loader from "../../assets/loader.svg";
import { setIsLoader } from "../../redux/slices/loaderSlice";
import Loader from "../Loader";
let CARDS = [
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
        imageUrl: "./image/values/tinkoff.svg",
        rating: "4",
        currency: ["RUB"],
      },
      {
        id: "11",
        title: "Альфа Банк",
        imageUrl: "./image/values/alfa.svg",

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
        imageUrl: "./image/values/bitcoin.png",
        rating: "4",
        currency: ["BTC", "WBTC", "BTCBEP20"],
      },
      {
        id: "6",
        title: "Ethereum",
        imageUrl: "./image/values/etherium.png",
        rating: "4",
        currency: ["ETH", "ETHBEP20"],
      },
      {
        id: "7",
        title: "Binance USD",
        imageUrl: "./image/values/binance.png",
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
        imageUrl: "./image/values/qiwi.png",
        rating: "4",
        currency: ["RUB", "KZT"],
      },
      {
        id: "8",
        title: "ЮMoney",
        imageUrl: "./image/values/umoney.png",
        rating: "4",
        currency: ["RUB"],
      },
      {
        id: "9",
        title: "Счет телефона",
        imageUrl: "./image/values/number.png",
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
        imageUrl: "./image/values/tinkoff.svg",
        rating: "4",
        currency: ["RUB", "USD", "EUR"],
      },
      {
        id: "11",
        title: "Альфа Банк",
        imageUrl: "./image/values/alfa.svg",
        rating: "4",
        currency: ["RUB", "USD"],
      },
      {
        id: "12",
        title: "Русский Стандарт",
        imageUrl: "./image/values/standart.svg",
        rating: "4",
        currency: ["RUB"],
      },
      {
        id: "13",
        title: "Открытие",
        imageUrl: "./image/values/opening.svg",
        rating: "4",
        currency: ["RUB", "USD"],
      },
    ],
  },
  {
    heading: "Переводы",
    mainId: 7,
    items: [
      {
        id: "14",
        title: "Контакт",
        imageUrl: "./image/values/contact-alt.png",
        rating: "4",
        currency: ["RUB", "USD"],
      },

      {
        id: "15",
        title: "Вестерн Юнион",
        imageUrl: "./image/values/wu.png",
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
        imageUrl: "./image/values/rub.png",
        rating: "4",
        currency: ["CASHRUB"],
      },
      {
        id: "17",
        title: "Наличные Доллар",
        imageUrl: "./image/values/dollar.svg",
        rating: "4",
        currency: ["CASHUSD"],
      },
      {
        id: "18",
        title: "Наличные Евро",
        imageUrl: "./image/values/euro.png",
        rating: "4",
        currency: ["CASHEUR"],
      },
    ],
  },
];
const Main = () => {
  // Loader
  const dispatch = useDispatch();
  const { isLoader } = useSelector((state) => state.loader);

  useEffect(() => {
    if (isLoader === true) {
      setTimeout(() => {
        dispatch(setIsLoader(false));
      }, 1500);
    }
  }, [isLoader]);

  // Ввод
  const [isFirstInputValue, setIsFirstInputValue] = useState("");
  const [isLastInputValue, setIsLastInputValue] = useState("");

  const [isCount, setIsCount] = useState(0);

  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isDirectionCards, setIsDirectionCards] = useState([]);
  const [isTempCards, setIsTempCards] = useState("");

  const [isFinishedValue, setIsFinishedValue] = useState(false);
  const [isInputsFinished, setIsInputsFinished] = useState(false);
  const [isSecondInputValue, setIsSecondInputValue] = useState(false);

  const [isFilteredItems, setIsFilteredItems] = useState("");
  const [isLastFilteredItems, setIsLastFilteredItems] = useState("");
  const [isFilterValue, setIsFilterValue] = useState("");
  const [isFilteredValues, setIsFilteredValues] = useState([]);

  const [isDisabledSelect, setIsDisabledSelect] = useState(false);

  // * Redux
  const [isTempArray, setIsTempArray] = useState([])
  const { searchValue } = useSelector((state) => state.filter);
  const { selectedCards } = useSelector((state) => state.select);

  // * Функция по выбору карточек
  function selectValue(e, type) {
    if (isDisabledSelect === false && isSecondInputValue === false) {
      let currentValue = "";
      updateSearchValue(currentValue);
      setIsCount(isCount + 1);
      currentValue = `${e.title} (${type})`;
      if (isFirstCard === true) {
        setIsFirstInputValue(currentValue);
        setIsFirstCard(false);
        setIsFinishedValue(true);
        setIsSecondInputValue(true);
        updateArrayValue(currentValue);
        setIsTempArray(currentValue)
        // * Если выбраны определенные карточки, то скрывать несколько элементов массива
        // let deletedArray;
        // deletedArray = CARDS.pop();
        // deletedArray = CARDS.pop();
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
      updateArrayValue(currentValue);
      console.log(isTempArray)
      console.log(currentValue)
      setIsTempArray([...isTempArray, currentValue])
      setIsLastInputValue(currentValue);
      setIsInputsFinished(true);
    }
  }
  // * Отправление значения в Redux с задержкой в 50 милисекунд

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 50),
    []
  );


  
  // ? Отправление значения в Redux для последующего рендера в DirectionAside
  const updateArrayValue = useCallback(
    debounce((str) => {
      dispatch(setSelectedCards(str));
    }, 10),
    []
  );

  // * Функция по созданию ключей для навигации в Aside
  let cardIds = [];
  for (let i = 0; i < CARDS.length; i++) {
    cardIds.push(CARDS[i].mainId);
  }
  const refs = cardIds.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});
  const end = useRef(null);

  // * Отправление значения первого поисковика в Redux
  function onChangeFirstInput(e) {
    setIsFirstInputValue(e.target.value);
    updateSearchValue(e.target.value);
  }
  // * Отправление значения второго поисковика в Redux
  function onChangeSecondInput(e) {
    setIsLastInputValue(e.target.value);
    updateSearchValue(e.target.value);
  }

  // * Фильтрация карточек в поисковике
  // ? Нужно удалить дубликаты при фильтрации карточек
  useEffect(() => {
    // Создается дубликат оригинального массива для фильтрации
    var filteredArray = CARDS;
    // Фильтрация для перового поисковика

    let filterRenderItems = filteredArray
      .map((e) => e.items)
      .flat()
      .filter((e) =>
        e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    // Проверка, является ли это вторым значением
    if (isSecondInputValue === true) {
      // Создание дубликата массива
      var filteredLastArray = CARDS;
      // Проверка, является ли это первым кликом для второго поисковика
      let firstClick = false;
      if (firstClick === false) {
        firstClick = true;
      }
      // Фильтрация для второго поисковика
      let filterRenderLastItems = filteredLastArray
        .map((e) => e.items)
        .flat()
        .filter((e) =>
          e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        );
      //  Добавление карточек в состояние отфильтрованных карточек для второго поисковика
      setIsLastFilteredItems(filterRenderLastItems);
    }
    // Добавление карточек в состояние отфильтрованных карточек для первого поисковика
    setIsFilteredItems(filterRenderItems);
  }, [
    isCount,
    isFirstInputValue,
    searchValue,
    isFinishedValue,
    isLastInputValue,
  ]);

  let b = [];
  const [isRenderValues, setIsRenderValues] = useState(false);
  useEffect(() => {
    let a = CARDS.map((e) => e.items);
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j].currency.includes(isFilterValue)) {
          b.push(a[i][j]);
          setIsFilteredValues(b);
        }
      }
    }
  }, [isFilterValue, isRenderValues, searchValue]);

  // * Если выбраны две валюты, навигация в следующую страницу

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (isInputsFinished === true) {
  //     navigate("/react-application-exchanger/direction");
  //   }
  // }, [isInputsFinished]);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <div className="main">
        <AppContext.Provider
          value={{
            CARDS,
            end,
            refs,
            isFirstCard,
            setIsFirstCard,
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
            setIsDirectionCards,
            isDirectionCards,
            setIsPopup,
            isPopup,
            isFilterValue,
            isFilteredValues,
            setIsFilterValue,
            setIsRenderValues,
            isRenderValues,
          }}
        >
          <Header />
          {isLoader ? (
            <Loader />
          ) : (
            <>
            <button onClick={() => console.log(isTempArray)}>FLKDSFSDLKFJ</button>
              <div className={`${isPopup ? "bg-popup-wrapper" : null}`}>
                <div className="main__wrapper">
                  <div className="main__container">
                    <Aside />

                    <div className="main__content">
                      <Search />
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </>
          )}
        </AppContext.Provider>
      </div>
    </>
  );
};

export default Main;

{
  /*  */
}
