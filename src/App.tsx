import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Search from "./components/Search";
import Card from "./components/Card";
import AppContext from "./context";
import { useRef, createRef, useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";

const CARDS = [
  {
    heading: "История поиска",
    mainId: 1,
    items: [],
  },
  {
    heading: "Банки",
    mainId: 2,
    items: [
      {
        id: "1",
        title: "Тинькофф",
        rating: "4",
        currency: ["RUB", "USD", "EUR"],
      },
      {
        id: "2",
        title: "Альфа Банк",
        rating: "4",
        currency: ["RUB", "USD"],
      },
      {
        id: "3",
        title: "Русский Стандарт",
        rating: "4",
        currency: ["RUB"],
      },
      { id: "4", title: "Открытие", rating: "4", currency: ["RUB", "USD"] },
    ],
  },
  {
    heading: "Переводы",
    mainId: 3,
    items: [
      {
        id: "4",
        title: "Открытие",
        rating: "4",
        currency: ["RUB", "USD"],
      },
    ],
  },
  {
    heading: "Криптовалюты",
    mainId: 4,
    items: [
      {
        id: "5",
        title: "Bitcoin",
        rating: "4",
        currency: ["BTC", "WBTC", "BTCBEP20"],
      },
      {
        id: "6",
        title: "Etherium",
        rating: "4",
        currency: ["ETH", "ETHBEP20"],
      },
      {
        id: "7",
        title: "Litecoin",
        rating: "4",
        currency: ["LTC"],
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
  let firstPinnedValue = "";
  function selectValue(e: any, type: any) {
    if (isDisabledSelect === false) {
      let currentValue = "";
      firstPinnedValue = currentValue;
      setIsCount(isCount + 1);
      currentValue = `${e.title} (${type})`;
      console.log(currentValue);
      if (isFirstCard === true) {
        setIsFirstInputValue(currentValue);
        CARDS[0].items.shift();
        CARDS[0].items.push(e);
        setIsFirstCard(false);
        setIsFinishedValue(true);
      } else {
        let originalCards: any = [];
        // for (let i = 0; i < CARDS[0].items.length; i++) {
        //   originalCards.push(CARDS[0].items[i].title);
        // }
        // console.log(CARDS[0].items.title);
        if (isFirstInputValue !== currentValue) {
          CARDS[0].items.push(e);
          setIsSecondInputValue(currentValue);
          setIsDisabledSelect(true);
        }
      }
    }
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
  // const renderItems = () => {
  //   const filteredItems = CARDS.filter((item: any) => {
  //     item.title.toLowerCase().includes(searchValue);
  //   });
  // };
  let cardTitles: any = [];

  useEffect(() => {
    // for (let i = 0; i < CARDS[0].items.length; i++) {
    //   originalCards.push(CARDS[0].items[i].title);
    // }
    // if (CARDS[0].items.length > 0 && isFirstCard === false)
    {
      for (let i = 1; i < CARDS.length; i++) {
        for (let j = 0; j < CARDS[i].items.length; j++) {
          cardTitles.push(CARDS[i].items[j].title);
        }
      }
    }
    let filterRenderItems: any = CARDS.map((e) => e.items)
      .flat()
      .filter((e) =>
        e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    setIsFilteredItems(filterRenderItems);
  }, [isCount, isFirstInputValue, searchValue]);
  function test() {
    console.log(isFilteredItems);
  }
  let filterRenderItems = CARDS.map((e) => e.items)
    .flat()
    .filter((e) =>
      e.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  function itsWorks() {
    console.log(filterRenderItems);
  }
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          CARDS,
          end,
          refs,
          selectValue,
          isFirstInputValue,
          setIsFirstInputValue,
          isSecondInputValue,
          setIsSecondInputValue,
          isFilteredItems,
          isFinishedValue,
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
    </div>
  );
}

export default App;
