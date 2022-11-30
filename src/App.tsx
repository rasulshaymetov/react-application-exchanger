import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Search from "./components/Search";
import { ICards } from "./models/models";
import Card from "./components/Card";
import AppContext from "./context";
import { useContext, useRef } from "react";
import Footer from "./components/Footer";
const CARDS: any = [
  {
    heading: "Банки",
    mainId: 1,
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
    mainId: 2,
    items: [
      {
        id: "1",
        title: "Открытие",
        rating: "4",

        currency: ["RUB", "USD"],
      },
    ],
  },
  {
    heading: "Криптовалюты",
    mainId: 3,
    items: [
      {
        id: "1",
        title: "Bitcoin",
        rating: "4",
        currency: ["BTC", "WBTC", "BTCBEP20"],
      },
      {
        id: "2",
        title: "Etherium",
        rating: "4",
        currency: ["ETH", "ETHBEP20"],
      },
      {
        id: "3",
        title: "Litecoin",
        rating: "4",
        currency: ["LTC"],
      },
    ],
  },
];
function App() {
  const end = useRef<any | null>(null);
  return (
    <div className="App">
      <AppContext.Provider value={{ CARDS, end }}>
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
      <Footer/>
    </div>
  );
}

export default App;
