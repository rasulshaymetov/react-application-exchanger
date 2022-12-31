import React from "react";
import Header from "../Header";
import Aside from "../Aside";
import Footer from "../Footer";
import Search from "../Search";
import DirectionAside from "../DirectionAside";
import Table from "../Table";
import About from "../About";
import More from "../More";
import Error from "../Error";
import AppContext from "../../context";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoader } from "../../redux/slices/loaderSlice";
import Loader from "../Loader";
import closePopup from "../../assets/city_x.svg";

const Direction = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { isLoader } = useSelector((state: any) => state.loader);
  const [isFirstInput, setIsFirstInput] = useState(false);
  const [isSecondInput, setIsSecondInput] = useState(false);
  const [isCount, setIsCount] = useState(0);
  useEffect(() => {
    if (isLoader === true) {
      setTimeout(() => {
        dispatch(setIsLoader(false));
      }, 1500);
    }
  }, [isLoader]);
  const country = useRef(null);
  const city = useRef(null);
  useEffect(() => {
    if (document.activeElement === country.current) {
      setIsFirstInput(true);
    } else {
      setIsFirstInput(false);
    }
  }, [country, isCount]);
  useEffect(() => {
    if (document.activeElement === city.current) {
      setIsSecondInput(true);
    } else {
      setIsSecondInput(false);
    }
  }, [city, isCount]);
  
  return (
    <>
      {/* <div className="overlay"> */}
      <AppContext.Provider
        value={{
          isError,
          setIsError,
        }}
      >
        <Header />
        {/* {isLoader ? (
          <Loader />
        ) : (
          <>
     
            <div onMouseEnter={() => setIsCount(isCount + 1)} className="main__wrapper">
              <div className="main__container">
                <DirectionAside />
                <div className="main__content">
                  <Search />
                  <Table />
                  <About />
                  <More />
                </div>
              </div>
            </div>

            <Footer />
            <Error />
          </>
        )} */}
        <div className="city">
          <div className="city__wrapper">
            <div className="city__heading">
              <h1>Выбор города</h1>
              <button>
                <img src={closePopup} alt="close" />
              </button>
            </div>
            <div className="city__content">
              <div className="city__select">
                <p className="city__select-name">Страна</p>
                <div
                  style={
                    isFirstInput
                      ? {
                          visibility: "visible",
                          maxHeight: "305rem",
                          border: "1px solid rgba(67, 32, 207, 1)",
                        }
                      : {
                          maxHeight: "57rem",
                          border: "1px solid rgba(0, 0, 0, 1)",
                        }
                  }
                  className={`city__dropdown ${isFirstInput ? null : null}`}
                >
                  <input
                    className="city__input"
                    onFocus={() => setIsCount(isCount + 1)}
                    onMouseOut={() => setIsCount(isCount + 1)}
                    onMouseEnter={() => setIsCount(isCount + 1)}
                    ref={country}
                    type="text"
                    id=""
                    placeholder="Введите название страны…"
                  />
                  <hr className="city__line" />
                  <ul
                    style={
                      isFirstInput ? { display: "block" } : { display: "none" }
                    }
                  >
                    <li>
                      <p>sd</p>
                    </li>
                    <li>
                      <p>asd</p>
                    </li>
                    <li>
                      <p>asd</p>
                    </li>
                    <li>
                      <p>asdasdк</p>
                    </li>
                    <li>
                      <p>Яdasdasdнasdаasasd, asdasй</p>
                    </li>
                    <li>
                      <p>asdasdasd</p>
                    </li>
                  </ul>
                </div>

                <div className="city__select-footer">
                  <p style={isFirstInput ? {display:"none"} : {display:'block'}} className="city__map">Указать на карте</p>
                </div>
              </div>
              <div className="city__select">
                <p className="city__select-name">Регион и город</p>
                <div
                  style={
                    isSecondInput
                      ? {
                          visibility: "visible",
                          maxHeight: "305rem",
                          border: "1px solid rgba(67, 32, 207, 1)",
                        }
                      : {
                          maxHeight: "57rem",
                          border: "1px solid rgba(0, 0, 0, 1)",
                        }
                  }
                  className={`city__dropdown ${isSecondInput ? null : null}`}
                >
                  <input
                    className="city__input"
                    onFocus={() => setIsCount(isCount + 1)}
                    onMouseOut={() => setIsCount(isCount + 1)}
                    onMouseEnter={() => setIsCount(isCount + 1)}
                    ref={city}
                    type="text"
                    id=""
                    placeholder="Введите название страны…"
                  />
                  <hr className="city__line" />
                  <ul
                    style={
                      isSecondInput ? { display: "block" } : { display: "none" }
                    }
                  >
                    <li>
                      <p>sd</p>
                    </li>
                    <li>
                      <p>asd</p>
                    </li>
                    <li>
                      <p>asd</p>
                    </li>
                    <li>
                      <p>asdasdк</p>
                    </li>
                    <li>
                      <p>Яdasdasdнasdаasasd, asdasй</p>
                    </li>
                    <li>
                      <p>asdasdasd</p>
                    </li>
                  </ul>
                </div>
                <div className="city__select-footer">
                  <p style={isSecondInput ? {display:"none"} : {display:'block'}} className="city__map">Указать на карте</p>
                </div>
              </div>
            </div>
            <div className="city__form">
              <button className="city__send">Задать город</button>
            </div>
          </div>
        </div>
      </AppContext.Provider>
      {/* </div> */}
    </>
  );
};

export default Direction;
