import "./App.scss";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Search from "./components/Search";
import { ICards } from "./models/models";
import logo from "./assets/card-logo.svg";
const CARDS: any = [
  {
    id: "1",
    title: "Тинькофф",
    currency: ["RUB", "USD", "EUR"],
  },
  {
    id: "2",
    title: "Альфа Банк",
    currency: ["RUB", "USD"],
  },
  {
    id: "3",
    title: "Русский Стандарт",
    currency: ["RUB"],
  },
  { id: "4", title: "Открытие", currency: ["RUB", "USD"] },
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
                {CARDS.map(function (card: any) {
                  return (
                    <div key={card.id} className="cards__component">
                      {/* <h1>Банки</h1> */}
                      <div className="cards__card">
                        <div className="cards__card_wrapper">
                          <div className="cards__top">
                            <div className="cards__logo">
                              <img src={logo} alt="" />
                            </div>
                            <p className="cards__title">{card.title}</p>
                          </div>
                          <div className="cards__currency">
                            {card.currency.map(
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
