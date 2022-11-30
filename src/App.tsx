import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Search from "./components/Search";
import { ICards } from "./models/models";
import logo from "./assets/card-logo.svg";
const CARDS: any = [
  {
    heading: "Банки",
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
    items: [
      {
        id: "1",
        title: "Bitcoin",
        rating: "4",

        currency: ["BTC", "WBTC", "BTCBEP20"],
      },
      {
        id: "1",
        title: "Etherium",
        rating: "4",

        currency: ["ETH", "ETHBEP20"],
      },
      {
        id: "1",
        title: "Litecoin",
        rating: "4",

        currency: ["LTC"],
      },
    ],
  },
];
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main__wrapper">
        <div className="main__container">
          <Aside />

          <div className="main__content">
            <Search />
            <div className="cards">
              <div className="cards__wrapper">
                {CARDS?.map(function (card: any) {
                  return (
                    <div className="cards__block">
                      <h1 onClick={test}>{card.heading}</h1>
                      <div key={card.id} className="cards__component">
                        {card.items?.map(function (item: any) {
                          return (
                            <div className="cards__card">
                              <div className="cards__card_wrapper">
                                <div className="cards__top">
                                  <div className="cards__logo">
                                    <img src={logo} alt="" />
                                  </div>
                                  <p className="cards__title">{item.title}</p>
                                </div>

                                <div className="cards__currency">
                                  {item.currency?.map(
                                    (type: string, index: number) => {
                                      return (
                                        <div
                                          className="cards__currency_value"
                                          key={index}
                                        >
                                          {type}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <hr className="cards__line" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
