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
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoader } from "../../redux/slices/loaderSlice";
import Loader from "../Loader";
import { useEffect } from "react";
import closePopup from "../../assets/city_x.svg";

const Direction = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { isLoader } = useSelector((state: any) => state.loader);
  const [isInput, setIsInput] = useState(false)
  useEffect(() => {
    if (isLoader === true) {
      setTimeout(() => {
        dispatch(setIsLoader(false));
      }, 1500);
    }
  }, [isLoader]);

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
        {isLoader ? (
          <Loader />
        ) : (
          <>
     
            <div className="main__wrapper">
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
        )}
        {/* <div className="city">
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
                <div className={` ${isInput ? 'city__dropdown' : null}`}>
                <input className="ab" onFocus onFocus={() => setIsInput(prev => !prev)} type='text' id="" placeholder="Введите название страны…"/>
            
                  <p>Яна, ты можешь не кидать тысячу переписок</p>
                  <p>Яна, шучу, кидай</p>
                  <p>Яна, я жду фото</p>
                </div>

                <div className="city__select-footer">
                  <p className="city__map">Указать на карте</p>
                </div>
              </div>
              <div className="city__select">
                <p className="city__select-name">Регион и город</p>
                <input type='text' id=""/>

                <div className="city__select-footer">
                  <p className="city__map">Указать на карте</p>
                </div>
              </div>
            </div>
            <div className="city__form">
            <button className="city__send">Задать город</button>
            </div>
          </div>
        </div> */}
      </AppContext.Provider>
      {/* </div> */}
    </>
  );
};

export default Direction;
