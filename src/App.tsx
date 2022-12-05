import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Search from "./components/Search";
import Card from "./components/Card";
import AppContext from "./context";
import { useRef, createRef, useState, useEffect, useCallback } from "react";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { setSearchValue } from "./redux/slices/filterSlice";

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

function App() {
  const { searchValue } = useSelector((state: any) => state.filter);
  const [isCount, setIsCount] = useState(0);
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [isFilteredItems, setIsFilteredItems] = useState("");
  const [isFirstInputValue, setIsFirstInputValue] = useState("");
  const [isSecondInputValue, setIsSecondInputValue] = useState("");
  const [isDisabledSelect, setIsDisabledSelect] = useState(false);
  const [isFinishedValue, setIsFinishedValue] = useState(false);
  const dispatch = useDispatch();
  var deletedArray: any;
  function selectValue(e: any, type: any) {
    if (isDisabledSelect === false) {
      let currentValue = "";
      updateSearchValue(currentValue);
      setIsCount(isCount + 1);
      currentValue = `${e.title} (${type})`;
      console.log(currentValue);
      if (isFirstCard === true) {
        setIsFirstInputValue(currentValue);
        CARDS[0].items.shift();
        CARDS[0].items.push(e);
        setIsFirstCard(false);
        setIsFinishedValue(true);
        deletedArray = CARDS.pop();
        deletedArray = CARDS.pop();
      } else {
        if (isFirstInputValue !== currentValue) {
          CARDS[0].items.push(e);
          setIsSecondInputValue(currentValue);
          setIsDisabledSelect(true);
        }
      }
    }
  }
  const updateSearchValue = useCallback(
    debounce((str: any) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  function fakeAPI() {
    console.log(CARDS);
   
    console.log(CARDS);
  }
  useEffect(() => {}, [isCount]);

  let cardIds = [];
  for (let i = 0; i < CARDS.length; i++) {
    cardIds.push(CARDS[i].mainId);
  }

  const refs = cardIds.reduce((acc: any, value: number) => {
    acc[value] = createRef();
    return acc;
  }, {});

  const end = useRef<any>(null);
  let cardTitles: any = [];
  function onChangeFirstInput(e: any) {
    setIsFirstInputValue(e.target.value);

    updateSearchValue(e.target.value);
  }
  let arr:any = []
  useEffect(() => {
    {
      for (let i = 1; i < CARDS.length; i++) {
        for (let j = 0; j < CARDS[i].items.length; j++) {
          cardTitles.push(CARDS[i].items[j].title);
        }
      }
    }
    var filteredArray=  CARDS.slice(2)
    let filterRenderItems: any = filteredArray.map((e: any) => e.items)
      .flat()
      .filter((e: any) =>
        e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      // filterRenderItems = filterRenderItems.forEach((element:any) => {
      //   if(!arr.includes(element.title)){
      //     arr.push(element.title)
      //   }
      // });
    setIsFilteredItems(filterRenderItems);
    if (isFinishedValue === searchValue) {
      console.log("sd");
    } else {
      console.log(isFinishedValue);
      console.log(searchValue);
    }
  }, [isCount, isFirstInputValue, searchValue, isFinishedValue]);




  return (
    <div className="App">
      <AppContext.Provider
        value={{
          CARDS,
          fakeAPI,
          end,
          refs,
          isFirstCard,
          selectValue,
          onChangeFirstInput,
          isFirstInputValue,
          setIsFirstInputValue,
          isSecondInputValue,
          setIsSecondInputValue,
          isFilteredItems,
          isFinishedValue,
        }}
      >
        <Header />
        <button onClick={fakeAPI}>Mutate array</button>
        <button onClick={() => console.log(CARDS)}>
          Show array information
        </button>
        <button onClick={() => console.log(deletedArray)}>
          Show deleted array
        </button>
        <button onClick={() => console.log(arr)}>Show filtered array</button>
        <button onClick={() => console.log(isFirstCard)}>Is finished first value?</button>
        <button onClick={() => console.log(isFilteredItems)}>Show filtered items</button>
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
    </div>
  );
}

export default App;
